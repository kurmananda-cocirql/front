import React, { useState, useRef } from 'react';
import { FiSearch, FiX, FiMenu } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const SimpleNavbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const searchInputRef = useRef(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Workshops", path: "/workshops" },
    { name: "Events", path: "/events" },
    { name: "Buddy Program", path: "/programs" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching workshops for:", searchQuery);
    // Implement actual search functionality here
  };

  const handleSearchIconClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 0);
  };

  return (
    <nav className="bg-gradient-to-r from-amber-50 to-amber-100 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center space-x-6">
            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden text-amber-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>

            {/* Logo with animation */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-amber-900 flex items-center"
              href='/'
            >
              <span className="bg-gradient-to-br from-amber-600 to-amber-800 text-amber-50 px-2 py-1 rounded-lg mr-1 shadow-md">co</span>
              <span className="italic font-serif font-extrabold tracking-tight">cirql</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  className="relative"
                  onHoverStart={() => setHoveredItem(item.name)}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  <a
                    href={item.path}
                    className="px-4 py-2 text-amber-800 hover:text-amber-900 rounded-lg transition-colors relative z-10"
                  >
                    {item.name}
                  </a>
                  {hoveredItem === item.name && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-full bg-amber-200/50 rounded-lg"
                      layoutId="navHover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right side - Search only */}
          <div className="flex items-center">
            {/* Desktop Search */}
            <motion.form 
              onSubmit={handleSearch} 
              className="hidden md:block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search workshops..."
                  className="w-64 px-4 py-2 pl-10 border-2 border-amber-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white/80 backdrop-blur-sm placeholder-amber-600/70 text-amber-900 shadow-sm"
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

            {/* Mobile Search Icon */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden text-amber-900 ml-4"
              onClick={handleSearchIconClick}
            >
              <FiSearch size={20} />
            </motion.button>
          </div>
        </div>

        {/* Mobile Search and Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="mb-4">
                <div className="relative">
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search workshops..."
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
              </form>

              {/* Mobile Navigation */}
              <div className="flex flex-col space-y-2 pb-4">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.path}
                    className="px-4 py-3 text-amber-800 hover:bg-amber-200/50 rounded-lg transition-colors font-medium"
                    whileHover={{ x: 5 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default SimpleNavbar;