import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { supabase } from "./lib/supabase";
import {
  ArrowUpRight, Camera, ChevronLeft, ChevronRight, Code2, Database,
  Download, ExternalLink, GraduationCap, Mail, Menu, Server,
  ShieldCheck, Terminal, X, Moon, Sun, Send,
} from "lucide-react";

const navigation = [
  ["Home", "#home"], ["About", "#about"], ["Skills", "#skills"],
  ["Project", "#project"], ["Cybersecurity", "#cybersecurity"],
  ["Credentials", "#certifications"], ["Contact", "#contact"],
];

const skills = [
  ["Frontend", Code2, "Responsive interfaces and accessible user experiences.", ["HTML", "CSS", "JavaScript", "Bootstrap", "Responsive Design"]],
  ["Backend", Server, "Server-side logic, APIs, authentication, and RBAC.", ["Laravel", "PHP", "REST APIs", "RBAC"]],
  ["Database", Database, "Relational modeling, querying, and structured data management.", ["MySQL", "Database Design", "SQL", "Data Management"]],
  ["Security", ShieldCheck, "Secure coding, networking, and hands-on defensive learning.", ["PicoCTF", "Web Security", "Networking", "Secure Coding", "Git"]],
];

const projectScreenshots = [
  {
    src: "/projects/wr-plumbing/image.png",
    title: "Billing and Scheduling System",
    stack: "Laravel · PHP · MySQL",
    repo: "https://github.com/LOR-afk/wrplumb-laravel",
    alt: "WR Plumbing Admin Dashboard",
    description:
      "Centralized monitoring dashboard for client requests, quotations, job orders, support tickets, revenue, and inspector availability.",
  },
  {
    src: "/projects/random/asa-ka-go.png",
    title: "Asa Ka Go",
    stack: "React · Vite · Leaflet · OpenStreetMap",
    repo: "https://github.com/LOR-afk/asa-ka-go",
    alt: "Asa Ka Go route finder",
    description:
      "A location-based route finder that helps users search destinations, use their current location, and calculate the shortest route with distance and estimated travel time using OpenStreetMap and Leaflet.",
  },
  {
    src: "/projects/random/cyberwatch-ph.png",
    title: "CyberWatch PH",
    stack: "React · Vite · JavaScript",
    repo: "https://github.com/LOR-afk/cyberwatch-ph",
    alt: "CyberWatch PH phishing link analyzer",
    description:
      "A client-side phishing link analyzer that helps users inspect suspicious URLs for common phishing and scam indicators without directly opening the website.",
  },
  {
    src: "/projects/random/kape-ka.png",
    title: "Kape Ka",
    stack: "React · Vite · Leaflet · OpenStreetMap",
    repo: "https://github.com/LOR-afk/kape-ka",
    alt: "Kape Ka cafe finder map",
    description:
      "A location-based cafe finder for Cagayan de Oro that helps users discover nearby coffee shops, search by area, use their current location, and filter cafes by amenities such as Wi-Fi, outlets, air-conditioning, quiet spaces, and late operating hours.",
  },
];

const cybersecurityTools = [
  {
    name: "Kali Linux",
    use: "Security lab environment",
    status: "Hands-on",
    image: "/cybersecurity/kali-linux.png",
    description:
      "Used as a penetration testing and cybersecurity lab environment for hands-on exercises, command-line practice, networking, and security tools.",
  },
  {
    name: "Burp Suite",
    use: "Web application security testing",
    status: "Learning",
    image: "/cybersecurity/burp-suite.png",
    description:
      "Used while learning web application testing workflows such as intercepting requests, inspecting HTTP traffic, and experimenting with proxy-based testing.",
  },
  {
    name: "Wireshark",
    use: "Packet capture and traffic analysis",
    status: "Hands-on",
    image: "/cybersecurity/wireshark.png",
    description:
      "Used for packet capture and network traffic inspection to better understand protocols, requests, responses, and suspicious network behavior.",
  },
  {
    name: "SQLmap",
    use: "Automated SQL injection testing",
    status: "Learning",
    image: "/cybersecurity/sqlmap.png",
    description:
      "Used in controlled lab environments while learning how automated SQL injection testing works and how vulnerable parameters can be identified and assessed.",
  },
  {
    name: "Ubuntu",
    use: "Linux environment and command-line practice",
    status: "Hands-on",
    image: "/cybersecurity/ubuntu.png",
    description:
      "Used as a Linux environment for command-line practice, development tasks, networking exercises, and general system administration learning.",
  },
  {
    name: "PicoCTF",
    use: "CTF challenges and security problem-solving",
    status: "Practice",
    image: "/cybersecurity/picoctf.png",
    description:
      "Used for capture-the-flag challenges covering web exploitation, cryptography, forensics, networking, and general security problem-solving.",
  },
];

