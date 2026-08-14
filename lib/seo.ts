import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type SEOOptions = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
};

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = "/og-image.svg",
}: SEOOptions): Metadata {
  const canonicalUrl = `${siteConfig.url}${path}`;

  return {
    title,
    description,

    keywords,

    metadataBase: new URL(siteConfig.url),

    alternates: {
      canonical: canonicalUrl,
    },

    robots: {
      index: true,
      follow: true,

      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: siteConfig.name,
      title,
      description,
      url: canonicalUrl,

      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} | ${siteConfig.name}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },

    authors: [
      {
        name: siteConfig.name,
      },
    ],

    creator: siteConfig.name,
    publisher: siteConfig.name,
  };
}