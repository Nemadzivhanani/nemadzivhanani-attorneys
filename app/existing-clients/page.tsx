import type { Metadata } from "next";
import { offices, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Existing clients",
  description: "Get updates on your matter on WhatsApp.",
};

export default function ExistingClients() {
  return (
    <section className="sec chev" style={{ minHeight: "70vh" }}>
      <div className="wrap" style={{ maxWidth: 720 }}>
        <div className="lbl">Existing clients</div>
        <h1 className="h-big" style={{ marginTop: 10, fontSize: "clamp(2.2rem, 8vw, 3.2rem)" }}>Updates on your matter, on WhatsApp</h1>
        <p className="lead" style={{ marginBottom: 18 }}>
          We message you when something happens on your file. Need an update now? Ask us on WhatsApp and include your name and file
          reference if you have it.
        </p>
        <a className="btn btn-solid" href={waLink("Good day, I am an existing client and would like an update on my matter.\nName:\nFile reference (if known):")} target="_blank" rel="noopener noreferrer">
          Ask for an update <span className="arrow" aria-hidden="true">→</span>
        </a>
        {offices
          .filter((o, i, a) => a.findIndex((x) => x.phone === o.phone) === i)
          .map((o) => (
            <a key={o.id} className="btn btn-line" href={`tel:${o.phone}`}>
              Call {o.phoneDisplay} ({o.id === "johannesburg" ? "Johannesburg & Springs" : "Roodepoort"}) <span className="arrow" aria-hidden="true">☏</span>
            </a>
          ))}
        <p className="small-print" style={{ color: "#aab3c2", marginTop: 18 }}>
          For your privacy, case details are never shown on this website. We will confirm who you are before sharing any information.
        </p>
      </div>
    </section>
  );
}
