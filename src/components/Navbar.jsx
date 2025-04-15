import React, { useState, useRef } from 'react';
import { FiSearch, FiUser, FiMenu, FiX, FiShoppingCart, FiChevronDown } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('Home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const searchInputRef = useRef(null);

  const navItems = [
    { page: "Home", path: "/" },
    { page: "Workshops", path: "/workshops" },
    { page: "Events", path: "/events" },
    { page: "Buddy Program", path: "/buddy-program" },
  ];

  const otherItems = ["About Us", "Help"];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Implement actual search functionality
  };

  const handleSearchIconClick = () => {
    setMobileMenuOpen(true);
    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 0);
  };

  const toggleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <nav className="bg-gradient-to-r from-amber-50 to-amber-100 shadow-lg z-[30] relative">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex justify-between items-center py-4">
          {/* Left Side: Search bar */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden text-amber-900"
              onClick={handleSearchIconClick}
            >
              <FiSearch size={20} />
            </motion.button>
            
            {/* Auth Button with Transition */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-4 py-2 bg-gradient-to-br from-amber-600 to-amber-800 text-amber-50 rounded-full hover:shadow-md transition-all shadow-sm"
              onClick={toggleAuth}
            >
              <FiUser className="mr-2" />
              <span className="hidden md:inline">
                {isLoggedIn ? 'Profile' : 'Sign In'}
              </span>
            </motion.button>

            
            {/* Shopping Cart with Animation */}
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative p-2 text-amber-900 hover:text-amber-700"
            >
              <FiShoppingCart size={20} />
              <motion.span 
                className="absolute -top-1 -right-1 bg-gradient-to-br from-amber-600 to-amber-800 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-sm"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 500 }}
              >
                3
              </motion.span>
            </motion.button>
            
          </div>

          {/* Center: Logo (Centered exactly in the middle) */}
          <div className="flex justify-center items-center absolute left-0 right-0">
            <motion.a
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-amber-900 flex items-center"
              href='/'
            >
              <span className="bg-gradient-to-br from-amber-600 to-amber-800 text-amber-50 px-2 py-1 rounded-lg mr-1 shadow-md">co</span>
              <span className="italic font-serif font-extrabold tracking-tight">cirql</span>
            </motion.a>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center w-1/3">
            <motion.form 
              onSubmit={handleSearch} 
              className="relative w-full"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for courses, programs..."
                  className="w-full px-4 py-2 pl-10 border-2 border-amber-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white/80 backdrop-blur-sm placeholder-amber-600/70 text-amber-900 shadow-sm"
                />
                <FiSearch className="absolute left-3 top-3 text-amber-600" />
                <AnimatePresence>
                  {searchQuery && (
                    <motion.button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-2.5 text-amber-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <FiX size={18} />
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </motion.form>
          </div>
        </div>

        {/* Mobile Search - Animated */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.form
              onSubmit={handleSearch}
              className="md:hidden mb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search courses..."
                  className="w-full px-4 py-2 pl-10 border-2 border-amber-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white/80 placeholder-amber-600/70 text-amber-900 shadow-sm"
                />
                <FiSearch className="absolute left-3 top-3 text-amber-600" />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-2.5 text-amber-600"
                  >
                    <FiX size={18} />
                  </button>
                )}
              </div>
            </motion.form>
          )}
        </AnimatePresence>

        {/* Main Navigation - Enhanced */}
        <motion.div
          className={`${mobileMenuOpen ? 'block' : 'hidden'} md:flex justify-between py-3 border-t border-amber-200/50`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4 md:mb-0">
            {navItems.map((item) => (
              <motion.div
                key={item.page}
                className="relative"
                onHoverStart={() => setHoveredItem(item.page)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <a
                  href={item.path}
                  className={`px-4 py-2 rounded-lg transition-all flex items-center ${
                    activeNavItem === item.page
                      ? 'text-amber-900 font-semibold'
                      : 'text-amber-800 hover:text-amber-900'
                  }`}
                  onClick={() => setActiveNavItem(item.page)}
                >
                  {item.page}
                </a>
                
                {/* Hover indicator */}
                {hoveredItem === item.page && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full"
                    layoutId="navHover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-2 md:gap-4">
            {otherItems.map((item) => (
              <motion.a
                key={item}
                whileHover={{ scale: 1.05 }}
                className="text-xs md:text-sm px-3 py-1.5 text-amber-700 hover:text-amber-900 hover:bg-amber-200/50 rounded-lg transition-all"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