const certifications = [
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "2026",
    badge: "/certificates/intro-cybersecurity.png",
    description: "Foundational knowledge of cybersecurity concepts, online threats, privacy, and safe digital practices.",
    url: "https://www.credly.com/badges/e4c4f82d-4646-4823-8dd9-908a613387d7/public_url",
    linkLabel: "Verify credential",
  },
  {
    title: "Network Support and Security",
    issuer: "Cisco",
    date: "August 9, 2026",
    badge: "/certificates/network-support-and-security.png",
    description: "Network support, troubleshooting, security concepts, and protecting networked systems.",
    url: "https://www.credly.com/badges/84635f67-9699-4480-8672-d5342cce74e8/public_url",
    linkLabel: "Verify credential",
  },
  {
    title: "Cyber Hygiene Training",
    issuer: "APAC Cybersecurity Fund · YGOAL",
    date: "September 28, 2025",
    badge: "/certificates/cyber-hygiene-training.png",
    description: "Certificate of Completion for actively participating in and completing the Cyber Hygiene Training under the APAC Cybersecurity Fund.",
    url: "/certificates/cyber-hygiene-training.pdf",
    linkLabel: "View certificate",
  },
  {
    title: "Artificial Intelligence in a Cybersecurity Perspective",
    issuer: "Certificate of Attendance",
    date: "July 3, 2026",
    badge: "/certificates/ai-cybersecurity-perspective.png",
    description: "Certificate confirming attendance in Artificial Intelligence in a Cybersecurity Perspective.",
    url: "/certificates/ai-cybersecurity-perspective.pdf",
    linkLabel: "View certificate",
  },
  {
    title: "Operating Systems Basics",
    issuer: "Cisco Networking Academy",
    date: "August 27, 2026",
    badge: "/certificates/operating-systems-basics.png",
    description: "Foundational knowledge of operating system concepts, file systems, processes, user accounts, security, and basic system administration.",
    url: "https://www.credly.com/badges/7e0aa8cf-e08b-48ea-a72c-97aec19c15e9/public_url",
    linkLabel: "View credential",
  },
  {
    title: "Prompt Like an Engineer",
    issuer: "Cisco Networking Academy",
    date: "2026",
    badge: "/certificates/prompt-like-an-engineer.png",
    description: "Demonstrates foundational skills in structuring effective AI prompts, refining instructions, and applying systematic prompting techniques to produce more accurate and useful AI-generated results.",
    url: "https://www.credly.com/badges/b07db848-e0b5-4027-a50d-be4b8cf4ad62/public_url",
    linkLabel: "Verify credential",
  },
];

