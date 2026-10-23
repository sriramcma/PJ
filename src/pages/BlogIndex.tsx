import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { getAllPosts } from '../blog';
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

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <SEO
        title="Blog — Padmini Janaki"
        description="Essays and field notes by Padmini Janaki on healthcare, technology and building for women."
        pathname="/blog"
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        exit="exit"
        className="space-y-12 sm:space-y-14 text-[17px] sm:text-[19px] leading-[1.7]"
      >
      {/* Header */}
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
          Blog
        </h1>
        <p className="text-[13px] sm:text-[14px] text-[#6E6B65] dark:text-[#9E9A92] tracking-[0.3px]">
          Essays and field notes
        </p>
      </motion.header>

      {/* Post List */}
      <motion.section variants={blockVariants} className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="space-y-1.5">
            <div>
              <Link
                to={`/blog/${post.slug}`}
                className="plain-link font-medium text-[18px] sm:text-[20px]"
              >
                {post.title}
              </Link>
            </div>
            <div className="text-[13px] sm:text-[14px] text-[#6E6B65] dark:text-[#9E9A92]">
              {post.author} · {post.readTime}
            </div>
            <p className="text-[15px] sm:text-[16px] text-[#6E6B65] dark:text-[#9E9A92] leading-[1.6]">
              {post.excerpt}
            </p>
          </article>
        ))}
      </motion.section>

      {/* Footer */}
      <motion.footer
        variants={blockVariants}
        className="pt-10 flex items-center justify-between text-[13px] sm:text-[14px] text-[#6E6B65] dark:text-[#9E9A92]"
      >
        <Link to="/" className="plain-link">
          ← Back to Index
        </Link>
        <span>© 2026 Padmini Janaki</span>
      </motion.footer>
    </motion.div>
    </>
  );
}
