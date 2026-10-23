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

export default function Home() {
  return (
    <>
      <SEO
        title="Padmini Janaki — Health Tech, AI & Women's Healthcare"
        description="Padmini Janaki builds healthcare technology at Mind & Mom and LIVF.Women, guiding over two lakh women through fertility and maternal journeys."
        pathname="/"
      />
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
          My career has run through design, product and healthcare. I began as a UX designer at PayPal and became a technical product manager for disputes and fraud, a portfolio covering about $88 million in losses. I then joined Change Healthcare as a Senior Product Manager. For the past six years I have built and run LIVF.Women, a fertility clinic network in Chennai formerly called Mind &amp; Mom, a maternal health platform that has supported more than 200,000 women as an app, newsletters and a community.
        </p>
        <p>
          I have worked with healthcare systems in India, the US, Sri Lanka and Nigeria. I spoke at the World Economic Forum representing India, and my work has been recognised with BW Businessworld’s 40 Under 40, TiE Chennai Entrepreneur of the Year and the INSEAD Singapore Impact Award.
        </p>
        <p>
          Outside of work, health and fitness keep me grounded, through strength training and long walks, and I love writing!
        </p>
      </motion.section>

      {/* General Category Index with Redirection into Nested Sections */}
      <motion.section variants={blockVariants} className="space-y-6">
        <div>
          <h2 className="text-[18px] sm:text-[20px] font-medium text-[#1A1A1A] dark:text-[#E8E4DE]">
            Explore
          </h2>
        </div>

        <ul className="space-y-4 list-none p-0 m-0">
          <li>
            <div>
              <a href="mailto:pj@livfwomen.com" className="index-category-link">
                Work with me
              </a>
              <span className="text-[#6E6B65] dark:text-[#9E9A92]"> — Advisory for hospitals and clinic networks</span>
            </div>
          </li>

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
              <span className="text-[#6E6B65] dark:text-[#9E9A92]"> — From design and product at PayPal and Change Healthcare to building LIVF.Women.</span>
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
        className="pt-14 sm:pt-16 text-[13px] sm:text-[14px] text-[#6E6B65] dark:text-[#9E9A92]"
      >
        <span>© 2026 Padmini Janaki</span>
      </motion.footer>
    </motion.div>
    </>
  );
}
