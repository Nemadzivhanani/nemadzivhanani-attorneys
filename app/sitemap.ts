import type { MetadataRoute } from "next";
import { firm, services } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/practice-areas", "/about", "/the-firm", "/team", "/contact", "/existing-clients", "/legal", ...services.map((s) => `/practice-areas/${s.slug}`)];
  return paths.map((p) => ({ url: `${firm.siteUrl}${p}` }));
}
