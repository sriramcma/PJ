import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

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

export default function Spoken() {
  useEffect(() => {
    document.title = 'Spoken — Padmini Janaki';
  }, []);

  return (
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
          Spoken
        </h1>
        <p className="text-[13px] sm:text-[14px] text-[#6E6B65] dark:text-[#9E9A92] tracking-[0.3px]">
          Podcasts &amp; Talks
        </p>
      </motion.header>

      <motion.section variants={blockVariants} className="space-y-3">
        <p className="text-[#6E6B65] dark:text-[#9E9A92]">
          Talks on health tech, transitioning from graphic design and PayPal product management to building Mind &amp; Mom and LIVF. Listed in reverse chronological order.
        </p>
      </motion.section>

      <motion.section variants={blockVariants} className="space-y-4">
        <ul className="space-y-3 list-none p-0 m-0">
          <li>
            <a
              href="https://www.youtube.com/watch?v=acRBe8yt7UM"
              target="_blank"
              rel="noreferrer"
              className="plain-link font-medium"
            >
              TEDxChennai Institute of Technology
            </a>
            {' '}— <em>Decoding India’s Population Puzzle</em> (2024)
          </li>

          <li>
            <a
              href="https://www.youtube.com/watch?v=Y619VtKyo8o"
              target="_blank"
              rel="noreferrer"
              className="plain-link font-medium"
            >
              DD India
            </a>
            {' '}— <em>From Pregnancy App to AI Fertility Chain: LIVF Redefines Motherhood</em> (2026)
          </li>

          <li>
            <a
              href="https://www.youtube.com/watch?v=rSHgRbg4lss"
              target="_blank"
              rel="noreferrer"
              className="plain-link font-medium"
            >
              Dare to Begin
            </a>
            {' '}— <em>From Designer to Million-dollar Health Tech Founder</em> (2026)
          </li>

          <li>
            <a
              href="https://www.youtube.com/watch?v=zs5RDaI-3RM"
              target="_blank"
              rel="noreferrer"
              className="plain-link font-medium"
            >
              Dear Women
            </a>
            {' '}— <em>லட்சம் சம்பளத்தை விட்டு BUSINESS.. IVF துறையில் பத்மினி சாதித்தது</em> (2024)
          </li>

          <li>
            <a
              href="https://www.youtube.com/watch?v=rFzsR60J4ZE"
              target="_blank"
              rel="noreferrer"
              className="plain-link font-medium"
            >
              Sugat Nayak
            </a>
            {' '}— <em>From PM to CEO: The Ultimate Product Manager Career Path</em> (2024)
          </li>

          <li>
            <a
              href="https://www.youtube.com/watch?v=joVNLEZ6wRA"
              target="_blank"
              rel="noreferrer"
              className="plain-link font-medium"
            >
              The Founder’s Foyer
            </a>
            {' '}— <em>Startup teams—vision, culture &amp; values</em> (2022)
          </li>

          <li>
            <a
              href="https://www.youtube.com/watch?v=x7WmhMeC10"
              target="_blank"
              rel="noreferrer"
              className="plain-link font-medium"
            >
              Tamilpreneur
            </a>
            {' '}— <em>Singapenney Padmini Janaki | CEO – Mind and Mom</em> (2021)
          </li>

          <li>
            <a
              href="https://www.youtube.com/watch?v=1CMAQv9o4YE"
              target="_blank"
              rel="noreferrer"
              className="plain-link font-medium"
            >
              Behindwoods
            </a>
            {' '}— <em>Workplace wellness and pregnancy care</em> (2021)
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
  );
}
