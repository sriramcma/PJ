import { MediaItem } from '../types';

export const PADMINI_VERIFIED_PROFILE = {
  name: "Padmini Janaki",
  headline: "Founder & CEO, Livf.Women | Co-founder, Mind & Mom | Author & Health-Tech Innovator",
  location: "Chennai, Tamil Nadu, India",
  coreIdentity: "Chennai-based health-tech entrepreneur, author of 'Myths & Millennials', former PayPal product manager, and founder/CEO of Mind & Mom and Livf.Women (LIVF Fertility & Women’s Healthcare).",
  bioSummary: "Padmini Janaki is a Chennai-based health-tech founder who transitioned from product design and product management at PayPal to building AI-led maternal and reproductive healthcare. Her platforms—Mind & Mom and its clinical extension Livf.Women—have guided over 200,000 women across fertility, pregnancy, and reproductive health.",
  verifiedRoles: [
    "Founder & CEO, Livf.Women / LIVF Fertility & Women’s Healthcare (Chennai)",
    "Co-founder & CEO, Mind & Mom (Founded 2021)",
    "Former Product Manager & UX Designer, PayPal",
    "Author, 'Myths & Millennials' (Published 2019/2021)",
    "Speaker, TEDxChennaiInstituteOfTechnology (2024)"
  ],
  verifiedAchievements: [
    "World Economic Forum Young Global Leader",
    "BW 40 Under 40 (BusinessWorld)",
    "INSEAD Singapore Impact Award",
    "TiE Chennai Entrepreneur of the Year",
    "Women in Product India",
    "Featured by NITI Aayog Frontier Tech, Femina, The Better India, and DD India"
  ],
  officialProfiles: {
    linkedin: "https://www.linkedin.com/in/pjanaki",
    instagram: "https://www.instagram.com/padminijanaki/",
    email: "pj@livfwomen.com"
  }
};

