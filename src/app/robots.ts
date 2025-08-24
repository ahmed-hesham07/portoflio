import { MetadataRoute } from 'next';
import { getPersonalInfo } from '@/utils/data';

export default function robots(): MetadataRoute.Robots {
  const personalInfo = getPersonalInfo();
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `https://${personalInfo.domain}/sitemap.xml`,
  };
}

