import Link from "next/link";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export default function CTASection({
  title = "Planning an IT or Security Infrastructure Project?",
  description = "Tell us about your site, requirement or project scope. Corefix can help evaluate the infrastructure and prepare a practical implementation approach."
}: CTASectionProps) {
  return (
    <section className="bg-yellow-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-14 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-black text-black">{title}</h2>

          <p className="mt-3 leading-7 text-black/70">{description}</p>
        </div>

        <Link
          href="/contact"
          className="shrink-0 border-2 border-black px-7 py-3 text-center font-black text-black transition hover:bg-black hover:text-white"
        >
          Contact Corefix
        </Link>
      </div>
    </section>
  );
}