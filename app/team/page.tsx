import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand, TeamGrid } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Our team",
  description: "Meet the attorneys, estate administrators and support staff of Nemadzivhanani R Inc Attorneys.",
};

export default function Team() {
  return (
    <>
      <section className="page-head navy">
        <div className="wrap">
          <div className="lbl">Our team</div>
          <h1 className="h-big" style={{ marginTop: 10 }}>The people on your matter</h1>
          <p className="lead">
            A united team, committed to serving clients with professionalism and excellence. Here is who we are and what each of us does.
          </p>
        </div>
      </section>
      <div className="group-photo">
        <Image src="/team/team-group.jpg" alt="The Nemadzivhanani R Inc team at the office" fill sizes="100vw" priority />
      </div>
      <section className="sec">
        <div className="wrap">
          <TeamGrid />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
