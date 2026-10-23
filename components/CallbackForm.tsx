"use client";

import { FormEvent, useState } from "react";
import { offices, services, waLink } from "@/lib/site";

// Nothing is sent to or stored on a server: the form only builds a WhatsApp
// message that the visitor sends themselves (POPIA: no server storage).
export default function CallbackForm({ variant = "general", defaultService }: { variant?: "general" | "estate"; defaultService?: string }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const v = (k: string) => String(d.get(k) ?? "").trim();
    const lines =
      variant === "estate"
        ? [
            "Good day, I would like a call back about a deceased estate.",
            `Name: ${v("name")}`,
            `Phone: ${v("phone")}`,
            `Person who passed away: ${v("deceased")}`,
            `Was there a will: ${v("will")}`,
            `Closest office: ${v("office")}`,
          ]
        : [
            "Good day, I would like a call back.",
            `Name: ${v("name")}`,
            `Phone: ${v("phone")}`,
            `Service: ${v("service")}`,
            `Closest office: ${v("office")}`,
          ];
    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    e.currentTarget.reset();
    setSent(true);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <label>
        Your name
        <input name="name" required autoComplete="name" />
      </label>
      <label>
        Your phone number
        <input name="phone" type="tel" required autoComplete="tel" inputMode="tel" />
      </label>
      {variant === "estate" ? (
        <>
          <label>
            Name of the person who passed away
            <input name="deceased" required />
          </label>
          <label>
            Was there a will?
            <select name="will" defaultValue="Not sure">
              <option>Yes</option>
              <option>No</option>
              <option>Not sure</option>
            </select>
          </label>
        </>
      ) : (
        <label>
          What do you need help with?
          <select name="service" defaultValue={defaultService ?? services[0].short}>
            {services.map((s) => (
              <option key={s.slug}>{s.short}</option>
            ))}
            <option>Something else</option>
          </select>
        </label>
      )}
      <label>
        Closest office
        <select name="office" defaultValue={offices[0].name}>
          {offices.map((o) => (
            <option key={o.id}>{o.name}</option>
          ))}
        </select>
      </label>
      <label className="check">
        <input type="checkbox" name="consent" required />
        <span>I agree that the firm may contact me about my request, as set out in the <a href="/legal#privacy">privacy notice</a> (POPIA).</span>
      </label>
      <button type="submit" className="btn btn-solid">
        Send on WhatsApp <span className="arrow" aria-hidden="true">→</span>
      </button>
      <p className="form-note" aria-live="polite">
        {sent
          ? "WhatsApp has opened with your request filled in. Press send there and we will call you back."
          : "This opens WhatsApp with your details filled in. Nothing is stored on this website."}
      </p>
    </form>
  );
}
