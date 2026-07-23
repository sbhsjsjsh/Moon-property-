import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Use canonical URL
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.moonproperty.com';

  // --- 1. Static Pages ---

  // Home: weekly | priority 1.0
  const homePage: MetadataRoute.Sitemap[number] = {
    url: `${baseUrl}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1.0,
  };

  // Service pages: weekly | priority 0.9
  const services = ['buy', 'rent', 'sell'];
  const servicePages: MetadataRoute.Sitemap = services.map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Contact/About pages: monthly | priority 0.6
  const staticPages = ['about']; // Add 'contact' here if created in the future
  const infoPages: MetadataRoute.Sitemap = staticPages.map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  // --- 2. Dynamic Pages (Placeholders based on requirements) ---
  // If dynamic pages become available via CMS or Database, you fetch them here.
  
  // Property pages: daily | priority 0.8
  // const properties = await getProperties();
  const dynamicProperties: MetadataRoute.Sitemap = []; 
  /* 
  properties.map((property) => ({
    url: `${baseUrl}/property/${property.slug}`,
    lastModified: new Date(property.updatedAt),
    changeFrequency: 'daily',
    priority: 0.8,
  }));
  */

  // Blog pages: monthly | priority 0.7
  // const blogs = await getBlogs();
  const dynamicBlogs: MetadataRoute.Sitemap = [];
  /*
  blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.updatedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));
  */

  // Location pages: weekly | priority 0.9
  // const locations = await getLocations();
  const dynamicLocations: MetadataRoute.Sitemap = [];

  // Excludes 404, admin, private, and duplicate pages by strictly only 
  // returning explicitly mapped valid public routes.

  return [
    homePage,
    ...servicePages,
    ...infoPages,
    ...dynamicLocations,
    ...dynamicProperties,
    ...dynamicBlogs,
  ];
}