export const VERIFIED_MEDIA_DATABASE: MediaItem[] = [
  // 1. News & Long-form Features
  {
    id: "media-niti-aayog",
    title: "Mind & Mom’s AI Revolution in Women’s Healthcare",
    category: "News",
    platform: "NITI Aayog Frontier Tech",
    url: "https://frontiertech.niti.gov.in/story/ai-driven-maternal-healthcare-innovation-transforming-motherhood-experiences-in-india/",
    date: "2025-08-06",
    summary: "Profiles Mind & Mom as a Chennai startup founded by Padmini, describing AI-led maternal and fertility support impacting 200,000+ women.",
    howFeatured: "Founder and central subject; deep dive into AI architecture and healthcare impact.",
    verificationStatus: "High",
    embeddable: false,
    requiresPermission: true
  },
  {
    id: "media-femina",
    title: "Fearless With Femina: ‘Women for Women’ Who Are Designing A Better World",
    category: "News",
    platform: "Femina",
    url: "https://www.femina.in/trending/achievers/fearless-with-femina-women-for-women-who-are-designing-a-better-world-289442.html",
    date: "2026-03-05",
    summary: "Features Padmini as Founder of Livf Fertility, highlighting AI guidance for women's health with support for over two lakh women.",
    howFeatured: "Direct feature and founder profile among leading women innovators.",
    verificationStatus: "High",
    embeddable: false,
    requiresPermission: true
  },
  {
    id: "media-tbi-longform",
    title: "This Startup Is Using AI to Make Motherhood Easier for 2 Lakh Women",
    category: "News",
    platform: "The Better India",
    url: "https://thebetterindia.com/334480/fem-tech-startup-for-women-mind-and-mom-by-padmini-janaki-pregnancy-ivf-consultation/",
    date: "2023-11-20",
    summary: "Covers Padmini’s transition from product management to founding Mind & Mom, its AI fertility tools, and IVF patient education.",
    howFeatured: "Direct profile and detailed founder narrative.",
    verificationStatus: "High",
    embeddable: false,
    requiresPermission: true
  },
  {
    id: "media-tbi-webstory",
    title: "How Livf.women Is Using AI to Support Women From Fertility to Motherhood",
    category: "News",
    platform: "The Better India",
    url: "https://thebetterindia.com/web-stories/innovation/livf-women-ai-fertility-motherhood-support-11783257",
    date: "2026-05-01",
    summary: "Web story detailing Livf.women as an AI platform founded by Padmini supporting fertility, pregnancy, and parenthood.",
    howFeatured: "Founder and venture feature.",
    verificationStatus: "High",
    embeddable: false,
    requiresPermission: true
  },
  {
    id: "media-toi-award",
    title: "Murugappa group chairman awarded (Women Entrepreneur of the Year)",
    category: "News",
    platform: "The Times of India",
    url: "https://timesofindia.indiatimes.com/murugappa-group-chairman-awarded/articleshow/94726623.cms",
    date: "2022-10-08",
    summary: "Reports that Mind & Mom founder Padmini Janaki received the Women Entrepreneur of the Year award at TiEcon Chennai.",
    howFeatured: "Award recipient recognized for entrepreneurial leadership.",
    verificationStatus: "High",
    embeddable: false,
    requiresPermission: false
  },
  {
    id: "media-dd-india",
    title: "From Pregnancy App to AI Fertility Chain: Chennai Startup LIVF Redefines Motherhood",
    category: "News",
    platform: "DD India / YouTube",
    url: "https://www.youtube.com/watch?v=Y619VtKyo8o",
    date: "2026-02-27",
    summary: "DD India national broadcast report on LIVF's evolution from Mind & Mom into an AI-powered fertility chain.",
    howFeatured: "Named entrepreneur; organization-focused televised report.",
    verificationStatus: "High",
    embeddable: true,
    requiresPermission: false
  },
  {
    id: "media-infertility-hub",
    title: "AI Startup from Chennai Supports Over 200,000 Women Through Fertility and Motherhood Challenges",
    category: "News",
    platform: "Infertility Cure Hub",
    url: "https://www.infertilitycurehub.com/archives/24862",
    date: "2026-05-02",
    summary: "Covers Padmini’s founding of Livf.women (formerly Mind & Mom) and its digital reproductive health tools.",
    howFeatured: "Founder and venture profile.",
    verificationStatus: "Medium",
    embeddable: false,
    requiresPermission: false
  },

  // 2. Public Talks & TEDx
  {
    id: "media-tedx",
    title: "Decoding India’s Population Puzzle | Padmini Janaki",
    category: "Events",
    platform: "TEDx / YouTube",
    url: "https://www.youtube.com/watch?v=acRBe8yt7UM",
    date: "2024-04-16",
    summary: "TEDx talk on India’s demographic shifts, fertility decline, women's empowerment, and accessible reproductive care.",
    howFeatured: "Keynote speaker; official TEDx upload.",
    verificationStatus: "High",
    embeddable: true,
    requiresPermission: false
  },

  // 3. Interviews & Podcasts (Video & Audio)
  {
    id: "media-tamilpreneur-yt",
    title: "Singapenney Padmini Janaki | CEO – Mind and Mom",
    category: "Podcasts",
    platform: "Tamilpreneur / YouTube",
    url: "https://www.youtube.com/watch?v=x7WmhMeC10",
    date: "2021-11-25",
    summary: "Women's Entrepreneurship Day interview covering startup challenges, family support, and femtech innovation.",
    howFeatured: "Featured podcast guest; 32-minute deep dive.",
    verificationStatus: "High",
    embeddable: true,
    requiresPermission: false
  },
  {
    id: "media-tamilpreneur-spotify",
    title: "S06E05 – Singapenney: Padmini Janaki, CEO and Founder of Mind and Mom",
    category: "Podcasts",
    platform: "Tamilpreneur / Spotify",
    url: "https://creators.spotify.com/pod/profile/tamilpreneur/episodes/S06E05---Singapenney--Padmini-Janaki--CEO-and-Founder-of-Mind-and-Mom--Femtech--Tamil-Entrepreneurship-Podcast--Tamilpreneur-e1aqd1d",
    date: "2021-11-25",
    summary: "Audio edition of the Tamilpreneur interview on building femtech from Chennai.",
    howFeatured: "Podcast guest.",
    verificationStatus: "High",
    embeddable: true,
    requiresPermission: false
  },
  {
    id: "media-founders-foyer",
    title: "Startup teams—vision, culture & values ft. Padmini Janaki",
    category: "Interviews",
    platform: "The Founder’s Foyer / YouTube",
    url: "https://www.youtube.com/watch?v=joVNLEZ6wRA",
    date: "2022-07-02",
    summary: "Discusses team-building, startup culture, legal basics, remote work, and representing Tamil Nadu at Davos.",
    howFeatured: "Interviewee; full video interview.",
    verificationStatus: "High",
    embeddable: true,
    requiresPermission: false
  },
  {
    id: "media-dear-women",
    title: "லட்சம் சம்பளத்தை விட்டு BUSINESS.. IVF துறையில் பத்மினி சாதித்தது",
    category: "Interviews",
    platform: "Dear Women / YouTube",
    url: "https://www.youtube.com/watch?v=zs5RDaI-3RM",
    date: "2024-09-20",
    summary: "Tamil interview discussing leaving corporate compensation to enter women’s health, technology, and IVF entrepreneurship.",
    howFeatured: "Interviewee; full episode.",
    verificationStatus: "High",
    embeddable: true,
    requiresPermission: false
  },
  {
    id: "media-pm-to-ceo",
    title: "From PM to CEO: The Ultimate Product Manager Career Path",
    category: "Interviews",
    platform: "Sugat Nayak / YouTube",
    url: "https://www.youtube.com/watch?v=rFzsR60J4ZE",
    date: "2024-10-15",
    summary: "Career transition guide on moving from PayPal product management to venture CEO and healthcare operator.",
    howFeatured: "Interviewee; expert guest.",
    verificationStatus: "High",
    embeddable: true,
    requiresPermission: false
  },
  {
    id: "media-dare-to-begin",
    title: "From Designer to Million-dollar Health Tech Founder",
    category: "Podcasts",
    platform: "Dare to Begin / YouTube",
    url: "https://www.youtube.com/watch?v=rSHgRbg4lss",
    date: "2026-01-23",
    summary: "In-depth conversation covering women's health, visual design roots, fertility awareness, and scaling health-tech.",
    howFeatured: "Featured guest; full episode.",
    verificationStatus: "Medium-High",
    embeddable: true,
    requiresPermission: false
  },
  {
    id: "media-behindwoods",
    title: "பெண்களுக்கு வேலை செய்யும் இடத்தில் வரும் தொல்லைகளை தடுப்பது எப்படி?",
    category: "Interviews",
    platform: "Behindwoods / YouTube",
    url: "https://www.youtube.com/watch?v=1CMAQv9o4YE",
    date: "2021-04-26",
    summary: "Identifies Padmini as author of Myths & Millennials and CEO of Mind & Mom; addresses workplace wellness and pregnancy care.",
    howFeatured: "Interviewee; full video.",
    verificationStatus: "High",
    embeddable: true,
    requiresPermission: false
  },
  {
    id: "media-onepercent-interview",
    title: "Mind and Mom CEO, Padmini Janaki, Shares Her Personal Finance and Entrepreneurial Journey",
    category: "Articles",
    platform: "1% Club",
    url: "https://www.onepercentclub.io/blog/mind-and-mom-ceo-padmini-janaki-shares-her-personal-finance-and-entrepreneurial-journey/",
    date: "2026-02-19",
    summary: "Explores personal financial planning as a founder; cites BusinessWorld 40U40 and TiEcon Woman Entrepreneur recognitions.",
    howFeatured: "Interview subject and featured member.",
    verificationStatus: "Medium-High",
    embeddable: false,
    requiresPermission: true
  },
  {
    id: "media-paperflite-event",
    title: "Padmini Janaki at Orey Kanaa event",
    category: "Events",
    platform: "Paperflite / YouTube",
    url: "https://www.youtube.com/watch?v=Bq54bLg6Yts",
    date: "2019-03-26",
    summary: "Event clip where Padmini speaks on helping her mother establish an independent business.",
    howFeatured: "Event speaker.",
    verificationStatus: "Medium-High",
    embeddable: true,
    requiresPermission: true
  },

  // 4. First-Party Announcements & Verified Community Initiatives
  {
    id: "media-livf-launch",
    title: "“Can I come and see you once, ma’am?” — Launching LIVF Chennai",
    category: "Social Media",
    platform: "LinkedIn",
    url: "https://www.linkedin.com/posts/pjanaki_livf-womenhealth-newbabyborn-activity-7219955249631875072-aJeM",
    date: "2024-07-19",
    summary: "First-person announcement of LIVF's launch as an in-person clinical extension of Mind & Mom at Perungudi, Chennai.",
    howFeatured: "Author & Founder announcement.",
    verificationStatus: "High",
    embeddable: false,
    requiresPermission: true
  },
  {
    id: "media-livf-working-women",
    title: "One Month of Livf Women Health and Fertility",
    category: "Social Media",
    platform: "LinkedIn",
    url: "https://www.linkedin.com/posts/pjanaki_its-been-a-month-we-started-livf-women-activity-7228624115643867137-Qer1",
    date: "2024-08-12",
    summary: "Founder field notes detailing LIVF's focus on clinical accessibility for working women.",
    howFeatured: "Author; first-party post.",
    verificationStatus: "High",
    embeddable: false,
    requiresPermission: true
  },
  {
    id: "media-pcod-initiative",
    title: "PCOD Awareness Month Free Clinical Consultations",
    category: "Social Media",
    platform: "LinkedIn",
    url: "https://www.linkedin.com/posts/pjanaki_not-everyone-was-happy-from-the-business-activity-7236254159706996737-5K2n",
    date: "2024-09-02",
    summary: "Community campaign offering free PCOD screenings and consultations at the Chennai clinic.",
    howFeatured: "Author & Initiative lead.",
    verificationStatus: "High",
    embeddable: false,
    requiresPermission: true
  },
  {
    id: "media-womens-circle",
    title: "Chennai Women’s Circle: Peer Support and Community Health",
    category: "Social Media",
    platform: "LinkedIn",
    url: "https://www.linkedin.com/posts/pjanaki_when-was-the-last-time-you-were-in-a-room-activity-7343141837789925378-okZs",
    date: "2025-06-24",
    summary: "Community initiative convening women in Chennai for honest conversations around health, belonging, and motherhood.",
    howFeatured: "Author & Community organizer.",
    verificationStatus: "High",
    embeddable: false,
    requiresPermission: true
  },
  {
    id: "media-stem-panel",
    title: "Women in Healthcare and STEM Discussion with Dr. Valli Arunachalam",
    category: "Events",
    platform: "LinkedIn",
    url: "https://www.linkedin.com/posts/pjanaki_technology-healthcare-womeninscience-activity-7024241072369278976-0i4h",
    date: "2023-01-26",
    summary: "Panel session with Girls in STEM focusing on women in healthcare, technology, and scientific innovation.",
    howFeatured: "Panelist & participant.",
    verificationStatus: "High",
    embeddable: false,
    requiresPermission: true
  },
  {
    id: "media-short-choice",
    title: "“எல்லாமே உங்க choice-ஆ தான் இருக்கணும்!” (Mind & Mom Short)",
    category: "Videos",
    platform: "Dear Women / YouTube Shorts",
    url: "https://www.youtube.com/shorts/78V3WxlDSUA",
    date: "Undated",
    summary: "Short-form video highlighting women's reproductive autonomy and informed choice.",
    howFeatured: "Featured speaker.",
    verificationStatus: "High",
    embeddable: true,
    requiresPermission: false
  },
  {
    id: "media-short-trying-new",
    title: "“Trying New Things” (Tamilpreneur Short)",
    category: "Videos",
    platform: "Tamilpreneur / YouTube Shorts",
    url: "https://www.youtube.com/shorts/XVa_qfgJl_s",
    date: "Undated",
    summary: "Reflections on experimentation, taking career risks, and starting a health-tech company.",
    howFeatured: "Featured speaker.",
    verificationStatus: "High",
    embeddable: true,
    requiresPermission: false
  }
];
