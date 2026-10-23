import Image from "next/image";
import Link from "next/link";
import { fidelityNote, firm, mapLink, offices, registration, team, waLink } from "@/lib/site";
import { WaIcon } from "./WhatsAppFloat";

export function PrimaryCtas({ message = "Good day, I would like to speak to an attorney.", whatsappLabel = "WhatsApp an attorney" }: { message?: string; whatsappLabel?: string }) {
  return (
    <div>
      <a className="btn btn-solid" href={waLink(message)} target="_blank" rel="noopener noreferrer">
        {whatsappLabel} <span className="arrow" aria-hidden="true">→</span>
      </a>
      <Link className="btn btn-line" href="/contact#call-back">
        Request a call back <span className="arrow" aria-hidden="true">☏</span>
      </Link>
    </div>
  );
}

export function TrustSection({ heading = "Registered, regulated and accountable" }: { heading?: string }) {
  return (
    <section className="sec chev" aria-labelledby="trust-h">
      <div className="wrap">
        <div className="lbl">Transparency</div>
        <h2 className="h2" id="trust-h" style={{ marginTop: 8 }}>{heading}</h2>
        <p className="lead" style={{ marginBottom: 24 }}>
          You should know exactly who you are dealing with. These are the firm&apos;s registration details. You are welcome to check them
          with the relevant bodies.
        </p>
        <div className="trust">
          {registration.map((r) => (
            <div className="trust-item" key={r.label}>
              <div className="lbl">{r.label}</div>
              <b>{r.value}</b>
              <p>{r.note}</p>
            </div>
          ))}
          <div className="trust-item">
            <div className="lbl">Registered name</div>
            <b style={{ fontSize: "1.1rem" }}>{firm.registeredName}</b>
            <p>Trading as {firm.name}. An incorporated legal practice with personal liability for its director.</p>
          </div>
        </div>
        <p className="small-print" style={{ color: "#aab3c2" }}>{fidelityNote}</p>
      </div>
    </section>
  );
}

export function OfficeCards() {
  return (
    <div className="grid grid-3">
      {offices.map((o) => (
        <div className="office" key={o.id} id={o.id}>
          <div className="lbl">{o.area}</div>
          <h3>{o.name}</h3>
          <address>
            {o.lines.map((l) => (
              <span key={l}>
                {l}
                <br />
              </span>
            ))}
          </address>
          <p className="muted" style={{ fontSize: ".92rem" }}>{o.about}</p>
          <div className="row">
            <a className="btn btn-solid" href={`tel:${o.phone}`} aria-label={`Call the ${o.name} on ${o.phoneDisplay}`}>
              {o.phoneDisplay} <span className="arrow" aria-hidden="true">☏</span>
            </a>
            <a className="btn btn-line" href={mapLink(o.mapQuery)} target="_blank" rel="noopener noreferrer">
              Directions <span className="arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export function TeamGrid({ limit }: { limit?: number }) {
  const people = limit ? team.slice(0, limit) : team;
  return (
    <div className="team">
      {people.map((p) => (
        <article className="person" key={p.name}>
          <div className="pic">
            <Image src={p.photo} alt={`${p.name}, ${p.role}`} fill sizes="(min-width: 1080px) 360px, 112px" />
          </div>
          <div className="body">
            <h3>{p.name}</h3>
            <span className="role">{p.role}</span>
            <p>{p.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function CtaBand({ title = "Talk to us today.", text = "WhatsApp, call or visit one of our three Gauteng offices.", message }: { title?: string; text?: string; message?: string }) {
  return (
    <section className="sec navy">
      <div className="wrap split" style={{ alignItems: "center" }}>
        <div>
          <h2 className="h2" style={{ fontWeight: 900 }}>{title}</h2>
          <p className="punch" style={{ marginBottom: 0 }}>{text}</p>
        </div>
        <div>
          <a className="btn btn-wa" href={waLink(message ?? "Good day, I would like to speak to an attorney.")} target="_blank" rel="noopener noreferrer">
            WhatsApp {firm.whatsappDisplay}
            <span style={{ width: 24, height: 24, display: "inline-flex" }}>
              <WaIcon color="#0b2b16" />
            </span>
          </a>
          <Link className="btn btn-line" href="/contact#call-back">
            Request a call back <span className="arrow" aria-hidden="true">☏</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
