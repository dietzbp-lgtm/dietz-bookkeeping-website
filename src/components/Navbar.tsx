import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 shrink-0 w-full ios-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <img
              src="/images/dietzbookkeepinglogotampafl.webp"
              alt="Dietz Bookkeeping"
              className="w-[205px] sm:w-[230px] h-auto mix-blend-multiply"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-600",
                  location.pathname === link.path ? "text-blue-600" : "text-slate-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:+18134193475" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors font-medium text-sm">
              <Phone className="h-4 w-4" />
              <span>813-419-3475</span>
            </a>
            <Link
              to="/schedule"
              className="ios-btn bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-medium shadow-lg shadow-blue-500/20 hover:bg-blue-600"
            >
              Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-slate-100 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X className="h-6 w-6 text-slate-600" /> : <Menu className="h-6 w-6 text-slate-600" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            id="mobile-navigation"
            className="xl:hidden max-h-[calc(100dvh-5rem)] overflow-y-auto bg-white/90 backdrop-blur-xl border-b border-slate-200"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "block px-4 py-3 rounded-xl text-base font-medium transition-colors",
                    location.pathname === link.path
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  <div className="flex justify-between items-center">
                    {link.name}
                    <ChevronRight className="h-4 w-4 opacity-50" />
                  </div>
                </Link>
              ))}
              <div className="pt-4 space-y-4">
                <a href="tel:+18134193475" className="flex items-center justify-center gap-2 text-slate-600 hover:text-blue-600 transition-colors font-medium text-base py-2">
                  <Phone className="h-5 w-5" />
                  <span>813-419-3475</span>
                </a>
                <Link
                  to="/schedule"
                  className="ios-btn block w-full text-center bg-blue-500 text-white px-5 py-3 rounded-xl text-base font-medium shadow-lg shadow-blue-500/20"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
