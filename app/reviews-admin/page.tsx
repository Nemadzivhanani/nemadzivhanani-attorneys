import type { Metadata } from "next";
import { headers } from "next/headers";
import { listReviews } from "@/lib/reviews";
import { isSignedIn, signIn, signOut } from "./actions";

export const metadata: Metadata = { title: "Client reviews (private)", robots: { index: false, follow: false } };

export default async function ReviewsAdmin({ searchParams }: { searchParams: Promise<{ wrong?: string }> }) {
  if (!(await isSignedIn())) {
    const { wrong } = await searchParams;
    return (
      <section className="sec">
        <div className="wrap" style={{ maxWidth: 480 }}>
          <h1 className="h2">Client reviews</h1>
          <p className="muted" style={{ marginBottom: 16 }}>Private page for the firm. Enter the password.</p>
          <form className="form" action={signIn}>
            <label>
              Password
              <input name="password" type="password" required autoComplete="current-password" />
            </label>
            {wrong && <p className="form-note" role="alert" style={{ color: "#a12a2a" }}>Wrong password.</p>}
            <button className="btn btn-solid" type="submit">Sign in <span className="arrow" aria-hidden="true">→</span></button>
          </form>
        </div>
      </section>
    );
  }

  const reviewUrl = `https://${(await headers()).get("host")}/review`;
  const reviews = await listReviews();
  const avg = reviews.length ? reviews.reduce((s, r) => s + r.stars, 0) / reviews.length : 0;

  return (
    <section className="sec">
      <div className="wrap">
        <div className="lbl">Private</div>
        <h1 className="h2" style={{ marginTop: 8 }}>Client reviews</h1>
        <div className="tiles chev" style={{ padding: 16, marginBottom: 20, gridTemplateColumns: "repeat(3, 1fr)" }}>
          <div className="tile"><b>{reviews.length}</b><span>Reviews</span></div>
          <div className="tile"><b>{avg ? avg.toFixed(1) : "–"}</b><span>Average stars</span></div>
          <div className="tile"><b>{reviews.filter((r) => r.mayPublish).length}</b><span>OK to show</span></div>
        </div>
        <p className="muted" style={{ marginBottom: 20 }}>
          Link to send to clients: <b>{reviewUrl}</b>
        </p>
        {reviews.length === 0 && <p>No reviews yet.</p>}
        <div className="grid" style={{ gap: 12 }}>
          {reviews.map((r) => (
            <article className="card" key={r.id}>
              <p style={{ color: "var(--gold)", fontSize: "1.3rem", letterSpacing: 2 }} aria-label={`${r.stars} stars`}>
                {"★".repeat(r.stars)}
                <span style={{ color: "#d8d2c0" }}>{"★".repeat(5 - r.stars)}</span>
              </p>
              <p style={{ color: "var(--ink)", whiteSpace: "pre-wrap", margin: "6px 0 10px" }}>{r.comment}</p>
              <p className="form-note">
                {r.name || "No name given"} · {r.service || "Service not given"} · {r.office || "Office not given"} ·{" "}
                {new Date(r.createdAt).toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg", dateStyle: "medium", timeStyle: "short" })} ·{" "}
                <b>{r.mayPublish ? "OK to show on website" : "Private only"}</b>
              </p>
            </article>
          ))}
        </div>
        <form action={signOut} style={{ marginTop: 24 }}>
          <button className="btn btn-line inline" type="submit">Sign out</button>
        </form>
      </div>
    </section>
  );
}
