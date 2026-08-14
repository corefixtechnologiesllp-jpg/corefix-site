import Link from "next/link";
import Image from "next/image";
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
    console.error("error");
    return [];
  }

  try {
    const response = await fetch(apiUrl, {
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Blog API returned ${response.status}`
      );
    }

    const data = await response.json();

    return Array.isArray(data.posts)
      ? data.posts
      : [];

  } catch (error) {

    console.error(
      "Unable to fetch blog posts:",
      error
    );

    return [];
  }
}

export const metadata = {
  title:
    "IT & Security Technology Blog | Corefix Technologies",

  description:
    "Read Corefix Technologies insights on CCTV, IT infrastructure, networking, security systems, smart classrooms, industrial technology and more.",

  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },

  openGraph: {
    title:
      "IT & Security Technology Blog | Corefix Technologies",

    description:
      "Technology insights from Corefix Technologies on CCTV, IT infrastructure, networking, security and educational technology.",

    url: `${siteConfig.url}/blog`,

    type: "website",
  },
};

export default async function BlogPage() {

  const posts = await getPosts();

  return (
    <main className="bg-core-950 min-h-screen">

      {/* HERO */}

      <section className="border-b border-white/10 bg-black">

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

          <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-400">
            Corefix Insights
          </p>

          <h1 className="mt-3 max-w-4xl text-4xl font-black text-white md:text-6xl">
            IT, Security & Infrastructure Blog
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-white/60 md:text-lg">
            Practical insights about CCTV surveillance,
            IT infrastructure, networking, industrial security,
            smart classrooms, educational technology and
            integrated security solutions.
          </p>

        </div>

      </section>


      {/* BLOG POSTS */}

      <section>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

          {posts.length === 0 ? (

            <div className="border border-white/10 p-10 text-center">

              <h2 className="text-2xl font-bold text-white">
                No articles published yet
              </h2>

              <p className="mt-3 text-white/50">
                New Corefix Technologies articles will
                appear here automatically when published.
              </p>

            </div>

          ) : (

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {posts.map((post) => (

                <article
                  key={post.slug}
                  className="overflow-hidden border border-white/10 bg-black transition hover:border-yellow-400/50"
                >

                  {/* IMAGE */}

                  {post.image ? (

                    <Link href={`/blog/${post.slug}`}>

                      <Image
                        src={post.image}
                        alt={post.title}
                        width={1200}
                        height={675}
                        className="h-52 w-full object-cover"
                      />

                    </Link>

                  ) : (

                    <div className="flex h-52 items-center justify-center bg-core-900">

                      <span className="text-sm font-bold uppercase tracking-widest text-yellow-400">
                        COREFIX TECHNOLOGIES
                      </span>

                    </div>

                  )}


                  <div className="p-6">

                    <div className="flex items-center gap-3 text-xs">

                      <span className="font-bold uppercase tracking-wider text-yellow-400">
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

                    </div>


                    <h2 className="mt-3 text-xl font-black leading-tight text-white">

                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-yellow-400"
                      >
                        {post.title}
                      </Link>

                    </h2>


                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-white/55">
                      {post.excerpt}
                    </p>


                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-5 inline-block text-sm font-bold text-yellow-400 hover:text-yellow-300"
                    >
                      Read Article →
                    </Link>

                  </div>

                </article>

              ))}

            </div>

          )}

        </div>

      </section>

    </main>
  );
}