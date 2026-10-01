import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiCheckCircle,
  FiCloud,
  FiCpu,
  FiExternalLink,
  FiGithub,
  FiGlobe,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiSend,
  FiServer,
  FiShield,
  FiStar,
  FiUser,
  FiZap,
} from "react-icons/fi";
import IntroLoader from "./components/IntroLoader";

const experiences = [
  {
    title: "AI & Odoo Developer",
    company: "Franchise Lab",
    logo: "/logos/companies/franchiselab.svg",
    period: "Current",
    type: "Full-time",
    focus: ["AI Chatbots", "Odoo", "APIs"],
    highlights: [
      "Built AI-driven chatbots and integrated business workflows into Odoo.",
      "Designed internal APIs to connect CRM data with NLP services.",
    ],
  },
  {
    title: "AI Intern",
    company: "Intellitech",
    logo: "/logos/companies/intellitech.svg",
    period: "Internship",
    type: "Internship",
    focus: ["NLP", "RAG", "Pipelines"],
    highlights: [
      "Developed NLP pipelines for intelligent document and query processing.",
      "Improved model quality and response relevance with RAG patterns.",
    ],
  },
  {
    title: "DevOps & AI Intern",
    company: "Franchise Lab",
    logo: "/logos/companies/franchiselab.svg",
    period: "Internship",
    type: "Internship",
    focus: ["DevOps", "Automation", "Multi-agent"],
    highlights: [
      "Automated deployment tasks and service orchestration.",
      "Prototyped multi-agent AI systems for process automation.",
    ],
  },
  {
    title: "Developer Intern",
    company: "eDirect (France)",
    logo: "/logos/companies/edirect.svg",
    period: "Internship",
    type: "Internship",
    focus: ["Backend", "APIs", "Performance"],
    highlights: [
      "Built backend features and APIs for production projects.",
      "Contributed to reliability and performance improvements.",
    ],
  },
];

const aboutHighlights = [
  { label: "AI Systems", detail: "LLMs, RAG, NLP" },
  { label: "Backend", detail: "APIs & services" },
  { label: "DevOps", detail: "Automation first" },
  { label: "Cloud", detail: "Scalable delivery" },
];

const projects = [
  {
    name: "FranchiseConnect",
    description:
      "An LLM-powered assistant using RAG to answer franchise-related questions with accurate, context-grounded responses.",
    tech: ["LLM", "RAG", "FAISS", "FastAPI", "PostgreSQL"],
    features: [
      "Document ingestion and semantic retrieval",
      "Context-aware chat answers",
      "Admin-ready API architecture",
    ],
    github: "#",
    demo: "#",
  },
  {
    name: "JobMatcher",
    description:
      "AI recommendation system that matches candidates to job offers based on profile semantics, skills, and intent.",
    tech: ["NLP", "Python", "FastAPI", "Vector Search"],
    features: [
      "Skill extraction and ranking",
      "Similarity scoring for recommendations",
      "API endpoint for recruiter dashboards",
    ],
    github: "#",
    demo: "#",
  },
  {
    name: "SmartRestaurant",
    description:
      "Automation platform for restaurant workflows using n8n and API integrations to reduce repetitive manual operations.",
    tech: ["n8n", "APIs", "Docker", "Automation"],
    features: [
      "Automated order/event handling",
      "Third-party integration flows",
      "Monitoring-friendly process design",
    ],
    github: "#",
    demo: "#",
  },
  {
    name: "MCP Agent Platform",
    description:
      "Multi-agent AI system to coordinate specialized agents for complex tasks, orchestration, and tool-based execution.",
    tech: ["Multi-agent AI", "LLMs", "MCP", "Backend APIs"],
    features: [
      "Role-based agent collaboration",
      "Task delegation and execution tracing",
      "Extensible architecture for new tools",
    ],
    github: "#",
    demo: "#",
  },
];

const skills = [
  {
    title: "AI / ML",
    items: [
      { name: "Python", logo: "/logos/tech/python.png" },
      { name: "PyTorch", logo: "/logos/tech/pytorch.png" },
      { name: "TensorFlow", logo: "/logos/tech/tensorflow.png" },
      { name: "Hugging Face", logo: "/logos/tech/huggingface.png" },
      { name: "LangChain", logo: "/logos/tech/langchain.png" },
      { name: "FAISS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Flask", logo: "/logos/tech/flask.jpg" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "Angular", logo: "/logos/tech/angular.png" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", logo: "/logos/tech/typescript.png" },
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ],
  },
  {
    title: "DevOps",
    items: [
      { name: "Docker", logo: "/logos/tech/docker.png" },
      { name: "Git", logo: "/logos/tech/git.png" },
      { name: "n8n", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", logo: "/logos/tech/mysql.png" },
    ],
  },
];

const education = [
  {
    degree: "Master in Network Security & Cloud Computing",
    level: "Master",
    focus: ["Network Security", "Cloud Architecture", "DevSecOps"],
    summary:
      "Advanced focus on secure distributed systems, cloud platforms, and defense strategies for modern infrastructures.",
    icon: FiShield,
  },
  {
    degree: "Bachelor in Computer Systems Engineering",
    level: "Bachelor",
    focus: ["Networks", "Systems", "Software Engineering"],
    summary:
      "Solid foundation in computer systems, networking, and engineering practices for scalable software and infrastructure.",
    icon: FiCloud,
  },
];

const languages = [
  { label: "Arabic", level: "Native", percent: 100, tone: "violet", code: "AR" },
  { label: "English", level: "B2", percent: 75, tone: "emerald", code: "EN" },
  { label: "French", level: "B2", percent: 75, tone: "sky", code: "FR" },
];

const quickProfile = [
  {
    title: "AI & LLM Engineering",
    detail: "RAG, NLP, chatbots, and multi-agent systems",
    icon: FiCpu,
  },
  {
    title: "Backend Architecture",
    detail: "API-first services with FastAPI, Django, Spring",
    icon: FiServer,
  },
  {
    title: "DevOps Delivery",
    detail: "Automation, Docker, and scalable pipelines",
    icon: FiZap,
  },
  {
    title: "Cloud-Native Systems",
    detail: "Resilient, production-ready infrastructure",
    icon: FiCloud,
  },
];

const quickStats = [
  { label: "Focus", value: "AI + DevOps" },
  { label: "Stack", value: "LLM / APIs" },
  { label: "Status", value: "Open to work" },
];

const chatbotSeed = [
  { role: "bot", text: "Hi, I'm Chawki's assistant. Ask about projects, skills, or contact details." },
];

const quickAnswers = {
  project:
    "Main projects: FranchiseConnect (RAG chatbot), JobMatcher (AI recommendations), SmartRestaurant (n8n automation), and MCP Agent Platform (multi-agent AI).",
  skill:
    "Chawki focuses on NLP, LLMs, RAG, FAISS, FastAPI/Django/Spring Boot, and DevOps automation.",
  contact:
    "You can email chawkijadi15@gmail.com, call 29107738, or connect via LinkedIn: www.linkedin.com/in/chawki-jadi",
  default:
    "I can help with: projects, skills, experience, and contact info. Try asking: 'What projects did he build?'",
};

const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.08 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const heroRow = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.04 },
  },
};

const heroInnerStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.02 },
  },
};

const heroAvatar = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const heroLine = {
  hidden: { opacity: 0, x: -18 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardHover = { y: -4, transition: { type: "spring", stiffness: 400, damping: 25 } };

const titleReveal = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const subtitleReveal = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] },
  },
};

const navStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
};

const navItem = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
};

const listStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
};

const listItem = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

const sectionStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.04 } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [formStatus, setFormStatus] = useState("idle");
  const [showIntro, setShowIntro] = useState(true);
  const [messages, setMessages] = useState(chatbotSeed);
  const [githubData, setGithubData] = useState({
    loading: true,
    profile: null,
    repos: [],
  });

  useEffect(() => {
    if (!showIntro) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [showIntro]);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const useDark = stored ? stored === "dark" : false;
    setDarkMode(useDark);
    document.documentElement.classList.toggle("dark", useDark);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const fetchGithub = async () => {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch("https://api.github.com/users/CHAWKI444"),
          fetch("https://api.github.com/users/CHAWKI444/repos?sort=updated&direction=desc&per_page=6"),
        ]);
        const profile = profileRes.ok ? await profileRes.json() : null;
        const reposRaw = reposRes.ok ? await reposRes.json() : [];
        const repos = Array.isArray(reposRaw)
          ? reposRaw.filter((repo) => !repo.fork).slice(0, 6)
          : [];
        setGithubData({ loading: false, profile, repos });
      } catch (error) {
        setGithubData({ loading: false, profile: null, repos: [] });
      }
    };
    fetchGithub();
  }, []);

  const navLinks = useMemo(
    () => ["about", "experience", "projects", "skills", "education", "languages", "contact"],
    []
  );

  const handleChatSubmit = (event) => {
    event.preventDefault();
    const prompt = chatInput.trim();
    if (!prompt) return;
    const lowered = prompt.toLowerCase();
    let reply = quickAnswers.default;
    if (lowered.includes("project")) reply = quickAnswers.project;
    else if (lowered.includes("skill")) reply = quickAnswers.skill;
    else if (lowered.includes("contact") || lowered.includes("email") || lowered.includes("phone")) {
      reply = quickAnswers.contact;
    }

    setMessages((prev) => [...prev, { role: "user", text: prompt }, { role: "bot", text: reply }]);
    setChatInput("");
  };

  return (
    <div className="min-h-screen bg-transparent text-slate-900 transition-colors duration-300 dark:text-slate-100">
      <AnimatePresence mode="wait">
        {showIntro && (
          <IntroLoader key="intro" onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      <motion.div
        initial={false}
        animate={
          showIntro
            ? { opacity: 0, y: 12, filter: "blur(4px)" }
            : { opacity: 1, y: 0, filter: "blur(0px)" }
        }
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: showIntro ? 0 : 0.05 }}
      >
      <motion.header
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        style={{
          backgroundColor: darkMode ? "rgb(15, 23, 42)" : "rgba(255, 255, 255, 0.97)",
        }}
        className={`sticky top-0 z-40 border-b backdrop-blur-xl ${
          darkMode
            ? "border-violet-700/40 text-slate-100 shadow-lg shadow-black/30"
            : "border-violet-200/70 text-slate-900 shadow-sm shadow-violet-500/5"
        }`}
      >
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <motion.a
            href="#home"
            className="flex items-center gap-2.5 text-lg font-bold tracking-tight"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src="/profile.jpeg"
              alt=""
              className={`h-9 w-9 rounded-full border-2 object-cover shadow-sm ${
                darkMode ? "border-violet-500/70" : "border-violet-200"
              }`}
            />
            <span className={`whitespace-nowrap ${darkMode ? "text-white" : "text-slate-900"}`}>
              Chawki{" "}
              <span
                className={`bg-gradient-to-r bg-clip-text text-transparent ${
                  darkMode
                    ? "from-violet-300 to-emerald-300"
                    : "from-violet-600 to-emerald-500"
                }`}
              >
                Jadi
              </span>
            </span>
          </motion.a>
          <motion.button
            className={`rounded-md border px-3 py-1.5 text-sm sm:hidden ${
              darkMode
                ? "border-slate-600 bg-slate-900 text-slate-100"
                : "border-slate-300 bg-white text-slate-800"
            }`}
            onClick={() => setMenuOpen((prev) => !prev)}
            type="button"
            whileTap={{ scale: 0.96 }}
          >
            Menu
          </motion.button>
          <motion.div
            className="hidden items-center gap-5 sm:flex"
            initial="hidden"
            animate="visible"
            variants={navStagger}
          >
            {navLinks.map((link) => (
              <motion.a
                key={link}
                href={`#${link}`}
                variants={navItem}
                className={`group relative text-sm capitalize transition-colors ${
                  darkMode
                    ? "text-slate-200 hover:text-emerald-300"
                    : "text-slate-700 hover:text-violet-600"
                }`}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
              >
                {link}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 w-0 rounded-full transition-all duration-300 group-hover:w-full ${
                    darkMode ? "bg-emerald-400" : "bg-violet-500"
                  }`}
                />
              </motion.a>
            ))}
            <motion.button
              type="button"
              onClick={() => setDarkMode((prev) => !prev)}
              variants={navItem}
              className={`rounded-md border px-3 py-1.5 text-xs font-semibold transition ${
                darkMode
                  ? "border-slate-600 bg-slate-900 text-slate-100 hover:border-emerald-500/60 hover:text-emerald-300"
                  : "border-slate-300 bg-white text-slate-800 hover:border-violet-400 hover:text-violet-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {darkMode ? "Light" : "Dark"}
            </motion.button>
          </motion.div>
        </nav>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className={`overflow-hidden border-t sm:hidden ${
                darkMode
                  ? "border-slate-700 bg-slate-900 text-slate-100"
                  : "border-slate-200 bg-white text-slate-900"
              }`}
              style={{
                backgroundColor: darkMode ? "rgb(15, 23, 42)" : "rgb(255, 255, 255)",
              }}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="flex flex-col gap-1 px-4 py-3"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={listStagger}
              >
                {navLinks.map((link) => (
                  <motion.a
                    key={link}
                    href={`#${link}`}
                    variants={listItem}
                    className={`rounded-lg px-2 py-2 capitalize transition ${
                      darkMode
                        ? "text-slate-200 hover:bg-slate-800"
                        : "text-slate-700 hover:bg-violet-50"
                    }`}
                    onClick={() => setMenuOpen(false)}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link}
                  </motion.a>
                ))}
                <motion.button
                  type="button"
                  variants={listItem}
                  onClick={() => setDarkMode((prev) => !prev)}
                  className={`mt-1 rounded-lg border px-3 py-2 text-left text-sm ${
                    darkMode
                      ? "border-slate-600 bg-slate-900 text-slate-100"
                      : "border-slate-300 bg-white text-slate-800"
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  Switch to {darkMode ? "light" : "dark"} mode
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <main id="home" className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={heroContainer}
          className="grid min-h-[78vh] items-center gap-8 py-16 md:grid-cols-2"
        >
          <motion.div variants={heroItem} className="flex flex-col gap-8">
            <motion.div
              variants={heroRow}
              className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6"
            >
              <motion.div
                variants={heroAvatar}
                className="relative shrink-0"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
              >
                <motion.div
                  className="absolute -inset-1 rounded-full bg-gradient-to-br from-violet-500 via-violet-400 to-emerald-400 opacity-90 blur-sm dark:opacity-70"
                  animate={{ scale: [1, 1.08, 1], opacity: [0.7, 0.95, 0.7] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden
                />
                <motion.img
                  src="/profile.jpeg"
                  alt="Chawki Jadi"
                  className="relative h-28 w-28 rounded-full border-4 border-white object-cover shadow-xl dark:border-slate-900 sm:h-32 sm:w-32 md:h-36 md:w-36"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
              <motion.div variants={heroInnerStagger} className="min-w-0 flex-1">
                <motion.p
                  variants={heroLine}
                  className="mb-3 inline-flex rounded-full border border-violet-400/40 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-300"
                >
                  AI Developer & DevOps Enthusiast
                </motion.p>
                <motion.h1 variants={heroLine} className="text-4xl font-black leading-tight sm:text-5xl">
                  Chawki Jadi
                  <span className="mt-2 block text-xl font-semibold text-slate-600 dark:text-slate-300 sm:text-2xl">
                    AI Engineer | DevOps | LLM Specialist
                  </span>
                </motion.h1>
                <motion.p variants={heroLine} className="mt-5 max-w-xl text-base text-slate-600 dark:text-slate-300">
                  Passionate about building intelligent systems using AI, LLMs, and automation.
                </motion.p>
                <motion.div variants={heroLine} className="mt-8 flex flex-wrap gap-3">
                  <motion.a
                    href="#contact"
                    className="rounded-lg bg-gradient-to-r from-violet-600 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-violet-500/25"
                    whileHover={{ scale: 1.04, boxShadow: "0 12px 40px -10px rgb(139 92 246 / 0.45)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Contact Me
                  </motion.a>
                  <motion.a
                    href="#projects"
                    className="rounded-lg border border-violet-200 bg-white px-5 py-3 text-sm font-semibold text-violet-700 dark:border-slate-600 dark:bg-slate-900/50 dark:text-slate-200"
                    whileHover={{ scale: 1.04, borderColor: "rgb(52 211 153 / 0.6)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    View Projects
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.aside
            variants={heroItem}
            className="relative overflow-hidden rounded-3xl border border-violet-200/70 bg-white p-6 shadow-xl shadow-violet-500/10 dark:border-violet-800/40 dark:bg-slate-900 dark:shadow-none"
            style={{
              backgroundColor: darkMode ? "rgb(15, 23, 42)" : "rgb(255, 255, 255)",
            }}
          >
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br from-violet-500/20 to-emerald-400/20 blur-2xl"
              aria-hidden
            />
            <div className="relative">
              <div className="mb-5 flex items-start justify-between gap-3">
                <div>
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-300">
                    <FiLayers className="h-3.5 w-3.5" aria-hidden />
                    Quick Profile
                  </div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                    What I bring to a team
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-300">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" aria-hidden />
                  Available
                </span>
              </div>

              <div className="mb-5 grid grid-cols-3 gap-2">
                {quickStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-slate-200/80 bg-slate-50/90 px-2.5 py-3 text-center dark:border-slate-700 dark:bg-slate-800/70"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </p>
                    <p className="mt-1 text-xs font-bold text-slate-800 dark:text-slate-100">{stat.value}</p>
                  </div>
                ))}
              </div>

              <ul className="space-y-2.5">
                {quickProfile.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.li
                      key={item.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.08 + i * 0.06, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="group flex items-start gap-3 rounded-2xl border border-transparent bg-slate-50/80 p-3 transition hover:border-violet-200 hover:bg-white dark:bg-slate-800/50 dark:hover:border-violet-700/60 dark:hover:bg-slate-800"
                    >
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-emerald-500 text-white shadow-sm shadow-violet-500/20">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-slate-900 dark:text-white">
                          {item.title}
                        </span>
                        <span className="mt-0.5 block text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                          {item.detail}
                        </span>
                      </span>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </motion.aside>
        </motion.section>

        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={sectionStagger}
          className="py-12"
        >
          <motion.div variants={titleReveal} className="mb-2 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-100 text-violet-700 dark:bg-violet-950/70 dark:text-violet-300">
              <FiUser className="h-5 w-5" aria-hidden />
            </span>
            <h2 className="section-title !mb-0">About Me</h2>
          </motion.div>
          <motion.p
            variants={subtitleReveal}
            className="mb-6 max-w-2xl text-sm text-slate-500 dark:text-slate-400"
          >
            A concise look at my background, mindset, and the problems I like to solve.
          </motion.p>

          <motion.div
            variants={cardReveal}
            className="overflow-hidden rounded-3xl border border-violet-200/70 bg-white shadow-lg shadow-violet-500/5 dark:border-violet-800/40 dark:bg-slate-900 dark:shadow-none"
            style={{
              backgroundColor: darkMode ? "rgb(15, 23, 42)" : "rgb(255, 255, 255)",
            }}
          >
            <div className="grid gap-0 lg:grid-cols-12">
              <div className="border-b border-slate-200/80 p-6 sm:p-8 dark:border-slate-700/80 lg:col-span-8 lg:border-b-0 lg:border-r">
                <p className="text-[11px] font-bold uppercase tracking-wider text-violet-600 dark:text-violet-300">
                  Profile
                </p>
                <p className="mt-3 text-base leading-relaxed text-slate-700 dark:text-slate-200 sm:text-[17px] sm:leading-8">
                  I come from a Computer Systems Engineering background (Networks & Systems), with
                  hands-on experience in AI, DevOps, and backend development. I am strongly interested
                  in Cloud, AI, and scalable systems that transform business workflows.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  I enjoy turning complex requirements into reliable products — from RAG assistants and
                  automation flows to clean APIs ready for production.
                </p>
              </div>
              <div className="bg-gradient-to-br from-violet-50/80 via-white to-emerald-50/50 p-6 sm:p-8 dark:from-violet-950/30 dark:via-slate-900 dark:to-emerald-950/20 lg:col-span-4">
                <p className="mb-4 text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                  Core strengths
                </p>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {aboutHighlights.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/80 bg-white/80 px-3.5 py-3 dark:border-slate-700/70 dark:bg-slate-800/60"
                    >
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.label}</p>
                      <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={sectionStagger}
          className="py-12"
        >
          <motion.div variants={titleReveal} className="mb-2 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-300">
              <FiBriefcase className="h-5 w-5" aria-hidden />
            </span>
            <h2 className="section-title !mb-0">Experience</h2>
          </motion.div>
          <motion.p
            variants={subtitleReveal}
            className="mb-6 max-w-2xl text-sm text-slate-500 dark:text-slate-400"
          >
            Roles across AI engineering, backend delivery, and DevOps automation.
          </motion.p>

          <div className="relative space-y-4">
            <div
              className="pointer-events-none absolute left-[1.35rem] top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-violet-400 via-emerald-400/70 to-transparent sm:block"
              aria-hidden
            />
            {experiences.map((item, expIndex) => (
              <motion.article
                key={`${item.title}-${item.company}`}
                className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:shadow-lg hover:shadow-violet-500/10 sm:ml-0 sm:p-6 dark:border-slate-700 dark:bg-slate-900 dark:hover:shadow-none"
                style={{
                  backgroundColor: darkMode ? "rgb(15, 23, 42)" : "rgb(255, 255, 255)",
                }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: expIndex * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-violet-500 to-emerald-500 opacity-80" />
                <div className="mb-3 flex flex-wrap items-start justify-between gap-3 pl-2">
                  <div className="flex min-w-0 items-start gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-600 dark:bg-slate-800">
                      <img
                        src={item.logo}
                        alt={`${item.company} logo`}
                        className="h-8 w-8 object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
                      <p className="text-sm font-medium text-violet-700 dark:text-violet-300">{item.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                        item.period === "Current"
                          ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                          : "bg-violet-500/10 text-violet-700 dark:text-violet-300"
                      }`}
                    >
                      {item.period}
                    </span>
                    <span className="rounded-full border border-slate-200 px-3 py-1 text-[11px] font-semibold text-slate-600 dark:border-slate-600 dark:text-slate-300">
                      {item.type}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 pl-2 text-sm text-slate-600 dark:text-slate-300">
                  {item.highlights.map((point) => (
                    <li key={point} className="flex gap-2.5">
                      <FiCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2 pl-2">
                  {item.focus.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          <motion.p
            variants={subtitleReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-5 rounded-2xl border border-emerald-200/70 bg-emerald-50/70 px-4 py-3 text-sm text-emerald-800 dark:border-emerald-800/40 dark:bg-emerald-950/30 dark:text-emerald-200"
          >
            Achievements include building chatbots, RAG systems, automation flows, APIs, and multi-agent systems.
          </motion.p>
        </motion.section>

        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={sectionStagger}
          className="py-12"
        >
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <motion.h2 variants={titleReveal} className="section-title !mb-0">
              Projects
            </motion.h2>
            <motion.p
              variants={subtitleReveal}
              className="max-w-md text-sm text-slate-500 dark:text-slate-400"
            >
              Featured work in LLM systems, automation, and multi-agent design — bento layout for quick scanning.
            </motion.p>
          </div>
          <div className="grid gap-4 lg:grid-cols-6 lg:grid-rows-[auto_auto]">
            {projects.map((project, index) => {
              const featured = index === 0;
              return (
                <motion.article
                  key={project.name}
                  initial={{ opacity: 0, y: 24, rotateX: 4 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{
                    y: -6,
                    transition: { type: "spring", stiffness: 320, damping: 20 },
                  }}
                  style={{ transformPerspective: 1200 }}
                  className={
                    featured
                      ? "section-card relative overflow-hidden border-violet-300/50 bg-gradient-to-br from-white via-violet-50/80 to-emerald-50/50 p-6 shadow-lg shadow-violet-500/10 dark:border-violet-800/50 dark:from-slate-900 dark:via-violet-950/40 dark:to-emerald-950/20 lg:col-span-6"
                      : "section-card flex flex-col border-slate-200/90 p-5 dark:border-slate-700 lg:col-span-2"
                  }
                >
                  {featured && (
                    <motion.div
                      className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl dark:bg-violet-500/10"
                      aria-hidden
                      animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.85, 0.5] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  )}
                  <div className="relative flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="flex max-w-2xl flex-1 flex-col">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={
                            featured
                              ? "flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 text-sm font-bold text-white dark:bg-violet-500"
                              : "flex h-8 w-8 items-center justify-center rounded-lg bg-slate-200 text-xs font-bold text-slate-700 dark:bg-slate-700 dark:text-slate-200"
                          }
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {featured && (
                          <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
                            Featured
                          </span>
                        )}
                      </div>
                      <h3 className={featured ? "mt-3 text-2xl font-black tracking-tight" : "mt-3 text-lg font-bold"}>
                        {project.name}
                      </h3>
                      <p className={"mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300 " + (featured ? "md:text-base" : "")}>
                        {project.description}
                      </p>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 md:items-end">
                      <motion.a
                        href={project.github}
                        className="inline-flex items-center justify-center rounded-lg border border-violet-200 px-4 py-2 text-xs font-semibold text-violet-700 dark:border-violet-800 dark:text-violet-300"
                        whileHover={{ scale: 1.05, borderColor: "rgb(167 139 250)" }}
                        whileTap={{ scale: 0.97 }}
                      >
                        GitHub
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white"
                        whileHover={{ scale: 1.05, boxShadow: "0 8px 24px -6px rgb(16 185 129 / 0.55)" }}
                        whileTap={{ scale: 0.97 }}
                      >
                        Live demo
                      </motion.a>
                    </div>
                  </div>
                  <div className="relative mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tag, ti) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: ti * 0.05, type: "spring", stiffness: 400, damping: 22 }}
                        whileHover={{ y: -2, scale: 1.05 }}
                        className="rounded-full border border-violet-200/80 bg-white/80 px-2.5 py-1 text-[11px] font-medium text-violet-700 dark:border-violet-800/60 dark:bg-slate-800/80 dark:text-violet-200"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <ul className="relative mt-4 grid gap-2 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-2 text-xs text-slate-600 dark:text-slate-300 sm:text-sm"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          id="github"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionStagger}
          className="py-12"
        >
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <motion.div variants={titleReveal} className="mb-2 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                  <FiGithub className="h-5 w-5" aria-hidden />
                </span>
                <h2 className="section-title !mb-0">GitHub</h2>
              </motion.div>
              <motion.p
                variants={subtitleReveal}
                className="max-w-xl text-sm text-slate-500 dark:text-slate-400"
              >
                Latest public repositories, synced live from GitHub. Click any card to open the project.
              </motion.p>
            </div>
            <motion.a
              variants={cardReveal}
              href="https://github.com/CHAWKI444?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-violet-700 dark:bg-white dark:text-slate-900 dark:hover:bg-emerald-300"
            >
              <FiGithub className="h-4 w-4" aria-hidden />
              Voir tous les projets
              <FiExternalLink className="h-3.5 w-3.5" aria-hidden />
            </motion.a>
          </div>

          <motion.div
            variants={cardReveal}
            className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-lg shadow-violet-500/5 dark:border-slate-700 dark:bg-slate-900 dark:shadow-none"
            style={{
              backgroundColor: darkMode ? "rgb(15, 23, 42)" : "rgb(255, 255, 255)",
            }}
          >
            {githubData.loading ? (
              <div className="flex items-center gap-3 p-8 text-sm text-slate-500 dark:text-slate-400">
                <motion.span
                  className="h-4 w-4 rounded-full border-2 border-violet-500 border-t-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.85, repeat: Infinity, ease: "linear" }}
                  aria-hidden
                />
                Chargement du profil GitHub…
              </div>
            ) : (
              <>
                <div className="flex flex-col gap-5 border-b border-slate-200/80 p-6 sm:flex-row sm:items-center sm:justify-between dark:border-slate-700/80">
                  <div className="flex items-center gap-4">
                    <img
                      src={githubData.profile?.avatar_url || "/profile.jpeg"}
                      alt="GitHub avatar"
                      className="h-14 w-14 rounded-2xl border border-slate-200 object-cover dark:border-slate-600"
                    />
                    <div>
                      <p className="text-lg font-bold text-slate-900 dark:text-white">
                        {githubData.profile?.name || "Chawki Jadi"}
                      </p>
                      <a
                        href="https://github.com/CHAWKI444"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-700 hover:underline dark:text-violet-300"
                      >
                        @{githubData.profile?.login || "CHAWKI444"}
                        <FiExternalLink className="h-3.5 w-3.5" aria-hidden />
                      </a>
                      {githubData.profile?.bio ? (
                        <p className="mt-1 max-w-md text-xs text-slate-500 dark:text-slate-400">
                          {githubData.profile.bio}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 sm:min-w-[280px]">
                    {[
                      { label: "Repos", value: githubData.profile?.public_repos ?? "—" },
                      { label: "Followers", value: githubData.profile?.followers ?? "—" },
                      { label: "Following", value: githubData.profile?.following ?? "—" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-2xl border border-slate-200/80 bg-slate-50 px-3 py-2.5 text-center dark:border-slate-700 dark:bg-slate-800/70"
                      >
                        <p className="text-base font-black text-slate-900 dark:text-white">{stat.value}</p>
                        <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                      Projets récents
                    </p>
                    <a
                      href="https://github.com/CHAWKI444?tab=repositories&type=source&sort=updated"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:underline dark:text-emerald-300"
                    >
                      Nouveaux sur GitHub
                      <FiExternalLink className="h-3 w-3" aria-hidden />
                    </a>
                  </div>

                  {githubData.repos.length > 0 ? (
                    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                      {githubData.repos.map((repo, ri) => (
                        <motion.a
                          key={repo.id}
                          href={repo.html_url}
                          target="_blank"
                          rel="noreferrer"
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: ri * 0.05, duration: 0.35 }}
                          className="group flex h-full flex-col rounded-2xl border border-slate-200/90 bg-slate-50/80 p-4 transition hover:-translate-y-0.5 hover:border-violet-300 hover:bg-white hover:shadow-md dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-violet-600 dark:hover:bg-slate-800"
                        >
                          <div className="mb-2 flex items-start justify-between gap-2">
                            <p className="text-sm font-bold text-slate-900 group-hover:text-violet-700 dark:text-white dark:group-hover:text-violet-300">
                              {repo.name}
                            </p>
                            <FiExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400 transition group-hover:text-violet-500" aria-hidden />
                          </div>
                          <p className="mb-4 flex-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                            {repo.description || "Repository GitHub — ouvrir pour voir le code et les mises à jour."}
                          </p>
                          <div className="mt-auto flex flex-wrap items-center gap-3 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                            <span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 dark:bg-slate-900">
                              {repo.language || "Code"}
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <FiStar className="h-3 w-3 text-amber-500" aria-hidden />
                              {repo.stargazers_count}
                            </span>
                            {repo.updated_at ? (
                              <span>
                                Updated{" "}
                                {new Date(repo.updated_at).toLocaleDateString("en-GB", {
                                  day: "2-digit",
                                  month: "short",
                                  year: "numeric",
                                })}
                              </span>
                            ) : null}
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  ) : (
                    <div className="rounded-2xl border border-dashed border-slate-300 p-6 text-center dark:border-slate-600">
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Impossible de charger les repos pour le moment.
                      </p>
                      <a
                        href="https://github.com/CHAWKI444?tab=repositories"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-violet-700 hover:underline dark:text-violet-300"
                      >
                        Ouvrir GitHub
                        <FiExternalLink className="h-3.5 w-3.5" aria-hidden />
                      </a>
                    </div>
                  )}
                </div>
              </>
            )}
          </motion.div>
        </motion.section>

        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionStagger}
          className="py-12"
        >
          <motion.div variants={titleReveal} className="mb-2 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-100 text-violet-700 dark:bg-violet-950/70 dark:text-violet-300">
              <FiLayers className="h-5 w-5" aria-hidden />
            </span>
            <h2 className="section-title !mb-0">Skills</h2>
          </motion.div>
          <motion.p
            variants={subtitleReveal}
            className="mb-6 max-w-2xl text-sm text-slate-500 dark:text-slate-400"
          >
            Frameworks and tools I use to design, build, and ship AI-powered systems.
          </motion.p>

          <div className="grid gap-4 lg:grid-cols-2">
            {skills.map((group, skillIndex) => (
              <motion.article
                key={group.title}
                className="rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-6"
                style={{
                  backgroundColor: darkMode ? "rgb(15, 23, 42)" : "rgb(255, 255, 255)",
                }}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: skillIndex * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="mb-4 text-base font-bold text-slate-900 dark:text-white">{group.title}</h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {group.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-2.5 rounded-2xl border border-slate-200/80 bg-slate-50/90 px-3 py-2.5 transition hover:border-violet-300 hover:bg-white dark:border-slate-700 dark:bg-slate-800/60 dark:hover:border-violet-600 dark:hover:bg-slate-800"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-600 dark:bg-slate-900">
                        <img
                          src={skill.logo}
                          alt=""
                          className="h-5 w-5 object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="truncate text-xs font-semibold text-slate-700 dark:text-slate-200">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="education"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionStagger}
          className="py-12"
        >
          <motion.div variants={titleReveal} className="mb-2 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-100 text-violet-700 dark:bg-violet-950/70 dark:text-violet-300">
              <FiBookOpen className="h-5 w-5" aria-hidden />
            </span>
            <h2 className="section-title !mb-0">Education</h2>
          </motion.div>
          <motion.p
            variants={subtitleReveal}
            className="mb-6 max-w-2xl text-sm text-slate-500 dark:text-slate-400"
          >
            Academic background focused on secure systems, cloud infrastructure, and engineering fundamentals.
          </motion.p>

          <div className="relative grid gap-4 md:grid-cols-2">
            <div
              className="pointer-events-none absolute left-5 top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-violet-400/70 via-emerald-400/40 to-transparent md:left-1/2 md:block"
              aria-hidden
            />
            {education.map((item, eduI) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.degree}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/95 p-6 shadow-sm transition-shadow hover:shadow-lg hover:shadow-violet-500/10 dark:border-slate-700 dark:bg-slate-900/90 dark:hover:shadow-none"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: eduI * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-500 to-emerald-500 opacity-80" />
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-100 to-emerald-50 text-violet-700 dark:from-violet-950/80 dark:to-emerald-950/40 dark:text-violet-300">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="rounded-full border border-violet-200/80 bg-violet-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-violet-700 dark:border-violet-800/60 dark:bg-violet-950/50 dark:text-violet-200">
                      {item.level}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold leading-snug text-slate-900 dark:text-white">{item.degree}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.focus.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          id="languages"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionStagger}
          className="py-12"
        >
          <motion.div variants={titleReveal} className="mb-2 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-300">
              <FiGlobe className="h-5 w-5" aria-hidden />
            </span>
            <h2 className="section-title !mb-0">Languages</h2>
          </motion.div>
          <motion.p
            variants={subtitleReveal}
            className="mb-6 max-w-2xl text-sm text-slate-500 dark:text-slate-400"
          >
            Multilingual communication for collaboration across local and international teams.
          </motion.p>

          <div className="grid gap-4 sm:grid-cols-3">
            {languages.map((lang, li) => {
              const tone =
                lang.tone === "emerald"
                  ? {
                      card: "border-emerald-200/70 dark:border-emerald-800/40",
                      badge: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-200",
                      bar: "from-emerald-500 to-teal-400",
                      level: "text-emerald-700 dark:text-emerald-300",
                    }
                  : lang.tone === "sky"
                    ? {
                        card: "border-sky-200/70 dark:border-sky-800/40",
                        badge: "bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-200",
                        bar: "from-sky-500 to-indigo-400",
                        level: "text-sky-700 dark:text-sky-300",
                      }
                    : {
                        card: "border-violet-200/70 dark:border-violet-800/40",
                        badge: "bg-violet-100 text-violet-800 dark:bg-violet-950/60 dark:text-violet-200",
                        bar: "from-violet-500 to-fuchsia-400",
                        level: "text-violet-700 dark:text-violet-300",
                      };

              return (
                <motion.article
                  key={lang.label}
                  className={`rounded-3xl border bg-white/95 p-5 shadow-sm dark:bg-slate-900/90 ${tone.card}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: li * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -3, transition: { type: "spring", stiffness: 320, damping: 22 } }}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl text-sm font-black ${tone.badge}`}>
                      {lang.code}
                    </span>
                    <span className={`text-xs font-semibold uppercase tracking-wide ${tone.level}`}>{lang.level}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">{lang.label}</h3>
                  <div className="mt-4">
                    <div className="mb-1.5 flex items-center justify-between text-[11px] font-medium text-slate-500 dark:text-slate-400">
                      <span>Proficiency</span>
                      <span>{lang.percent}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${tone.bar}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15 + li * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={sectionStagger}
          className="py-12"
        >
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <motion.div variants={titleReveal} className="mb-2 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-100 text-violet-700 dark:bg-violet-950/70 dark:text-violet-300">
                  <FiMail className="h-5 w-5" aria-hidden />
                </span>
                <h2 className="section-title !mb-0">Contact</h2>
              </motion.div>
              <motion.p
                variants={subtitleReveal}
                className="max-w-lg text-sm text-slate-500 dark:text-slate-400"
              >
                Une question sur un projet ou une opportunité ? Choisissez un canal direct ou envoyez un message ci-dessous.
              </motion.p>
            </div>
          </div>

          <motion.div
            variants={cardReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border border-violet-200/70 bg-white shadow-xl shadow-violet-500/5 dark:border-violet-900/50 dark:bg-slate-900/90 dark:shadow-none"
          >
            <div className="grid lg:grid-cols-12">
              <aside className="border-b border-slate-200/90 bg-gradient-to-br from-violet-50 via-white to-emerald-50/40 p-6 sm:p-8 dark:border-slate-700/80 dark:from-violet-950/40 dark:via-slate-900 dark:to-emerald-950/20 lg:col-span-4 lg:border-b-0 lg:border-r lg:border-slate-200/80 dark:lg:border-slate-700/80">
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-600 text-white shadow-md shadow-violet-500/30 dark:bg-violet-500">
                    <FiAward className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-300">Canal direct</p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">Restons en contact</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="mailto:chawkijadi15@gmail.com"
                      className="group flex gap-4 rounded-2xl border border-white/80 bg-white/70 p-4 transition hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-500/10 dark:border-slate-700/80 dark:bg-slate-800/50 dark:hover:border-violet-700"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-950/80 dark:text-violet-300">
                        <FiMail className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="min-w-0 text-left">
                        <span className="block text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Email</span>
                        <span className="mt-0.5 block truncate text-sm font-medium text-violet-700 group-hover:underline dark:text-violet-300">
                          chawkijadi15@gmail.com
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+21629107738"
                      className="group flex gap-4 rounded-2xl border border-white/80 bg-white/70 p-4 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/10 dark:border-slate-700/80 dark:bg-slate-800/50 dark:hover:border-emerald-700"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
                        <FiPhone className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="min-w-0 text-left">
                        <span className="block text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Téléphone</span>
                        <span className="mt-0.5 block text-sm font-medium text-emerald-700 group-hover:underline dark:text-emerald-300">
                          +216 29 107 738
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/chawki-jadi"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex gap-4 rounded-2xl border border-white/80 bg-white/70 p-4 transition hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-500/10 dark:border-slate-700/80 dark:bg-slate-800/50 dark:hover:border-violet-700"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200">
                        <FiLinkedin className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="min-w-0 text-left">
                        <span className="block text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">LinkedIn</span>
                        <span className="mt-0.5 block truncate text-sm font-medium text-violet-700 group-hover:underline dark:text-violet-300">
                          /in/chawki-jadi
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </aside>

              <div className="p-6 sm:p-8 lg:col-span-8">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/90 pb-4 dark:border-slate-700/80">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Formulaire</p>
                    <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">Envoyer un message</h3>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    Réponse sous 24–48 h
                  </span>
                </div>

                {formStatus === "sent" ? (
                  <div className="flex min-h-[280px] flex-col items-center justify-center rounded-2xl border border-emerald-200/80 bg-emerald-50/70 px-6 text-center dark:border-emerald-800/50 dark:bg-emerald-950/30">
                    <FiCheckCircle className="mb-3 h-10 w-10 text-emerald-600 dark:text-emerald-400" aria-hidden />
                    <p className="text-lg font-bold text-emerald-800 dark:text-emerald-200">Message prêt à envoyer</p>
                    <p className="mt-2 max-w-sm text-sm text-emerald-700/90 dark:text-emerald-300/90">
                      Merci ! Ouvrez votre client mail pour finaliser l’envoi, ou utilisez un canal direct à gauche.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormStatus("idle")}
                      className="mt-5 rounded-xl border border-emerald-300 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50 dark:border-emerald-700 dark:bg-slate-900 dark:text-emerald-200"
                    >
                      Écrire un autre message
                    </button>
                  </div>
                ) : (
                  <form
                    className="space-y-5"
                    onSubmit={(event) => {
                      event.preventDefault();
                      const data = new FormData(event.currentTarget);
                      const name = String(data.get("name") || "").trim();
                      const email = String(data.get("email") || "").trim();
                      const message = String(data.get("message") || "").trim();
                      const subject = encodeURIComponent(`Portfolio contact — ${name}`);
                      const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\n${message}`);
                      window.location.href = `mailto:chawkijadi15@gmail.com?subject=${subject}&body=${body}`;
                      setFormStatus("sent");
                    }}
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="contact-name" className="mb-1.5 block text-xs font-semibold text-slate-600 dark:text-slate-300">
                          Nom
                        </label>
                        <input
                          id="contact-name"
                          className="input focus:ring-2 focus:ring-violet-300/60 dark:focus:ring-violet-700/50"
                          type="text"
                          name="name"
                          placeholder="Votre nom"
                          autoComplete="name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="mb-1.5 block text-xs font-semibold text-slate-600 dark:text-slate-300">
                          Email
                        </label>
                        <input
                          id="contact-email"
                          className="input focus:ring-2 focus:ring-violet-300/60 dark:focus:ring-violet-700/50"
                          type="email"
                          name="email"
                          placeholder="vous@exemple.com"
                          autoComplete="email"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="mb-1.5 block text-xs font-semibold text-slate-600 dark:text-slate-300">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        className="input min-h-[140px] resize-y focus:ring-2 focus:ring-violet-300/60 dark:focus:ring-violet-700/50"
                        name="message"
                        placeholder="Décrivez votre projet, votre offre ou votre question…"
                        rows={5}
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-3 border-t border-slate-200/80 pt-5 dark:border-slate-700/80 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        En envoyant ce formulaire, vous acceptez d’être recontacté par email.
                      </p>
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:brightness-110 sm:w-auto"
                      >
                        <FiSend className="h-4 w-4" aria-hidden />
                        Envoyer le message
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </motion.section>
      </main>

      <motion.button
        type="button"
        onClick={() => setChatOpen((prev) => !prev)}
        className="fixed bottom-5 right-5 z-50 rounded-full bg-gradient-to-r from-violet-600 to-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30"
        animate={chatOpen ? { scale: [1, 1.06, 1] } : { scale: 1 }}
        transition={chatOpen ? { duration: 2, repeat: Infinity, ease: "easeInOut" } : {}}
        whileHover={{ scale: 1.08, boxShadow: "0 20px 40px -12px rgb(139 92 246 / 0.45)" }}
        whileTap={{ scale: 0.94 }}
      >
        {chatOpen ? "Close Assistant" : "AI Assistant"}
      </motion.button>

      <AnimatePresence>
        {chatOpen && (
          <motion.div
            className="fixed bottom-20 right-5 z-50 w-[92vw] max-w-sm origin-bottom-right rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl dark:border-slate-800 dark:bg-slate-900"
            initial={{ opacity: 0, scale: 0.88, y: 16, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.9, y: 12, filter: "blur(4px)" }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
          >
            <motion.div
              className="mb-2 text-sm font-bold"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              Portfolio Assistant
            </motion.div>
            <div className="mb-3 h-56 space-y-2 overflow-y-auto rounded-lg bg-slate-100 p-3 dark:bg-slate-800">
              <AnimatePresence initial={false}>
                {messages.map((msg, index) => (
                  <motion.div
                    key={`${msg.role}-${index}`}
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 500, damping: 32 }}
                    className={`rounded-lg px-3 py-2 text-xs ${msg.role === "user" ? "ml-8 bg-violet-600 text-white" : "mr-8 bg-white text-slate-700 dark:bg-slate-700 dark:text-slate-100"}`}
                  >
                    {msg.text}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            <form onSubmit={handleChatSubmit} className="flex gap-2">
              <input
                className="input flex-1"
                placeholder="Ask about projects, skills..."
                value={chatInput}
                onChange={(event) => setChatInput(event.target.value)}
              />
              <motion.button
                className="rounded-md bg-emerald-600 px-3 text-xs font-semibold text-white"
                type="submit"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
              >
                Send
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.footer
        className="mt-8 border-t border-slate-200 py-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        © {new Date().getFullYear()} Chawki Jadi. Built with React, Tailwind, and Framer Motion.
      </motion.footer>
      </motion.div>
    </div>
  );
}

export default App;
