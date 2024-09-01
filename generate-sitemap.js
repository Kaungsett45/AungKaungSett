// generate-sitemap.js
import fs from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';

// Define your routes here
const urls = [
  { url: '/', changefreq: 'daily', priority: 0.7 },
  // Add more URLs as needed
];

// Create a sitemap
const sitemap = new SitemapStream({ hostname: 'https://kaungsett.web.app' });

// Write the URLs to the sitemap
urls.forEach((url) => sitemap.write(url));

// End the stream
sitemap.end();

// Generate the sitemap and save it to the `public` directory
streamToPromise(sitemap).then((data) => {
  fs.writeFileSync('./public/sitemap.xml', data);
  console.log('Sitemap generated successfully!');
}).catch(err => {
  console.error('Error generating sitemap:', err);
});
