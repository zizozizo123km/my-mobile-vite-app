import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
// Assuming the use of lucide-react or similar icon library
import { Menu, X, Terminal } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'API Docs', href: '/docs' },
  { name: 'Settings', href: '/settings' },
];

/**
 * Production-ready navigation bar component.
 * Uses Tailwind CSS for responsiveness and styling.
 * Assumes React Router DOM is configured for navigation (NavLink/Link).
 */
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const baseLinkClasses = "block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out";
  const desktopLinkClasses = "text-gray-300 hover:bg-gray-700 hover:text-white";
  const mobileLinkClasses = "text-gray-300 hover:bg-gray-700 hover:text-white";
  const activeLinkClasses = "bg-gray-900 text-white";

  return (
    <nav className="bg-gray-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand Section */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center text-white text-xl font-bold">
              <Terminal className="h-6 w-6 mr-2 text-green-400" />
              AppTerm
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `${baseLinkClasses} ${desktopLinkClasses} ${isActive ? activeLinkClasses : ''}`
                  }
                  end
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Action Button (e.g., Login/Profile) */}
          <div className="hidden md:block">
            <button
              type="button"
              className="p-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-green-500"
            >
              Profile
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              onClick={() => setIsOpen(false)} // Close menu on click
              className={({ isActive }) =>
                `${baseLinkClasses} ${mobileLinkClasses} ${isActive ? activeLinkClasses : ''}`
              }
              end
            >
              {item.name}
            </NavLink>
          ))}
          <button
            type="button"
            className="w-full text-left mt-2 p-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none"
          >
            Profile
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;