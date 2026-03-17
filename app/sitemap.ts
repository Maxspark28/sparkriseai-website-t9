import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sparkriseai.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ]
}
