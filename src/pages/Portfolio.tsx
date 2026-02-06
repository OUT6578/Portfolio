import React, { useState, useEffect, useRef } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  GraduationCap,
  Code,
  Menu,
  ChevronRight,
  Terminal,
  Cpu,
  Globe,
  Phone,
  X,
  ExternalLink,
} from "lucide-react";
import profilePic from "../assets/profile.jpeg";

// --- Types & Data ---

const portfolioData = {
  personalInfo: {
    name: "DEVESH PRATAP SINGH",
    title: "React.js Developer",
    email: "devesh639281@gmail.com",
    mobile: "+91 9696711560",
    location: "Noida Sector 58",
    linkedin: "https://www.linkedin.com/in/mernDevesh",
    github: "https://github.com/OUT6578/InterViewHub",
    website: "https://devesh-portfolio.vercel.app",
    avatar: profilePic,
    summary:
      "Associate React.js Developer with 1 year of experience crafting responsive, user-centric web applications. Expert in modern React.js, TypeScript, and state management, integrating REST APIs and optimizing performance in Agile environments.",
  },
  skills: {
    technical: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Redux Toolkit",
      "Node.js",
      "MongoDB",
      "Express.js",
      "HTML5/CSS3",
    ],
    tools: [
      "VS Code",
      "Swagger",
      "npm packages",
      "Git/GitHub",
      "Postman",
      "MongoDB Compass",
    ],
  },
  experience: [
    {
      role: "React Developer",
      company: "Cetpa Infotech Pvt. Ltd",
      location: "Noida",
      period: "Present",
      description: [
        "Architected responsive web applications using React.js, TypeScript, and Tailwind CSS.",
        "Implemented complex multi-level approval workflows and role-based access control (RBAC).",
        "Optimized component rendering and state management, improving application performance by 30%.",
        "Collaborated with backend teams to design efficient API data structures and integration patterns.",
        "Led frontend development for the Training Management System, delivering ahead of schedule.",
      ],
    },
  ],
  projects: [
    {
      title: "Training Management System",
      tech: "React, JS, Tailwind, Shadcn UI",
      description:
        "LMS tailored for DFCCIL employees featuring role-based access, multi-level approvals, training history, and vendor management. Implemented core features like Training Application and Recommendations.",
    },
    {
      title: "Task Management System",
      tech: "React, JS, Tailwind, Shadcn UI",
      description:
        "Task delegation platform for DFCCIL employees with hierarchy-based assignment constraints. Contributed to API Integration and UI/UX design, implementing extension and delegation workflows.",
    },
    {
      title: "Visitor Management System",
      tech: "React, JS, Tailwind, Shadcn UI",
      description:
        "Digital entry tracking system. Focused on Dashboard API Integration and stability improvements through rigorous bug fixing.",
    },
  ],
  education: [
    {
      degree: "M.Tech in Computer Science",
      institution: "Goel Institute Of Technology",
      period: "2022 - 2024",
    },
    {
      degree: "B.Tech in Information Technology",
      institution: "Buddha Institute Of Technology",
      period: "2019 - 2022",
    },
    {
      degree: "Diploma in CSE",
      institution: "Mahamaya Institute Of Technology",
      period: "2016 - 2019",
    },
  ],
};

// --- Components ---

const TypingEffect = ({
  text,
  speed = 100,
  delay = 0,
}: {
  text: string;
  speed?: number;
  delay?: number;
}) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    // let timeoutId: NodeJS.Timeout;
    let timeoutId: ReturnType<typeof setTimeout>;
    const startTyping = () => {
      let i = 0;
      const type = () => {
        if (i <= text.length) {
          setDisplayText(text.slice(0, i));
          i++;
          timeoutId = setTimeout(type, speed);
        }
      };
      type();
    };

    const delayTimeout = setTimeout(startTyping, delay);
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(delayTimeout);
    };
  }, [text, speed, delay]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse text-cyan-400">|</span>
    </span>
  );
};

const RevealOnScroll = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  );
};

