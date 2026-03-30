/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRoutes, useLocation, BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import ServicePage from './pages/ServicePage';
import { services } from './data/services';
import ChatbotEmbed from './components/ChatbotEmbed';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
    { path: "*", element: <Home /> }
  ]);

  return routes;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppRoutes />
      <ChatbotEmbed />
    </Router>
  );
}
