import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

type HeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  compact?: boolean;
};

export default function Hero({
  eyebrow,
  title,
  description,
  compact = false,
}: HeroProps) {
  return (
    <section
      className={`relative isolate overflow-hidden bg-core-950 ${
        compact ? "min-h-[430px]" : "min-h-[560px]"
      }`}
    >
      {/* Replace these four files with your own hero images:
          public/hero/header1.png
          public/hero/header2.png
          public/hero/header3.png
          public/hero/header4.png
      */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {siteConfig.heroImages.map((src, index) => (
          <div
            key={src}
            className={`hero-slide hero-slide-${index + 1}`}
          >
            <Image
              src={src}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,11,8,.96)_0%,rgba(8,11,8,.76)_45%,rgba(8,11,8,.35)_100%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[inherit] max-w-7xl items-center px-3 py-14 sm:px-4 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-4xl">
          <p className="mb-4 text-[11px] font-black uppercase tracking-[0.18em] text-yellow-400 sm:mb-5 sm:text-sm sm:tracking-[0.25em]">
            {eyebrow}
          </p>

          <h1 className="max-w-4xl text-3xl font-black leading-[1.08] text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-6 text-white/70 sm:mt-7 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
            {description}
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5 sm:mt-9 sm:gap-4">
            <Link
              href="/contact"
              className="bg-yellow-400 px-4 py-2.5 text-xs font-bold text-black hover:bg-yellow-300 sm:px-7 sm:py-3 sm:text-sm"
            >
              Request a Site Survey
            </Link>

            <Link
              href="/services"
              className="border border-white/25 px-4 py-2.5 text-xs font-bold text-white hover:border-yellow-400 hover:text-yellow-400 sm:px-7 sm:py-3 sm:text-sm"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
