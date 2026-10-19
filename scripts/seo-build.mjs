import fs from 'node:fs';
const pages = JSON.parse(fs.readFileSync('src/data/seo.json', 'utf8'));
const template = fs.readFileSync('dist/index.html', 'utf8');
const escape = s => s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
for (const [path, page] of Object.entries(pages)) {
  const url = `https://dietzbookkeeping.com${path}`;
  const html = template.replace(/<title>.*?<\/title>/, `<title>${escape(page.title)}</title>`).replace(/<!-- SEO_HEAD_START -->[\s\S]*?<!-- SEO_HEAD_END -->/, `<!-- SEO_HEAD_START -->
<meta name="description" content="${escape(page.description)}" />
<link rel="canonical" href="${url}" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Dietz Bookkeeping" />
<meta property="og:title" content="${escape(page.title)}" />
<meta property="og:description" content="${escape(page.description)}" />
<meta property="og:url" content="${url}" />
<script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@type':'Organization',name:'Dietz Bookkeeping',url:'https://dietzbookkeeping.com/'})}</script>
<!-- SEO_HEAD_END -->`);
  const dest = path === '/' ? 'dist/index.html' : `dist${path}/index.html`;
  fs.mkdirSync(dest.slice(0, dest.lastIndexOf('/')), { recursive: true });
  fs.writeFileSync(dest, html);
}
fs.writeFileSync('dist/404.html', template.replace(/<title>.*?<\/title>/, '<title>Page Not Found | Dietz Bookkeeping</title>').replace(/<!-- SEO_HEAD_START -->[\s\S]*?<!-- SEO_HEAD_END -->/, '<meta name="robots" content="noindex,follow" />'));
fs.writeFileSync('dist/robots.txt', 'User-agent: *\nAllow: /\n\nSitemap: https://dietzbookkeeping.com/sitemap.xml\n');
fs.writeFileSync('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${Object.keys(pages).map(path => `<url><loc>https://dietzbookkeeping.com${path}</loc></url>`).join('')}</urlset>\n`);
console.log(`Generated metadata for ${Object.keys(pages).length} routes, sitemap, robots.txt and 404.html.`);
