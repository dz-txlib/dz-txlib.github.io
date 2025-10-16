'use client';

import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Download, Menu, X, Briefcase, GraduationCap, Server, Code, Share2, Database, Award, ArrowUp, ExternalLink, Calendar, ChevronRight, Sparkles, FileCode, Layers, GitBranch } from 'lucide-react';
import Image from 'next/image';

// --- Data ---
const personalInfo = {
  name: "Mohammad Talib Uddin",
  role: "Software Engineer",
  tagline: "Crafting Robust Backend Systems & Scalable Solutions",
  email: "talib.uddin626@gmail.com",
  phone: "+91-7725050626",
  location: "Bhopal, Madhya Pradesh, India",
  cv: "/Talib_Resume.pdf",
  linkedin: "https://www.linkedin.com/in/dz-txlib",
  github: "https://github.com/mohammadtalibuddin",
  image: "/1756839234292latest2.png"
};

const professionalSummary = {
  intro: "As a Software Engineer, I specialize in building robust and scalable backend systems that power modern applications.",
  about: "Detail-oriented and highly motivated Computer Science graduate with a strong foundation in software development, data structures, and object-oriented programming. Proficient in Java and Python with hands-on experience in building robust backend systems using Spring Boot, Django REST Framework, and Microservices architecture. Adept at working in Agile environments, collaborating in team settings, and delivering high-quality, scalable solutions that drive business value."
};

const services = [
  { icon: Server, title: "RESTful API Design", desc: "Developing clean, secure, and well-documented RESTful APIs with OpenAPI/Swagger specifications." },
  { icon: Code, title: "Backend Development", desc: "Building scalable server-side applications using Spring Boot, Django, and modern frameworks." },
  { icon: Share2, title: "Microservices Architecture", desc: "Designing and implementing distributed systems with independent, deployable services." },
  { icon: Database, title: "Database Management", desc: "Optimizing and maintaining relational databases with MySQL, PostgreSQL, and efficient query design." },
  { icon: Layers, title: "System Integration", desc: "Seamlessly integrating third-party services, payment gateways, and external APIs." },
  { icon: GitBranch, title: "Version Control & CI/CD", desc: "Managing codebases with Git and implementing automated deployment pipelines." }
];

const skills = {
  languages: ["Java", "Python", "JavaScript", "SQL", "HTML/CSS"],
  frameworks: ["Spring Boot", "Spring MVC", "Django REST Framework", "Hibernate", "JPA"],
  databases: ["MySQL", "PostgreSQL", "MongoDB"],
  tools: ["Git", "Docker", "Maven", "Postman", "Swagger", "Jenkins"],
  concepts: ["RESTful APIs", "Microservices", "OOP", "Data Structures", "Algorithms", "Design Patterns", "Agile/Scrum"]
};

const experience = [
  {
    company: "Tech Solutions Inc.",
    role: "Backend Developer",
    period: "Jan 2023 - Present",
    location: "Remote",
    highlights: [
      "Developed and maintained RESTful APIs serving 100K+ daily requests using Spring Boot",
      "Optimized database queries reducing response time by 40%",
      "Implemented microservices architecture for improved scalability",
      "Collaborated with cross-functional teams in Agile environment"
    ]
  },
  {
    company: "Innovation Labs",
    role: "Software Engineer Intern",
    period: "Jun 2022 - Dec 2022",
    location: "Bhopal, India",
    highlights: [
      "Built backend services for e-commerce platform using Django REST Framework",
      "Integrated payment gateway (Razorpay) for seamless transactions",
      "Wrote unit tests achieving 85% code coverage",
      "Participated in code reviews and sprint planning sessions"
    ]
  }
];

const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
    period: "2019 - 2023",
    grade: "CGPA: 8.2/10",
    highlights: [
      "Relevant Coursework: Data Structures, Algorithms, Database Management, Operating Systems, Software Engineering",
      "Final Year Project: E-Learning Management System with Spring Boot and MySQL"
    ]
  }
];

const certifications = [
  { name: "Oracle Certified Associate, Java SE 8 Programmer", issuer: "Oracle", year: "2023" },
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2023" },
  { name: "Spring Framework Certification", issuer: "Spring Academy", year: "2022" },
  { name: "Python for Data Science", issuer: "Coursera", year: "2022" }
];

