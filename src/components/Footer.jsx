import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const linkHover = { scale: 1.05, x: 5 };
  const iconHover = { scale: 1.2, rotate: 5 };
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.15 }}
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-t border-amber-200 shadow-inner h-[80vh] lg:h-[40vh]"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-amber-100">
        
        {/* Branding / Description */}
        <motion.div variants={fadeIn}>
          <motion.h3
            whileHover={{ scale: 1.03 }}
            className="text-2xl font-bold text-amber-100 mb-3 flex items-center"
          >
            <span className="bg-gradient-to-br from-amber-600 to-amber-800 text-white px-2 py-1 rounded-lg mr-1 shadow">co</span>
            <span className="italic font-serif font-extrabold tracking-tight text-amber-300">cirql</span>
          </motion.h3>
          <p className="text-sm text-amber-300 leading-relaxed">
            Elevating learning experiences with programs designed for personal and professional growth. Join the community of curious minds.
          </p>
        </motion.div>

        {/* Useful Links */}
        <motion.div variants={fadeIn}>
          <h4 className="text-lg font-semibold text-amber-100 mb-4">Useful Links</h4>
          <ul className="space-y-2 text-sm">
            {['Privacy Policy', 'Terms & Conditions', 'FAQs', 'Help & Support'].map((item, i) => (
              <motion.li
                key={i}
                whileHover={linkHover}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <a href="#" className="hover:text-amber-500 transition-all">
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div variants={fadeIn}>
          <h4 className="text-lg font-semibold text-amber-100 mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={iconHover}
                transition={{ type: 'spring', stiffness: 400 }}
                className="text-amber-300 hover:text-amber-500 transition"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        variants={fadeIn}
        className="text-center py-4 border-t border-amber-200 text-xs text-amber-400"
      >
        © {new Date().getFullYear()} Cocirql. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
