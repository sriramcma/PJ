import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { getPostBySlug, BlogSource } from '../blog';
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

interface BlogPostProps {
  slug?: string;
}

export default function BlogPost({ slug: propSlug }: BlogPostProps) {
  const { slug: routeSlug } = useParams<{ slug?: string }>();
  const activeSlug = propSlug || routeSlug || 'why-indian-women-age-faster';
  const post = getPostBySlug(activeSlug);

  if (!post) {
    return (
      <>
        <SEO
          title="Page not found — Padmini Janaki"
          pathname={`/blog/${activeSlug}`}
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
              <Link to="/blog" className="plain-link text-[14px]">
                ← Back to Blog
              </Link>
            </div>
          </motion.header>
          <motion.div variants={blockVariants} className="space-y-4 py-8">
            <h1 className="text-[23px] sm:text-[27px] font-semibold text-[#1A1A1A] dark:text-[#E8E4DE]">
              Post not found
            </h1>
            <p className="text-[#6E6B65] dark:text-[#9E9A92]">
              The requested blog post could not be found. It may have moved or the link might be mistyped.
            </p>
          </motion.div>
        </motion.div>
      </>
    );
  }

  const ContentComponent = post.Content;

  return (
    <>
      <SEO
        title={`${post.title} — Padmini Janaki`}
        description={post.excerpt}
        pathname={`/blog/${post.slug}`}
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        exit="exit"
        className="space-y-12 sm:space-y-14 text-[17px] sm:text-[19px] leading-[1.7]"
      >
      {/* Top Navigation */}
      <motion.header variants={blockVariants} className="space-y-3">
        <div>
          <Link
            to="/blog"
            className="plain-link text-[14px]"
          >
            ← Back to Blog
          </Link>
        </div>
      </motion.header>

      {/* Main Long-Form Article */}
      <motion.article variants={blockVariants} className="space-y-10 sm:space-y-12">
        {/* Article Header */}
        <header className="space-y-2 pb-2 border-b border-[#1A1A1A]/10 dark:border-[#E8E4DE]/10">
          <h1 className="text-[23px] sm:text-[27px] font-semibold text-[#1A1A1A] dark:text-[#E8E4DE] tracking-tight leading-snug">
            {post.title}
          </h1>
          <div className="text-[13px] sm:text-[14px] text-[#6E6B65] dark:text-[#9E9A92] tracking-[0.3px]">
            {post.author} · {post.readTime}
          </div>
        </header>

        {/* Dynamic Post Content Component */}
        <ContentComponent />

        {/* Semantic Footer for Sources (if present) */}
        {post.sources && post.sources.length > 0 && (
          <footer className="pt-8 border-t border-[#1A1A1A]/10 dark:border-[#E8E4DE]/10 text-[14px] sm:text-[15px] space-y-4">
            <h2 className="text-[17px] sm:text-[18px] font-medium text-[#1A1A1A] dark:text-[#E8E4DE]">
              Sources
            </h2>
            <ol className="space-y-2.5 list-decimal pl-6 text-[#6E6B65] dark:text-[#9E9A92]">
              {post.sources.map((source, index) => {
                if (typeof source === 'string' || React.isValidElement(source)) {
                  return <li key={index}>{source}</li>;
                }
                if (source && typeof source === 'object' && 'text' in source) {
                  const blogSource = source as BlogSource;
                  return (
                    <li key={index}>
                      {blogSource.link ? (
                        <a
                          href={blogSource.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="plain-link"
                        >
                          {blogSource.text}
                        </a>
                      ) : (
                        blogSource.text
                      )}
                    </li>
                  );
                }
                return <li key={index}>{source as React.ReactNode}</li>;
              })}
            </ol>

            {post.additionalNotes && post.additionalNotes.length > 0 && (
              <div className="pt-2 space-y-1.5 text-[#6E6B65] dark:text-[#9E9A92] pl-2 text-[13px] sm:text-[14px]">
                {post.additionalNotes.map((note, index) => (
                  <div key={index}>{note}</div>
                ))}
              </div>
            )}
          </footer>
        )}
      </motion.article>

      {/* Bottom Navigation */}
      <motion.footer
        variants={blockVariants}
        className="pt-10 flex items-center justify-between text-[13px] sm:text-[14px] text-[#6E6B65] dark:text-[#9E9A92]"
      >
        <Link to="/blog" className="plain-link">
          ← Back to Blog
        </Link>
        <span>© 2026 Padmini Janaki</span>
      </motion.footer>
    </motion.div>
    </>
  );
}
