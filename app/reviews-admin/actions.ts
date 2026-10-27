"use server";

import { createHash, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const COOKIE = "nra_reviews";

function token() {
  return createHash("sha256").update(`reviews-admin:${process.env.REVIEWS_ADMIN_PASSWORD ?? ""}`).digest("hex");
}

export async function isSignedIn() {
  if (!process.env.REVIEWS_ADMIN_PASSWORD) return false;
  const v = (await cookies()).get(COOKIE)?.value ?? "";
  const t = token();
  return v.length === t.length && timingSafeEqual(Buffer.from(v), Buffer.from(t));
}

export async function signIn(form: FormData) {
  const given = createHash("sha256").update(String(form.get("password") ?? "")).digest();
  const real = createHash("sha256").update(process.env.REVIEWS_ADMIN_PASSWORD ?? "\0none").digest();
  if (process.env.REVIEWS_ADMIN_PASSWORD && timingSafeEqual(given, real)) {
    (await cookies()).set(COOKIE, token(), { httpOnly: true, secure: true, sameSite: "strict", path: "/reviews-admin", maxAge: 60 * 60 * 24 * 30 });
    redirect("/reviews-admin");
  }
  redirect("/reviews-admin?wrong=1");
}

export async function signOut() {
  (await cookies()).delete({ name: COOKIE, path: "/reviews-admin" });
  redirect("/reviews-admin");
}
