"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/practice-areas", label: "Practice areas" },
  { href: "/practice-areas/deceased-estates", label: "Lost a loved one" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Our team" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  useEffect(() => setOpen(false), [path]);

  const current = (href: string) =>
    path === href || (href === "/practice-areas" && path.startsWith("/practice-areas/") && path !== "/practice-areas/deceased-estates")
      ? "page"
      : undefined;

  return (
    <header className="hdr">
      <div className="wrap hdr-in">
        <Link href="/" className="brand" aria-label="Nemadzivhanani R Inc Attorneys, home">
          <span className="plate">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo-emblem.png" alt="" width={38} height={30} />
          </span>
          <b>
            NEMADZIVHANANI
            <small>R INC. ATTORNEYS</small>
          </b>
        </Link>
        <div className="hdr-r">
          <nav className="nav" aria-label="Main">
            {links.map((l) => (
              <Link key={l.href} href={l.href} aria-current={current(l.href)}>
                {l.label}
              </Link>
            ))}
          </nav>
          <Link href="/existing-clients" className="pill">
            Existing clients
          </Link>
          <button
            className="burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" className="mnav" aria-label="Main">
          <Link href="/" aria-current={path === "/" ? "page" : undefined}>Home</Link>
          {links.map((l) => (
            <Link key={l.href} href={l.href} aria-current={current(l.href)}>
              {l.label}
            </Link>
          ))}
          <Link href="/existing-clients" aria-current={current("/existing-clients")}>Existing clients</Link>
        </nav>
      )}
    </header>
  );
}