const projects = [
  {
    title: "E-Learning Management System",
    category: "Full-Stack Application",
    desc: "Comprehensive LMS platform with course management, video streaming, and real-time collaboration features",
    tech: ["Spring Boot", "MySQL", "WebSocket", "JWT", "Swagger"],
    github: "https://github.com/mohammadtalibuddin/lms-platform",
    live: null,
    highlights: [
      "Implemented JWT-based authentication and authorization",
      "Built WebSocket service for real-time chat and notifications",
      "Integrated third-party APIs for video conferencing",
      "Designed RESTful APIs with comprehensive Swagger documentation"
    ]
  },
  {
    title: "E-Commerce Backend System",
    category: "Backend API",
    desc: "Scalable e-commerce backend with product management, order processing, and payment integration",
    tech: ["Spring Boot", "PostgreSQL", "Razorpay API", "Redis", "Docker"],
    github: "https://github.com/mohammadtalibuddin/ecommerce-api",
    live: null,
    highlights: [
      "Integrated Razorpay for payment processing and subscriptions",
      "Implemented caching layer with Redis for improved performance",
      "Built coupon and discount management system",
      "Deployed using Docker containers for scalability"
    ]
  },
  {
    title: "Microservices Task Manager",
    category: "Distributed System",
    desc: "Task management system built with microservices architecture for enhanced scalability",
    tech: ["Spring Boot", "Spring Cloud", "Eureka", "MySQL", "RabbitMQ"],
    github: "https://github.com/mohammadtalibuddin/task-manager-microservices",
    live: null,
    highlights: [
      "Designed service discovery with Eureka server",
      "Implemented inter-service communication with RabbitMQ",
      "Built API Gateway for routing and load balancing",
      "Containerized services with Docker Compose"
    ]
  },
  {
    title: "REST API Template",
    category: "Boilerplate",
    desc: "Production-ready Spring Boot template with best practices for rapid API development",
    tech: ["Spring Boot", "Spring Security", "MySQL", "JWT", "Swagger"],
    github: "https://github.com/mohammadtalibuddin/spring-boot-template",
    live: null,
    highlights: [
      "Pre-configured security with JWT authentication",
      "Exception handling and validation framework",
      "Automated API documentation with Swagger",
      "Database migration scripts with Flyway"
    ]
  }
];

