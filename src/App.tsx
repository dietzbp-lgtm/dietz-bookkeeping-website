/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRoutes, useLocation, BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import Seo from './components/Seo';
import Layout from './components/Layout';
import { Link } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import ServicePage from './pages/ServicePage';
import { services } from './data/services';
import ChatbotEmbed from './components/ChatbotEmbed';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const target = hash ? document.getElementById(hash.slice(1)) : null;
      if (target) target.scrollIntoView();
      else window.scrollTo(0, 0);
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}

function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/services", element: <Services /> },
    { path: "/contact", element: <Contact /> },
    { path: "/resources", element: <Resources /> },
    ...services.map(service => ({
      path: service.slug,
      element: <ServicePage service={service} />
    })),
    { path: "*", element: <Layout><section className="max-w-3xl mx-auto px-6 py-24 text-center"><h1 className="text-4xl font-bold mb-6">Page not found</h1><p className="mb-8">The page you requested could not be found.</p><Link to="/" className="text-blue-600 underline">Return to Dietz Bookkeeping</Link></section></Layout> }
  ]);

  return routes;
}

export function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Seo />
      <AppRoutes />
      <ChatbotEmbed />
    </>
  );
}

export default function App() {
  return <Router><AppContent /></Router>;
}
