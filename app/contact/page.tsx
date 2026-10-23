import type { Metadata } from "next";
import CallbackForm from "@/components/CallbackForm";
import { OfficeCards } from "@/components/Sections";
import { firm, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact us",
  description: "WhatsApp, call or email Nemadzivhanani R Inc Attorneys, or visit our Johannesburg, Roodepoort or Springs office.",
};

export default function Contact() {
  return (
    <>
      <section className="page-head navy">
        <div className="wrap">
          <h1 className="h-big">How can we help?</h1>
          <p className="lead" style={{ marginBottom: 16 }}>WhatsApp us, call your nearest office, or send us an email.</p>
          <div style={{ maxWidth: 520 }}>
            <a className="btn btn-solid" href={waLink("Good day, I would like to speak to an attorney.")} target="_blank" rel="noopener noreferrer">
              WhatsApp {firm.whatsappDisplay} <span className="arrow" aria-hidden="true">→</span>
            </a>
            <a className="btn btn-line" href={`mailto:${firm.email}`}>
              {firm.email} <span className="arrow" aria-hidden="true">✉</span>
            </a>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <h2 className="h2" style={{ marginBottom: 20 }}>Our offices</h2>
          <OfficeCards />
          <p className="muted" style={{ marginTop: 16 }}>Postal address: {firm.postal}</p>
        </div>
      </section>

      <section className="sec white" id="call-back">
        <div className="wrap split">
          <div>
            <h2 className="h2">Request a call back</h2>
            <p className="lead muted">
              Leave your name and number and tell us what it is about. WhatsApp opens with your request filled in; press send and we
              will call you back.
            </p>
          </div>
          <CallbackForm />
        </div>
      </section>
    </>
  );
}
