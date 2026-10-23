import { BlogPostItem } from '../types';
import { whyIndianWomenAgeFasterPost } from './why-indian-women-age-faster';

/**
 * =====================================================================
 * BLOG POST REGISTRY
 * =====================================================================
 * To add a new blog post regularly:
 * 1. Create a new file in `src/blog/posts/your-post-slug.tsx`
 *    following the pattern in `why-indian-women-age-faster.tsx`.
 * 2. Import your post here and add it to the `blogPosts` array below.
 * 3. The blog index (/blog) and dynamic post route (/blog/:slug)
 *    will automatically handle displaying and formatting it!
 * =====================================================================
 */

export const blogPosts: BlogPostItem[] = [
  whyIndianWomenAgeFasterPost,
  // Add more blog posts here as you write them
];

export function getAllPosts(): BlogPostItem[] {
  return blogPosts;
}

export function getPostBySlug(slug: string): BlogPostItem | undefined {
  return blogPosts.find((post) => post.slug.toLowerCase() === slug.toLowerCase());
}