const contact = {
  email: "tamayo.lorelindell1@gmail.com",
  github: "https://github.com/LOR-afk",
  linkedin: "https://www.linkedin.com/in/lore-lindell-becoy-tamayo-931112340/",
};

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55 },
};

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [cert, setCert] = useState(0);
  const [projectSlide, setProjectSlide] = useState(0);
  const [projectDirection, setProjectDirection] = useState(1);
  const [projectPaused, setProjectPaused] = useState(false);
  const [cyberTool, setCyberTool] = useState(0);
  const [cyberPaused, setCyberPaused] = useState(false);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });
  const [mailStatus, setMailStatus] = useState("");
  const [ratingAverage, setRatingAverage] = useState(0);
  const [ratingTotal, setRatingTotal] = useState(0);
  const [ratingLoading, setRatingLoading] = useState(true);
  const [ratingSubmitting, setRatingSubmitting] = useState(false);
  const [ratingMessage, setRatingMessage] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [hasRated, setHasRated] = useState(() =>
    localStorage.getItem("lore-portfolio-rated") === "true"
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const savedRating = Number(
      localStorage.getItem("lore-portfolio-rating-value") || 0
    );
    if (savedRating >= 1 && savedRating <= 5) {
      setSelectedRating(savedRating);
    }
  }, []);

  useEffect(() => {
    if (projectPaused) return undefined;

    const timer = window.setInterval(() => {
      setProjectDirection(1);
      setProjectSlide((currentSlide) =>
        (currentSlide + 1) % projectScreenshots.length
      );
    }, 8000);

    return () => window.clearInterval(timer);
  }, [projectPaused]);

  useEffect(() => {
    if (cyberPaused) return undefined;

    const timer = window.setInterval(() => {
      setCyberTool((currentTool) =>
        (currentTool + 1) % cybersecurityTools.length
      );
    }, 4500);

    return () => window.clearInterval(timer);
  }, [cyberPaused]);

  const loadPortfolioRatings = async () => {
    setRatingLoading(true);

    const { data, error } = await supabase
      .from("portfolio_ratings")
      .select("rating");

    if (error) {
      console.error("Unable to load portfolio ratings:", error);
      setRatingMessage("Ratings are temporarily unavailable.");
      setRatingLoading(false);
      return;
    }

    const ratings = data ?? [];
    const total = ratings.length;
    const sum = ratings.reduce(
      (accumulator, row) => accumulator + Number(row.rating || 0),
      0
    );

    setRatingTotal(total);
    setRatingAverage(total > 0 ? sum / total : 0);
    setRatingLoading(false);
  };

  useEffect(() => {
    loadPortfolioRatings();
  }, []);

  const submitPortfolioRating = async (rating) => {
    if (ratingSubmitting || hasRated) {
      if (hasRated) {
        setRatingMessage("You already rated this portfolio on this browser.");
      }
      return;
    }

    setRatingSubmitting(true);
    setSelectedRating(rating);
    setRatingMessage("");

    const { error } = await supabase
      .from("portfolio_ratings")
      .insert({ rating });

    if (error) {
      console.error("Unable to submit portfolio rating:", error);
      setSelectedRating(0);
      setRatingMessage("I couldn't save your rating. Please try again.");
      setRatingSubmitting(false);
      return;
    }

    localStorage.setItem("lore-portfolio-rated", "true");
    localStorage.setItem("lore-portfolio-rating-value", String(rating));

    setHasRated(true);
    setRatingMessage("Thanks for rating my portfolio!");
    setRatingSubmitting(false);
    await loadPortfolioRatings();
  };

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  };

  const handleEmailSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const senderEmail = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const emailSubject = subject || `Portfolio message from ${name}`;
    const emailBody = [
      `Name: ${name}`,
      `Email: ${senderEmail}`,
      "",
      message,
    ].join("\n");

    window.location.href =
      `mailto:${contact.email}` +
      `?subject=${encodeURIComponent(emailSubject)}` +
      `&body=${encodeURIComponent(emailBody)}`;

    setMailStatus("Your email app should open with the message ready to send.");
  };

  useEffect(() => {
    const ids = navigation.map(([, href]) => href.slice(1));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: "-25% 0px -60% 0px", threshold: [0.1, 0.25] });
    ids.map((id) => document.getElementById(id)).filter(Boolean).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const next = () => setCert((cert + 1) % certifications.length);
  const prev = () => setCert((cert - 1 + certifications.length) % certifications.length);
  const nextProjectSlide = () => {
    setProjectDirection(1);
    setProjectSlide(
      (currentSlide) => (currentSlide + 1) % projectScreenshots.length
    );
  };

  const prevProjectSlide = () => {
    setProjectDirection(-1);
    setProjectSlide(
      (currentSlide) =>
        (currentSlide - 1 + projectScreenshots.length) % projectScreenshots.length
    );
  };

  return (
    <main className="portfolio-shell">
      <style>{`
        .project-showcase-copy {
          min-height: 240px;
        }

        .project-showcase-screen {
          min-height: 320px;
        }

        @media (max-width: 720px) {
          .cyber-dynamic-copy {
            min-height: 245px;
          }

          .cyber-carousel-copy {
            min-height: 500px;
          }

          .cyber-carousel {
            align-items: stretch;
          }

          .project-showcase-visual {
            min-height: 235px;
          }

          .project-showcase-screen {
            min-height: 190px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .project-showcase-screen img {
            width: 100%;
            height: 190px;
            object-fit: contain;
          }

          .project-showcase-copy {
            min-height: 275px;
          }

          .project-dynamic-copy {
            min-height: 145px;
          }
        }
      `}</style>
      <button
        type="button"
        className="theme-icon-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        title={theme === "light" ? "Dark mode" : "Light mode"}
      >
        {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
      </button>

      <aside className="sidebar">
        <div>
          <a href="#home" className="brand">Lore Tamayo</a>
          <p className="brand-subtitle">BSIT · Full-Stack · Cybersecurity</p>
          <nav className="sidebar-nav">
            {navigation.map(([label, href]) => (
              <a key={label} href={href} className={active === href.slice(1) ? "active" : ""}>
                <span className="nav-dot" />{label}
              </a>
            ))}
          </nav>
        </div>

        <div className="sidebar-bottom">
          <div className="availability"><span />Open to internships and opportunities</div>
          <p>For work, collaborations, or internship opportunities:</p>
          <a href={`mailto:${contact.email}`} className="sidebar-email"><Mail size={14} />{contact.email}</a>
        </div>
      </aside>

      <button className="mobile-menu-button" onClick={() => setMobileOpen(true)} aria-label="Open menu"><Menu size={20} /></button>

      {mobileOpen && (
        <div className="mobile-overlay" onClick={() => setMobileOpen(false)}>
          <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="mobile-nav" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-head"><strong>Lore Tamayo</strong><button onClick={() => setMobileOpen(false)}><X size={20} /></button></div>
            {navigation.map(([label, href]) => <a key={label} href={href} onClick={() => setMobileOpen(false)}>{label}</a>)}
          </motion.div>
        </div>
      )}

      <div className="content">
        <section id="home" className="hero-section">
          <div className="dot-field dot-field-top" />

          <div className="hero-grid">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .65 }}>
              <div className="portrait-frame">
                <img src="/profile/lore-profile.png" alt="Lore Tamayo" className="portrait-image" onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.nextElementSibling.style.display = "grid"; }} />
                <div className="portrait-placeholder"><b>LT</b><small>add public/profile/lore-profile.png</small></div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .1 }} className="hero-copy">
              <p className="eyebrow">Hello, I&apos;m</p>
              <h1>Lore Lindell Tamayo</h1>
              <p className="hero-lead">I&apos;m a fourth-year BSIT student focused on full-stack web development and cybersecurity.</p>
              <p className="hero-body">I build practical web applications, learn through hands-on security labs, and care about systems that are useful, reliable, and secure.</p>

              <div className="hero-links">
                <a href={contact.github} target="_blank" rel="noreferrer">github <ArrowUpRight size={13}/></a>
                <a href={contact.linkedin} target="_blank" rel="noreferrer">linkedin <ArrowUpRight size={13}/></a>
                <a href={`mailto:${contact.email}`} target="_blank" rel="noreferrer">email <ArrowUpRight size={13}/></a>
                <a href="/documents/Lore_Tamayo_Resume.pdf" target="_blank" rel="noreferrer">résumé <ArrowUpRight size={13}/></a>
              </div>
            </motion.div>
          </div>

          <div className="stats-row">
            {[
              ['4th', 'YEAR BSIT'],
              ['4', 'SKILL AREAS'],
              ['6', 'CREDENTIALS'],
              ['4', 'FEATURED PROJECTS'],
            ].map(([a, b]) => (
              <div className="stat" key={b}>
                <strong>{a}</strong>
                <span>{b}</span>
              </div>
            ))}
          </div>

          <div className="dot-field dot-field-bottom" />
        </section>

        <section id="about" className="editorial-section">
          <motion.div {...reveal} className="section-heading"><span>01</span><h2>About</h2></motion.div>

          <motion.div {...reveal} className="two-column-copy">
            <p className="large-copy">Building technology that is useful, secure, and accessible.</p>
            <div className="body-copy">
              <p>I&apos;m a Bachelor of Science in Information Technology student at PHINMA Cagayan de Oro College with a strong interest in full-stack development and cybersecurity.</p>
              <p>My current toolkit includes Laravel, PHP, MySQL, HTML, CSS, JavaScript, Bootstrap, Git, and responsive web development.</p>
              <p>Outside development, I enjoy photography and exploring new tools through personal projects and self-paced learning.</p>
            </div>
          </motion.div>

          <div className="micro-grid">
            <article><GraduationCap size={19}/><strong>PHINMA Cagayan de Oro College</strong><span>Bachelor of Science in Information Technology</span></article>
            <article><Camera size={19}/><strong>Beyond Technology</strong><span>Photography, exploration, and continuous learning</span></article>
          </div>
        </section>

        <section id="skills" className="editorial-section">
          <motion.div {...reveal} className="section-heading"><span>02</span><h2>Technical Skills</h2></motion.div>

          <div className="skill-list">
            {skills.map(([title, Icon, description, tools], i) => (
              <motion.article {...reveal} transition={{ duration:.5, delay:i*.05 }} className="skill-row" key={title}>
                <div className="skill-index">0{i+1}</div>
                <div className="skill-title"><Icon size={20}/><h3>{title}</h3></div>
                <p>{description}</p>
                <div className="skill-tools">{tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="project" className="editorial-section project-showcase-section">
          <motion.div {...reveal} className="section-heading">
            <span>03</span>
            <h2>Featured Projects</h2>
          </motion.div>

          <motion.div {...reveal} className="project-showcase">
            <div
              className="project-showcase-visual"
              onMouseEnter={() => setProjectPaused(true)}
              onMouseLeave={() => setProjectPaused(false)}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={projectScreenshots[projectSlide].src}
                  className="project-showcase-screen"
                  initial={{
                    opacity: 0,
                    x: projectDirection > 0 ? 60 : -60,
                    scale: 0.985,
                  }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{
                    opacity: 0,
                    x: projectDirection > 0 ? -60 : 60,
                    scale: 0.985,
                  }}
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.12}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -55 || info.velocity.x < -450) {
                      nextProjectSlide();
                    } else if (info.offset.x > 55 || info.velocity.x > 450) {
                      prevProjectSlide();
                    }
                  }}
                >
                  <img
                    src={projectScreenshots[projectSlide].src}
                    alt={projectScreenshots[projectSlide].alt}
                    loading="lazy"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="project-showcase-copy">
              <span className="project-showcase-meta">
                {projectScreenshots[projectSlide].stack}
              </span>

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  className="project-dynamic-copy"
                  key={`project-copy-${projectSlide}`}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <h3>{projectScreenshots[projectSlide].title}</h3>
                  <p>{projectScreenshots[projectSlide].description}</p>
                </motion.div>
              </AnimatePresence>

              <div className="project-showcase-footer">
                <a
                  href={projectScreenshots[projectSlide].repo}
                  target="_blank"
                  rel="noreferrer"
                  className="project-showcase-link"
                >
                  View repository <ExternalLink size={13} />
                </a>

                <div
                  className="project-showcase-pagination"
                  aria-label="Project screenshots"
                >
                  {projectScreenshots.map((screenshot, index) => (
                    <button
                      type="button"
                      key={screenshot.src}
                      className={index === projectSlide ? "active" : ""}
                      onClick={() => {
                        if (index === projectSlide) return;
                        setProjectDirection(index > projectSlide ? 1 : -1);
                        setProjectSlide(index);
                      }}
                      aria-label={`Show ${screenshot.title}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="cybersecurity" className="editorial-section cyber-section">
          <motion.div {...reveal} className="section-heading">
            <span>04</span>
            <h2>Cybersecurity</h2>
          </motion.div>

          <motion.div
            {...reveal}
            className="cyber-carousel"
            onMouseEnter={() => setCyberPaused(true)}
            onMouseLeave={() => setCyberPaused(false)}
          >
            <div className="cyber-carousel-copy">
              <span className="cyber-carousel-kicker">
                Tools & Environments
              </span>

              <motion.div
                className="cyber-dynamic-copy"
                key={`copy-${cyberTool}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
              >
                <div className="cyber-carousel-meta">
                  <span>
                    {String(cyberTool + 1).padStart(2, "0")} /{" "}
                    {String(cybersecurityTools.length).padStart(2, "0")}
                  </span>
                  <span className="cyber-carousel-status">
                    {cybersecurityTools[cyberTool].status}
                  </span>
                </div>

                <h3>{cybersecurityTools[cyberTool].name}</h3>

                <p className="cyber-carousel-use">
                  {cybersecurityTools[cyberTool].use}
                </p>

                <p className="cyber-carousel-description">
                  {cybersecurityTools[cyberTool].description}
                </p>
              </motion.div>

              <div className="cyber-carousel-progress" aria-label="Cybersecurity tools">
                {cybersecurityTools.map((tool, index) => (
                  <button
                    type="button"
                    key={tool.name}
                    className={index === cyberTool ? "active" : ""}
                    onClick={() => setCyberTool(index)}
                    aria-label={`Show ${tool.name}`}
                    title={tool.name}
                  >
                    <span />
                  </button>
                ))}
              </div>

              <div className="cyber-tool-tabs">
                {cybersecurityTools.map((tool, index) => (
                  <button
                    type="button"
                    key={tool.name}
                    className={index === cyberTool ? "active" : ""}
                    onClick={() => setCyberTool(index)}
                  >
                    {tool.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="cyber-carousel-visual">
              <div className="cyber-dot-field" />

              <motion.div
                key={`image-${cyberTool}`}
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="cyber-image-frame"
              >
                <img
                  src={cybersecurityTools[cyberTool].image}
                  alt={`${cybersecurityTools[cyberTool].name} hands-on environment`}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                    const fallback = event.currentTarget.nextElementSibling;
                    if (fallback) fallback.style.display = "grid";
                  }}
                />

                <div className="cyber-image-placeholder">
                  <Terminal size={26} />
                  <strong>{cybersecurityTools[cyberTool].name}</strong>
                  <span>
                    Add image to
                    <code>{cybersecurityTools[cyberTool].image}</code>
                  </span>
                </div>
              </motion.div>

              <div className="cyber-carousel-caption">
                <span>Hands-on cybersecurity learning</span>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="certifications" className="editorial-section credential-showcase">
          <motion.div {...reveal} className="section-heading credential-heading">
            <span>05</span>
            <h2>Credentials</h2>

            <div className="credential-top-action">
              <span>Verified certifications</span>
              <ArrowUpRight size={13} />
            </div>
          </motion.div>

          <div className="credential-stage">
            <div className="credential-dot-field" />

            {(() => {
              const previousIndex =
                (cert - 1 + certifications.length) % certifications.length;
              const nextIndex = (cert + 1) % certifications.length;

              const previousCertificate = certifications[previousIndex];
              const currentCertificate = certifications[cert];
              const nextCertificate = certifications[nextIndex];

              const renderCard = (certificate, index, position) => (
                <motion.article
                  key={`${position}-${certificate.title}-${cert}`}
                  initial={false}
                  animate={{
                    opacity: position === "center" ? 1 : 0.52,
                    scale: position === "center" ? 1 : 0.9,
                    x:
                      position === "left"
                        ? -250
                        : position === "right"
                          ? 250
                          : 0,
                    rotate:
                      position === "left"
                        ? -8
                        : position === "right"
                          ? 8
                          : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 25,
                  }}
                  drag={position === "center" ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.18}
                  onDragEnd={(_, info) => {
                    if (position !== "center") return;

                    const swipeDistance = 55;
                    const swipeVelocity = 450;

                    if (
                      info.offset.x < -swipeDistance ||
                      info.velocity.x < -swipeVelocity
                    ) {
                      next();
                    } else if (
                      info.offset.x > swipeDistance ||
                      info.velocity.x > swipeVelocity
                    ) {
                      prev();
                    }
                  }}
                  className={`credential-stack-card credential-${position}`}
                  onClick={() => {
                    if (position === "left") prev();
                    if (position === "right") next();
                  }}
                >
                  <div className="credential-card-topline">
                    <span>
                      {String(index + 1).padStart(2, "0")} — Cisco Credential
                    </span>
                    <span>{certificate.date}</span>
                  </div>

                  <div className="credential-card-body">
                    <div className="credential-mini-badge">
                      <img
                        src={certificate.badge}
                        alt={`${certificate.title} badge`}
                        loading="lazy"
                      />
                    </div>

                    <div>
                      <h3>{certificate.title}</h3>

                      <p className="credential-issuer">
                        {certificate.issuer}
                      </p>

                      <p className="credential-description">
                        {certificate.description}
                      </p>
                    </div>
                  </div>

                  <div className="credential-card-footer">
                    <a
                      href={certificate.url}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => event.stopPropagation()}
                    >
                      {certificate.linkLabel}
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </motion.article>
              );

              return (
                <>
                  {renderCard(previousCertificate, previousIndex, "left")}
                  {renderCard(currentCertificate, cert, "center")}
                  {renderCard(nextCertificate, nextIndex, "right")}
                </>
              );
            })()}

            <div className="credential-nav-buttons">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous certificate"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Next certificate"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="credential-pagination">
              {certifications.map((certificate, index) => (
                <button
                  key={certificate.title}
                  type="button"
                  onClick={() => setCert(index)}
                  className={index === cert ? "active" : ""}
                  aria-label={`Show ${certificate.title}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="editorial-section contact-section">
          <motion.div {...reveal} className="contact-layout">
            <div className="contact-intro">
              <p className="eyebrow">Let&apos;s connect</p>
              <h2>Have an opportunity, project, or collaboration in mind?</h2>
              <p className="contact-copy">
                Send me a message or reach me directly at
                <a href={`mailto:${contact.email}`}> {contact.email}</a>.
              </p>

              <div className="contact-actions">
                <a href="/documents/Lore_Tamayo_Resume.pdf" target="_blank" rel="noreferrer">
                  <Download size={16} />Download résumé
                </a>
                <a href={contact.github} target="_blank" rel="noreferrer">
                  GitHub<ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleEmailSubmit}>
              <div className="contact-field-grid">
                <label>
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    autoComplete="name"
                    required
                  />
                </label>

                <label>
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@gmail.com"
                    autoComplete="email"
                    required
                  />
                </label>
              </div>

              <label>
                <span>Subject</span>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project, internship, collaboration..."
                  required
                />
              </label>

              <label>
                <span>Message</span>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Write your message here..."
                  required
                />
              </label>

              <div className="contact-form-footer">
                <button type="submit" className="send-message-button">
                  Send message <Send size={14} />
                </button>

                {mailStatus && (
                  <p className="mail-status" role="status">
                    {mailStatus}
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </section>

        <section className="portfolio-rating-section">
          <motion.div {...reveal} className="portfolio-rating-card">
            <div className="portfolio-rating-copy">
              <p className="rating-kicker">Portfolio feedback</p>
              <h2>Enjoyed the experience?</h2>
              <p>
                Leave a quick rating. Your feedback helps me improve the
                experience and presentation of this portfolio.
              </p>
            </div>

            <div className="portfolio-rating-panel">
              <div
                className="rating-stars"
                onMouseLeave={() => setHoverRating(0)}
                aria-label="Rate this portfolio from 1 to 5 stars"
              >
                {[1, 2, 3, 4, 5].map((star) => {
                  const activeRating = hoverRating || selectedRating;
                  const isFilled = star <= activeRating;

                  return (
                    <button
                      key={star}
                      type="button"
                      className={isFilled ? "active" : ""}
                      onMouseEnter={() => !hasRated && setHoverRating(star)}
                      onFocus={() => !hasRated && setHoverRating(star)}
                      onBlur={() => setHoverRating(0)}
                      onClick={() => submitPortfolioRating(star)}
                      disabled={ratingSubmitting || hasRated}
                      aria-label={`${star} star${star > 1 ? "s" : ""}`}
                    >
                      ★
                    </button>
                  );
                })}
              </div>

              <div className="rating-summary">
                {ratingLoading ? (
                  <span>Loading ratings...</span>
                ) : ratingTotal > 0 ? (
                  <>
                    <strong>{ratingAverage.toFixed(1)}</strong>
                    <span>/ 5</span>
                    <small>
                      {ratingTotal} {ratingTotal === 1 ? "rating" : "ratings"}
                    </small>
                  </>
                ) : (
                  <small>Be the first to rate this portfolio.</small>
                )}
              </div>

              {ratingMessage && (
                <p className="rating-message" role="status">
                  {ratingMessage}
                </p>
              )}
            </div>
          </motion.div>
        </section>

        <footer>
          <span>© 2026 Lore Lindell Tamayo</span>
          <span>Built with React + Vite</span>
        </footer>
      </div>
    </main>
  );
}

export default App;
