import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand, TrustSection } from "@/components/Sections";
import { mission, team, values, vision, whyChooseUs } from "@/lib/site";

export const metadata: Metadata = {
  title: "About the firm",
  description: "A director-led legal and fiduciary practice with offices in Johannesburg, Roodepoort and Springs.",
};

export default function About() {
  const director = team[0];
  return (
    <>
      <section className="page-head navy">
        <div className="wrap">
          <div className="lbl">About the firm</div>
          <h1 className="h-big" style={{ marginTop: 10 }}>Professional. Responsive. Trusted.</h1>
          <p className="lead">
            R Nemadzivhanani Attorneys Inc. is an incorporated legal practice with its head office in the Johannesburg CBD and offices in
            Roodepoort and Springs. We give director-led, client-focused and ethical legal and fiduciary services to families, private
            clients, businesses and financial institutions.
          </p>
        </div>
      </section>

      {/* Director */}
      <section className="sec white">
        <div className="wrap split">
          <div style={{ position: "relative", aspectRatio: "4 / 5" }}>
            <Image src="/images/firm/director-logo.jpg" alt={`${director.name}, ${director.role}, at the firm's reception`} fill sizes="(min-width: 760px) 50vw, 100vw" style={{ objectFit: "cover", objectPosition: "center 0%" }} />
          </div>
          <div>
            <div className="lbl">Founder &amp; Director</div>
            <h2 className="h2" style={{ marginTop: 8 }}>{director.name}</h2>
            <p className="punch" style={{ color: "#9a7b2f" }}>{director.role}</p>
            <p style={{ marginBottom: 14 }}>{director.text}</p>
            <p className="muted" style={{ marginBottom: 18 }}>
              Because the Director supervises every legal file and estate account himself, your matter gets senior attention from the
              first day.
            </p>
            <Link className="btn btn-line" href="/team">
              Meet the whole team <span className="arrow" aria-hidden="true">→</span>
            </Link>
            <Link className="btn btn-line" href="/the-firm">
              See inside our office <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Vision & mission */}
      <section className="sec">
        <div className="wrap split">
          <div>
            <div className="lbl">Our vision</div>
            <p className="h3" style={{ marginTop: 10, fontWeight: 600, lineHeight: 1.3 }}>{vision}</p>
          </div>
          <div>
            <div className="lbl">Our mission</div>
            <ul className="ticks" style={{ marginTop: 12 }}>
              {mission.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="sec white">
        <div className="wrap">
          <div className="lbl">Core values</div>
          <h2 className="h2" style={{ marginTop: 8, marginBottom: 20 }}>What we stand for</h2>
          <div className="grid grid-4">
            {values.map((v) => (
              <div className="card" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="sec">
        <div className="wrap">
          <div className="lbl">Why choose us</div>
          <h2 className="h2" style={{ marginTop: 8, marginBottom: 20 }}>Why clients choose us</h2>
          <div className="grid grid-5">
            {whyChooseUs.map((w) => (
              <div className="card" key={w.title}>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustSection />
      <CtaBand />
    </>
  );
}
