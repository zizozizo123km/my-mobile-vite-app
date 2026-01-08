import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

/**
 * The main layout component wrapping the entire application content.
 * Includes Header and Footer components.
 */
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  /** The content to be displayed within the layout (usually the page components). */
  children: PropTypes.node.isRequired,
};

export default Layout;