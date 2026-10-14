import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from 'react-router-dom';
import { AnimatePresence } from 'motion/react';

import Home from './pages/Home';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import Written from './pages/Written';
import Spoken from './pages/Spoken';
import Story from './pages/Story';
import Elsewhere from './pages/Elsewhere';

function ScrollAndHashSync() {
  const location = useLocation();
  const navigate = useNavigate();

  // Handle hash navigation compatibility (e.g. #/blog, #/story, #blog)
  useEffect(() => {
    const hash = window.location.hash.replace('#/', '').replace('#', '').trim();
    if (hash) {
      if (hash === 'blog' || hash.startsWith('blog/')) {
        navigate(`/${hash}`, { replace: true });
      } else if (['written', 'spoken', 'story', 'elsewhere'].includes(hash)) {
        navigate(`/${hash}`, { replace: true });
      }
    }
  }, [navigate]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  // Keyboard navigation: Escape key returns home
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && location.pathname !== '/') {
        navigate('/');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [location.pathname, navigate]);

  return null;
}

function MainLayout() {
  const location = useLocation();
  const isBlog = location.pathname.startsWith('/blog');

  return (
    <div className="min-h-screen bg-[#FDF8F3] dark:bg-[#121212] text-[#1A1A1A] dark:text-[#E8E4DE] px-6 sm:px-8 py-20 sm:py-28 md:py-36 antialiased selection:bg-[#C75B4A]/15 selection:text-[#1A1A1A] dark:selection:text-[#E8E4DE]">
      <main
        className={`w-full mx-auto transition-all duration-300 ${
          isBlog ? 'max-w-[680px]' : 'max-w-[620px]'
        }`}
      >
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route
              path="/blog/why-indian-women-age-faster"
              element={<BlogPost />}
            />
            <Route path="/written" element={<Written />} />
            <Route path="/spoken" element={<Spoken />} />
            <Route path="/story" element={<Story />} />
            <Route path="/elsewhere" element={<Elsewhere />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollAndHashSync />
      <MainLayout />
    </Router>
  );
}
