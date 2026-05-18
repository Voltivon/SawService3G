import type { MetadataRoute } from "next";
import { site } from "@/data/site";

// All routes the site exposes — order doesn't matter to crawlers but kept
// grouped here (home → service hub → resource → service-area) for human
// readability. Priorities are deliberately monotonic within group:
//  1.0   home
//  0.9   primary Hyd-Mech service page (authorized-dealer cluster, 480/mo)
//  0.85  HEM service page (1,300/mo head-term cluster — highest volume)
//  0.85  Amada, Marvel, Behringer service pages (brand cluster head terms)
//  0.8   Tsune service page (smaller cluster) + Hyd-Mech brand hub
//  0.75  service-area Spring (home city anchor)
//  0.7   Hyd-Mech S-20A resource + remaining service-area pages
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const route = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly",
  ): MetadataRoute.Sitemap[number] => ({
    url: path === "/" ? site.url : `${site.url}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    route("/", 1, "monthly"),

    // Hyd-Mech vertical (authorized-dealer differentiator)
    route("/services/hyd-mech-band-saw-repair", 0.9),
    route("/brands/hyd-mech", 0.8),
    route("/resources/hyd-mech-s-20a-parts-list", 0.7),

    // Other brand service pages (volume-ordered)
    route("/services/hem-saw-repair", 0.85),
    route("/services/amada-band-saw-repair", 0.85),
    route("/services/marvel-band-saw-repair", 0.85),
    route("/services/behringer-band-saw-repair", 0.85),
    // Service-type page (cross-brand) — 720/mo cluster, transactional
    route("/services/band-saw-blade-welding", 0.85),
    route("/services/tsune-band-saw-repair", 0.8),

    // Service-area / location pages
    route("/service-area/spring-tx", 0.75),
    route("/service-area/houston-tx", 0.7),
    route("/service-area/katy-tx", 0.7),
    route("/service-area/cypress-tx", 0.7),
    route("/service-area/the-woodlands-tx", 0.7),
    route("/service-area/conroe-tx", 0.7),
  ];
}
