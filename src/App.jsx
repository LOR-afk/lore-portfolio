import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Braces,
  Camera,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Code2,
  Database,
  Download,
  ExternalLink,
  GraduationCap,
  LockKeyhole,
  Mail,
  Menu,
  Server,
  ShieldCheck,
  Terminal,
  X,
} from "lucide-react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Project", href: "#project" },
  { label: "More Work", href: "#more-projects" },
  { label: "Cybersecurity", href: "#cybersecurity" },
  { label: "Certification", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const skills = [
  {
    title: "Frontend Development",
    icon: Code2,
    description:
      "Tools I use to create responsive, accessible, and user-friendly interfaces.",
    tools: [
      {
        name: "HTML",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
        description:
          "Used to structure web pages, forms, navigation, and application interfaces.",
      },
      {
        name: "CSS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        description:
          "Used for styling, layouts, responsive design, animations, and visual consistency.",
      },
      {
        name: "JavaScript",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        description:
          "Used to create interactive behavior, dynamic content, and client-side functionality.",
      },
      {
        name: "Bootstrap",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
        description:
          "Used to build responsive layouts and reusable interface components efficiently.",
      },
      {
        name: "Responsive Design",
        icon: Code2,
        description:
          "Used to make interfaces adapt properly across desktop, tablet, and mobile screens.",
      },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    description:
      "Technologies I use to build application logic, APIs, authentication, and secure server-side features.",
    tools: [
      {
        name: "Laravel",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original-wordmark.svg",
        description:
          "My primary PHP framework for building secure, maintainable, and feature-rich web applications.",
      },
      {
        name: "PHP",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
        description:
          "Used for server-side processing, business logic, authentication, and database operations.",
      },
      {
        name: "REST APIs",
        icon: Braces,
        description:
          "Used to connect frontend interfaces with backend services and application data.",
      },
      {
        name: "Role-Based Access Control",
        icon: LockKeyhole,
        description:
          "Used to restrict features, pages, and information according to assigned user roles.",
      },
    ],
  },
  {
    title: "Database",
    icon: Database,
    description:
      "Tools and concepts I use to organize, retrieve, validate, and protect application data.",
    tools: [
      {
        name: "MySQL",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
        description:
          "My primary relational database for Laravel systems and web-based applications.",
      },
      {
        name: "Database Design",
        icon: Database,
        description:
          "Used to design normalized tables, relationships, primary keys, foreign keys, and constraints.",
      },
      {
        name: "SQL Queries",
        icon: Braces,
        description:
          "Used to retrieve, filter, join, update, and analyze application data.",
      },
      {
        name: "Data Management",
        icon: Database,
        description:
          "Focused on maintaining accurate, organized, secure, and reliable application records.",
      },
    ],
  },
  {
    title: "Cybersecurity",
    icon: ShieldCheck,
    description:
      "Security concepts and learning activities I use to improve my defensive and problem-solving skills.",
    tools: [
      {
        name: "PicoCTF",
        icon: Terminal,
        description:
          "Used for Capture The Flag challenges and hands-on cybersecurity problem-solving.",
      },
      {
        name: "Web Security",
        icon: ShieldCheck,
        description:
          "Focused on authentication, input validation, access control, and common web vulnerabilities.",
      },
      {
        name: "Networking",
        icon: Server,
        description:
          "Used to understand network communication, protocols, services, and security risks.",
      },
      {
        name: "Secure Coding",
        icon: LockKeyhole,
        description:
          "Development practices that reduce vulnerabilities and improve system reliability.",
      },
      {
        name: "Git",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg",
        description:
          "Used for version control, source-code tracking, collaboration, and project history.",
      },
    ],
  },
];

const projectFeatures = [
  "Appointment and service scheduling",
  "Billing and payment management",
  "Role-based user access",
  "Client and staff portals",
  "Security-focused authentication",
  "Responsive user interface",
];


const contactLinks = {
  email: "your-email@example.com",
  github: "https://github.com/LOR-afk",
  linkedin: "#",
};

const resumeUrl = "/documents/resume.pdf";

const additionalProjects = [
  {
    title: "Developer Portfolio",
    type: "React + Vite",
    status: "Live",
    description:
      "A responsive portfolio showcasing my full-stack development, cybersecurity learning, certifications, and featured project work.",
    technologies: ["React", "Vite", "Tailwind CSS", "Motion"],
    href: "https://lore-lindell-portfolio.vercel.app",
  },
  {
    title: "Cybersecurity Practice Labs",
    type: "Hands-on Learning",
    status: "Ongoing",
    description:
      "A growing collection of practical cybersecurity exercises focused on networking, web security, secure coding, and Capture The Flag problem-solving.",
    technologies: ["PicoCTF", "Networking", "Web Security", "Secure Coding"],
    href: "#cybersecurity",
  },
];


const certifications = [
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "2026",
    badge: "/certifications/intro-cybersecurity.png",
    description:
      "Foundational knowledge of cybersecurity concepts, online threats, privacy, and safe digital practices.",
    credentialUrl:
      "https://www.credly.com/badges/e4c4f82d-4646-4823-8dd9-908a613387d7/public_url",
  },
  {
    title: "Network Support and Security",
    issuer: "Cisco",
    date: "August 9, 2026",
    badge: "/certifications/network-support-and-security.png",
    description:
      "Demonstrates foundational knowledge and practical skills in network support, troubleshooting, security concepts, and protecting networked systems.",
    credentialUrl:
      "https://www.credly.com/badges/84635f67-9699-4480-8672-d5342cce74e8/public_url",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const heroRoles = [
  "Full-Stack Developer",
  "Cybersecurity Enthusiast",
  "Secure Web Builder",
];

function useTypewriter(
  words,
  typingSpeed = 85,
  deletingSpeed = 45,
  pause = 1400,
) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let delay = deleting ? deletingSpeed : typingSpeed;

    if (!deleting && displayText === currentWord) {
      delay = pause;
    }

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (displayText === currentWord) {
          setDeleting(true);
          return;
        }

        setDisplayText(currentWord.slice(0, displayText.length + 1));
      } else {
        if (displayText.length === 0) {
          setDeleting(false);
          setWordIndex((current) => (current + 1) % words.length);
          return;
        }

        setDisplayText(currentWord.slice(0, displayText.length - 1));
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [
    deleting,
    deletingSpeed,
    displayText,
    pause,
    typingSpeed,
    wordIndex,
    words,
  ]);

  return displayText;
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const value = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, value)));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return progress;
}

function SectionReveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.65, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
      {children}
    </p>
  );
}

function ToolVisual({ tool }) {
  const ToolIcon = tool.icon;

  return (
    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white p-2">
      {tool.image ? (
        <img
          src={tool.image}
          alt={`${tool.name} logo`}
          className="h-full w-full object-contain"
        />
      ) : (
        <ToolIcon className="h-9 w-9 text-sky-500" />
      )}
    </div>
  );
}

function AnimatedCounter({ value, suffix = "" }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return undefined;
    }

    let frame;
    let started = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) {
          return;
        }

        started = true;
        const start = performance.now();
        const duration = 900;

        const animate = (now) => {
          const progress = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplayValue(Math.round(value * eased));

          if (progress < 1) {
            frame = requestAnimationFrame(animate);
          }
        };

        frame = requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, [value]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [currentCertificate, setCurrentCertificate] = useState(0);
  const [certificateDirection, setCertificateDirection] = useState(1);
  const [pageReady, setPageReady] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [cursorGlow, setCursorGlow] = useState({ x: -999, y: -999 });
  const [projectPreviewOpen, setProjectPreviewOpen] = useState(false);
  const [certificatePaused, setCertificatePaused] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const typedRole = useTypewriter(heroRoles);
  const scrollProgress = useScrollProgress();
  const projectVisualRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setPageReady(true), 850);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "skills",
      "project",
      "more-projects",
      "cybersecurity",
      "certifications",
      "contact",
    ];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0.05, 0.15, 0.3],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handlePointerMove = (event) => {
      if (window.matchMedia("(pointer: fine)").matches) {
        setCursorGlow({ x: event.clientX, y: event.clientY });
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem("portfolio-theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const updateScrollTopVisibility = () => {
      setShowScrollTop(window.scrollY > 650);
    };

    updateScrollTopVisibility();
    window.addEventListener("scroll", updateScrollTopVisibility, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", updateScrollTopVisibility);
  }, []);

  useEffect(() => {
    if (certificatePaused || certifications.length < 2) {
      return undefined;
    }

    const interval = setInterval(() => {
      setCertificateDirection(1);
      setCurrentCertificate((current) => (current + 1) % certifications.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [certificatePaused]);

  const nextCertificate = () => {
    setCertificateDirection(1);
    setCurrentCertificate((current) => (current + 1) % certifications.length);
  };

  const previousCertificate = () => {
    setCertificateDirection(-1);
    setCurrentCertificate(
      (current) => (current - 1 + certifications.length) % certifications.length,
    );
  };

  const selectCertificate = (index) => {
    setCertificateDirection(index >= currentCertificate ? 1 : -1);
    setCurrentCertificate(index);
  };

  const activeCertificate = certifications[currentCertificate];

  return (
    <main
      className={`min-h-screen overflow-hidden text-slate-100 ${
        theme === "light" ? "theme-light" : ""
      }`}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[999] flex items-center justify-center bg-slate-950"
        initial={{ opacity: 1 }}
        animate={{ opacity: pageReady ? 0 : 1 }}
        transition={{ duration: 0.45 }}
        style={{ visibility: pageReady ? "hidden" : "visible" }}
      >
        <div className="text-center">
          <motion.div
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-sky-400/30 bg-sky-400/10"
            animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.06, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            <Terminal className="h-7 w-7 text-sky-300" />
          </motion.div>

          <motion.p
            className="mt-5 text-sm font-semibold uppercase tracking-[0.35em] text-sky-300"
            animate={{ opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 1.1, repeat: Infinity }}
          >
            Initializing Portfolio
          </motion.p>
        </div>
      </motion.div>

      <div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[120] h-1 bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400"
        style={{ width: `${scrollProgress}%` }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed z-[1] hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/10 blur-3xl md:block"
        style={{
          left: cursorGlow.x,
          top: cursorGlow.y,
          transition: "left 90ms linear, top 90ms linear",
        }}
      />
      <section className="cyber-grid relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(56,189,248,0.18),transparent_25%)]" />

        <motion.div
          aria-hidden="true"
          className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl"
          animate={{ x: [0, 70, 20, 0], y: [0, -30, 45, 0], scale: [1, 1.15, 0.95, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          aria-hidden="true"
          className="absolute -right-24 bottom-12 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl"
          animate={{ x: [0, -55, -10, 0], y: [0, 35, -35, 0], scale: [1, 0.92, 1.12, 1] }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/60 to-transparent"
          animate={{ y: ["8vh", "92vh"], opacity: [0, 0.8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
        />

        <nav
          className={`fixed left-1/2 top-3 z-50 flex w-[calc(100%-1.5rem)] max-w-7xl -translate-x-1/2 items-center justify-between rounded-2xl px-5 py-4 transition-all duration-300 lg:px-7 ${
            navScrolled
              ? "border border-white/10 bg-slate-950/75 shadow-2xl shadow-slate-950/40 backdrop-blur-xl"
              : "border border-transparent bg-transparent"
          }`}
        >
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-400/10">
              <Terminal className="h-5 w-5 text-sky-300" />
            </div>

            <div>
              <p className="font-bold text-white">Lore Tamayo</p>
              <p className="text-xs text-slate-400">Developer Portfolio</p>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative text-sm transition ${
                  activeSection === item.href.slice(1)
                    ? "text-sky-300"
                    : "text-slate-300 hover:text-sky-300"
                }`}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <motion.span
                    layoutId="active-nav-indicator"
                    className="absolute -bottom-2 left-0 right-0 mx-auto h-0.5 w-6 rounded-full bg-sky-300"
                  />
                )}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() =>
              setTheme((current) => (current === "dark" ? "light" : "dark"))
            }
            className="hidden rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 transition hover:border-sky-300/40 hover:text-sky-300 md:inline-flex"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>

          <button
            type="button"
            className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-200 md:hidden"
            onClick={() => setMobileMenuOpen((current) => !current)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>

          {mobileMenuOpen && (
            <div className="glass-card absolute left-0 right-0 top-16 rounded-2xl p-5 md:hidden">
              <div className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-lg px-3 py-2 text-slate-200 transition hover:bg-white/5"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>

        <div
          id="home"
          className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 pb-16 pt-28 lg:grid-cols-[1.2fr_0.8fr] lg:px-10"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.75 }}
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm text-sky-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Open to internships and opportunities
            </div>

            <motion.div
              className="mb-5 flex min-h-6 flex-wrap items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-sky-300 sm:tracking-[0.4em]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <span>BSIT Student</span>
              <span className="text-slate-600">•</span>
              <span className="inline-flex items-center">
                {typedRole}
                <motion.span
                  className="ml-1 inline-block h-4 w-[2px] bg-sky-300"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </span>
            </motion.div>

            <motion.h1
              className="max-w-4xl text-5xl font-black leading-[1.05] text-white sm:text-6xl lg:text-8xl"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              Hi, I&apos;m{" "}
              <motion.span
                className="inline-block bg-gradient-to-r from-sky-300 via-cyan-300 to-violet-400 bg-clip-text text-transparent"
                animate={{ filter: [
                  "drop-shadow(0 0 0 rgba(125,211,252,0))",
                  "drop-shadow(0 0 14px rgba(125,211,252,0.28))",
                  "drop-shadow(0 0 0 rgba(125,211,252,0))",
                ] }}
                transition={{ duration: 3.2, repeat: Infinity }}
              >
                Lore.
              </motion.span>
            </motion.h1>

            <motion.p
              className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 lg:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.38 }}
            >
              I build secure, practical, and user-friendly web applications that
              solve real-world problems.
            </motion.p>

            <motion.div
              className="mt-9 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href="#project"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-sky-300"
              >
                Explore my work
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-sky-300/50 hover:bg-white/10"
              >
                Contact me
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-sky-300/50 hover:bg-white/10"
              >
                Résumé
                <Download className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              className="mt-12 grid max-w-xl grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.62 }}
            >
              <div>
                <p className="text-2xl font-bold text-white">
                  <AnimatedCounter value={4} suffix="th" /> Year
                </p>
                <p className="mt-1 text-sm text-slate-400">BSIT Student</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">
                  <AnimatedCounter value={4} />
                </p>
                <p className="mt-1 text-sm text-slate-400">Skill Categories</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">
                  <AnimatedCounter value={2} />
                </p>
                <p className="mt-1 text-sm text-slate-400">Cisco Credentials</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-r from-sky-500/20 to-violet-500/20 blur-3xl" />

            <motion.div
              className="glass-card relative overflow-hidden rounded-[2rem]"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <p className="ml-3 text-xs text-slate-500">lore-profile.js</p>
              </div>

              <div className="space-y-4 p-7 font-mono text-sm leading-7">
                <p>
                  <span className="text-violet-300">const</span>{" "}
                  <span className="text-sky-300">developer</span> = {"{"}
                </p>

                <div className="space-y-2 pl-5">
                  <p>
                    <span className="text-slate-400">name:</span>{" "}
                    <span className="text-emerald-300">
                      &quot;Lore Lindell Tamayo&quot;
                    </span>
                    ,
                  </p>

                  <p>
                    <span className="text-slate-400">course:</span>{" "}
                    <span className="text-emerald-300">
                      &quot;BS Information Technology&quot;
                    </span>
                    ,
                  </p>

                  <p>
                    <span className="text-slate-400">focus:</span> [
                  </p>

                  <div className="pl-5 text-emerald-300">
                    <p>&quot;Full-Stack Development&quot;,</p>
                    <p>&quot;Cybersecurity&quot;,</p>
                    <p>&quot;Secure Web Applications&quot;</p>
                  </div>

                  <p>],</p>

                  <p>
                    <span className="text-slate-400">status:</span>{" "}
                    <span className="text-amber-300">
                      &quot;Always learning&quot;
                    </span>
                  </p>
                </div>

                <p>{"};"}</p>
              </div>

              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/70 to-transparent"
                animate={{ y: [0, 330, 0], opacity: [0, 0.7, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </motion.div>

          <a
            href="#about"
            aria-label="Scroll to About section"
            className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-slate-500 lg:block"
          >
            <ChevronDown className="animate-bounce" />
          </a>
        </div>
      </section>

      <section id="about" className="px-6 py-24 lg:px-10 lg:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr]"
        >
          <div>
            <SectionLabel>About Me</SectionLabel>

            <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
              Building technology that is useful, secure, and accessible.
            </h2>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-400/10">
                <GraduationCap className="text-sky-300" />
              </div>

              <div>
                <p className="font-semibold text-white">
                  PHINMA Cagayan de Oro College
                </p>
                <p className="text-sm text-slate-400">
                  Bachelor of Science in Information Technology
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-300">
            <p>
              I&apos;m <strong className="text-white">Lore Lindell Tamayo</strong>,
              a fourth-year Bachelor of Science in Information Technology student
              at PHINMA Cagayan de Oro College with a strong passion for
              full-stack web development and cybersecurity.
            </p>

            <p>
              I enjoy building secure, user-friendly, and practical web
              applications that solve real-world problems while continuously
              expanding my technical knowledge through hands-on projects and
              learning platforms.
            </p>

            <p>
              Throughout my academic journey, I have developed experience in
              Laravel, PHP, MySQL, HTML, CSS, JavaScript, Bootstrap, Git, and
              responsive web development.
            </p>

            <p>
              I believe technology should not only be functional, but also
              reliable, secure, and accessible. My goal is to begin my
              professional career as a full-stack web developer or cybersecurity
              professional.
            </p>

            <div className="flex flex-wrap gap-3 pt-3">
              {[
                "Problem Solver",
                "Continuous Learner",
                "Secure Coding",
                "Team Collaboration",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section
        id="skills"
        className="bg-slate-950/50 px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Technical Skills</SectionLabel>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="max-w-3xl text-4xl font-bold text-white sm:text-5xl">
              Technologies I use to turn ideas into working systems.
            </h2>

            <p className="max-w-md leading-7 text-slate-400">
              Select a category to view the tools and technologies I use.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.button
                  type="button"
                  key={skill.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  onClick={() => setSelectedSkill(skill)}
                  className="glass-card group rounded-3xl p-7 text-left transition hover:border-sky-400/40"
                >
                  <div className="flex items-start justify-between">
                    <motion.div
                      whileHover={{ scale: 1.08, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 320, damping: 18 }}
                      className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-400/10 transition group-hover:bg-sky-400/20"
                    >
                      <Icon className="text-sky-300" />
                    </motion.div>

                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400 transition group-hover:border-sky-400/30 group-hover:text-sky-300">
                      View tools
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-white">
                    {skill.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {skill.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {skill.tools.map((tool) => (
                      <span
                        key={tool.name}
                        className="rounded-lg bg-white/5 px-3 py-2 text-sm text-slate-300"
                      >
                        {tool.name}
                      </span>
                    ))}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      <section id="project" className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Featured Project</SectionLabel>

          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75 }}
            className="glass-card overflow-hidden rounded-[2rem]"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[360px] overflow-hidden bg-slate-950 lg:min-h-[620px]">
                <motion.div
                  aria-hidden="true"
                  className="absolute -left-16 top-24 h-64 w-64 rounded-full bg-sky-500/15 blur-3xl"
                  animate={{
                    x: [0, 70, 15, 0],
                    y: [0, -25, 40, 0],
                    scale: [1, 1.12, 0.96, 1],
                  }}
                  transition={{
                    duration: 11,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  aria-hidden="true"
                  className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl"
                  animate={{
                    x: [0, -45, 0],
                    y: [0, -25, 0],
                    scale: [1, 0.92, 1],
                  }}
                  transition={{
                    duration: 13,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.16),transparent_50%)]" />

                <motion.div
                  ref={projectVisualRef}
                  className="relative flex h-full items-center justify-center p-6 sm:p-10"
                  style={{ perspective: "1200px" }}
                  whileInView={{ y: [10, 0] }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, rotateX: 5, rotateY: -7 }}
                    whileInView={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.85, ease: "easeOut" }}
                    whileHover={{
                      scale: 1.025,
                      rotateX: -2,
                      rotateY: 3,
                      y: -8,
                    }}
                    className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-sky-950/40"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <motion.div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-br from-white/10 via-transparent to-sky-400/5"
                      animate={{ opacity: [0.25, 0.55, 0.25] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />

                    <div className="relative z-10 flex items-center gap-2 border-b border-white/10 px-4 py-3">
                      <span className="h-3 w-3 rounded-full bg-red-400" />
                      <span className="h-3 w-3 rounded-full bg-amber-400" />
                      <span className="h-3 w-3 rounded-full bg-emerald-400" />

                      <div className="ml-3 flex-1 rounded-lg bg-white/5 px-4 py-2 text-center text-xs text-slate-500">
                        WR Plumbing Admin Dashboard
                      </div>
                    </div>

                    <motion.button
                      type="button"
                      onClick={() => setProjectPreviewOpen(true)}
                      className="relative z-10 block w-full cursor-zoom-in"
                      whileHover={{ scale: 1.015 }}
                      transition={{ duration: 0.35 }}
                      aria-label="Open WR Plumbing project preview"
                    >
                      <img
                        src="/projects/wr-plumbing/image.png"
                        alt="WR Plumbing and Construction Services admin dashboard"
                        className="block h-auto w-full object-cover object-top"
                        loading="lazy"
                        decoding="async"
                      />
                    </motion.button>

                    <motion.div
                      aria-hidden="true"
                      className="pointer-events-none absolute left-0 right-0 top-0 z-30 h-px bg-gradient-to-r from-transparent via-sky-300/70 to-transparent"
                      animate={{ y: [55, 480, 55], opacity: [0, 0.85, 0] }}
                      transition={{
                        duration: 5.5,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 1,
                      }}
                    />
                  </motion.div>
                </motion.div>
              </div>

              <div className="p-8 sm:p-12 lg:p-14">
                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300"
                >
                  Laravel Web Application
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.08 }}
                  className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl"
                >
                  WR Plumbing and Construction Services Management System
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.14 }}
                  className="mt-6 leading-8 text-slate-300"
                >
                  A web-based billing and scheduling management system designed
                  to improve operational workflows for WR Plumbing and
                  Construction Services.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.2 }}
                  className="mt-4 leading-8 text-slate-300"
                >
                  I contributed to the design and development of appointment
                  scheduling, billing management, role-based access control, and
                  security-focused features.
                </motion.p>

                <div className="mt-8 space-y-4">
                  {projectFeatures.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: 18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.08 * index }}
                      className="flex items-start gap-3"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 8 }}
                        transition={{ type: "spring", stiffness: 350, damping: 18 }}
                      >
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-400" />
                      </motion.div>
                      <p className="text-slate-300">{feature}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.28 }}
                  className="mt-8 flex flex-wrap gap-3"
                >
                  {["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"].map(
                    (technology) => (
                      <motion.span
                        key={technology}
                        whileHover={{ y: -3, scale: 1.04 }}
                        className="rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm text-sky-200"
                      >
                        {technology}
                      </motion.span>
                    ),
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.36 }}
                  className="mt-9 flex flex-wrap gap-4"
                >
                  <motion.a
                    href="#"
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-slate-200"
                  >
                    View project
                    <ExternalLink className="h-4 w-4" />
                  </motion.a>

                  <motion.a
                    href="https://github.com/LOR-afk/wrplumb-laravel"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-semibold text-white transition hover:bg-white/5"
                  >
                    Source code
                    <ExternalLink className="h-4 w-4" />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="more-projects"
        className="bg-slate-950/30 px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <SectionLabel>More Work</SectionLabel>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="max-w-3xl text-4xl font-bold text-white sm:text-5xl">
              More projects and hands-on work.
            </h2>

            <p className="max-w-md leading-7 text-slate-400">
              A growing collection of web development and cybersecurity work.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {additionalProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -7 }}
                className="glass-card rounded-3xl p-7"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
                    {project.type}
                  </p>

                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                    {project.status}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg bg-white/5 px-3 py-2 text-sm text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <a
                  href={project.href}
                  target={project.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    project.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="mt-7 inline-flex items-center gap-2 font-semibold text-sky-300 transition hover:text-sky-200"
                >
                  Explore
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="cybersecurity"
        className="bg-slate-950/50 px-6 py-24 lg:px-10 lg:py-32"
      >
        <SectionReveal className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <SectionLabel>Cybersecurity Journey</SectionLabel>

            <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
              Learning how to build systems—and how to protect them.
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Beyond web development, I actively explore cybersecurity through
              Capture The Flag challenges, networking concepts, and hands-on
              laboratories.
            </p>

            <p className="mt-5 max-w-xl leading-8 text-slate-400">
              Platforms such as PicoCTF help me strengthen my problem-solving
              skills, attention to detail, and understanding of vulnerabilities
              that affect modern applications.
            </p>
          </div>

          <div className="grid gap-5">
            <div className="glass-card rounded-3xl p-7">
              <div className="flex items-start gap-5">
                <div className="rounded-2xl bg-violet-400/10 p-4">
                  <Braces className="text-violet-300" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    Capture The Flag
                  </h3>
                  <p className="mt-3 leading-7 text-slate-400">
                    Practicing security concepts and problem-solving through
                    PicoCTF challenges.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-7">
              <div className="flex items-start gap-5">
                <div className="rounded-2xl bg-sky-400/10 p-4">
                  <LockKeyhole className="text-sky-300" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    Secure Web Development
                  </h3>
                  <p className="mt-3 leading-7 text-slate-400">
                    Studying authentication, access control, input validation,
                    and secure application design.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-7">
              <div className="flex items-start gap-5">
                <div className="rounded-2xl bg-emerald-400/10 p-4">
                  <ShieldCheck className="text-emerald-300" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    Networking and Security
                  </h3>
                  <p className="mt-3 leading-7 text-slate-400">
                    Expanding my knowledge of network communication, threats,
                    vulnerabilities, and defensive practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>

      <section
        id="certifications"
        className="px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Certifications</SectionLabel>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="max-w-3xl text-4xl font-bold text-white sm:text-5xl">
              Cybersecurity training and verified credentials.
            </h2>

            <p className="max-w-md leading-7 text-slate-400">
              Swipe on mobile or use the arrows to explore my certifications.
            </p>
          </div>

          <div
            className="relative mt-14"
            onMouseEnter={() => setCertificatePaused(true)}
            onMouseLeave={() => setCertificatePaused(false)}
            onTouchStart={() => setCertificatePaused(true)}
            onTouchEnd={() => setCertificatePaused(false)}
          >
            <motion.div
              key={currentCertificate}
              initial={{ opacity: 0, x: certificateDirection * 85, scale: 0.985 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.42, ease: "easeOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) {
                  nextCertificate();
                } else if (info.offset.x > 80) {
                  previousCertificate();
                }
              }}
              className="glass-card cursor-grab overflow-hidden rounded-[2rem] active:cursor-grabbing"
            >
              <div className="grid lg:grid-cols-[1.25fr_0.75fr]">
                <div className="flex min-h-[500px] items-center justify-center bg-slate-950 p-10">
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 20px 60px rgba(2,132,199,0.12)",
                        "0 24px 80px rgba(56,189,248,0.25)",
                        "0 20px 60px rgba(2,132,199,0.12)",
                      ],
                    }}
                    transition={{ duration: 3.8, repeat: Infinity }}
                    className="flex h-72 w-72 items-center justify-center rounded-[2rem] border border-white/10 bg-white p-7 sm:h-96 sm:w-96"
                  >
                    <img
                      src={activeCertificate.badge}
                      alt={`${activeCertificate.title} badge`}
                      className="h-full w-full object-contain"
                      loading="lazy"
                      decoding="async"
                      draggable="false"
                    />
                  </motion.div>
                </div>

                <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
                    {activeCertificate.issuer}
                  </p>

                  <h3 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                    {activeCertificate.title}
                  </h3>

                  <p className="mt-4 text-slate-400">
                    Issued {activeCertificate.date}
                  </p>

                  <p className="mt-6 leading-7 text-slate-300">
                    {activeCertificate.description}
                  </p>

                  <div className="mt-8">
                    <a
                      href={activeCertificate.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-sky-400 px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-sky-300"
                    >
                      Verify on Credly
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {certifications.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={previousCertificate}
                  className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-900/90 text-xl text-white shadow-xl transition hover:bg-sky-400 hover:text-slate-950 sm:left-5"
                  aria-label="Previous certification"
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={nextCertificate}
                  className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-900/90 text-xl text-white shadow-xl transition hover:bg-sky-400 hover:text-slate-950 sm:right-5"
                  aria-label="Next certification"
                >
                  →
                </button>
              </>
            )}

            <div className="mt-6 flex justify-center gap-2">
              {certifications.map((certificate, index) => (
                <button
                  key={certificate.title}
                  type="button"
                  onClick={() => selectCertificate(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentCertificate === index
                      ? "w-8 bg-sky-400"
                      : "w-2.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Show ${certificate.title}`}
                />
              ))}
            </div>

            <p className="mt-3 text-center text-xs uppercase tracking-[0.25em] text-slate-500">
              {currentCertificate + 1} / {certifications.length}
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <SectionReveal className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div className="glass-card rounded-[2rem] p-8 sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/10">
              <GraduationCap className="text-amber-300" />
            </div>

            <h2 className="mt-7 text-3xl font-bold text-white">Education</h2>

            <p className="mt-6 text-lg font-semibold text-white">
              Bachelor of Science in Information Technology
            </p>

            <p className="mt-2 text-slate-300">
              PHINMA Cagayan de Oro College
            </p>

            <p className="mt-3 text-sm uppercase tracking-[0.25em] text-sky-300">
              Fourth-Year Student
            </p>
          </div>

          <div className="glass-card rounded-[2rem] p-8 sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-400/10">
              <Camera className="text-violet-300" />
            </div>

            <h2 className="mt-7 text-3xl font-bold text-white">
              Beyond Technology
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              Outside of technology, I enjoy photography, exploring emerging
              tools, and continuously improving my skills through personal
              projects and self-paced learning.
            </p>
          </div>
        </SectionReveal>
      </section>

      <section id="contact" className="px-6 pb-24 pt-10 lg:px-10 lg:pb-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-sky-400/20 bg-gradient-to-br from-sky-500/15 via-slate-900 to-violet-500/10 px-7 py-16 text-center sm:px-12"
        >
          <motion.div
            className="absolute inset-0 cyber-grid opacity-40"
            animate={{ opacity: [0.25, 0.5, 0.25] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          <motion.div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/10 blur-3xl"
            animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.25, 0.55, 0.25] }}
            transition={{ duration: 4.8, repeat: Infinity }}
          />

          <div className="relative">
            <SectionLabel>Let&apos;s Connect</SectionLabel>

            <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">
              Let&apos;s build something useful, secure, and meaningful.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I am open to internships, collaborations, and opportunities in
              full-stack web development and cybersecurity.
            </p>

            <a
              href={`mailto:${contactLinks.email}`}
              className="mt-9 inline-flex items-center gap-3 rounded-xl bg-sky-400 px-7 py-4 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-sky-300"
            >
              <Mail className="h-5 w-5" />
              Send me an email
            </a>

            <div className="mt-9 flex justify-center gap-4">
              <a
                href="#"
                aria-label="GitHub"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:border-sky-300/40 hover:text-sky-300"
              >
                <ExternalLink className="h-5 w-5" />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:border-sky-300/40 hover:text-sky-300"
              >
                <span className="font-bold">in</span>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Lore Lindell Tamayo. Built with React and Vite.
      </footer>

      <motion.button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0.85,
          pointerEvents: showScrollTop ? "auto" : "none",
        }}
        whileHover={{ y: -4, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-[80] flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-slate-900/85 text-white shadow-xl backdrop-blur-xl"
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-5 w-5" />
      </motion.button>

      {projectPreviewOpen && (
        <div
          className="fixed inset-0 z-[150] flex items-center justify-center bg-slate-950/90 px-4 py-8 backdrop-blur-md"
          onClick={() => setProjectPreviewOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="relative w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setProjectPreviewOpen(false)}
              className="absolute -top-14 right-0 rounded-xl border border-white/10 bg-white/5 p-3 text-white transition hover:bg-white/10"
              aria-label="Close project preview"
            >
              <X className="h-5 w-5" />
            </button>

            <img
              src="/projects/wr-plumbing/image.png"
              alt="Large preview of WR Plumbing and Construction Services admin dashboard"
              className="max-h-[80vh] w-full rounded-2xl border border-white/10 bg-slate-900 object-contain shadow-2xl"
              decoding="async"
            />
          </motion.div>
        </div>
      )}

      <style>{`

        .theme-light {
          background: #f8fafc;
          color: #0f172a;
        }

        .theme-light .glass-card {
          background: rgba(255, 255, 255, 0.78) !important;
          border-color: rgba(15, 23, 42, 0.1) !important;
          box-shadow: 0 18px 50px rgba(15, 23, 42, 0.08);
        }

        .theme-light .text-white,
        .theme-light .text-slate-100,
        .theme-light .text-slate-200,
        .theme-light .text-slate-300 {
          color: #0f172a !important;
        }

        .theme-light .text-slate-400,
        .theme-light .text-slate-500 {
          color: #475569 !important;
        }

        .theme-light .bg-slate-950,
        .theme-light .bg-slate-950\/50,
        .theme-light .bg-slate-950\/30,
        .theme-light .bg-slate-900 {
          background-color: rgba(241, 245, 249, 0.95) !important;
        }

        .theme-light .border-white\/10,
        .theme-light .border-white\/15 {
          border-color: rgba(15, 23, 42, 0.12) !important;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto !important;
          }

          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {selectedSkill && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/85 px-5 py-8 backdrop-blur-sm"
          onClick={() => setSelectedSkill(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
            onClick={(event) => event.stopPropagation()}
            className="glass-card max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] p-6 sm:p-9"
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
                  Technical Stack
                </p>

                <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                  {selectedSkill.title}
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                  {selectedSkill.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedSkill(null)}
                className="shrink-0 rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:bg-white/10 hover:text-white"
                aria-label="Close tool details"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              {selectedSkill.tools.map((tool) => (
                <article
                  key={tool.name}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-sky-400/30 hover:bg-white/[0.06]"
                >
                  <div className="flex items-center gap-4">
                    <ToolVisual tool={tool} />

                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {tool.name}
                      </h3>

                      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-sky-300">
                        Tool and Technology
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 leading-7 text-slate-400">
                    {tool.description}
                  </p>
                </article>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </main>
  );
}

export default App;