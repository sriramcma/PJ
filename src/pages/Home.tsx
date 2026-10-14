import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const blockVariants = {
  hidden: { opacity: 0, y: 6 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0, 0, 0.2, 1] as const,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export default function Home() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  useEffect(() => {
    document.title = 'Padmini Janaki';
  }, []);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      className="space-y-12 sm:space-y-14 text-[17px] sm:text-[19px] leading-[1.7]"
    >
      {/* 1. Name & 2. One-line identifier */}
      <motion.header variants={blockVariants} className="space-y-1.5">
        <h1 className="text-[21px] sm:text-[23px] font-semibold text-[#1A1A1A] dark:text-[#E8E4DE] tracking-tight leading-snug">
          Padmini Janaki
        </h1>
        <p className="text-[13px] sm:text-[14px] text-[#6E6B65] dark:text-[#9E9A92] tracking-[0.5px]">
          health tech · AI · wearables · writer
        </p>
      </motion.header>

      {/* 3. Positioning paragraph */}
      <motion.section variants={blockVariants} className="space-y-4">
        <p>
          Raised in Madras by a single mother who sold flowers at dawn, she learned early that when there is no safety net, you solve for survival. Today, she builds healthcare technology at Mind &amp; Mom and Livf.Women, guiding over two lakh women through fertility and maternal journeys. She wrote <em>Myths &amp; Millennials</em> because the books she needed as an ambitious Indian woman navigating social expectations simply did not exist.
        </p>
      </motion.section>

      {/* General Category Index with Redirection into Nested Sections */}
      <motion.section variants={blockVariants} className="space-y-6">
        <div>
          <h2 className="text-[18px] sm:text-[20px] font-medium text-[#1A1A1A] dark:text-[#E8E4DE]">
            Index
          </h2>
          <p className="text-[13px] sm:text-[14px] text-[#6E6B65] dark:text-[#9E9A92] tracking-[0.3px]">
            Categories &amp; Nested Works
          </p>
        </div>

        <ul className="space-y-4 list-none p-0 m-0">
          <li>
            <div>
              <Link to="/written" className="index-category-link">
                Written
              </Link>
              <span className="text-[#6E6B65] dark:text-[#9E9A92]"> — Books, clinical health tech essays, and field notes</span>
            </div>
          </li>

          <li>
            <div>
              <Link to="/spoken" className="index-category-link">
                Spoken
              </Link>
              <span className="text-[#6E6B65] dark:text-[#9E9A92]"> — Keynote talks, TEDx, and podcast conversations</span>
            </div>
          </li>

          <li>
            <div>
              <Link to="/story" className="index-category-link">
                Story
              </Link>
              <span className="text-[#6E6B65] dark:text-[#9E9A92]"> — Mismatched computers, art, PayPal, svadharma, and health tech</span>
            </div>
          </li>

          <li>
            <div>
              <Link to="/blog" className="index-category-link">
                Blog
              </Link>
              <span className="text-[#6E6B65] dark:text-[#9E9A92]"> — Essays and field notes</span>
            </div>
          </li>

          <li>
            <div>
              <Link to="/elsewhere" className="index-category-link">
                Elsewhere
              </Link>
              <span className="text-[#6E6B65] dark:text-[#9E9A92]"> — LinkedIn, Instagram, Mind &amp; Mom, and direct email</span>
            </div>
          </li>
        </ul>
      </motion.section>

      {/* Footer */}
      <motion.footer
        variants={blockVariants}
        className="pt-14 sm:pt-16 flex items-center justify-between text-[13px] sm:text-[14px] text-[#6E6B65] dark:text-[#9E9A92]"
      >
        <span>© 2026 Padmini Janaki</span>
        <button
          type="button"
          onClick={() => setPrivacyOpen(!privacyOpen)}
          className="plain-link cursor-pointer bg-transparent border-0 p-0"
        >
          Privacy
        </button>
      </motion.footer>

      {/* Inline Privacy Note */}
      <AnimatePresence>
        {privacyOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="text-[13px] sm:text-[14px] text-[#6E6B65] dark:text-[#9E9A92] italic pt-1">
              No tracking scripts. No analytics. No cookies. Just words on a page.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
