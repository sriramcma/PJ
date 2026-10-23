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

export default function Story() {
  return (
    <>
      <SEO
        title="Story — Padmini Janaki"
        description="From design and product at PayPal and Change Healthcare to building LIVF.Women: Padmini Janaki's story."
        pathname="/story"
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
          Story
        </h1>
        <p className="text-[13px] sm:text-[14px] text-[#6E6B65] dark:text-[#9E9A92] tracking-[0.3px]">
          Personal Essay &amp; Milestones
        </p>
      </motion.header>

      <motion.section variants={blockVariants} className="space-y-6">
        <p>
          When I was ten, my first computer arrived. It was not a famous brand. It was put together from parts of different companies, the way a grandmother stitches a quilt from old saris.
        </p>

        <p>
          Nothing in that box matched. I loved it completely.
        </p>

        <p>
          I did not know then that this little mismatched machine would stay with me for the rest of my life. In those days, everything I cared about fit on a floppy disk. Today I work with AI. The machines have grown up, and so have I. But one thing has not changed at all. Every time I meet a new machine, I am ten years old again, asking the same question: what else can you do?
        </p>

        <div className="py-3 text-center text-[#6E6B65] dark:text-[#9E9A92] tracking-[0.35em] select-none text-[15px]">
          · · ·
        </div>

        <p>
          In college, I chose art.
        </p>

        <p>
          Many people thought that was the end of my computer story. Life, as usual, had other plans. I started as a user experience designer, and by twenty-five I was a technical product manager.
        </p>

        <p>
          People still ask me how an art student ended up in technology. My answer is simple. Art teaches you to look at the person before you look at the problem. Engineers build how something works. Art asks who it is for. I needed both, and I still do.
        </p>

        <p>
          Sometimes I think I am a little like that first computer. Built from parts that were not supposed to go together. It worked anyway.
        </p>

        <div className="py-3 text-center text-[#6E6B65] dark:text-[#9E9A92] tracking-[0.35em] select-none text-[15px]">
          · · ·
        </div>

        <p>
          At PayPal India, I looked after disputes and fraud. Every line on my screen was someone's money, and someone's trust. Together, the losses we were fighting came to about 88 million dollars. That job taught me something I have carried ever since: behind every number, there is a person waiting for an answer.
        </p>

        <p>
          Work also took me around the world. I fell in love with people. How they eat, how they pray, how they argue and make up again. Some would call this anthropology. I call it paying attention.
        </p>

        <p>
          But travel teaches hard lessons too. In the Czech Republic, people looked at me and decided I was a Sri Lankan Tamil. They had written my story before I opened my mouth. Coming out of that was not easy. It taught me how heavy it is to be judged before you are known. I try never to do that to anyone.
        </p>

        <div className="py-3 text-center text-[#6E6B65] dark:text-[#9E9A92] tracking-[0.35em] select-none text-[15px]">
          · · ·
        </div>

        <p>
          Eight years ago, I turned to spirituality. It did not make my life louder. It made it quieter, and I liked the person I found in the quiet.
        </p>

        <p>
          In our tradition there is a beautiful word, <em>svadharma</em>. It means the work that is truly yours. The thing that makes you get up in the morning, excited, before the alarm. I looked for mine for a long time. It turned out to be healthcare.
        </p>

        <p>
          I spent six years running a fertility and healthcare startup in Chennai. If you want to see hope and heartbreak in the same room, sit in a fertility clinic on a Monday morning.
        </p>

        <p>
          Now I am starting again. My new company connects wearable technology with AI. The idea is simple. We build AI that sits quietly next to the clinic owner, helping them take care of patients without drowning in paperwork. And we want to listen to the body before it has to shout. When someone gets sick, the body has usually been whispering for months. We just don't have the tools to hear it.
        </p>

        <p>
          I have seen healthcare in India, the US, Sri Lanka and Nigeria. Each one is different. But everywhere, people say the same thing to me: the system is broken and doctors don't care. I don't believe that. The system is complicated. And complicated is something we can fix, patiently, one piece at a time.
        </p>

        <p>
          If health tech gets just one thing right in the next ten years, I hope it is this. Keep people well long enough that they never have to become patients.
        </p>

        <div className="py-3 text-center text-[#6E6B65] dark:text-[#9E9A92] tracking-[0.35em] select-none text-[15px]">
          · · ·
        </div>

        <p>
          If you ever see me driving with no music on, I am not bored. I am thinking. The car is where my best ideas find me. I strength train, I walk a lot, and I am happiest in silence. Some people find silence empty. For me it has always been full.
        </p>

        <p>
          And who is my best friend? People expect me to name someone from work. It is my twelve-year-old daughter. Then there is Theo, our Maltipoo, who is quite sure he runs the house.
        </p>

        <p>
          Neither of them is impressed by AI. Both of them think I should close the laptop. They are usually right.
        </p>

        <p>
          I have worked with machines all my life. But almost everything I know that matters, I learned from people. And a little from a dog.
        </p>

        <div className="pt-6 border-t border-[#1A1A1A]/10 dark:border-[#E8E4DE]/10 text-[14px] sm:text-[15px] text-[#6E6B65] dark:text-[#9E9A92] leading-[1.6]">
          <span className="text-[#1A1A1A] dark:text-[#E8E4DE] font-medium">Along the way:</span>{' '}
          World Economic Forum Young Global Leader · BW 40 Under 40 · INSEAD Singapore Impact Award · TiE Chennai Entrepreneur of the Year · Women in Product India
        </div>
      </motion.section>

      <motion.section variants={blockVariants} className="space-y-3 pt-4">
        <p className="text-[15px] sm:text-[16px] text-[#6E6B65] dark:text-[#9E9A92]">
          Explore further:
        </p>
        <div className="space-y-2 text-[16px]">
          <div>
            <Link to="/blog" className="plain-link font-medium">
              Read essays &amp; field notes →
            </Link>
          </div>
          <div>
            <Link to="/spoken" className="plain-link font-medium">
              Listen to talks on her journey →
            </Link>
          </div>
        </div>
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
