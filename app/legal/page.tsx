import type { Metadata } from "next";
import { firm } from "@/lib/site";

export const metadata: Metadata = {
  title: "Legal & compliance",
  description: "Privacy and POPIA, PAIA, complaints procedure and terms of Nemadzivhanani R Inc Attorneys.",
};

export default function Legal() {
  return (
    <>
      <section className="page-head navy">
        <div className="wrap">
          <div className="lbl">Legal &amp; compliance</div>
          <h1 className="h-big" style={{ marginTop: 10 }}>Your privacy and your rights</h1>
          <p className="lead">How we protect your information, how to request records, and how to raise a concern.</p>
        </div>
      </section>
      <section className="sec white">
        <div className="wrap stack" style={{ maxWidth: 780 }}>
          <h2 className="h2" id="privacy">Privacy &amp; POPIA</h2>
          <p>
            {firm.registeredName} is registered with the Information Regulator (registration no. 2026-063481). Our Information Officer
            is the Director, Rabelani Nemadzivhanani, and our Deputy Information Officer is the Practice Manager, Zwivhuya Fiona
            Nemadzivhanani.
          </p>
          <p>
            We use the personal information you give us only to respond to your enquiry and to act on your instructions. We keep it
            confidential, protect it with internal security measures, and do not share it with anyone who is not entitled to it unless
            the law requires it or you agree.
          </p>
          <h3 className="h3">This website</h3>
          <ul className="ticks">
            <li>No cookies for tracking or advertising, and no analytics tools.</li>
            <li>The call-back forms do not send or store anything on our servers. They only open WhatsApp with your message filled in; you choose whether to send it.</li>
            <li>Messages sent on WhatsApp are also handled under WhatsApp&apos;s own privacy terms.</li>
          </ul>
          <p>
            To ask what information we hold about you, to correct it or to have it deleted, email{" "}
            <a href={`mailto:${firm.email}`}>{firm.email}</a> for the attention of the Information Officer.
          </p>

          <h2 className="h2" id="privilege" style={{ paddingTop: 20 }}>Client confidentiality</h2>
          <p>
            Everything you share with our legal team is confidential and protected by attorney-client privilege. Case details are never
            published on this website or discussed with anyone who is not entitled to them.
          </p>

          <h2 className="h2" id="paia" style={{ paddingTop: 20 }}>PAIA</h2>
          <p>
            Under the Promotion of Access to Information Act you may request access to records held by the firm. Requests go to the
            Information Officer at <a href={`mailto:${firm.email}`}>{firm.email}</a>. A copy of our PAIA manual is available on request.
          </p>

          <h2 className="h2" id="complaints" style={{ paddingTop: 20 }}>Complaints procedure</h2>
          <ol className="steps">
            <li><b>Tell us in writing</b>Email {firm.email} with your name, file reference (if any) and what went wrong.</li>
            <li><b>We acknowledge it</b>The Practice Manager records your complaint and confirms we have received it.</li>
            <li><b>The Director reviews it</b>Your complaint is looked into and we reply in writing with the outcome.</li>
            <li><b>Still unhappy?</b>You may take the matter to the Legal Practice Council, which regulates all attorneys in South Africa.</li>
          </ol>

          <h2 className="h2" id="terms" style={{ paddingTop: 20 }}>Terms</h2>
          <p>
            The information on this website is general and is not legal advice. An attorney-client relationship only starts once we have
            agreed to act for you. Before any work begins you receive a written letter of engagement and mandate that sets out the scope
            of the work and our fees, which you sign.
          </p>
        </div>
      </section>
    </>
  );
}
