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
      // Changed to yellow theme (you can revert to original if needed)
      className="bg-[#FECE18] border-t shadow-inner"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-black">
        
        <motion.div variants={fadeIn}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="text-2xl font-bold text-black mb-3 flex items-center"
          >
            <img src="/logo.png" alt="Logo" className=" h-10 mr-2 rounded shadow" />
          </motion.div>
          <p className="text-sm text-black leading-relaxed">
            Elevating learning experiences with programs designed for personal and professional growth. Join the community of curious minds.
          </p>
        </motion.div>

        <motion.div variants={fadeIn}>
          <h4 className="text-lg font-semibold text-black mb-4">Useful Links</h4>
          <ul className="space-y-2 text-sm">
            {['Privacy Policy', 'Terms & Conditions', 'FAQs', 'Help & Support'].map((item, i) => (
              <motion.li
                key={i}
                whileHover={linkHover}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <a href="#" className="hover:text-white transition-all">
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={fadeIn}>
          <h4 className="text-lg font-semibold text-black mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={iconHover}
                transition={{ type: 'spring', stiffness: 400 }}
                className="text-black hover:text-white transition"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn}
        className="text-center py-4 border-t border-yellow-600 text-xs text-black"
      >
        © {new Date().getFullYear()} Cocirql. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
