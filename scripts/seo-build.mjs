import fs from 'node:fs';
import { render } from '../.prerender/entry-server.js';
const pages = JSON.parse(fs.readFileSync('src/data/seo.json', 'utf8'));
const template = fs.readFileSync('dist/index.html', 'utf8');
const escape = s => s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
// Cloudflare Pages serves dist/<route>/index.html at the trailing-slash URL.
const canonicalPath = path => path === '/' ? '/' : `${path.replace(/\/+$/, '')}/`;
for (const [path, page] of Object.entries(pages)) {
  const url = `https://dietzbookkeeping.com${canonicalPath(path)}`;
  const service = path === '/monthly-bookkeeping' || path.startsWith('/tampa-');
  const serviceSchema = service ? `<script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@type':'Service',name:page.title.split(' | ')[0],description:page.description,url,provider:{'@id':'https://dietzbookkeeping.com/#organization'},areaServed:{'@type':'Country',name:'United States'}})}</script>` : '';
  const html = template.replace('<div id="root"></div>', `<div id="root">${render(path)}</div>`).replace(/<title>.*?<\/title>/, `<title>${escape(page.title)}</title>`).replace(/<!-- SEO_HEAD_START -->[\s\S]*?<!-- SEO_HEAD_END -->/, `<!-- SEO_HEAD_START -->
<meta name="description" content="${escape(page.description)}" />
<link rel="canonical" href="${url}" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Dietz Bookkeeping" />
<meta property="og:title" content="${escape(page.title)}" />
<meta property="og:description" content="${escape(page.description)}" />
<meta property="og:url" content="${url}" />
<meta property="og:image" content="https://dietzbookkeeping.com/images/dietzbookeepingabout.webp" />
<script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@type':'Organization','@id':'https://dietzbookkeeping.com/#organization',name:'Dietz Bookkeeping',url:'https://dietzbookkeeping.com/',logo:'https://dietzbookkeeping.com/images/dietzbookkeepinglogotampafl.webp',telephone:'+1-813-419-3475',email:'bryand@dietzbookkeeping.com',areaServed:{'@type':'Country',name:'United States'}})}</script>
${serviceSchema}
<!-- SEO_HEAD_END -->`);
  const dest = path === '/' ? 'dist/index.html' : `dist${path}/index.html`;
  fs.mkdirSync(dest.slice(0, dest.lastIndexOf('/')), { recursive: true });
  fs.writeFileSync(dest, html);
}
fs.writeFileSync('dist/404.html', template.replace('<div id="root"></div>', `<div id="root">${render('/page-not-found')}</div>`).replace(/<title>.*?<\/title>/, '<title>Page Not Found | Dietz Bookkeeping</title>').replace(/<!-- SEO_HEAD_START -->[\s\S]*?<!-- SEO_HEAD_END -->/, '<meta name="robots" content="noindex,follow" />'));
fs.writeFileSync('dist/robots.txt', 'User-agent: *\nAllow: /\n\nSitemap: https://dietzbookkeeping.com/sitemap.xml\n');
fs.writeFileSync('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${Object.keys(pages).map(path => `<url><loc>https://dietzbookkeeping.com${canonicalPath(path)}</loc></url>`).join('')}</urlset>\n`);
console.log(`Generated metadata for ${Object.keys(pages).length} routes, sitemap, robots.txt and 404.html.`);
