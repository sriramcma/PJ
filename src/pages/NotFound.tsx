import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

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

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page not found — Padmini Janaki"
        pathname="/404"
        noindex={true}
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        exit="exit"
        className="space-y-8 text-[17px] sm:text-[19px] leading-[1.7]"
      >
        <motion.header variants={blockVariants} className="space-y-3">
          <div>
            <Link to="/" className="plain-link text-[14px]">
              ← Padmini Janaki
            </Link>
          </div>
        </motion.header>

        <motion.div variants={blockVariants} className="space-y-4 py-8">
          <h1 className="text-[23px] sm:text-[27px] font-semibold text-[#1A1A1A] dark:text-[#E8E4DE] tracking-tight">
            Page not found
          </h1>
          <p className="text-[#6E6B65] dark:text-[#9E9A92]">
            The page you requested does not exist or may have moved.
          </p>
          <div className="pt-2">
            <Link to="/" className="plain-link font-medium">
              Return to home
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
