import Link from "next/link";

export default function NotFound() {
  return (
    <section className="sec" style={{ minHeight: "60vh" }}>
      <div className="wrap" style={{ maxWidth: 640 }}>
        <h1 className="h2">Page not found</h1>
        <p className="muted" style={{ marginBottom: 18 }}>The page you are looking for has moved or does not exist.</p>
        <Link className="btn btn-solid" href="/">
          Back to the home page <span className="arrow" aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
