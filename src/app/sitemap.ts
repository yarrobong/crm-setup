import { MetadataRoute } from 'next';
import { servicesData, casesData, solutionsData } from '@/content/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://crm-setup.example.com';
  
  const staticRoutes = [
    '',
    '/services',
    '/solutions',
    '/cases',
    '/pricing',
    '/about',
    '/blog',
    '/contacts',
    '/privacy',
    '/personal-data',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const dynamicServices = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const dynamicSolutions = solutionsData.map((solution) => ({
    url: `${baseUrl}/solutions/${solution.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const dynamicCases = casesData.map((c) => ({
    url: `${baseUrl}/cases/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...dynamicServices, ...dynamicSolutions, ...dynamicCases];
}