// --- Component ---
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [typedRole, setTypedRole] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // Refs
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const certificationsRef = useRef(null);
  const contactRef = useRef(null);

  // Typing effect for role
  useEffect(() => {
    const roleText = personalInfo.role;
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= roleText.length) {
        setTypedRole(roleText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Loading animation
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'home', ref: heroRef },
        { id: 'about', ref: aboutRef },
        { id: 'services', ref: servicesRef },
        { id: 'skills', ref: skillsRef },
        { id: 'experience', ref: experienceRef },
        { id: 'education', ref: educationRef },
        { id: 'projects', ref: projectsRef },
        { id: 'certifications', ref: certificationsRef },
        { id: 'contact', ref: contactRef }
      ];

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref.current && section.ref.current.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }

      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigation items
  const navItems = [
    { name: 'Home', id: 'home', ref: heroRef },
    { name: 'About', id: 'about', ref: aboutRef },
    { name: 'Services', id: 'services', ref: servicesRef },
    { name: 'Skills', id: 'skills', ref: skillsRef },
    { name: 'Experience', id: 'experience', ref: experienceRef },
    { name: 'Education', id: 'education', ref: educationRef },
    { name: 'Projects', id: 'projects', ref: projectsRef },
    { name: 'Certifications', id: 'certifications', ref: certificationsRef },
    { name: 'Contact', id: 'contact', ref: contactRef }
  ];

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-blue-600 to-cyan-700 flex items-center justify-center z-[9999]">
        <div className="text-center">
          <div className="flex gap-3 justify-center mb-5">
            <div className="w-4 h-4 bg-white rounded-full animate-bounce" style={{ animationDelay: '-0.32s' }}></div>
            <div className="w-4 h-4 bg-white rounded-full animate-bounce" style={{ animationDelay: '-0.16s' }}></div>
            <div className="w-4 h-4 bg-white rounded-full animate-bounce"></div>
          </div>
          <p className="text-white text-lg font-medium tracking-wide">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 text-slate-200 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-950/95 backdrop-blur-lg shadow-lg z-[1000] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-5 py-5 flex justify-between items-center">
          <div className="flex items-center gap-2.5 text-2xl font-bold text-blue-500">
            <Sparkles size={24} className="animate-spin" style={{ animationDuration: '3s' }} />
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              {personalInfo.name.split(' ')[0]}
            </span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-8 list-none">
            {navItems.map(item => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.ref)}
                  className={`text-base font-medium transition-colors relative py-1 ${
                    activeSection === item.id ? 'text-blue-500' : 'text-slate-400 hover:text-blue-500'
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></span>
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-1.5 text-slate-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-900 px-5 py-5 border-t border-white/5">
            <ul className="flex flex-col gap-4 list-none">
              {navItems.map(item => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.ref)}
                    className={`text-lg font-medium transition-all p-2.5 rounded-lg w-full text-left ${
                      activeSection === item.id 
                        ? 'text-blue-500 bg-blue-500/10' 
                        : 'text-slate-400 hover:text-blue-500 hover:bg-blue-500/10'
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative px-5 pt-32 pb-16 bg-gradient-to-br from-slate-900 to-slate-950 overflow-hidden">
        {/* Background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[300px] h-[300px] bg-blue-500/10 rounded-full -top-24 -right-24 animate-float"></div>
          <div className="absolute w-[200px] h-[200px] bg-blue-500/10 rounded-full bottom-12 -left-12 animate-float-reverse"></div>
          <div className="absolute w-[150px] h-[150px] bg-blue-500/10 rounded-full top-1/2 left-[10%] animate-float"></div>
        </div>
        
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="text-center lg:text-left">
            <p className="text-xl font-medium mb-2.5 text-slate-400 opacity-90 animate-fadeInUp">Hello, I am</p>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-slate-100 animate-fadeInUp" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              {personalInfo.name}
            </h1>
            <div className="min-h-[45px] mb-4">
              <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent animate-fadeInUp" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                {typedRole}
                <span className={`ml-0.5 transition-opacity duration-100 text-blue-500 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>|</span>
              </h2>
            </div>
            <p className="text-xl mb-10 text-slate-400 animate-fadeInUp" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
              {personalInfo.tagline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 mb-10 animate-fadeInUp" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
              <a 
                href={personalInfo.cv} 
                download 
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/40 transition-all"
              >
                <Download size={18} />
                Download CV
              </a>
              <button 
                onClick={() => scrollToSection(contactRef)} 
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-full bg-blue-500/10 text-blue-500 border-2 border-blue-500/30 hover:bg-blue-500/20 hover:-translate-y-0.5 transition-all"
              >
                Get in Touch
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start animate-fadeInUp" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
              <a href={`mailto:${personalInfo.email}`} className="w-11 h-11 flex items-center justify-center bg-blue-500/10 rounded-full text-blue-500 border border-blue-500/20 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:-translate-y-1 hover:shadow-md hover:shadow-blue-500/30 transition-all" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center bg-blue-500/10 rounded-full text-blue-500 border border-blue-500/20 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:-translate-y-1 hover:shadow-md hover:shadow-blue-500/30 transition-all" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center bg-blue-500/10 rounded-full text-blue-500 border border-blue-500/20 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:-translate-y-1 hover:shadow-md hover:shadow-blue-500/30 transition-all" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center animate-fadeIn" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl">
                <Image
                  src={personalInfo.image}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                  quality={95}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 text-slate-400 animate-fadeIn" style={{ animationDelay: '1.5s', animationFillMode: 'both' }}>
          <div className="w-6 h-10 border-2 border-blue-500 rounded-2xl relative">
            <div className="w-1 h-2 bg-blue-500 rounded-sm absolute top-2 left-1/2 -translate-x-1/2 animate-scroll"></div>
          </div>
          <p className="text-sm">Scroll Down</p>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-24 px-5 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-xl md:text-2xl font-semibold text-blue-500 mb-5 leading-relaxed">{professionalSummary.intro}</p>
              <p className="text-lg leading-relaxed text-slate-400 mb-10">{professionalSummary.about}</p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex gap-4 p-5 bg-slate-900 rounded-xl border border-blue-500/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg hover:shadow-black/30 transition-all">
                  <Mail className="text-blue-500 flex-shrink-0" size={20} />
                  <div className="text-left">
                    <p className="text-sm font-semibold text-slate-500 mb-1">Email</p>
                    <p className="text-base text-slate-200 break-words">{personalInfo.email}</p>
                  </div>
                </div>
                <div className="flex gap-4 p-5 bg-slate-900 rounded-xl border border-blue-500/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg hover:shadow-black/30 transition-all">
                  <Phone className="text-blue-500 flex-shrink-0" size={20} />
                  <div className="text-left">
                    <p className="text-sm font-semibold text-slate-500 mb-1">Phone</p>
                    <p className="text-base text-slate-200">{personalInfo.phone}</p>
                  </div>
                </div>
                <div className="flex gap-4 p-5 bg-slate-900 rounded-xl border border-blue-500/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg hover:shadow-black/30 transition-all">
                  <MapPin className="text-blue-500 flex-shrink-0" size={20} />
                  <div className="text-left">
                    <p className="text-sm font-semibold text-slate-500 mb-1">Location</p>
                    <p className="text-base text-slate-200">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-24 px-5 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-4">What I Do</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
            <p className="text-lg text-slate-400 mt-4">Specialized services in backend development and system architecture</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-10 bg-slate-950 rounded-2xl text-center border border-blue-500/10 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-xl hover:shadow-black/30 transition-all group">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:rotate-y-180 transition-transform duration-500">
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-4">{service.title}</h3>
                <p className="text-base text-slate-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-24 px-5 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900 p-8 rounded-2xl border border-blue-500/10 hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30 transition-all">
              <h3 className="flex items-center gap-3 text-xl font-bold mb-5 text-slate-100">
                <FileCode size={24} />
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.languages.map((skill, index) => (
                  <span key={index} className="px-5 py-2.5 bg-blue-500/10 rounded-full text-sm font-medium border border-blue-500/20 text-slate-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/30 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl border border-blue-500/10 hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30 transition-all">
              <h3 className="flex items-center gap-3 text-xl font-bold mb-5 text-slate-100">
                <Layers size={24} />
                Frameworks & Libraries
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.frameworks.map((skill, index) => (
                  <span key={index} className="px-5 py-2.5 bg-blue-500/10 rounded-full text-sm font-medium border border-blue-500/20 text-slate-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/30 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl border border-blue-500/10 hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30 transition-all">
              <h3 className="flex items-center gap-3 text-xl font-bold mb-5 text-slate-100">
                <Database size={24} />
                Databases
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.databases.map((skill, index) => (
                  <span key={index} className="px-5 py-2.5 bg-blue-500/10 rounded-full text-sm font-medium border border-blue-500/20 text-slate-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/30 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl border border-blue-500/10 hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30 transition-all">
              <h3 className="flex items-center gap-3 text-xl font-bold mb-5 text-slate-100">
                <Server size={24} />
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="px-5 py-2.5 bg-blue-500/10 rounded-full text-sm font-medium border border-blue-500/20 text-slate-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/30 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 bg-slate-900 p-8 rounded-2xl border border-blue-500/10 hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30 transition-all">
              <h3 className="flex items-center gap-3 text-xl font-bold mb-5 text-slate-100">
                <Code size={24} />
                Core Concepts
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.concepts.map((skill, index) => (
                  <span key={index} className="px-5 py-2.5 bg-blue-500/10 rounded-full text-sm font-medium border border-blue-500/20 text-slate-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/30 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} className="py-24 px-5 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500"></div>
            
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-20 md:pl-32 mb-12 last:mb-0">
                <div className="absolute left-5 md:left-9 w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/40">
                  <Briefcase size={20} />
                </div>
                <div className="bg-slate-950 p-8 rounded-2xl border border-blue-500/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg hover:shadow-black/30 transition-all">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2.5 gap-5 md:gap-0">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-100">{exp.role}</h3>
                    <span className="flex items-center gap-1.5 text-sm text-slate-400 whitespace-nowrap">
                      <Calendar size={16} />
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-base text-blue-500 font-semibold mb-5">{exp.company} • {exp.location}</p>
                  <ul className="list-none p-0">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="pl-6 mb-3 text-slate-400 leading-relaxed relative before:content-['▹'] before:absolute before:left-0 before:text-blue-500 before:font-bold">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section ref={educationRef} className="py-24 px-5 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-4">Education</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-3xl mx-auto">
            {education.map((edu, index) => (
              <div key={index} className="bg-slate-900 p-10 rounded-2xl text-center border border-blue-500/10 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-xl hover:shadow-black/30 transition-all">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white">
                  <GraduationCap size={40} />
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-4 leading-snug">{edu.degree}</h3>
                <p className="text-base text-blue-500 font-semibold mb-2.5">{edu.institution}</p>
                <p className="text-sm text-slate-400 mb-2">{edu.period}</p>
                <p className="text-base text-green-400 font-semibold mb-5">{edu.grade}</p>
                <ul className="list-none p-0 text-left">
                  {edu.highlights.map((highlight, idx) => (
                    <li key={idx} className="pl-6 mb-2.5 text-slate-400 leading-relaxed relative text-sm before:content-['▹'] before:absolute before:left-0 before:text-blue-500 before:font-bold">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-24 px-5 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
            <p className="text-lg text-slate-400 mt-4">Showcase of my recent work and contributions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-950 p-9 rounded-2xl border border-blue-500/10 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-xl hover:shadow-black/30 transition-all">
                <div className="flex justify-between items-center mb-5">
                  <span className="text-xs font-semibold text-blue-500 bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20">
                    {project.category}
                  </span>
                  <div className="flex gap-2.5">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center bg-blue-500/10 rounded-full text-blue-500 border border-blue-500/20 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/30 transition-all" aria-label="GitHub">
                        <Github size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center bg-blue-500/10 rounded-full text-blue-500 border border-blue-500/20 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/30 transition-all" aria-label="Live Demo">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-100 mb-4">{project.title}</h3>
                <p className="text-base text-slate-400 leading-relaxed mb-5">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2.5 mb-5">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="text-[13px] px-3 py-1.5 bg-blue-500/10 text-slate-200 rounded-2xl font-medium border border-blue-500/20">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.highlights && (
                  <ul className="list-none p-0 border-t border-blue-500/10 pt-5">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="pl-6 mb-2.5 text-slate-400 leading-relaxed relative text-sm before:content-['▹'] before:absolute before:left-0 before:text-blue-500 before:font-bold">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section ref={certificationsRef} className="py-24 px-5 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-4">Certifications</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-slate-900 p-9 rounded-2xl text-center border border-blue-500/10 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-xl hover:shadow-black/30 transition-all">
                <Award className="text-yellow-500 mx-auto mb-5" size={32} />
                <h3 className="text-lg font-bold text-slate-100 mb-3 leading-snug">{cert.name}</h3>
                <p className="text-[15px] text-blue-500 font-semibold mb-2">{cert.issuer}</p>
                <p className="text-sm text-slate-400">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-24 px-5 bg-gradient-to-br from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
            <p className="text-lg text-slate-400 mt-4">Feel free to reach out for collaborations or just a friendly chat</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="flex flex-col gap-8">
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-500 border border-blue-500/20">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-slate-100">Email</h3>
                  <a href={`mailto:${personalInfo.email}`} className="text-base text-slate-400 hover:text-blue-500 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-500 border border-blue-500/20">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-slate-100">Phone</h3>
                  <a href={`tel:${personalInfo.phone}`} className="text-base text-slate-400 hover:text-blue-500 transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-500 border border-blue-500/20">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-slate-100">Location</h3>
                  <p className="text-base text-slate-400">{personalInfo.location}</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-slate-100">Connect With Me</h3>
                <div className="flex gap-4">
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 rounded-full text-blue-500 font-semibold border border-blue-500/20 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/30 transition-all">
                    <Linkedin size={20} />
                    LinkedIn
                  </a>
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 rounded-full text-blue-500 font-semibold border border-blue-500/20 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/30 transition-all">
                    <Github size={20} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/5 p-10 rounded-2xl border border-blue-500/10">
              <form className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-200">Name</label>
                  <input type="text" id="name" name="name" required placeholder="Your Name" className="px-5 py-3.5 border border-blue-500/20 rounded-lg text-base bg-slate-950/50 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:bg-slate-950/80 transition-all" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-200">Email</label>
                  <input type="email" id="email" name="email" required placeholder="your.email@example.com" className="px-5 py-3.5 border border-blue-500/20 rounded-lg text-base bg-slate-950/50 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:bg-slate-950/80 transition-all" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-slate-200">Subject</label>
                  <input type="text" id="subject" name="subject" required placeholder="Project Inquiry" className="px-5 py-3.5 border border-blue-500/20 rounded-lg text-base bg-slate-950/50 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:bg-slate-950/80 transition-all" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-200">Message</label>
                  <textarea id="message" name="message" rows="5" required placeholder="Your message here..." className="px-5 py-3.5 border border-blue-500/20 rounded-lg text-base bg-slate-950/50 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:bg-slate-950/80 transition-all resize-vertical font-sans"></textarea>
                </div>

                <button type="submit" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/40 transition-all w-full">
                  Send Message
                  <ChevronRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950/60 text-slate-400 py-10 px-5 text-center border-t border-blue-500/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-base mb-2 text-slate-200">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/50 transition-all z-[999] animate-fadeInUp"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }

        @keyframes scroll {
          0% { opacity: 1; transform: translateX(-50%) translateY(0); }
          100% { opacity: 0; transform: translateX(-50%) translateY(15px); }
        }

        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: float-reverse 8s ease-in-out infinite;
        }

        .animate-scroll {
          animation: scroll 2s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
