import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F2F2F7]">
      <Navbar />
      <main id="main-content" className="flex-grow min-w-0">
        <div>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
