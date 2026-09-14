"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur border-b border-navy/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="group flex shrink-0 items-center gap-2.5">
          <Image
            src="/images/logo-mark.png"
            alt="Aksiaa Technologies"
            width={32}
            height={32}
            priority
            className="transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-105"
          />
          <span className="font-display text-[17px] font-semibold tracking-tight text-navy">
            Aksiaa
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative py-1 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 ${
                  active ? "text-navy" : "text-ink/60 hover:text-navy"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] seam rounded-full transition-all duration-300 ease-out ${
                    active ? "right-0" : "right-full group-hover:right-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-md bg-navy px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-royal"
          >
            Talk to us
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-navy"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-navy/10 bg-paper px-6 py-4">
          <nav className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium ${
                  pathname === link.href ? "text-navy" : "text-ink/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 rounded-md bg-navy px-4 py-2 text-center text-sm font-semibold text-white"
            >
              Talk to us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
