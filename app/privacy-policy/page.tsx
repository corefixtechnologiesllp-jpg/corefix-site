import Hero from "@/components/Hero";
import JsonLd from "@/components/SEO/JsonLd";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy | Corefix Technologies",
  description:
    "Read the Corefix Technologies LLP privacy policy covering website enquiries, contact information and responsible use of submitted information.",
  path: "/privacy-policy"
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
      name: "Privacy Policy",
      item: "https://corefixtechnologies.com/privacy-policy"
    }
  ]
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <Hero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How Corefix Technologies LLP handles information submitted through this website."
      />

      <section className="bg-black">
        <div className="mx-auto max-w-4xl space-y-10 px-4 py-20 lg:px-8">
          <section>
            <h2 className="text-2xl font-black">Information We Receive</h2>

            <p className="mt-4 leading-8 text-white/60">
              When you contact Corefix through the website, you may provide
              information such as your name, phone number, company name,
              email address and project requirement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black">
              How Information Is Used
            </h2>

            <p className="mt-4 leading-8 text-white/60">
              Information submitted through the website may be used to respond
              to enquiries, understand project requirements, prepare
              quotations and provide requested services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black">Data Protection</h2>

            <p className="mt-4 leading-8 text-white/60">
              Corefix aims to handle customer information responsibly and
              restrict access to information to people who require it for
              legitimate business purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black">Third-Party Services</h2>

            <p className="mt-4 leading-8 text-white/60">
              The website may use third-party services such as maps, hosting,
              analytics or communication tools. Their respective privacy
              policies may apply to information processed through those
              services.
            </p>
          </section>
        </div>
      </section>
    </>
  );
}