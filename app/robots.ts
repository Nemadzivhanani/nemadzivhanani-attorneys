import type { MetadataRoute } from "next";

// Preview build: blocks all crawlers. Switch to allow: "/" when the new site goes live.
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", disallow: "/" } };
}
