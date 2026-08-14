import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/site";

export const revalidate = 60;

type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  keywords: string[];
  author: string;
  published: boolean;
  date: string;
};

async function getPosts(): Promise<BlogPost[]> {

  const apiUrl = process.env.BLOG_API_URL;

  if (!apiUrl) {
    return [];
  }

  try {

    const response = await fetch(apiUrl, {
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      return [];
    }

    const data = await response.json();

    return Array.isArray(data.posts)
      ? data.posts
      : [];

  } catch {

    return [];

  }
}


async function getPost(
  slug: string
): Promise<BlogPost | undefined> {

  const posts = await getPosts();

  return posts.find(
    post =>
      post.slug.toLowerCase() ===
      slug.toLowerCase()
  );
}


/**
 * Convert simple Markdown from the Google Sheet
 * into safe React elements.
 *
 * Supported:
 * ## Heading
 * ### Heading
 * - Bullet
 * blank lines
 */
function renderContent(content: string) {

  const lines = content.split(/\r?\n/);

  const elements: React.ReactNode[] = [];

  let paragraph: string[] = [];
  let listItems: string[] = [];


  const flushParagraph = () => {

    if (paragraph.length === 0) {
      return;
    }

    elements.push(
      <p
        key={`p-${elements.length}`}
        className="mb-6 text-base leading-8 text-white/70"
      >
        {paragraph.join(" ")}
      </p>
    );

    paragraph = [];
  };


  const flushList = () => {

    if (listItems.length === 0) {
      return;
    }

    elements.push(
      <ul
        key={`ul-${elements.length}`}
        className="mb-7 list-disc space-y-2 pl-6 text-white/70"
      >

        {listItems.map(
          (item, index) => (

            <li key={index}>
              {item}
            </li>

          )
        )}

      </ul>
    );

    listItems = [];
  };


  lines.forEach((line) => {

    const trimmed = line.trim();


    // Empty line

    if (!trimmed) {

      flushParagraph();
      flushList();

      return;
    }


    // H2

    if (trimmed.startsWith("## ")) {

      flushParagraph();
      flushList();

      elements.push(
        <h2
          key={`h2-${elements.length}`}
          className="mb-5 mt-12 text-2xl font-black text-white md:text-3xl"
        >
          {trimmed.substring(3)}
        </h2>
      );

      return;
    }


    // H3

    if (trimmed.startsWith("### ")) {

      flushParagraph();
      flushList();

      elements.push(
        <h3
          key={`h3-${elements.length}`}
          className="mb-4 mt-9 text-xl font-bold text-white"
        >
          {trimmed.substring(4)}
        </h3>
      );

      return;
    }


    // Bullet list

    if (
      trimmed.startsWith("- ") ||
      trimmed.startsWith("* ")
    ) {

      flushParagraph();

      listItems.push(
        trimmed.substring(2)
      );

      return;
    }


    // Normal paragraph

    flushList();

    paragraph.push(trimmed);

  });


  flushParagraph();
  flushList();

  return elements;
}


export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Blog Article Not Found | Corefix Technologies",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = post.title.length > 60
    ? post.title.substring(0, 57) + "..."
    : post.title;

  const description = post.excerpt
    ? post.excerpt.substring(0, 160)
    : `Read ${post.title} from Corefix Technologies LLP, providing IT infrastructure, CCTV, networking and security solutions across India.`;

  const canonicalUrl =
    `${siteConfig.url}/blog/${post.slug}`;

  return {

    title,

    description,

    keywords: post.keywords,

    authors: [
      {
        name:
          post.author ||
          "Corefix Technologies LLP",
      },
    ],

    alternates: {
      canonical: canonicalUrl,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {

      type: "article",

      title,

      description,

      url: canonicalUrl,

      siteName:
        siteConfig.name,

      locale: "en_IN",

      publishedTime:
        post.date,

      authors: [
        post.author ||
        "Corefix Technologies LLP",
      ],

      images: post.image
        ? [
            {
              url: post.image,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [],

    },

    twitter: {

      card:
        "summary_large_image",

      title,

      description,

      images: post.image
        ? [post.image]
        : [],

    },

  };
}
 


export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

const articleSchema = {

  "@context": "https://schema.org",

  "@type": "Article",

  "@id":
    `${siteConfig.url}/blog/${post.slug}#article`,

  headline:
    post.title,

  description:
    post.excerpt,

  image:
    post.image
      ? [
          post.image
        ]
      : undefined,

  datePublished:
    post.date,

  dateModified:
    post.date,

  author: {

    "@type":
      "Organization",

    name:
      post.author ||
      "Corefix Technologies LLP",

    url:
      siteConfig.url,

  },

  publisher: {

    "@type":
      "Organization",

    name:
      siteConfig.name,

    url:
      siteConfig.url,

  },

  mainEntityOfPage: {

    "@type":
      "WebPage",

    "@id":
      `${siteConfig.url}/blog/${post.slug}`,

  },

  articleSection:
    post.category,

  keywords:
    post.keywords.join(", "),

};

  const breadcrumbSchema = {

    "@context":
      "https://schema.org",

    "@type":
      "BreadcrumbList",

    itemListElement: [

      {

        "@type":
          "ListItem",

        position:
          1,

        name:
          "Home",

        item:
          siteConfig.url,

      },

      {

        "@type":
          "ListItem",

        position:
          2,

        name:
          "Blog",

        item:
          `${siteConfig.url}/blog`,

      },

      {

        "@type":
          "ListItem",

        position:
          3,

        name:
          post.title,

        item:
          `${siteConfig.url}/blog/${post.slug}`,

      },

    ],

  };


  return (

    <main className="min-h-screen bg-core-950">

      {/* STRUCTURED DATA */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              articleSchema
            ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              breadcrumbSchema
            ),
        }}
      />


      {/* ARTICLE HEADER */}

      <article>

        <header className="border-b border-white/10 bg-black">

          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 md:py-20">

            <Link
              href="/blog"
              className="text-sm font-bold text-yellow-400 hover:text-yellow-300"
            >
              ← Back to Blog
            </Link>


            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs">

              <span className="font-bold uppercase tracking-widest text-yellow-400">
                {post.category}
              </span>

              <span className="text-white/30">
                |
              </span>

              <time
                dateTime={post.date}
                className="text-white/40"
              >
                {post.date}
              </time>

              <span className="text-white/30">
                |
              </span>

              <span className="text-white/40">
                {post.author}
              </span>

            </div>


            <h1 className="mt-5 text-4xl font-black leading-tight text-white md:text-6xl">
              {post.title}
            </h1>


            <p className="mt-6 text-lg leading-8 text-white/60">
              {post.excerpt}
            </p>

          </div>

        </header>


        {/* FEATURED IMAGE */}

        {post.image && (

          <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">

            <Image
              src={post.image}
              alt={post.title}
              width={1600}
              height={900}
              priority
              className="h-auto w-full object-cover"
            />

          </div>

        )}


        {/* CONTENT */}

        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 md:py-16">

          <div className="prose-custom">

            {renderContent(post.content)}

          </div>


          {/* KEYWORDS */}

          {post.keywords.length > 0 && (

            <div className="mt-12 border-t border-white/10 pt-7">

              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-white/40">
                Topics
              </p>

              <div className="flex flex-wrap gap-2">

                {post.keywords.map(
                  keyword => (

                    <span
                      key={keyword}
                      className="border border-white/10 px-3 py-1.5 text-xs text-white/50"
                    >
                      {keyword}
                    </span>

                  )
                )}

              </div>

            </div>

          )}


          {/* CTA */}

          <div className="mt-14 border border-yellow-400/30 bg-yellow-400/5 p-7 md:p-10">

            <p className="text-sm font-black uppercase tracking-widest text-yellow-400">
              Need a Professional Solution?
            </p>

            <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
              Talk to Corefix Technologies
            </h2>

            <p className="mt-3 leading-7 text-white/60">
              Corefix Technologies provides IT infrastructure,
              CCTV surveillance, networking, security and
              educational technology solutions for businesses,
              industries and institutions.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-block bg-yellow-400 px-6 py-3 font-black text-black hover:bg-yellow-300"
            >
              Request a Consultation
            </Link>

          </div>

        </div>

      </article>

    </main>

  );
}