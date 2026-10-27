import { get, list, put } from "@vercel/blob";

// Client reviews are kept in a PRIVATE Vercel Blob store (attorneys-reviews):
// one JSON file per review, readable only with the server token.
export type Review = {
  id: string;
  createdAt: string;
  stars: number;
  comment: string;
  name: string;
  service: string;
  office: string;
  mayPublish: boolean;
};

export async function saveReview(r: Omit<Review, "id" | "createdAt">) {
  const createdAt = new Date().toISOString();
  const id = `${createdAt.replace(/[:.]/g, "-")}-${crypto.randomUUID().slice(0, 8)}`;
  await put(`reviews/${id}.json`, JSON.stringify({ id, createdAt, ...r }), {
    access: "private",
    contentType: "application/json",
    addRandomSuffix: false,
  });
}

export async function listReviews(): Promise<Review[]> {
  const out: Review[] = [];
  let cursor: string | undefined;
  do {
    const page = await list({ prefix: "reviews/", cursor });
    for (const b of page.blobs) {
      const res = await get(b.pathname, { access: "private", useCache: false });
      if (res?.statusCode === 200) out.push(JSON.parse(await new Response(res.stream).text()));
    }
    cursor = page.hasMore ? page.cursor : undefined;
  } while (cursor);
  return out.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}
