import { MetadataRoute } from "next";

// sitemap.ts
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tarikul-islam.me",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}