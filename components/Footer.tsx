import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="text-xl font-black tracking-widest text-yellow-400">
            COREFIX
          </div>

          <p className="mt-4 text-sm leading-7 text-white/60">
            Complete IT and security infrastructure partner for industries,
            institutions, commercial organizations and government projects.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-white">Services</h2>

          <div className="mt-4 space-y-2 text-sm text-white/60">
            <Link className="block hover:text-yellow-400" href="/services/cctv-installation">
              CCTV Installation
            </Link>

            <Link className="block hover:text-yellow-400" href="/services/networking-system-integration">
              Networking
            </Link>

            <Link className="block hover:text-yellow-400" href="/services/complete-it-setup">
              Complete IT Setup
            </Link>

            <Link className="block hover:text-yellow-400" href="/services/electric-fencing-perimeter-security">
              Perimeter Security
            </Link>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-white">Company</h2>

          <div className="mt-4 space-y-2 text-sm text-white/60">
            <Link className="block hover:text-yellow-400" href="/about">
              About Corefix
            </Link>

            <Link className="block hover:text-yellow-400" href="/projects">
              Projects
            </Link>

            <Link className="block hover:text-yellow-400" href="/blog">
              Blog
            </Link>

            <Link className="block hover:text-yellow-400" href="/contact">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-white">Contact</h2>

          <address className="mt-4 space-y-3 text-sm not-italic leading-6 text-white/60">
            <p>
              {siteConfig.address.street}
              <br />
              {siteConfig.address.city}, {siteConfig.address.state}{" "}
              {siteConfig.address.postalCode}
            </p>

            <p>
              <a
                className="hover:text-yellow-400"
                href={`tel:${siteConfig.phone}`}
              >
                {siteConfig.phoneDisplay}
              </a>
            </p>

            <p>
              <a
                className="hover:text-yellow-400"
                href={`mailto:${siteConfig.email}`}
              >
                {siteConfig.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} Corefix Technologies LLP. All rights
            reserved.
          </p>

          <div className="flex gap-5">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}