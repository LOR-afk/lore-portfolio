import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Braces,
  Camera,
  CheckCircle2,
  ChevronDown,
  Code2,
  Database,
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

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [currentCertificate, setCurrentCertificate] = useState(0);

  const nextCertificate = () => {
    setCurrentCertificate((current) => (current + 1) % certifications.length);
  };

  const previousCertificate = () => {
    setCurrentCertificate(
      (current) => (current - 1 + certifications.length) % certifications.length,
    );
  };

  const activeCertificate = certifications[currentCertificate];

  return (
    <main className="min-h-screen overflow-hidden text-slate-100">
      <section className="cyber-grid relative min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(56,189,248,0.18),transparent_25%)]" />

        <nav className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
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
                className="text-sm text-slate-300 transition hover:text-sky-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-200 md:hidden"
            onClick={() => setMobileMenuOpen((current) => !current)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>

          {mobileMenuOpen && (
            <div className="glass-card absolute left-6 right-6 top-20 rounded-2xl p-5 md:hidden">
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
          className="relative z-10 mx-auto grid min-h-[calc(100vh-92px)] max-w-7xl items-center gap-16 px-6 pb-16 pt-14 lg:grid-cols-[1.2fr_0.8fr] lg:px-10"
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

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.4em] text-sky-300">
              BSIT Student • Full-Stack Developer • Cybersecurity Enthusiast
            </p>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.05] text-white sm:text-6xl lg:text-8xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-sky-300 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                Lore.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 lg:text-xl">
              I build secure, practical, and user-friendly web applications that
              solve real-world problems.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
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
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-4">
              <div>
                <p className="text-2xl font-bold text-white">4th Year</p>
                <p className="mt-1 text-sm text-slate-400">BSIT Student</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">Full-Stack</p>
                <p className="mt-1 text-sm text-slate-400">Web Development</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">Secure</p>
                <p className="mt-1 text-sm text-slate-400">Development Focus</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-r from-sky-500/20 to-violet-500/20 blur-3xl" />

            <div className="glass-card relative overflow-hidden rounded-[2rem]">
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
            </div>
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
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-400/10 transition group-hover:bg-sky-400/20">
                      <Icon className="text-sky-300" />
                    </div>

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

          <div className="glass-card overflow-hidden rounded-[2rem]">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[360px] overflow-hidden bg-slate-950 lg:min-h-[620px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.16),transparent_50%)]" />

                <div className="relative flex h-full items-center justify-center p-6 sm:p-10">
                  <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-sky-950/40">
                    <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                      <span className="h-3 w-3 rounded-full bg-red-400" />
                      <span className="h-3 w-3 rounded-full bg-amber-400" />
                      <span className="h-3 w-3 rounded-full bg-emerald-400" />

                      <div className="ml-3 flex-1 rounded-lg bg-white/5 px-4 py-2 text-center text-xs text-slate-500">
                        WR Plumbing Admin Dashboard
                      </div>
                    </div>

                    <img
                      src="/projects/wr-plumbing/image.png"
                      alt="WR Plumbing and Construction Services admin dashboard"
                      className="block h-auto w-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              <div className="p-8 sm:p-12 lg:p-14">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
                  Laravel Web Application
                </p>

                <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  WR Plumbing and Construction Services Management System
                </h2>

                <p className="mt-6 leading-8 text-slate-300">
                  A web-based billing and scheduling management system designed
                  to improve operational workflows for WR Plumbing and
                  Construction Services.
                </p>

                <p className="mt-4 leading-8 text-slate-300">
                  I contributed to the design and development of appointment
                  scheduling, billing management, role-based access control, and
                  security-focused features.
                </p>

                <div className="mt-8 space-y-4">
                  {projectFeatures.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-400" />
                      <p className="text-slate-300">{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"].map(
                    (technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm text-sky-200"
                      >
                        {technology}
                      </span>
                    ),
                  )}
                </div>

                <div className="mt-9 flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-slate-200"
                  >
                    View project
                    <ExternalLink className="h-4 w-4" />
                  </a>

                  <a
                    href="https://github.com/LOR-afk/wrplumb-laravel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-semibold text-white transition hover:bg-white/5"
                  >
                    Source code
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="cybersecurity"
        className="bg-slate-950/50 px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
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
        </div>
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

          <div className="relative mt-14">
            <motion.div
              key={currentCertificate}
              initial={{ opacity: 0, x: 45 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35 }}
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
                  <div className="flex h-72 w-72 items-center justify-center rounded-[2rem] border border-white/10 bg-white p-7 shadow-2xl shadow-sky-950/40 sm:h-96 sm:w-96">
                    <img
                      src={activeCertificate.badge}
                      alt={`${activeCertificate.title} badge`}
                      className="h-full w-full object-contain"
                      draggable="false"
                    />
                  </div>
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
                  onClick={() => setCurrentCertificate(index)}
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
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
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
        </div>
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
          <div className="absolute inset-0 cyber-grid opacity-40" />

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
              href="mailto:your-email@example.com"
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

      {selectedSkill && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/85 px-5 py-8 backdrop-blur-sm"
          onClick={() => setSelectedSkill(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.25 }}
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