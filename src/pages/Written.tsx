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

export default function Written() {
  return (
    <>
      <SEO
        title="Written — Padmini Janaki"
        description="Books, long-form essays and clinical health tech writing by Padmini Janaki, including Myths & Millennials."
        pathname="/written"
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
          Written
        </h1>
        <p className="text-[13px] sm:text-[14px] text-[#6E6B65] dark:text-[#9E9A92] tracking-[0.3px]">
          Books &amp; Essays
        </p>
      </motion.header>

      <motion.section variants={blockVariants} className="space-y-3">
        <p className="text-[#6E6B65] dark:text-[#9E9A92]">
          Writing on healthcare where technology still hasn't reached, generational conditioning, and what happens when we stop building for applause.
        </p>
      </motion.section>

      <motion.section variants={blockVariants} className="space-y-6">
        <ul className="space-y-5 list-none p-0 m-0">
          {/* Featured Essay with link to /blog */}
          <li className="space-y-1">
            <div>
              <Link
                to="/blog/why-indian-women-age-faster"
                className="plain-link font-medium"
              >
                Why do Indian women age faster?
              </Link>
              <span className="text-[#6E6B65] dark:text-[#9E9A92]"> — Long-form Essay (12 min read)</span>
            </div>
            <p className="text-[15px] sm:text-[16px] text-[#6E6B65] dark:text-[#9E9A92] leading-[1.6]">
              Ten reasons — and five things to build — from a country where the measurement comes too late.
            </p>
          </li>

          <li className="space-y-1">
            <div>
              <a
                href="https://play.google.com/store/books/details/Padmini_Janaki_Myths_Millennials?id=xpvGDwAAQBAJ"
                target="_blank"
                rel="noreferrer"
                className="plain-link font-medium"
              >
                Myths &amp; Millennials
              </a>
              <span className="text-[#6E6B65] dark:text-[#9E9A92]"> — Published Book (Google Play Books)</span>
            </div>
            <p className="text-[15px] sm:text-[16px] text-[#6E6B65] dark:text-[#9E9A92] leading-[1.6]">
              An incisive breakdown of corporate dogma, biological fatalism, and the unspoken weight carried by millennial Indian women balancing ambition and family.
            </p>
          </li>

          <li className="space-y-1">
            <div>
              <a
                href="https://frontiertech.niti.gov.in/story/ai-driven-maternal-healthcare-innovation-transforming-motherhood-experiences-in-india/"
                target="_blank"
                rel="noreferrer"
                className="plain-link font-medium"
              >
                Mind &amp; Mom’s AI Revolution in Women’s Healthcare
              </a>
              <span className="text-[#6E6B65] dark:text-[#9E9A92]"> — NITI Aayog Frontier Tech Feature</span>
            </div>
            <p className="text-[15px] sm:text-[16px] text-[#6E6B65] dark:text-[#9E9A92] leading-[1.6]">
              Case study detailing AI-led maternal and fertility support guiding 200,000+ women across India.
            </p>
          </li>

          <li className="space-y-1">
            <div>
              <a
                href="https://mindandmom.com"
                target="_blank"
                rel="noreferrer"
                className="plain-link font-medium"
              >
                Why Women's Health Is Where AI Stops Being Theory
              </a>
              <span className="text-[#6E6B65] dark:text-[#9E9A92]"> — Clinical Health Tech Essay</span>
            </div>
            <p className="text-[15px] sm:text-[16px] text-[#6E6B65] dark:text-[#9E9A92] leading-[1.6]">
              Why brute-force LLMs fail in endocrine dynamics, and how localized predictive agents eliminate blind months between reproductive clinic visits.
            </p>
          </li>

          <li className="space-y-1">
            <div>
              <a
                href="https://www.linkedin.com/in/pjanaki"
                target="_blank"
                rel="noreferrer"
                className="plain-link font-medium"
              >
                The Single Mother's Calculus
              </a>
              <span className="text-[#6E6B65] dark:text-[#9E9A92]"> — Excerpt from Myths &amp; Millennials (Chapter 6)</span>
            </div>
            <p className="text-[15px] sm:text-[16px] text-[#6E6B65] dark:text-[#9E9A92] leading-[1.6]">
              Reflecting on daily cash-flows, resource optimization, and grit taught by Janaki on the streets and textile shops of Madras.
            </p>
          </li>

          <li className="space-y-1">
            <div>
              <a
                href="https://www.linkedin.com/in/pjanaki"
                target="_blank"
                rel="noreferrer"
                className="plain-link font-medium"
              >
                Building Real Things in a Noisy World
              </a>
              <span className="text-[#6E6B65] dark:text-[#9E9A92]"> — Field Notes on Clinical Substance</span>
            </div>
            <p className="text-[15px] sm:text-[16px] text-[#6E6B65] dark:text-[#9E9A92] leading-[1.6]">
              What happens when a venture founder deliberately steps back from startup stages to spend a year embedded in fertility clinics.
            </p>
          </li>

          <li className="space-y-1">
            <div>
              <a
                href="https://www.linkedin.com/in/pjanaki"
                target="_blank"
                rel="noreferrer"
                className="plain-link font-medium"
              >
                On Building Clinical Depth in Health Tech
              </a>
              <span className="text-[#6E6B65] dark:text-[#9E9A92]"> — LinkedIn Long-Form</span>
            </div>
            <p className="text-[15px] sm:text-[16px] text-[#6E6B65] dark:text-[#9E9A92] leading-[1.6]">
              Why vanity metrics and user acquisition numbers mean nothing if biological outcomes don't move.
            </p>
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
