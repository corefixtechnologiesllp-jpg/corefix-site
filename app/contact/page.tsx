import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/SEO/JsonLd";
import { siteConfig } from "@/lib/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact Corefix Technologies in Rewari | IT Security",
  description:
    "Contact Corefix Technologies LLP for CCTV, IT infrastructure, networking, security and institutional technology projects in Rewari and across India.",
  path: "/contact"
});

export default function ContactPage() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude
    },
    areaServed: siteConfig.areasServed,
    openingHours: siteConfig.hours
  };

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
        name: "Contact",
        item: "https://corefixtechnologies.com/contact"
      }
    ]
  };

  return (
    <>
      <JsonLd data={localBusiness} />
      <JsonLd data={breadcrumb} />

      <Hero
        eyebrow="Contact Corefix Technologies"
        title="Discuss Your IT, Security or Infrastructure Requirement"
        description="Contact Corefix Technologies LLP for project consultations, product requirements, CCTV installation, networking, educational infrastructure and industrial security solutions."
      />

      <section className="bg-black">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <ContactForm />
          </div>

          <div className="space-y-7">
            <div>
              <h2 className="text-2xl font-black">
                Corefix Technologies LLP
              </h2>

              <p className="mt-3 leading-7 text-white/60">
                Complete IT and security infrastructure partner for
                industries and institutions.
              </p>
            </div>

            <div className="border border-white/10 p-6">
              <h3 className="font-bold text-yellow-400">Address</h3>

              <address className="mt-3 not-italic leading-7 text-white/65">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city}, {siteConfig.address.state}{" "}
                {siteConfig.address.postalCode}
              </address>
            </div>

            <div className="border border-white/10 p-6">
              <h3 className="font-bold text-yellow-400">Phone</h3>

              <a
                href={`tel:${siteConfig.phone}`}
                className="mt-3 block text-white/70 hover:text-yellow-400"
              >
                {siteConfig.phoneDisplay}
              </a>
            </div>

            <div className="border border-white/10 p-6">
              <h3 className="font-bold text-yellow-400">Email</h3>

              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-3 block text-white/70 hover:text-yellow-400"
              >
                {siteConfig.email}
              </a>
            </div>

            <div className="border border-white/10 p-6">
              <h3 className="font-bold text-yellow-400">
                Business Hours
              </h3>

              <p className="mt-3 text-white/65">
                Monday - Sunday
                <br />
                09:00 AM - 07:30 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-core-950">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <h2 className="text-3xl font-black">
            Find Corefix in Rewari
          </h2>

          <div className="mt-8 overflow-hidden border border-white/10">
            <iframe
              title="Corefix Technologies LLP location map"
              src="https://www.google.com/maps?q=Azaad%20Nagar%2C%20Rewari%2C%20Haryana%20123401&output=embed"
              width="100%"
              height="400"
              loading="lazy"
              className="border-0"
            />
          </div>
        </div>
      </section>
    </>
  );
}