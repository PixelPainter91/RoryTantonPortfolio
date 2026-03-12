// Bootcamp assignment screenshots & video
import assign01 from '../assets/01assignment.png';
import assign02 from '../assets/02assignment.png';
import assign03 from '../assets/03assigment.png';
import assign05 from '../assets/05assignment.png';
import assign05page from '../assets/05assignmnetmypage.png';
import assign05auth from '../assets/05authusingjwtorclerk.png';
import assign06 from '../assets/06assignment.png';
import assign06chat from '../assets/06assignmentchat.png';
import assign07vid from '../assets/07assignmentspookinggalleryvid.mp4';

// Piece of Mind screenshots
import pom0 from '../assets/POM0.png';
import pom01 from '../assets/POM0.1.png';
import pom02 from '../assets/POM0.2.png';
import pom03 from '../assets/POM0.3.png';
import pom1 from '../assets/POM1.png';
import pom2 from '../assets/POM2.png';
import pom3 from '../assets/POM3.png';
import pom4 from '../assets/POM4.png';
import pom5 from '../assets/POM5.png';
import pom51 from '../assets/POM5.1.png';

// Nail Wardrobe screenshots
import nw1 from '../assets/1.1.png';
import nw2 from '../assets/1.2.png';
import nw3 from '../assets/1.3.png';
import nw4 from '../assets/1.4.png';
import nw5 from '../assets/1.41.png';
import nw6 from '../assets/1.5.png';
import nw7 from '../assets/1.6.png';
import nw8 from '../assets/1.7.png';
import nw9 from '../assets/1.8.png';
import nwBrainstorm from '../assets/1.nailwardrobbrainstoming.png';
import nwButtons from '../assets/NailWardrobbuttons.png';

// Technical work screenshot
import technicalWork from '../assets/technicalwork.png';

// Gains & Guilds screenshots
import gg1 from '../assets/2.png';
import gg2 from '../assets/2.1.png';
import gg3 from '../assets/2.2.png';
import gg4 from '../assets/2.3.png';
import gg5 from '../assets/2.4.png';

export const caseStudies = [
  {
    number: "01",
    title: "Piece of Mind",
    role: "Solo Developer · UI/UX Designer · Product Owner",
    description:
      "Designed and built a full AI-first mobile app in three days using React, Vite and Capacitor. Owned the full product lifecycle from concept and Figma design through to live deployment on Google Play, using Claude Code as a structured engineering partner throughout.",
    tags: ["UI/UX DESIGN", "MOBILE APP", "REACT", "FIGMA", "CLAUDE CODE", "AI-FIRST"],
    highlightTag: "UI/UX DESIGN",
    deliverables: [
      "Anxiety-first UI/UX design — no timers, no pressure, soft colour palette",
      "Dark and light mode",
      "Box breathing built into gameplay",
      "Scrolling mantras for anxious moments",
      "Live Google Play release",
      "592 installs in 3 days from a £25.30 ad spend at £0.04 cost per install",
    ],
    link: "https://play.google.com/store/apps/details?id=com.pixelpaint.pieceofmind&pcampaignid=web_share",
    linkLabel: "View on Google Play →",
    image: pom0,
    images: [pom0, pom01, pom02, pom03, pom1, pom2, pom3, pom4, pom5, pom51],
    imageAlt: "Piece of Mind App UI",
    reverseLayout: false,
  },
  {
    number: "02",
    title: "Nail Wardrobe",
    role: "Product Owner · UI/UX Designer · Project Lead",
    description:
      "Conceptualised and shipped a full mobile app from zero — user research, Figma designs, developer handoff through to Google Play release. Managed the full product lifecycle while maintaining design quality at every stage.",
    tags: ["UI/UX Design", "Mobile App", "Figma", "Flutter"],
    highlightTag: "UI/UX Design",
    deliverables: [
      "User research & persona development",
      "End-to-end Figma prototype",
      "Design system & component library",
      "Developer handoff documentation",
      "Live Google Play release",
    ],
    link: "https://play.google.com/store/apps/details?id=com.pixelpainter.nailwardrobe&hl=en-US",
    linkLabel: "View on Google Play →",
    image: nw1,
    images: [nw1, nw2, nw3, nw4, nw5, nw6, nw7, nw8, nw9, nwBrainstorm, nwButtons],
    imageAlt: "Nail Wardrobe UI Design",
    reverseLayout: false,
  },
  {
    number: "03",
    title: "Gains & Guilds",
    role: "Full Stack Developer · UI Designer · Co-Founder",
    description:
      "A gamified fitness RPG where real gym sessions directly fuel in-game character progression. XP earned lifting weights powers your character — and crucially, core stats like Strength, Stamina, and Vitality can only be raised by actually training. No shortcuts. Built production-ready with Next.js, Supabase, and Clerk, featuring professionally designed 8-week progressive overload programs and a full class system: Barbarian, Rogue, Paladin.",
    tags: ["Full Stack", "Next.js", "Supabase", "RPG / Fitness"],
    highlightTag: "Full Stack",
    deliverables: [
      "Gamified XP system tied to real gym data",
      "8-week progressive overload programs",
      "RPG class system (Barbarian, Rogue, Paladin)",
      "Next.js + Supabase + Clerk auth stack",
      "Production-deployed web application",
    ],
    link: "https://github.com/PixelPainter91",
    linkLabel: "View GitHub →",
    image: gg5,
    images: [gg5, gg1, gg2, gg3, gg4],
    imageAlt: "Gains & Guilds — Gamified Fitness RPG",
    reverseLayout: true,
  },
  {
    number: "04",
    title: "Web Applications",
    role: "Full Stack Developer · UI Designer",
    description:
      "Over 12 weeks with Tech Educators I built full-stack web applications from the ground up — progressing from HTML & CSS fundamentals through to React, authentication with JWT and Clerk, real-time chat, and a full gallery app. Each assignment pushed the stack further, covering Node.js backends, PostgreSQL databases, REST APIs, and modern React patterns. The pace was relentless and the work was real.",
    tags: ["Frontend Dev", "React", "Next.js", "Full Stack"],
    highlightTag: "Frontend Dev",
    deliverables: [
      "12-week intensive bootcamp with Tech Educators",
      "Figma → React component mapping",
      "Next.js with server-side rendering",
      "PostgreSQL + Node.js backends",
      "JWT & Clerk authentication",
      "Real-time chat & gallery applications",
    ],
    link: "https://github.com/PixelPainter91",
    linkLabel: "View GitHub →",
    image: assign01,
    images: [assign01, assign02, assign03, assign05, assign05page, assign05auth, assign06, assign06chat],
    video: assign07vid,
    imageAlt: "Tech Educators Bootcamp Assignment",
    reverseLayout: false,
  },
  {
    number: "05",
    title: "Strategic Weapons Systems + Engineering Surveyor",
    role: "Weapons Engineer · Electrical and Electronic Systems + Mechanical",
    description:
      "Led safety-critical technical operations and authored standard operating procedures for complex weapons systems. This experience built my foundation in systems thinking, rigorous documentation, and high-stakes decision-making — skills that directly inform how I approach UX today.",
    tags: ["Systems Design", "Royal Navy", "Documentation"],
    highlightTag: "Systems Design",
    deliverables: [
      "Complex systems documentation (SOPs)",
      "Fault-finding under pressure",
      "Cross-functional team coordination",
      "Safety-first process design",
    ],
    link: null,
    linkLabel: null,
    image: technicalWork,
    images: [technicalWork],
    imageAlt: "Technical Systems Work",
    reverseLayout: true,
  },
];


