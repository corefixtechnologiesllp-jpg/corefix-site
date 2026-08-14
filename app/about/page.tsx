import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/SEO/JsonLd";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Corefix Technologies | Rewari, Haryana",
  description:
    "Learn about Corefix Technologies LLP, an IT, security and infrastructure solution provider serving industries, institutions and government projects across India.",
  path: "/about"
});

export default function AboutPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://corefixtechnologies.com/"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://corefixtechnologies.com/about"
      }
    ]
  };

  return (
    <>
      <JsonLd data={breadcrumb} />

      <Hero
        eyebrow="About Corefix Technologies LLP"
        title="Technology Infrastructure for Real-World Operations"
        description="Corefix Technologies LLP is focused on delivering integrated IT, electronic security, educational technology and infrastructure solutions for organizations that need dependable implementation."
      />

      <section className="bg-black">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[.2em] text-yellow-400">
              Our Story
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              From individual systems to complete infrastructure
            </h2>
          </div>

          <div className="space-y-6 leading-8 text-white/65">
            <p>
              Modern organizations rarely operate with isolated technology.
              Cameras depend on networking, offices depend on structured IT,
              educational campuses require connectivity and AV, and industrial
              facilities need multiple layers of security.
            </p>

            <p>
              Corefix works across these interconnected requirements by
              combining product sourcing, technical planning, installation,
              configuration and system integration.
            </p>

            <p>
              Our focus is practical deployment. Every project should be
              understandable to the customer, maintainable by the technical
              team and capable of expansion when the organization grows.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-core-950">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Mission",
                text: "Deliver reliable and practical technology infrastructure that solves real operational requirements."
              },
              {
                title: "Approach",
                text: "Understand the site first, then design, supply, integrate, test and document the solution."
              },
              {
                title: "Coverage",
                text: "Support commercial, industrial, educational, institutional and government-linked projects across India."
              }
            ].map((item) => (
              <article
                key={item.title}
                className="border border-white/10 p-7"
              >
                <h2 className="text-xl font-black text-yellow-400">
                  {item.title}
                </h2>

                <p className="mt-4 leading-7 text-white/60">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}