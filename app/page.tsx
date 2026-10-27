import Image from "next/image";
import Link from "next/link";
import { CtaBand, OfficeCards, PrimaryCtas, TeamGrid, TrustSection } from "@/components/Sections";
import { established, offices, services, team, whyChooseUs } from "@/lib/site";

export default function Home() {
  const lead = services[0];
  return (
    <>
      {/* Hero */}
      <section className="hero navy">
        <div className="wrap hero-grid">
          <div>
            <div className="lbl">Attorneys | Fiduciary specialists</div>
            <h1 className="h-big" style={{ marginTop: 12 }}>
              Justice is not a privilege.
              <br />
              It&apos;s your right.
            </h1>
            <div className="punch">Talk to an attorney today.</div>
            <p className="lead">
              Deceased estates, litigation, business contracts, family matters and property. A director-led team with offices in
              Johannesburg CBD, Roodepoort and Springs.
            </p>
            <PrimaryCtas />
          </div>
          <div className="hero-photo">
            <Image src="/team/team-hero.jpg" alt="Director Rabelani Nemadzivhanani with the Nemadzivhanani R Inc team" fill sizes="(min-width: 760px) 50vw, 100vw" priority />
          </div>
        </div>
        <div className="wrap">
          <Link href="/practice-areas/deceased-estates" className="notice chev">
            <span>Lost a loved one?</span> We report the estate to the Master and handle every step after. Start here ›
          </Link>
        </div>
      </section>

      {/* Why us */}
      <section className="sec">
        <div className="wrap">
          <h2 className="h2">Why Nemadzivhanani R Inc.?</h2>
          <p className="muted" style={{ marginBottom: 20 }}>
            Director-led ▪ Deceased-estate specialists ▪ 3 offices in Gauteng ▪ High Court litigation ▪ Registered with the LPC and
            Information Regulator
          </p>
          <div className="grid grid-3">
            <div className="feature">
              <div style={{ fontSize: 28 }} aria-hidden="true">⚖</div>
              <div className="lbl" style={{ marginTop: 12 }}>Equal justice for all</div>
              <h3 className="h3" style={{ marginTop: 8 }}>A firm led by its Director</h3>
              <p>Rabelani Nemadzivhanani, Admitted Attorney of the High Court, oversees every legal and estate file personally.</p>
              <Link className="btn btn-solid inline" href="/about">
                Meet the Director <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </div>
            <div style={{ position: "relative", minHeight: 260 }}>
              <Image src="/images/firm/director-logo.jpg" alt="Director Rabelani Nemadzivhanani at the firm's reception" fill sizes="(min-width: 760px) 33vw, 100vw" style={{ objectFit: "cover", objectPosition: "center 8%" }} />
            </div>
            <div className="deep" style={{ padding: "24px 20px" }}>
              <div className="lbl" style={{ color: "var(--gold)" }}>Already a client?</div>
              <h3 className="h3" style={{ margin: "8px 0 12px" }}>Updates on your matter, on WhatsApp</h3>
              <p style={{ color: "var(--on-navy)", marginBottom: 14 }}>We let you know when something happens on your file. Need an update? Just ask.</p>
              <Link className="btn btn-solid" href="/existing-clients">
                Ask for an update <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Did you know + numbers */}
      <section className="sec white">
        <div className="wrap split">
          <div className="dyk">
            <div className="t">
              <div className="h"><span className="i" aria-hidden="true">i</span> DID YOU KNOW?</div>
              <p>
                When someone dies, their estate must be <b>reported to the Master of the High Court within 14 days</b>. Nothing can be
                paid out to the family until an executor has been appointed.
              </p>
            </div>
            <div className="bot">
              <p style={{ marginBottom: 6 }}>Our estate team can report the estate for you and guide your family through every step.</p>
              <Link className="btn btn-solid" href="/practice-areas/deceased-estates">
                How we help with estates <span className="arrow" aria-hidden="true">→</span>
              </Link>
              <p className="small-print">General information, not legal advice.</p>
            </div>
          </div>
          <div className="chev" style={{ padding: 20 }}>
            <h2 className="h2" style={{ fontSize: "1.8rem", marginBottom: 16 }}>The firm at a glance</h2>
            <div className="tiles" style={{ gridTemplateColumns: "1fr 1fr" }}>
              <div className="tile"><b>{offices.length}</b><span>Offices in Gauteng</span></div>
              <div className="tile"><b>{services.length}</b><span>Practice areas</span></div>
              <div className="tile"><b>{team.length}</b><span>People on our team</span></div>
              <div className="tile"><b>{established}</b><span>In practice since</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="sec">
        <div className="wrap split">
          <div style={{ position: "relative", minHeight: 240 }}>
            <Image src={lead.image!} alt="" fill sizes="(min-width: 760px) 50vw, 100vw" style={{ objectFit: "cover" }} />
          </div>
          <div>
            <h2 className="h2">How we can help</h2>
            {services.map((s) => (
              <Link key={s.slug} className="btn btn-line" href={`/practice-areas/${s.slug}`}>
                {s.short} <span className="arrow" aria-hidden="true">→</span>
              </Link>
            ))}
            <Link className="btn btn-solid" href="/practice-areas/deceased-estates">
              Lost a loved one? Start here <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us list */}
      <section className="sec white">
        <div className="wrap">
          <div className="lbl">Why choose us</div>
          <h2 className="h2" style={{ marginTop: 8, marginBottom: 20 }}>Professional. Responsive. Trusted.</h2>
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

      {/* Team */}
      <section className="sec">
        <div className="wrap">
          <div className="lbl">Our people</div>
          <h2 className="h2" style={{ marginTop: 8 }}>The team behind your matter</h2>
          <p className="lead muted" style={{ marginBottom: 22 }}>
            Seven people across legal practice, estate administration and client care. You will always know who is working on your file.
          </p>
          <TeamGrid limit={3} />
          <Link className="btn btn-line inline" href="/team" style={{ marginTop: 18 }}>
            Meet the whole team <span className="arrow" aria-hidden="true">→</span>
          </Link>{" "}
          <Link className="btn btn-line inline" href="/the-firm" style={{ marginTop: 18 }}>
            See inside our office <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <TrustSection />

      {/* Offices */}
      <section className="sec">
        <div className="wrap">
          <h2 className="h2" style={{ marginBottom: 20 }}>Our offices</h2>
          <OfficeCards />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
