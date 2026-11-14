// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.plombierurgentmouscron.be',
  trailingSlash: 'never',
  redirects: {
    '/locations/tourcoing': '/locations'
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      lastmod: new Date(),
      priority: 0.7,
      filter: (page) => !page.includes('/locations/tourcoing'),
      serialize(item) {
        // Normalize URL for checks
        const cleanUrl = item.url.replace(/\/$/, '');

        // Homepage – highest priority
        if (cleanUrl === 'https://www.plombierurgentmouscron.be') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        }
        // Service subpages – high priority
        else if (cleanUrl.includes('/services/') || (cleanUrl.startsWith('https://www.plombierurgentmouscron.be/services/') && cleanUrl !== 'https://www.plombierurgentmouscron.be/services')) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        }
        // Services index
        else if (cleanUrl === 'https://www.plombierurgentmouscron.be/services') {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        }
        // Location subpages
        else if (cleanUrl.includes('/locations/') || (cleanUrl.startsWith('https://www.plombierurgentmouscron.be/locations/') && cleanUrl !== 'https://www.plombierurgentmouscron.be/locations')) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        }
        // Locations index
        else if (cleanUrl === 'https://www.plombierurgentmouscron.be/locations') {
          item.priority = 0.7;
          item.changefreq = 'weekly';
        }
        // Contact page
        else if (cleanUrl.endsWith('/contact')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        }
        // About page
        else if (cleanUrl.endsWith('/about')) {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        }
        // Blog index
        else if (cleanUrl.endsWith('/blog')) {
          item.priority = 0.7;
          item.changefreq = 'weekly';
        }
        // Blog articles
        else if (cleanUrl.includes('/blog/')) {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        }
        return item;
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
