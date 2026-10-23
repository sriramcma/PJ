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

export default function Elsewhere() {
  return (
    <>
      <SEO
        title="Elsewhere — Padmini Janaki"
        description="Find Padmini Janaki on LinkedIn, Instagram and Mind & Mom, or reach her directly by email."
        pathname="/elsewhere"
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        exit="exit"
        className="space-y-12 sm:space-y-14 text-[17px] sm:text-[19px] leading-[1.7]"
      >
      <motion.header variants={blockVariants} className="space-y-2">
        <div>
          <Link
            to="/"
            className="plain-link text-[14px]"
          >
            ← Padmini Janaki
          </Link>
        </div>
        <h1 className="text-[21px] sm:text-[23px] font-semibold text-[#1A1A1A] dark:text-[#E8E4DE] tracking-tight leading-snug pt-1">
          Elsewhere
        </h1>
        <p className="text-[13px] sm:text-[14px] text-[#6E6B65] dark:text-[#9E9A92] tracking-[0.3px]">
          Contact &amp; Profiles
        </p>
      </motion.header>

      <motion.section variants={blockVariants} className="space-y-4">
        <p>
          Mail me directly at{' '}
          <a
            href="mailto:pj@livfwomen.com"
            className="plain-link font-medium"
          >
            pj@livfwomen.com
          </a>
          . No deck needed, and skip the "quick call?". Just tell me what you're thinking about. I read everything and reply when I have something useful to say.
        </p>
      </motion.section>

      <motion.section variants={blockVariants} className="space-y-4">
        <ul className="space-y-3 list-none p-0 m-0">
          <li>
            <a
              href="https://www.linkedin.com/in/pjanaki"
              target="_blank"
              rel="noreferrer"
              className="plain-link font-medium"
            >
              LinkedIn
            </a>
            <span className="text-[#6E6B65] dark:text-[#9E9A92]"> — Writing on health tech, product decisions, and leadership</span>
          </li>

          <li>
            <a
              href="https://www.instagram.com/padminijanaki/"
              target="_blank"
              rel="noreferrer"
              className="plain-link font-medium"
            >
              Instagram
            </a>
            <span className="text-[#6E6B65] dark:text-[#9E9A92]"> — Personal thoughts, books, and life in Chennai</span>
          </li>

          <li>
            <a
              href="https://mindandmom.com"
              target="_blank"
              rel="noreferrer"
              className="plain-link font-medium"
            >
              Mind &amp; Mom
            </a>
            <span className="text-[#6E6B65] dark:text-[#9E9A92]"> — Maternal health tech platform &amp; LIVF clinics</span>
          </li>

          <li>
            <a
              href="https://play.google.com/store/books/details/Padmini_Janaki_Myths_Millennials?id=xpvGDwAAQBAJ"
              target="_blank"
              rel="noreferrer"
              className="plain-link font-medium"
            >
              Myths &amp; Millennials
            </a>
            <span className="text-[#6E6B65] dark:text-[#9E9A92]"> — Google Play Books store listing</span>
          </li>
        </ul>
      </motion.section>

      <motion.footer variants={blockVariants} className="pt-10 flex items-center justify-between text-[13px] sm:text-[14px] text-[#6E6B65] dark:text-[#9E9A92]">
        <Link to="/" className="plain-link">
          ← Back to Index
        </Link>
        <span>© 2026 Padmini Janaki</span>
      </motion.footer>
    </motion.div>
    </>
  );
}
