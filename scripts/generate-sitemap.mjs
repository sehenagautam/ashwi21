import fs from 'node:fs';
import path from 'node:path';

const siteUrl = 'https://ashwifurniture.com';
const root = process.cwd();
const dataPath = path.join(root, 'src', 'data', 'furniture.json');
const outPath = path.join(root, 'public', 'sitemap.xml');

const json = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
const staticUrls = ['/', '/about'];
const productUrls = (json.products || []).map((p) => `/product/${p.id}`);
const allUrls = [...staticUrls, ...productUrls];
const now = new Date().toISOString().split('T')[0];

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  allUrls
    .map(
      (u) =>
        `  <url>\n` +
        `    <loc>${siteUrl}${u}</loc>\n` +
        `    <lastmod>${now}</lastmod>\n` +
        `    <changefreq>weekly</changefreq>\n` +
        `    <priority>${u === '/' ? '1.0' : '0.8'}</priority>\n` +
        `  </url>`
    )
    .join('\n') +
  `\n</urlset>\n`;

fs.writeFileSync(outPath, xml);
console.log(`sitemap generated: ${allUrls.length} urls`);