export const figmaEmbeds = [
  {
    title: "Nail Wardrobe — UI Design",
    embedUrl: null, // paste my Figma share link here when ready
    isPlaceholder: true,
    placeholderIcon: "🎨",
    placeholderTitle: "Nail Wardrobe — Prototype Coming Soon",
    placeholderDesc:
      "My full Figma prototype for Nail Wardrobe will be embedded here — pan, zoom, and explore the designs directly in the page.",
  },
  {
    title: "Web App — Component Library",
    embedUrl: null, // paste my Figma share link here when ready
    isPlaceholder: true,
    placeholderIcon: "🧩",
    placeholderTitle: "Design System — Coming Soon",
    placeholderDesc:
      "My component library and design system will live here — a full look at how I approach systematic, scalable UI.",
  },
];

// Skills
export const skillsData = {
  "Design & UX": {
    isPrimary: true,
    items: [
      { label: "Figma", primary: true },
      { label: "UI Design", primary: true },
      { label: "Prototyping", primary: true },
      { label: "User Research", primary: true },
      { label: "Design Systems", primary: false },
      { label: "Wireframing", primary: false },
      { label: "User Flows", primary: false },
      { label: "Responsive Design", primary: false },
    ],
  },
  "Frontend Development": {
    isPrimary: false,
    items: [
      { label: "React", primary: true },
      { label: "Next.js", primary: true },
      { label: "JavaScript (ES6+)", primary: true },
      { label: "HTML5", primary: false },
      { label: "CSS3", primary: false },
      { label: "Tailwind CSS", primary: false },
    ],
  },
  "Backend & Tools": {
    isPrimary: false,
    items: [
      { label: "Node.js", primary: true },
      { label: "PostgreSQL", primary: true },
      { label: "Supabase", primary: false },
      { label: "Firebase", primary: false },
      { label: "REST APIs", primary: false },
      { label: "Git/GitHub", primary: false },
    ],
  },
};

// Timeline
export const timelineData = [
  { year: "2014 – 2020", role: "Royal Navy Weapons Engineer", icon: "⚓" },
  { year: "2020 – 2023", role: "Engineering Student", icon: "🎓" },
  { year: "2023 – 2024", role: "Engineering Surveyor", icon: "🔍" },
  { year: "2024 – Present", role: "UI/UX Designer & Developer", icon: "🎨" },
];

// Contact
export const contactInfo = {
  email: "rory_tanton@hotmail.com",
  phone: "07939 920 817",
  github: "https://github.com/PixelPainter91",
  linkedin: "https://www.linkedin.com/in/rory-tanton-8aa034101/",
};

// Design process steps — shown in the hero panel
export const designProcess = [
  {
    num: "01",
    title: "Discover & Research",
    desc: "User interviews, competitive analysis, problem framing",
  },
  {
    num: "02",
    title: "Define & Ideate",
    desc: "User flows, information architecture, wireframes",
  },
  {
    num: "03",
    title: "Design & Prototype",
    desc: "High-fidelity Figma designs, interactive prototypes",
  },
  {
    num: "04",
    title: "Build & Iterate",
    desc: "React, Next.js — pixel-perfect implementation",
  },
];
