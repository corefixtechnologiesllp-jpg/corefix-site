import Hero from "@/components/Hero";
import JsonLd from "@/components/SEO/JsonLd";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms & Conditions | Corefix Technologies",
  description:
    "Read the general website terms and conditions for Corefix Technologies LLP covering information, enquiries, quotations and website usage.",
  path: "/terms"
});

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
      name: "Terms & Conditions",
      item: "https://corefixtechnologies.com/terms"
    }
  ]
};

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <Hero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="General terms governing use of the Corefix Technologies website."
      />

      <section className="bg-black">
        <div className="mx-auto max-w-4xl space-y-10 px-4 py-20 lg:px-8">
          <section>
            <h2 className="text-2xl font-black">Website Information</h2>

            <p className="mt-4 leading-8 text-white/60">
              Information on this website is provided to explain Corefix
              Technologies services, capabilities and product categories.
              Technical specifications and commercial terms may vary by
              project.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black">Project Requirements</h2>

            <p className="mt-4 leading-8 text-white/60">
              Final equipment selection, pricing, implementation schedules
              and technical scope are subject to site conditions, customer
              requirements, availability and mutually agreed commercial
              documentation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black">Third-Party Products</h2>

            <p className="mt-4 leading-8 text-white/60">
              Product names and specifications may belong to their respective
              manufacturers. Availability and specifications can change
              without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black">Website Use</h2>

            <p className="mt-4 leading-8 text-white/60">
              Visitors should use the website for legitimate business and
              informational purposes and should not attempt to interfere with
              its operation or misuse its content.
            </p>
          </section>
        </div>
      </section>
    </>
  );
}