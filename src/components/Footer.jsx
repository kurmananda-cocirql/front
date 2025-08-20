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
      <div className="max-w-7xl mx-auto px-6 py-12 flex gap-10 text-black justify-between">
        
        

        <motion.div variants={fadeIn}>
          <h4 className="text-lg font-semibold text-black mb-4">Useful Links</h4>
          <ul className="space-y-2 text-sm">
            {['Privacy Policy', 'FAQs', 'Help & Support'].map((item, i) => (
              <motion.li
                key={i}
                whileHover={linkHover}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <a href={`${i === 0 ? '/privacy' : i === 1 ? '/faqs' : '/help'}`} className="hover:text-white transition-all">
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={fadeIn}>
          <h4 className="text-lg font-semibold text-black mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            {[ FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <motion.a
                key={i}
                href={i === 0 ? "https://www.instagram.com/cocirql/" : "https://www.linkedin.com/company/cocirql"}
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
