"use server";

import { saveReview } from "@/lib/reviews";

export type ReviewState = { ok: boolean; error?: string };

const clip = (v: FormDataEntryValue | null, max: number) => String(v ?? "").trim().slice(0, max);

export async function submitReview(_prev: ReviewState, form: FormData): Promise<ReviewState> {
  // Honeypot: real people never see or fill this field.
  if (clip(form.get("website"), 200)) return { ok: true };

  const stars = Number(form.get("stars"));
  if (!Number.isInteger(stars) || stars < 1 || stars > 5) return { ok: false, error: "Please choose from 1 to 5 stars." };
  const comment = clip(form.get("comment"), 1500);
  if (comment.length < 10) return { ok: false, error: "Please tell us a little more (at least a sentence)." };

  try {
    await saveReview({
      stars,
      comment,
      name: clip(form.get("name"), 60),
      service: clip(form.get("service"), 80),
      office: clip(form.get("office"), 60),
      mayPublish: form.get("publish") === "yes",
    });
    return { ok: true };
  } catch {
    return { ok: false, error: "Sorry, something went wrong. Please try again in a minute." };
  }
}
