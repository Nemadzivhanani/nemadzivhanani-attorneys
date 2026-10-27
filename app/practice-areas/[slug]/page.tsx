import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CallbackForm from "@/components/CallbackForm";
import { CtaBand, PrimaryCtas } from "@/components/Sections";
import { services } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/practice-areas/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const s = services.find((x) => x.slug === slug);
  return s ? { title: s.title, description: s.intro } : {};
}

export default async function ServicePage(props: PageProps<"/practice-areas/[slug]">) {
  const { slug } = await props.params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const isEstate = s.slug === "deceased-estates";

  return (
    <>
      <section className="page-head navy">
        <div className="wrap hero-grid">
          <div>
            <div className="lbl">{s.label}</div>
            <h1 className="h-big" style={{ marginTop: 10, fontSize: "clamp(2.2rem, 8vw, 3.4rem)" }}>{s.headline}</h1>
            <div className="punch">{s.punch}</div>
            <ul className="chips">
              {s.includes.slice(0, 4).map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="lead" style={{ marginBottom: 12 }}>{s.intro}</p>
            <PrimaryCtas message={`Good day, I need help with ${s.short.toLowerCase()}.`} whatsappLabel={isEstate ? "WhatsApp us about an estate" : "WhatsApp us about this"} />
          </div>
        </div>
      </section>

      {s.image && (
        <div className="photo-band">
          <Image src={s.image} alt="" fill sizes="100vw" />
        </div>
      )}

      <section className="sec">
        <div className="wrap split">
          <div>
            <h2 className="h2">How it works</h2>
            <ol className="steps">
              {s.steps.map((st) => (
                <li key={st.title}>
                  <b>{st.title}</b>
                  {st.text}
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="h2">What we do</h2>
            <ul className="ticks">
              {s.includes.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {isEstate && (
        <section className="sec white" id="lost-a-loved-one">
          <div className="wrap split">
            <div className="chev" style={{ padding: "26px 20px" }}>
              <div className="lbl">Deceased estates</div>
              <h2 className="h2" style={{ marginTop: 8 }}>Lost a loved one?</h2>
              <p>
                We&apos;re sorry for your loss. Leave the paperwork with us. Fill in a few details and we will call you back to explain the
                next steps and which documents to bring.
              </p>
            </div>
            <CallbackForm variant="estate" />
          </div>
        </section>
      )}

      <section className="sec">
        <div className="wrap">
          <h2 className="h3" style={{ marginBottom: 14 }}>Other practice areas</h2>
          <div className="grid grid-2">
            {services
              .filter((x) => x.slug !== s.slug)
              .map((x) => (
                <Link key={x.slug} className="btn btn-line" href={`/practice-areas/${x.slug}`} style={{ margin: 0 }}>
                  {x.short} <span className="arrow" aria-hidden="true">→</span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CtaBand message={`Good day, I need help with ${s.short.toLowerCase()}.`} />
    </>
  );
}
