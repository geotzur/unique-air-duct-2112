import type { MetadataRoute } from 'next';
import { services, areas, blog } from '@/lib/data';

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://uniqueairduct.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const urls: MetadataRoute.Sitemap = [];

  // Home
  urls.push({
    url: `${BASE}/`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 1.0,
  });

  // Primary section indexes
  urls.push({
    url: `${BASE}/services/`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  });
  urls.push({
    url: `${BASE}/areas/`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  });
  urls.push({
    url: `${BASE}/contact/`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  });
  urls.push({
    url: `${BASE}/about/`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  });
  urls.push({
    url: `${BASE}/testimonials/`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  });
  urls.push({
    url: `${BASE}/blog/`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  });
  urls.push({
    url: `${BASE}/privacy-policy/`,
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.3,
  });
  urls.push({
    url: `${BASE}/sitemap-page/`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.3,
  });

  // Individual services
  services.forEach(s => {
    urls.push({
      url: `${BASE}/services/${s.slug}/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // Individual areas
  areas.forEach(a => {
    urls.push({
      url: `${BASE}/areas/${a.slug}/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  // Area + service combos — the SEO gold
  areas.forEach(a => {
    services.forEach(s => {
      urls.push({
        url: `${BASE}/areas/${a.slug}/${s.slug}/`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    });
  });

  // Blog posts
  blog.forEach(b => {
    urls.push({
      url: `${BASE}/blog/${b.slug}/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    });
  });

  return urls;
}
