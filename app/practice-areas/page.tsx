import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/Sections";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Practice areas",
  description: "Deceased estates and fiduciary services, litigation, corporate and commercial, family and property law.",
};

export default function PracticeAreas() {
  return (
    <>
      <section className="page-head navy">
        <div className="wrap">
          <div className="lbl">Practice areas</div>
          <h1 className="h-big" style={{ marginTop: 10 }}>How we can help</h1>
          <p className="lead">Five areas of law, one coordinated team. Deceased estates and fiduciary work is our specialist service.</p>
        </div>
      </section>
      <section className="sec">
        <div className="wrap svc-list">
          {services.map((s) => (
            <div className="card" key={s.slug} style={s.lead ? { borderTopColor: "var(--navy)", borderTopWidth: 6 } : undefined}>
              {s.lead && <div className="lbl" style={{ marginBottom: 6 }}>Our lead service</div>}
              <h2 className="h3">{s.title}</h2>
              <p style={{ marginBottom: 12 }}>{s.intro}</p>
              <ul className="ticks" style={{ marginBottom: 16 }}>
                {s.includes.slice(0, 4).map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <Link className="btn btn-solid" href={`/practice-areas/${s.slug}`}>
                More about {s.short.toLowerCase()} <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
