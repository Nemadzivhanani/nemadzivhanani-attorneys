"use client";

import { useActionState } from "react";
import { offices, services } from "@/lib/site";
import { submitReview, type ReviewState } from "./actions";

export default function ReviewForm() {
  const [state, action, pending] = useActionState<ReviewState, FormData>(submitReview, { ok: false });

  if (state.ok) {
    return (
      <div className="card" role="status">
        <h3>Thank you for your review.</h3>
        <p>We read every review. It helps us serve you, and other families, better.</p>
      </div>
    );
  }

  return (
    <form className="form" action={action}>
      <fieldset className="stars">
        <legend>How was your experience with us?</legend>
        <div className="stars-row">
          {[5, 4, 3, 2, 1].map((n) => (
            <span key={n}>
              <input type="radio" id={`s${n}`} name="stars" value={n} required />
              <label htmlFor={`s${n}`} title={`${n} star${n > 1 ? "s" : ""}`}>
                ★<span className="sr">{n} star{n > 1 ? "s" : ""}</span>
              </label>
            </span>
          ))}
        </div>
      </fieldset>
      <label>
        Tell us about it
        <textarea name="comment" required minLength={10} maxLength={1500} rows={5} placeholder="What did we do well? What could we do better?" />
      </label>
      <label>
        Your name as you want it shown (optional)
        <input name="name" maxLength={60} placeholder="For example: Thabo M." autoComplete="off" />
      </label>
      <label>
        What did we help you with? (optional)
        <select name="service" defaultValue="">
          <option value="">Choose one</option>
          {services.map((s) => (
            <option key={s.slug}>{s.short}</option>
          ))}
        </select>
      </label>
      <label>
        Which office? (optional)
        <select name="office" defaultValue="">
          <option value="">Choose one</option>
          {offices.map((o) => (
            <option key={o.id}>{o.name}</option>
          ))}
        </select>
      </label>
      <label className="check">
        <input type="checkbox" name="publish" value="yes" />
        You may show my review (with the name above) on the firm&apos;s website.
      </label>
      <input className="hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      {state.error && <p className="form-note" role="alert" style={{ color: "#a12a2a" }}>{state.error}</p>}
      <button className="btn btn-solid" type="submit" disabled={pending}>
        {pending ? "Sending…" : "Send my review"} <span className="arrow" aria-hidden="true">→</span>
      </button>
      <p className="form-note">
        Please don&apos;t include case details, ID numbers or other private information. Your review is read only by the firm, and it is
        shown on the website only if you tick the box above. See our <a href="/legal">privacy policy</a>.
      </p>
    </form>
  );
}
