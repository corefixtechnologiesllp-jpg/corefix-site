import Link from "next/link";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import ServiceCard from "@/components/ServiceCard";
import JsonLd from "@/components/SEO/JsonLd";
import { services } from "@/lib/services-data";
import { siteConfig } from "@/lib/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "IT & Security Solutions in Rewari | Corefix Technologies",
  description:
    "Corefix Technologies provides CCTV, IT infrastructure, networking, security and educational technology solutions across Rewari and Pan-India. Contact us today.",
  path: "/",
  keywords: [
    "IT infrastructure company",
    "CCTV company",
    "security solutions",
    "networking company",
    "Rewari",
    "Haryana",
    "Pan India"
  ]
});

export default function HomePage() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude
    },
    areaServed: siteConfig.areasServed,
    openingHours: siteConfig.hours
  };

  return (
    <>
      <JsonLd data={localBusiness} />

      <Hero
        eyebrow="Electronic Security • IT Infrastructure • Industrial Solutions"
        title="Complete IT & Security Infrastructure Partner for Industries and Institutions"
        description="Corefix Technologies LLP designs, supplies, installs and integrates technology infrastructure for factories, offices, schools, colleges, warehouses, commercial facilities and government projects across India."
      />

      <section className="bg-black">
        <div className="mx-auto grid max-w-7xl gap-6 px-3 py-7 sm:px-4 sm:py-10 md:grid-cols-3 lg:px-8">
          {[
            ["GeM", "Government procurement capability"],
            ["Pan-India", "Project and supply coverage"],
            ["Integrated", "IT, security and infrastructure"]
          ].map(([title, text]) => (
            <div
              key={title}
              className="border border-white/10 p-6"
            >
              <div className="text-2xl font-black text-yellow-400">
                {title}
              </div>
              <p className="mt-2 text-sm text-white/55">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-core-950">
        <div className="mx-auto max-w-7xl px-3 py-12 sm:px-4 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[.2em] text-yellow-400">
              Our Capabilities
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Technology infrastructure built around the project
            </h2>

            <p className="mt-5 leading-8 text-white/60">
              From CCTV and networking to educational technology, industrial
              security and AV systems, Corefix combines equipment supply,
              installation, configuration and integration into one project
              workflow.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:mt-12 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[.2em] text-yellow-400">
              Why Corefix
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              One partner for connected infrastructure
            </h2>
          </div>

          <div className="space-y-5 text-white/65">
            <p>
              Projects often require more than individual products. CCTV
              depends on networking, smart classrooms require AV and
              connectivity, and industrial security may combine surveillance,
              perimeter protection and communication systems.
            </p>

            <p>
              Corefix approaches these requirements as integrated
              infrastructure projects, helping clients coordinate equipment,
              installation, configuration, testing and handover.
            </p>

            <div className="grid gap-3 pt-3 sm:grid-cols-2">
              {[
                "Site assessment",
                "System design",
                "Product supply",
                "Professional installation",
                "Testing & commissioning",
                "Post-installation support"
              ].map((item) => (
                <div
                  key={item}
                  className="border border-white/10 p-4 text-sm text-white"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-core-950">
        <div className="mx-auto max-w-7xl px-3 py-12 sm:px-4 sm:py-20 lg:px-8">
          <div className="border border-yellow-400/30 bg-yellow-400/5 p-8 md:p-12">
            <p className="text-sm font-black uppercase tracking-[.2em] text-yellow-400">
              Project Enquiries
            </p>

            <h2 className="mt-3 max-w-3xl text-3xl font-black md:text-5xl">
              Planning a factory, school, office or institutional project?
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-white/60">
              Share your requirement, approximate site size and project scope.
              Our team can help identify the infrastructure required for
              implementation.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-block bg-yellow-400 px-7 py-3 font-black text-black"
            >
              Start a Project Discussion
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}