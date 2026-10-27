import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand, OfficeCards } from "@/components/Sections";
import { firstVisit, officePhotos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Inside the firm",
  description: "See our offices and the people who will work on your matter, and what happens when you visit Nemadzivhanani R Inc Attorneys.",
};

export default function TheFirm() {
  return (
    <>
      <section className="page-head navy">
        <div className="wrap">
          <div className="lbl">Inside the firm</div>
          <h1 className="h-big" style={{ marginTop: 10 }}>No closed doors.</h1>
          <p className="lead">
            You should know who you are trusting with your matter. This is our office, our team and how we work, so you know what to
            expect before you walk in.
          </p>
        </div>
      </section>

      <div className="group-photo">
        <Image src="/images/firm/team-seated.jpg" alt="The Nemadzivhanani R Inc team together at the office" fill sizes="100vw" priority />
      </div>

      {/* Gallery */}
      <section className="sec white">
        <div className="wrap">
          <div className="lbl">Our office</div>
          <h2 className="h2" style={{ marginTop: 8, marginBottom: 20 }}>Where your matter is handled</h2>
          <div className="gallery">
            {officePhotos.map((p) => (
              <figure key={p.src} className={p.tall ? "tall" : undefined}>
                <div className="g-pic">
                  <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1080px) 33vw, (min-width: 760px) 50vw, 100vw" />
                </div>
                <figcaption>{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* First visit */}
      <section className="sec">
        <div className="wrap">
          <div className="lbl">Your first visit</div>
          <h2 className="h2" style={{ marginTop: 8, marginBottom: 20 }}>What happens when you come in</h2>
          <ol className="visit">
            {firstVisit.map((v, i) => (
              <li key={v.title}>
                <div className="v-pic">
                  <Image src={v.photo} alt="" fill sizes="(min-width: 1080px) 25vw, (min-width: 760px) 50vw, 100vw" />
                  <span className="v-num" aria-hidden="true">{i + 1}</span>
                </div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </li>
            ))}
          </ol>
          <Link className="btn btn-line inline" href="/team" style={{ marginTop: 22 }}>
            Meet the people on your matter <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="sec white">
        <div className="wrap">
          <h2 className="h2" style={{ marginBottom: 20 }}>Visit one of our offices</h2>
          <OfficeCards />
        </div>
      </section>

      <CtaBand title="Come and see us." />
    </>
  );
}
