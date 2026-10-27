import type { Metadata } from "next";
import ReviewForm from "./ReviewForm";

export const metadata: Metadata = {
  title: "Review us",
  description: "Tell us about your experience with Nemadzivhanani R Inc Attorneys.",
  robots: { index: false },
};

export default function Review() {
  return (
    <>
      <section className="page-head navy">
        <div className="wrap">
          <div className="lbl">Your feedback</div>
          <h1 className="h-big" style={{ marginTop: 10 }}>How did we do?</h1>
          <p className="lead">Thank you for trusting us with your matter. It takes one minute to tell us about your experience.</p>
        </div>
      </section>
      <section className="sec">
        <div className="wrap" style={{ maxWidth: 640 }}>
          <ReviewForm />
        </div>
      </section>
    </>
  );
}
