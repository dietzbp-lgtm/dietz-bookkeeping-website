import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import pages from '../data/seo.json';

export default function Seo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const path = pathname.replace(/\/+$/, '') || '/';
    const page = pages[path as keyof typeof pages];
    document.title = page?.title || 'Page Not Found | Dietz Bookkeeping';
    const meta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name';
      let node = document.head.querySelector(`meta[${attr}="${name}"]`);
      if (!node) { node = document.createElement('meta'); node.setAttribute(attr, name); document.head.appendChild(node); }
      node.setAttribute('content', content);
    };
    meta('description', page?.description || 'This page could not be found. Explore Dietz Bookkeeping services or contact us.');
    meta('robots', page ? 'index,follow' : 'noindex,follow');
    meta('og:title', document.title, true);
    meta('og:description', page?.description || 'Page not found.', true);
    meta('og:url', `https://dietzbookkeeping.com${path === '/' ? '/' : path}`, true);
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!page) { canonical?.remove(); return; }
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical); }
    canonical.setAttribute('href', `https://dietzbookkeeping.com${path}`);
  }, [pathname]);
  return null;
}
