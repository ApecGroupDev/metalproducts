// app/sitemap.ts
import type { MetadataRoute } from 'next'

export const revalidate = 86400 // Re-generate daily

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.theapecgroup.com'

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/above-ground-tank`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/oil-and-water-separator`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/underground-tanks`,
      lastModified: new Date(),
    },
  ]
}
