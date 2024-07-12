import { MetadataRoute } from 'next';
import { configData } from '@/src/data';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${configData.url}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${configData.url}/preset`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${configData.url}/custom`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${configData.url}/terms`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${configData.url}/privacy_policy`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ];
}
