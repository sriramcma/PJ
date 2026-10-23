# Blog Folder Structure & How to Add New Posts

This directory organizes all blog posts for Padmini Janaki's website so that new essays and field notes can be added easily and regularly.

## Directory Structure

```
src/blog/
├── types.ts                   # TypeScript interfaces (BlogPostMeta, BlogPostItem, BlogSource)
├── index.ts                   # Main export for blog utilities
├── README.md                  # This guide
└── posts/                     # All individual blog posts live here
    ├── index.ts               # Registry of all posts (ordered from newest to oldest)
    └── why-indian-women-age-faster.tsx # Example full-length post
```

---

## How to Add a New Blog Post (2 Simple Steps)

### Step 1: Create your new post file
Create a new file in `src/blog/posts/` named after your slug, for example `src/blog/posts/my-new-essay.tsx`:

```tsx
import React from 'react';
import { BlogPostItem } from '../types';

export const MyNewEssayContent: React.FC = () => {
  return (
    <>
      <div className="space-y-4">
        <p>Your opening paragraph here...</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-[19px] sm:text-[21px] font-medium text-[#1A1A1A] dark:text-[#E8E4DE]">
          Section Title
        </h2>
        <p>Paragraph content...</p>
      </section>
    </>
  );
};

export const myNewEssayPost: BlogPostItem = {
  id: 'my-new-essay',
  slug: 'my-new-essay',
  title: 'Your Article Title Here',
  author: 'Padmini Janaki',
  readTime: '6 min read',
  date: 'October 2026',
  excerpt: 'A short 1-2 sentence preview for the blog index...',
  Content: MyNewEssayContent,
  // Optional sources / references
  sources: [
    'Citation 1 details here',
  ],
};
```

### Step 2: Register it in `src/blog/posts/index.ts`
Open `src/blog/posts/index.ts` and add your post to the array:

```ts
import { myNewEssayPost } from './my-new-essay';

export const blogPosts: BlogPostItem[] = [
  myNewEssayPost, // Newest post first!
  whyIndianWomenAgeFasterPost,
];
```

### Done!
- It will automatically appear on `/blog` (Index page).
- It will automatically be readable at `/blog/my-new-essay`.
- It will automatically have proper styling, title, author meta, back links, and dark mode support.
