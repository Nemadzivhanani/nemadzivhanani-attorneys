import Image from "next/image";
import Link from "next/link";
import { firm, offices, services } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <span className="plate-lg">
              <Image src="/images/logo.png" alt="Nemadzivhanani R Inc Attorneys logo" width={130} height={116} loading="eager" />
            </span>
            <p className="legal" style={{ marginTop: 14 }}>
              {firm.subtitle}
              <br />
              {firm.tagline}
            </p>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              {offices.map((o) => (
                <li key={o.id}>
                  <a href={`tel:${o.phone}`}>☏ {o.phoneDisplay}</a> <span className="legal">({o.name.replace(" office", "")})</span>
                </li>
              ))}
              <li className="legal">Mon to Thu 08:00 to 16:00 · Fri 08:00 to 15:00 · Closed weekends and public holidays</li>
              <li>
                <a href={`mailto:${firm.email}`}>✉ {firm.email}</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Practice areas</h4>
            <ul>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/practice-areas/${s.slug}`}>{s.short}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>The firm</h4>
            <ul>
              <li><Link href="/about">About us</Link></li>
              <li><Link href="/the-firm">Inside the firm</Link></li>
              <li><Link href="/team">Our team</Link></li>
              <li><Link href="/existing-clients">Existing clients</Link></li>
              <li><Link href="/legal#privacy">Privacy &amp; POPIA</Link></li>
              <li><Link href="/legal#paia">PAIA</Link></li>
              <li><Link href="/legal#complaints">Complaints procedure</Link></li>
              <li><Link href="/legal#terms">Terms</Link></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="seal-row">
          <div className="seal" aria-hidden="true">LPC FIRM<br />NO. 71228</div>
          <p className="legal">
            {firm.registeredName}, trading as {firm.name}, is a firm of attorneys registered with the Legal Practice Council
            (firm no. 71228). Company reg. 2023/160558/21 · Fidelity Fund Certificate FFC16209/2026 · Information Regulator reg.
            2026-063481.
            <br />© 2026 {firm.short} All rights reserved.{" "}
            <a href="https://nemadzivhananiit.co.za" target="_blank" rel="noopener noreferrer">
              Website by Nemadzivhanani IT Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
