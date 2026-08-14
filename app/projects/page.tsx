import Link from "next/link";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/SEO/JsonLd";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "IT & Security Projects in Rewari | Corefix Technologies",
  description:
    "Explore representative IT, CCTV, networking, educational technology and industrial security project capabilities from Corefix Technologies.",
  path: "/projects"
});

const projects = [
  {
    title: "Industrial CCTV & Surveillance",
    category: "Industrial Security",
    description:
      "Integrated camera infrastructure designed around production areas, entry points, parking, warehouses and operational zones."
  },
  {
    title: "Educational Computer Laboratory",
    category: "Education Technology",
    description:
      "Computer laboratory infrastructure combining workstations, structured LAN, connectivity and classroom-ready technology."
  },
  {
    title: "Corporate Networking Infrastructure",
    category: "IT Infrastructure",
    description:
      "Structured networking deployment for offices requiring organized connectivity, equipment racks and scalable infrastructure."
  },
  {
    title: "Perimeter Security Deployment",
    category: "Perimeter Protection",
    description:
      "Perimeter security architecture combining boundary protection with surveillance and alarm-oriented infrastructure."
  }
];

export default function ProjectsPage() {
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
        name: "Projects",
        item: "https://corefixtechnologies.com/projects"
      }
    ]
  };

  return (
    <>
      <JsonLd data={breadcrumb} />

      <Hero
        eyebrow="Projects & Capabilities"
        title="Infrastructure Projects Built Around the Site"
        description="Representative project categories showing how Corefix approaches IT, security, networking and institutional technology requirements."
      />

      <section className="bg-core-950">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="border border-white/10 bg-black p-8"
              >
                <p className="text-sm font-bold uppercase tracking-widest text-yellow-400">
                  {project.category}
                </p>

                <h2 className="mt-4 text-2xl font-black">
                  {project.title}
                </h2>

                <p className="mt-4 leading-7 text-white/60">
                  {project.description}
                </p>

                <Link
                  href="/contact"
                  className="mt-6 inline-block text-sm font-bold text-yellow-400"
                >
                  Discuss a similar project →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}