const BubbleBackground = () => {
  const [bubbles, setBubbles] = useState<
    {
      id: number;
      left: number;
      size: number;
      duration: number;
      delay: number;
    }[]
  >([]);

  useEffect(() => {
    const newBubbles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 15 + 5,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 10,
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Deep Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 animate-gradient-xy"></div>

      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(120vh) scale(0); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-20vh) scale(1); opacity: 0; }
        }
      `}</style>

      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-cyan-400/20 backdrop-blur-[1px] border border-white/10"
          style={{
            left: `${bubble.left}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            bottom: "-20vh",
            animation: `floatUp ${bubble.duration}s linear infinite`,
            animationDelay: `${bubble.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

const ContactDialog = ({
  isOpen,
  onClose,
  data,
}: {
  isOpen: boolean;
  onClose: () => void;
  data: typeof portfolioData.personalInfo;
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-20" />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 text-slate-400 hover:text-white hover:bg-white/10 z-10"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </Button>

        <div className="p-6 pt-12 flex flex-col items-center text-center relative">
          <div className="w-24 h-24 rounded-full border-4 border-slate-900 shadow-xl overflow-hidden mb-4 relative z-10">
            <img
              src={data.avatar}
              alt={data.name}
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-2xl font-bold text-white mb-1">{data.name}</h3>
          <p className="text-cyan-400 text-sm font-medium mb-6">{data.title}</p>

          <div className="w-full space-y-3">
            <a
              href={`tel:${data.mobile}`}
              className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors group"
            >
              <div className="p-2 rounded-full bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                <Phone className="h-4 w-4" />
              </div>
              <div className="text-left flex-1">
                <p className="text-xs text-slate-500 uppercase font-semibold">
                  Mobile
                </p>
                <p className="text-sm text-slate-200">{data.mobile}</p>
              </div>
            </a>

            <a
              href={`mailto:${data.email}`}
              className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors group"
            >
              <div className="p-2 rounded-full bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
              </div>
              <div className="text-left flex-1">
                <p className="text-xs text-slate-500 uppercase font-semibold">
                  Email
                </p>
                <p className="text-sm text-slate-200 truncate">{data.email}</p>
              </div>
            </a>

            <a
              href={data.website}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors group"
            >
              <div className="p-2 rounded-full bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                <Globe className="h-4 w-4" />
              </div>
              <div className="text-left flex-1">
                <p className="text-xs text-slate-500 uppercase font-semibold">
                  Portfolio
                </p>
                <p className="text-sm text-slate-200 truncate">
                  {data.website.replace(/^https?:\/\//, "")}
                </p>
              </div>
              <ExternalLink className="h-4 w-4 text-slate-600 group-hover:text-white transition-colors" />
            </a>

            <a
              href={data.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors group"
            >
              <div className="p-2 rounded-full bg-blue-700/10 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Linkedin className="h-4 w-4" />
              </div>
              <div className="text-left flex-1">
                <p className="text-xs text-slate-500 uppercase font-semibold">
                  LinkedIn
                </p>
                <p className="text-sm text-slate-200 truncate">
                  Connect on LinkedIn
                </p>
              </div>
              <ExternalLink className="h-4 w-4 text-slate-600 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section
      const sections = [
        "home",
        "experience",
        "skills",
        "projects",
        "education",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/src/assets/Devesh (1).pdf"; // your PDF path or URL
    link.download = "Devesh_CV.pdf"; // file name
    link.click();
  };

  const NavLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => {
    const isActive = activeSection === href.replace("#", "");
    return (
      <a
        href={href}
        className={`relative px-2 py-1 transition-colors duration-300 hover:text-cyan-400 ${
          isActive ? "text-cyan-400 font-semibold" : "text-slate-400"
        }`}
      >
        {children}
        <span
          className={`absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform transition-transform duration-300 origin-left ${
            isActive ? "scale-x-100" : "scale-x-0"
          }`}
        />
      </a>
    );
  };

  return (
    <div className="min-h-screen font-sans text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-100">
      <BubbleBackground />

      {/* Header */}
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="font-bold text-2xl tracking-tighter flex items-center gap-2">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              &lt;DPS /&gt;
            </span>
          </div>

          <nav className="hidden md:flex gap-8 items-center text-sm font-medium">
            {["home", "experience", "projects", "skills", "education"].map(
              (item) => (
                <NavLink key={item} href={`#${item}`}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </NavLink>
              ),
            )}
          </nav>

          <div className="flex items-center gap-4">
            <Button
              onClick={handleDownloadCV}
              size="sm"
              className="hidden sm:flex bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white border-0 shadow-lg shadow-cyan-500/20 transition-all hover:scale-105"
            >
              <Download className="mr-2 h-4 w-4" /> CV
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-slate-100 hover:bg-slate-800/50 active:scale-95 transition-all"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-slate-950/95 backdrop-blur-xl border-l border-slate-800 text-slate-100 w-[300px] sm:w-[400px]"
              >
                <div className="flex flex-col h-full">
                  <div className="mt-8 mb-8 text-center">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent font-bold text-2xl tracking-tighter">
                      &lt;DPS /&gt;
                    </span>
                  </div>
                  <nav className="flex flex-col gap-2">
                    {[
                      "home",
                      "experience",
                      "projects",
                      "skills",
                      "education",
                    ].map((item) => (
                      <a
                        key={item}
                        href={`#${item}`}
                        className="text-lg font-medium px-4 py-3 rounded-lg hover:bg-slate-800/50 hover:text-cyan-400 transition-all flex items-center justify-between group"
                      >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-500" />
                      </a>
                    ))}
                  </nav>
                  <div className="mt-auto pb-8 px-4">
                    <Button
                      onClick={handleDownloadCV}
                      className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-lg shadow-cyan-900/20"
                    >
                      <Download className="mr-2 h-4 w-4" /> Download CV
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-6 pt-20 pb-12 space-y-16 relative z-10">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-[80vh] flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-16 py-10 lg:py-0"
        >
          <div className="flex-1 space-y-6 text-center lg:text-left px-4 lg:px-0">
            <RevealOnScroll>
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 backdrop-blur-sm border border-slate-800 text-cyan-400 text-xs md:text-sm font-medium mb-2 md:mb-4 mx-auto lg:mx-0 w-fit">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                  </span>
                  Available for Hire
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                  Hi, I'm <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    {portfolioData.personalInfo.name.split(" ")[0]}
                  </span>
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl text-slate-400 font-light h-8 md:h-10">
                  <TypingEffect
                    text={portfolioData.personalInfo.title}
                    speed={80}
                    delay={500}
                  />
                </h2>
              </div>
            </RevealOnScroll>

            <RevealOnScroll className="delay-200">
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {portfolioData.personalInfo.summary}
              </p>
            </RevealOnScroll>

            <RevealOnScroll className="delay-300">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 px-8 sm:px-0">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-slate-950 hover:bg-slate-200 font-bold px-8 rounded-full transition-transform hover:-translate-y-1 shadow-lg shadow-white/10"
                  onClick={() => setIsContactOpen(true)}
                >
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </Button>
                <div className="flex justify-center gap-3">
                  <Button
                    size="icon"
                    variant="outline"
                    className="w-12 h-12 rounded-full border-slate-700 bg-slate-900/50 hover:bg-slate-800 hover:text-cyan-400 hover:border-cyan-400 transition-all"
                  >
                    <a
                      href={portfolioData.personalInfo.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center w-full h-full"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="w-12 h-12 rounded-full border-slate-700 bg-slate-900/50 hover:bg-slate-800 hover:text-cyan-400 hover:border-cyan-400 transition-all"
                  >
                    <a
                      href={portfolioData.personalInfo.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center w-full h-full"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll className="flex-1 flex justify-center lg:justify-end">
            <div className="relative group w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-slate-800 bg-slate-900">
                <img
                  src={portfolioData.personalInfo.avatar}
                  alt="Profile"
                  className="w-full min-h-50 object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
              </div>
            </div>
          </RevealOnScroll>
        </section>

        <Separator className="bg-slate-800" />

        {/* Experience Section */}
        <section id="experience" className="space-y-8">
          <RevealOnScroll>
            <div className="flex flex-col items-center mb-8">
              <Badge
                variant="outline"
                className="mb-4 border-cyan-500/30 text-cyan-400 px-4 py-1"
              >
                Career Path
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
                Work Experience
              </h2>
            </div>
          </RevealOnScroll>

          <div className="max-w-4xl mx-auto relative border-l border-slate-800 ml-3 md:ml-12 space-y-8">
            {portfolioData.experience.map((job, index) => (
              <RevealOnScroll key={index} className="pl-6 md:pl-12 relative">
                <span className="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-cyan-500 ring-4 ring-slate-950 shadow-[0_0_10px_rgba(6,182,212,0.6)]" />

                <Card className="bg-slate-900/40 border-slate-800 backdrop-blur-sm hover:border-cyan-500/30 transition-all hover:shadow-2xl hover:shadow-cyan-900/10 group">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4">
                      <div>
                        <CardTitle className="text-xl md:text-2xl text-white group-hover:text-cyan-400 transition-colors">
                          {job.role}
                        </CardTitle>
                        <CardDescription className="text-base md:text-lg text-slate-400 mt-1 font-medium">
                          {job.company}
                        </CardDescription>
                      </div>
                      <Badge className="w-fit bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 border-0 text-xs md:text-sm">
                        {job.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center text-xs md:text-sm text-slate-500">
                      <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1 text-cyan-600" />{" "}
                      {job.location}
                    </div>
                    <ul className="space-y-3">
                      {job.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start text-sm md:text-base text-slate-300 group/item"
                        >
                          <ChevronRight className="w-4 h-4 md:w-5 md:h-5 mr-2 text-cyan-600 shrink-0 mt-0.5 group-hover/item:translate-x-1 transition-transform" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-24">
          <RevealOnScroll>
            <div className="flex flex-col items-center mb-12">
              <Badge
                variant="outline"
                className="mb-4 border-purple-500/30 text-purple-400 px-4 py-1"
              >
                Portfolio
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
                Featured Projects
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.projects.map((project, index) => (
              <RevealOnScroll key={index} className={`delay-${index * 100}`}>
                <Card className="h-full bg-slate-900/50 border-slate-800 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-900/20 group overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-cyan-500 to-purple-600 w-0 group-hover:w-full transition-all duration-500" />
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <div className="p-2 bg-slate-800 rounded-lg text-purple-400 group-hover:text-white group-hover:bg-purple-600 transition-colors">
                        <Terminal className="w-6 h-6" />
                      </div>
                      <Globe className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                    </div>
                    <CardTitle className="text-xl text-slate-100 group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-purple-400/80 font-mono text-xs">
                      {project.tech}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex gap-2 mt-auto">
                      {/* <Button variant="outline" size="sm" className="w-full border-slate-700 hover:bg-slate-800 text-slate-300">
                        View Details
                      </Button> */}
                    </div>
                  </CardContent>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-8">
          <RevealOnScroll>
            <div className="flex flex-col items-center mb-12">
              <Badge
                variant="outline"
                className="mb-4 border-blue-500/30 text-blue-400 px-4 py-1"
              >
                Expertise
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
                Technical Arsenal
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <RevealOnScroll>
              <Card className="bg-slate-900/50 border-slate-800 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-32 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <Code className="text-blue-500" /> Technical Skills
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {portfolioData.skills.technical.map((skill, i) => (
                    <Badge
                      key={i}
                      className="bg-slate-800 hover:bg-blue-600 hover:text-white text-slate-300 border-slate-700 transition-all duration-300 px-3 py-1.5 text-sm cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </RevealOnScroll>

            <RevealOnScroll className="delay-200">
              <Card className="bg-slate-900/50 border-slate-800 overflow-hidden relative">
                <div className="absolute bottom-0 left-0 p-32 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none" />
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <Cpu className="text-cyan-500" /> Tools & Workflow
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {portfolioData.skills.tools.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="border-slate-700 text-slate-400 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 px-3 py-1.5 text-sm cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </RevealOnScroll>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="pb-12">
          <RevealOnScroll>
            <div className="flex flex-col items-center mb-12">
              <Badge
                variant="outline"
                className="mb-4 border-emerald-500/30 text-emerald-400 px-4 py-1"
              >
                Academic
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
                Education
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-6">
            {portfolioData.education.map((edu, index) => (
              <RevealOnScroll key={index} className={`delay-${index * 100}`}>
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-emerald-500/50 transition-colors group h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-emerald-900/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                      <GraduationCap className="text-emerald-500 w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-slate-400 text-sm">{edu.institution}</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-800/50 flex items-center text-xs text-emerald-400 font-mono">
                    {edu.period}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>
      </main>

      <ContactDialog
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        data={portfolioData.personalInfo}
      />
    </div>
  );
};

export default Portfolio;
