import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type Gtag = (command: string, eventName: string, params?: Record<string, string | number | boolean>) => void;

function getGtag(): Gtag | undefined {
  return (window as Window & { gtag?: Gtag }).gtag;
}

/**
 * Tracks SPA page views and intentional contact clicks. A booking or estimate
 * link click is NOT a confirmed appointment or a submitted form.
 * Embedded Calendly / Jotform completions need a separate verified integration.
 */
export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    const gtag = getGtag();
    if (!gtag) return;
    gtag('event', 'page_view', {
      page_location: window.location.href,
      page_path: location.pathname + location.search + location.hash,
      page_title: document.title,
    });
  }, [location.pathname, location.search, location.hash]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest('a[href]');
      if (!(anchor instanceof HTMLAnchorElement)) return;
      const href = anchor.getAttribute('href') || '';
      const gtag = getGtag();
      if (!gtag) return;

      if (href.startsWith('tel:')) {
        gtag('event', 'contact_click', { contact_method: 'phone' });
      } else if (href.startsWith('mailto:')) {
        gtag('event', 'contact_click', { contact_method: 'email' });
      } else if (/^https:\/\/calendly\.com\/dietzbookkeeping(?:\/|$)/i.test(href)) {
        gtag('event', 'consultation_booking_link_click', { destination: 'calendly' });
      } else if (/^https:\/\/form\.jotform\.com\/260844540670053(?:[?#]|$)/i.test(href)) {
        gtag('event', 'estimate_form_link_click', { destination: 'jotform' });
      } else if (/^\/(?:schedule|contact#schedule)\/?$/i.test(href)) {
        gtag('event', 'consultation_cta_click', { destination: 'schedule_page' });
      } else if (/^\/(?:estimate|contact#estimate)\/?$/i.test(href)) {
        gtag('event', 'estimate_cta_click', { destination: 'estimate_page' });
      }
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}
