import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Image src="/images/logo-mark.png" alt="Aksiaa Technologies" width={30} height={30} />
              <span className="font-display text-sm font-semibold tracking-wide text-navy">
                AKSIAA TECHNOLOGIES
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/60">
              Systems integrator and distributor building secure, sustainable
              network, cloud and IoT infrastructure since 2019.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink/40">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-ink/70">
              <li><Link href="/about" className="hover:text-navy">About us</Link></li>
              <li><Link href="/services" className="hover:text-navy">Services</Link></li>
              <li><Link href="/solutions" className="hover:text-navy">Solutions</Link></li>
              <li><Link href="/contact" className="hover:text-navy">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink/40">
              Focus areas
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-ink/70">
              <li>Network Infrastructure</li>
              <li>Enterprise Security</li>
              <li>Cloud Migration</li>
              <li>IoT &amp; Connectivity</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink/40">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-ink/70">
              <li className="flex items-center gap-2">
                <Mail size={15} className="text-cyan-deep shrink-0" />
                <a href="mailto:sales@aksiaa.com" className="hover:text-navy">sales@aksiaa.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Globe size={15} className="text-cyan-deep shrink-0" />
                <a href="https://aksiaa.com" className="hover:text-navy">www.aksiaa.com</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={15} className="text-cyan-deep shrink-0" />
                Mumbai, India
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-navy/10 pt-6 text-xs text-ink/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AKSIAA Technologies Pvt. Ltd. All rights reserved.</p>
          <p>Headquartered in Mumbai · Serving clients globally</p>
        </div>
      </div>
    </footer>
  );
}
