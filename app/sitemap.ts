import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://linovia.com' // Update with your actual domain

  // Static pages
  const routes = ['', '/commands', '/tutorials', '/quiz', '/cheatsheet', '/about'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'daily' as const : 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    })
  )

  return routes
}
