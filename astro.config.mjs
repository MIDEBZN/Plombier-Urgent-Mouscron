// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.plombierurgentmouscron.be',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      lastmod: new Date(),
      priority: 0.7,
      serialize(item) {
        // Homepage – highest priority
        if (item.url === 'https://www.plombierurgentmouscron.be/') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        }
        // Service pages – high priority
        else if (item.url.includes('/services/') && !item.url.endsWith('/services/')) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        }
        // Services index
        else if (item.url.endsWith('/services/')) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        }
        // Location pages – high priority for local SEO
        else if (item.url.includes('/locations/') && !item.url.endsWith('/locations/')) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        }
        // Locations index
        else if (item.url.endsWith('/locations/')) {
          item.priority = 0.7;
          item.changefreq = 'weekly';
        }
        // Contact page
        else if (item.url.includes('/contact')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        }
        // About page
        else if (item.url.includes('/about')) {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        }
        // Blog index
        else if (item.url.endsWith('/blog/')) {
          item.priority = 0.7;
          item.changefreq = 'weekly';
        }
        // Blog articles
        else if (item.url.includes('/blog/')) {
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