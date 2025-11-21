'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Mail, Phone, MapPin, Linkedin, Github, Download, Menu, X,
  Briefcase, GraduationCap, Server, Code, Share2, Database,
  Award, ArrowUp, ExternalLink, Calendar, ChevronRight,
  Sparkles, FileCode, Layers, GitBranch, Send, Clock,
  CheckCircle2, Zap, Target, Users
} from 'lucide-react';
import Image from 'next/image';



// ==================== DATA CONFIGURATION ====================

const personalInfo = {
  name: "Mohammad Talib Uddin",
  role: "Backend Engineer",
  headline: "I Build Production-Ready Backend Systems That Scale",
  tagline: "Backend specialist who's optimized systems serving 1000+ users and reduced query times by 40%. I turn complex business problems into elegant, scalable solutions using Java, Python, and cloud technologies.",
  email: "talib.uddin626@gmail.com",
  phone: "+91-7725050626",
  location: "Bhopal, Madhya Pradesh, India",
  timezone: "IST (UTC+5:30)",
  responseTime: "I typically respond within 24 hours",
  cv: '/Talib_Software_Engineer.pdf',
  linkedin: "https://www.linkedin.com/in/dz-txlib/",
  github: "https://github.com/mohammadtalibuddin",
  website: "https://talibuddin.me",
  image: '/profile.png',
  availability: "Open to freelance projects and full-time opportunities"
};

const professionalSummary = {
  intro: "I'm a Backend Engineer who loves building systems that actually work in the real world. With 2+ years of hands-on experience, I specialize in crafting scalable microservices and RESTful APIs using Java (Spring Boot) and Python (Django REST Framework).",

  story: "My journey into backend development started in college when I built my first REST API for a student project. What began as a simple CRUD application sparked something in me—the thrill of solving complex problems and seeing code transform into real solutions. Fast forward to today, and I've architected multi-tenant Learning Management Systems serving thousands of students, built AI-powered recruitment platforms, and optimized e-commerce backends handling thousands of daily transactions. Each project taught me something new: the importance of clean architecture, the beauty of well-optimized queries, and the satisfaction of deploying code that makes a real difference.",

  expertise: "I specialize in designing robust backend architectures that don't break under pressure. My sweet spot? Taking complex business requirements and translating them into elegant, maintainable code. I've spent countless hours optimizing database queries (achieving up to 40% faster response times), implementing secure authentication systems protecting sensitive data, and building microservices that scale gracefully. Whether it's integrating payment gateways, setting up Redis caching layers, or deploying on AWS, I focus on solutions that are both powerful and sustainable.",

  approach: "I'm a firm believer in the 'measure twice, cut once' philosophy. Before writing a single line of code, I invest time understanding the problem deeply. I write code that my future self (and teammates) won't curse at—clean, documented, and following SOLID principles. I'm also passionate about automation; if I have to do something twice, I'll spend the time building a script to do it forever. Continuous learning is non-negotiable for me—currently exploring Kafka, Kubernetes, and diving deeper into distributed systems.",

  beyond: "When I'm not debugging production issues or optimizing SQL queries, you'll find me experimenting with new technologies, contributing to open-source projects, or mentoring junior developers (because someone once helped me, and I believe in paying it forward). I also enjoy automating everyday tasks—I recently built a browser automation tool using Python and RPA frameworks just for fun. Outside of tech, I'm into exploring new cuisines, reading about system design, and occasionally binge-watching tech talks on YouTube.",

  impact: "Throughout my career, I've integrated 50+ RESTful APIs, deployed production systems serving 1000+ active users, and collaborated with cross-functional teams to ship features that users actually love. I've worked on everything from solo projects where I owned the entire backend to team environments where I contributed to architectural decisions. My proudest achievement? Reducing infrastructure costs by 60% for an educational platform while improving performance—proof that good engineering benefits both users and the bottom line.",

  cta: "I'm currently open to exciting backend engineering opportunities where I can build impactful systems and work with talented teams. If you're working on challenging problems involving scalability, microservices, or distributed systems—let's connect!"
};


const stats = [
  { icon: Code, number: "50+", label: "APIs Integrated" },
  { icon: Zap, number: "40%", label: "Performance Boost" },
  { icon: Target, number: "99.9%", label: "Uptime Achieved" },
  { icon: Users, number: "1000+", label: "Users Served" }
];

const services = [
  {
    icon: Code,
    title: 'Backend Development',
    desc: 'Building robust and scalable server-side applications using Java (Spring Boot) and Python (Django REST Framework).',
    tags: ['Spring Boot', 'Django', 'FastAPI']
  },
  {
    icon: Share2,
    title: 'Microservices Architecture',
    desc: 'Designing and implementing distributed systems with independent, reliable, and versioned microservices.',
    tags: ['Microservices', 'Service Mesh', 'API Gateway']
  },
  {
    icon: Server,
    title: 'RESTful API Design',
    desc: 'Developing clean, secure, and well-documented RESTful APIs with JWT authentication, RBAC, and comprehensive documentation.',
    tags: ['REST', 'JWT', 'Swagger/OpenAPI']
  },
  {
    icon: Database,
    title: 'Database Optimization',
    desc: 'Architecting and optimizing relational & NoSQL databases with efficient schema design, indexing, and caching strategies.',
    tags: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis']
  },
  {
    icon: Layers,
    title: 'Cloud & DevOps',
    desc: 'Deploying and managing applications on AWS and Hostinger VPS, implementing CI/CD pipelines for automated deployment.',
    tags: ['AWS', 'Docker', 'CI/CD', 'Nginx']
  },
  {
    icon: GitBranch,
    title: 'System Architecture',
    desc: 'Architecting modular, scalable, and high-availability software solutions that solve complex business challenges.',
    tags: ['System Design', 'Scalability', 'Performance']
  },
];

const skills = {
  "Backend Development": {
    items: [
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Django REST', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
      { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
      { name: 'Hibernate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg' }
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  "Databases": {
    items: [
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' }
    ],
    color: 'from-green-500 to-emerald-500'
  },
  "Cloud & DevOps": {
    items: [
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'CI/CD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg' },
      { name: 'Nginx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
      { name: 'Linux/VPS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' }
    ],
    color: 'from-orange-500 to-red-500'
  },
  "Tools & Version Control": {
    items: [
      { name: 'Git/GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
      { name: 'Swagger', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg' },
      { name: 'IntelliJ IDEA', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' }
    ],
    color: 'from-purple-500 to-pink-500'
  },
  "Architecture & Concepts": {
    items: [
      { name: 'RESTful APIs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
      { name: 'Microservices', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
      { name: 'System Design', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'JWT & RBAC', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oauth/oauth-original.svg' },
      { name: 'OOP & SOLID', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' }
    ],
    color: 'from-indigo-500 to-blue-500'
  }
};

const currentlyLearning = [
  { name: 'Apache Kafka', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg' },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { name: 'Elasticsearch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg' },
  { name: 'gRPC', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grpc/grpc-original.svg' }
];



const experience = [
  {
    company: "Affy Cloud IT Solutions",
    role: "Software Engineer",
    type: "(Intern → Full-Time)",
    period: "March 2024 – Present",
    location: "Bhopal, India",
    current: true,
    highlights: [
      "Architected and developed backend systems for multiple client and in-house products using Java (Spring Boot) and Python (Django)",
      "Designed scalable microservices architecture and integrated 50+ RESTful APIs with focus on reliability and backward compatibility",
      "Implemented enterprise-grade security with JWT authentication and RBAC across multiple applications",
      "Optimized database schemas (MySQL, PostgreSQL, MongoDB) and implemented Redis caching, reducing query latency by 35%",
      "Collaborated with DevOps to configure AWS and Hostinger VPS infrastructure and set up automated CI/CD pipelines",
      "Mentored 3+ junior developers on backend design patterns, clean code practices, and debugging strategies"
    ],
    technologies: ["Spring Boot", "Django", "MySQL", "PostgreSQL", "MongoDB", "Redis", "AWS", "Docker"]
  },
  {
    company: "Orange Antelopes",
    role: "Software Engineer Intern",
    type: "",
    period: "Sep 2023 – Feb 2024",
    location: "Bhopal, India",
    current: false,
    highlights: [
      "Developed scalable backend systems using Java Spring Boot, building RESTful APIs for web and mobile applications",
      "Implemented database schema design, query optimization, and secure authentication mechanisms",
      "Collaborated with frontend teams to ensure seamless API integration and efficient data flow",
      "Gained hands-on experience with cloud deployment, server configuration, and CI/CD pipelines"
    ],
    technologies: ["Spring Boot", "MySQL", "REST APIs", "Cloud Deployment"]
  }
];

const projects = [
  {
    title: "TUTORIO - Multi-Tenant LMS Platform",
    category: "Ed-Tech Solution",
    tagline: "Enterprise Learning Management System serving 1000+ students",
    problem: "Educational institutions needed a comprehensive digital platform to manage courses, conduct live classes, and handle student assessments while maintaining data isolation between organizations.",
    solution: "Engineered a multi-tenant Learning Management System enabling schools, universities, and coaching centers to manage their own digital learning ecosystems with complete data isolation.",
    role: "Backend Engineer",
    impact: [
      "Reduced query response time by 40% through Redis caching",
      "Achieved 99.9% uptime serving 1000+ concurrent users",
      "Processed 10,000+ course enrollments and transactions"
    ],
    tech: ["Spring Boot", "Microservices", "MySQL", "Redis", "JWT", "AWS"],
    github: null,
    live: "https://web.tutorio.in/",
    highlights: [
      "Developed backend using Spring Boot Microservices with secure multi-tenant data isolation architecture",
      "Integrated comprehensive course management: live/recorded classes, test series, eBooks, and real-time doubt-solving",
      "Implemented role-based access control (RBAC) with JWT authentication for Admins, Teachers, and Students",
      "Built e-commerce module enabling course purchases, payment processing, and enrollment management",
      "Optimized database schema and Redis caching layer, improving performance by 40%",
      "Deployed on AWS with CI/CD pipelines ensuring 99.9% uptime"
    ],
    features: [
      "Multi-tenant architecture with complete data isolation",
      "Live and recorded class management",
      "Integrated test series and assessment system",
      "E-commerce functionality for course sales",
      "Real-time doubt solving platform",
      "Comprehensive analytics dashboard"
    ]
  },
  {
    title: "WhatARecruiter - AI Recruitment Platform",
    category: "HR Tech Solution",
    tagline: "Intelligent hiring platform with AI-powered candidate matching",
    problem: "HR teams struggled with manual resume screening and inefficient hiring workflows, leading to prolonged recruitment cycles.",
    solution: "Developed an AI-powered Recruitment Management System that automates resume parsing and matches candidates to job requirements.",
    role: "Backend Engineer",
    impact: [
      "Reduced recruitment cycle time by 50%",
      "Improved candidate-job matching accuracy by 35%",
      "Processed 5,000+ resumes with AI parsing"
    ],
    tech: ["Spring Boot", "Microservices", "FastAPI", "MySQL", "Redis", "Hostinger VPS", "AI/ML"],
    github: null,
    live: null,
    highlights: [
      "Built Spring Boot microservices integrated with FastAPI-based AI service for intelligent resume parsing",
      "Implemented AI-driven resume analysis to extract and structure candidate data automatically",
      "Designed dynamic job requisition and approval workflows for admins, recruiters, and hiring managers",
      "Optimized MySQL queries with Redis caching, improving response times by 35%",
      "Deployed on Hostinger VPS with microservice orchestration ensuring high availability"
    ],
    features: [
      "AI-powered resume parsing and analysis",
      "Intelligent candidate-job matching",
      "Dynamic workflow management",
      "Multi-role access control",
      "Automated candidate recommendations",
      "Real-time hiring analytics"
    ]
  },
  {
    title: "E-Commerce Platform Suite",
    category: "Multi-Industry E-Commerce",
    tagline: "Scalable e-commerce backend powering 3 live platforms",
    problem: "Small to medium businesses needed robust e-commerce solutions for online orders, payment processing, and shipment tracking.",
    solution: "Architected a reusable, modular e-commerce backend framework powering multiple online stores.",
    role: "Backend Architect & Lead Developer",
    impact: [
      "Reduced page load time by 40% through optimization",
      "Processed 15,000+ orders across platforms",
      "Achieved 99% payment success rate"
    ],
    tech: ["Spring Boot", "Microservices", "Razorpay API", "Shiprocket API", "MySQL", "Redis"],
    github: null,
    live: [
      { name: "Tarhaab Fashion", url: "https://tarhaab.com/" },
      { name: "Meher Sambalpur Hub", url: "https://mehersambalpurihub.com/" },
      { name: "M Organic Farm", url: "https://morganicfarm.com/" }
    ],
    highlights: [
      "Engineered modular backend framework supporting multiple e-commerce platforms",
      "Implemented product catalog, cart management, order tracking, and secure checkout",
      "Integrated Razorpay payment gateway and automated shipment tracking via Shiprocket API",
      "Optimized backend with caching and connection pooling (40% faster response times)",
      "Built analytics dashboards for real-time sales and inventory insights"
    ],
    features: [
      "Multi-platform support with shared backend",
      "Guest and registered user checkout",
      "Razorpay payment integration",
      "Automated shipment tracking",
      "Real-time inventory management",
      "Sales analytics dashboard"
    ]
  },
  {
    title: "Dclean - Laundry Management System",
    category: "Operations Management",
    tagline: "Complete laundry operations platform with multi-role access",
    problem: "Laundry businesses needed a digital solution to manage orders and track pickups/deliveries across different user roles.",
    solution: "Developed a comprehensive Laundry Management System using Django REST Framework.",
    role: "Backend Architect & Lead Developer",
    impact: [
      "Improved data retrieval speed by 30%",
      "Streamlined operations for 500+ orders/month",
      "Reduced manual processing time by 60%"
    ],
    tech: ["Django REST Framework", "PostgreSQL", "Nginx", "Gunicorn"],
    github: null,
    live: "https://dclean.me/",
    highlights: [
      "Developed backend with separate panels for Admin, Customer, and Delivery Agents",
      "Implemented end-to-end laundry operations: order creation, scheduling, payment processing",
      "Built mobile-friendly Delivery App API with real-time order assignments",
      "Created Admin Dashboard for order tracking and operational analytics",
      "Optimized database queries, improving retrieval speed by 30%"
    ],
    features: [
      "Multi-role access system",
      "Order management and tracking",
      "Automated pickup/delivery scheduling",
      "Payment and invoice generation",
      "Real-time delivery tracking",
      "Operational analytics"
    ]
  }
];

const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "SAM College of Engineering and Technology",
    period: "August 2021 - May 2025",
    location: "Bhopal, Madhya Pradesh",
    link: "https://samglobaluniversity.ac.in/"
  }
];

const certifications = [
  {
    name: 'Java Programming: Mastering the Fundamentals',
    issuer: 'Certificate of Excellence',
    year: 'Sep 2024'
  },
  {
    name: 'Blockchain Development: Building Robust Solutions',
    issuer: 'Certificate of Completion',
    year: 'Mar 2024'
  },
  {
    name: 'Java Programming: Foundations and Core Principles',
    issuer: 'Certificate of Achievement',
    year: 'Jan 2024'
  },
];

// ==================== MAIN COMPONENT ====================

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const certificationsRef = useRef(null);
  const contactRef = useRef(null);

  // Typing effect
  useEffect(() => {
    const text = personalInfo.headline;
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= text.length) {
        setTypedText(text.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
    return () => clearInterval(typingInterval);
  }, []);

  // Cursor blink
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Loading animation
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1200);
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
        { id: 'projects', ref: projectsRef },
        { id: 'education', ref: educationRef },
        { id: 'certifications', ref: certificationsRef },
        { id: 'contact', ref: contactRef },
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

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { name: 'Home', id: 'home', ref: heroRef },
    { name: 'About', id: 'about', ref: aboutRef },
    { name: 'Services', id: 'services', ref: servicesRef },
    { name: 'Skills', id: 'skills', ref: skillsRef },
    { name: 'Experience', id: 'experience', ref: experienceRef },
    { name: 'Projects', id: 'projects', ref: projectsRef },
    { name: 'Contact', id: 'contact', ref: contactRef },
  ];

  // Replace the loading screen return block
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-slate-950 flex items-center justify-center z-[9999]">
        <div className="text-center">
          {/* Logo/Name Animation */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-2 animate-fadeIn">
              Mohammad Talib Uddin
            </h1>
            <p className="text-lg text-blue-400 font-medium animate-fadeIn" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              Software Engineer
            </p>
          </div>

          {/* Modern Progress Bar */}
          <div className="w-64 h-1 bg-slate-800 rounded-full overflow-hidden mx-auto">
            <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-loading"></div>
          </div>
        </div>

        <style jsx>{`
        @keyframes loading {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        .animate-loading {
          animation: loading 2s ease-in-out;
        }
      `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">

      {/* ==================== NAVIGATION - UPDATED ==================== */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => scrollToSection(heroRef)}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Code className="text-white" size={20} />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                MTU
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.ref)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${activeSection === item.id
                    ? 'text-white'
                    : 'text-gray-700 hover:text-blue-600'
                    }`}
                >
                  {/* Active Background */}
                  {activeSection === item.id && (
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg shadow-md"></span>
                  )}

                  {/* Hover Background */}
                  <span className={`absolute inset-0 bg-blue-50 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 ${activeSection === item.id ? 'hidden' : ''
                    }`}></span>

                  {/* Text */}
                  <span className="relative z-10">{item.name}</span>

                  {/* Active Indicator Dot */}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></span>
                  )}
                </button>
              ))}

              {/* Resume Button */}
              <a
                href={personalInfo.cv}
                download
                className="ml-3 group relative px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 overflow-hidden"
              >
                {/* Shimmer Effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>

                <Download size={16} className="relative z-10 group-hover:animate-bounce" />
                <span className="relative z-10">Resume</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-blue-50 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.ref)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 transform ${activeSection === item.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md scale-105'
                  : 'text-gray-700 hover:bg-blue-50 hover:translate-x-2'
                  }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <span className="flex items-center justify-between">
                  {item.name}
                  {activeSection === item.id && (
                    <ChevronRight size={16} className="animate-pulse" />
                  )}
                </span>
              </button>
            ))}

            {/* Mobile Resume Button */}
            <a
              href={personalInfo.cv}
              download
              className="w-full mt-3 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download size={18} className="animate-bounce" />
              Download Resume
            </a>
          </div>
        </div>
      </nav>



      {/* ==================== HERO SECTION ==================== */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-slate-50 opacity-50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-5 text-center md:text-left">
            {/* Name */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {personalInfo.name}
              </h1>

              {/* Static Headline - No typing animation */}
              <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-blue-600 leading-tight">
                {personalInfo.headline}
              </h2>
            </div>

            {/* Tagline */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              {personalInfo.tagline}
            </p>

            {/* CTA Buttons - 3 buttons in same line on desktop */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-2">
              <button
                onClick={() => scrollToSection(projectsRef)}
                className="group w-full sm:w-auto px-5 md:px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out whitespace-nowrap"
              >
                <span className="flex items-center justify-center gap-2">
                  View My Work
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>

              <a
                href={personalInfo.cv}
                download
                className="group w-full sm:w-auto px-5 md:px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out inline-flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Download size={18} className="group-hover:animate-bounce" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => scrollToSection(contactRef)}
                className="group w-full sm:w-auto px-5 md:px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out whitespace-nowrap"
              >
                <span className="flex items-center justify-center gap-2">
                  Let&apos;s Connect
                  <Mail size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                </span>

              </button>
            </div>


            {/* Social Links - Bottom left */}
            <div className="flex gap-4 justify-center md:justify-start pt-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="text-blue-600" size={24} />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <Github className="text-gray-900" size={24} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                aria-label="Email Contact"
              >
                <Mail className="text-blue-600" size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image - Smaller and more compact */}
          <div className="relative flex justify-center items-center order-first md:order-last">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px]">
              {/* Outer animated gradient ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse opacity-30"></div>

              {/* Middle rotating gradient ring */}
              <div className="absolute inset-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-spin-slow opacity-20"></div>

              {/* Image container */}
              <div className="absolute inset-6 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100 shadow-2xl">
                <Image
                  src={personalInfo.image}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 380px, 420px"
                  style={{
                    objectPosition: '50% 23%'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <ChevronRight size={32} className="text-blue-600 rotate-90" />
        </div>
      </section>

      {/* ==================== STATS SECTION ==================== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mb-4">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ==================== ABOUT SECTION - UPDATED ==================== */}
      <section ref={aboutRef} className="py-20 bg-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-200 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                  <Sparkles className="text-white" size={28} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  About Me
                </h2>
              </div>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Get to know my journey, expertise, and what drives me
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Main Content Card */}
          <div className="bg-gradient-to-br from-white via-slate-50 to-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Top Gradient Bar */}
            <div className="h-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600"></div>

            <div className="p-8 md:p-12 space-y-10">
              {/* Introduction - Highlighted */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl opacity-30"></div>
                <div className="relative bg-white rounded-2xl p-6 border-2 border-blue-200 shadow-md">
                  <p className="text-gray-700 leading-relaxed text-lg font-medium">
                    {professionalSummary.intro}
                  </p>
                </div>
              </div>

              {/* Content Sections */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* My Journey */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-2xl">🚀</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">My Journey</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {professionalSummary.story}
                    </p>
                  </div>
                </div>

                {/* What I Do Best */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200 hover:border-purple-400 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-2xl">⚡</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">What I Do Best</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {professionalSummary.expertise}
                    </p>
                  </div>
                </div>

                {/* How I Work */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 hover:border-green-400 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-2xl">🎯</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">How I Work</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {professionalSummary.approach}
                    </p>
                  </div>
                </div>

                {/* Beyond Code */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border-2 border-orange-200 hover:border-orange-400 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-2xl">🌟</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Beyond Code</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {professionalSummary.beyond}
                    </p>
                  </div>
                </div>
              </div>

              {/* Real Impact - Full Width */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border-2 border-indigo-200 hover:border-indigo-400 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl">📈</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Real Impact</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {professionalSummary.impact}
                  </p>
                </div>
              </div>

              {/* Call to Action Banner */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-2xl opacity-20 blur-lg transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <Zap className="text-yellow-300" size={32} />
                    <h3 className="text-2xl font-bold text-white">Let&apos;s Work Together!</h3>
                  </div>
                  <p className="text-blue-100 leading-relaxed mb-6">
                    {professionalSummary.cta}
                  </p>
                  <button
                    onClick={() => scrollToSection(contactRef)}
                    className="px-6 py-3 bg-white text-blue-600 rounded-xl font-bold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
                  >
                    <span>Get in Touch</span>
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              {/* Contact Info Grid */}
              <div className="grid md:grid-cols-3 gap-6 pt-8 border-t-2 border-gray-200">
                {/* Email */}
                <div className="group flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold mb-1">Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-blue-600 hover:text-cyan-600 transition-colors break-all font-medium text-sm"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="group flex items-start gap-3 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold mb-1">Location</p>
                    <p className="text-gray-900 font-medium text-sm">📍 {personalInfo.location}</p>
                    <p className="text-xs text-gray-600">{personalInfo.timezone}</p>
                  </div>
                </div>

                {/* Availability */}
                <div className="group flex items-start gap-3 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold mb-1">Availability</p>
                    <p className="text-gray-900 font-medium text-sm">{personalInfo.availability}</p>
                    <p className="text-xs text-gray-600">{personalInfo.responseTime}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ==================== SERVICES SECTION - FIXED HEIGHTS ==================== */}
      <section ref={servicesRef} className="py-20 bg-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-cyan-50/50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                  <Briefcase className="text-white" size={28} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  What I Offer
                </h2>
              </div>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Specialized services in backend development and system architecture
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Services Grid - Fixed Heights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;

              // Different gradient colors for each service
              const gradients = [
                'from-blue-500 to-cyan-500',
                'from-purple-500 to-pink-500',
                'from-green-500 to-emerald-500',
                'from-orange-500 to-red-500',
                'from-indigo-500 to-purple-500',
                'from-cyan-500 to-blue-500'
              ];

              return (
                <div
                  key={index}
                  className="group relative h-full"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Glowing Background Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${gradients[index]} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>

                  {/* Service Card - Fixed Height with Flexbox */}
                  <div className="relative h-full flex flex-col bg-gradient-to-br from-slate-50 via-white to-blue-50 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 overflow-hidden border border-gray-100">
                    {/* Animated Top Border */}
                    <div className={`h-1.5 bg-gradient-to-r ${gradients[index]} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}></div>

                    <div className="p-8 flex flex-col flex-grow">
                      {/* Icon Container */}
                      <div className="relative mb-6">
                        {/* Icon Glow Ring */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${gradients[index]} rounded-2xl opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300`}></div>

                        {/* Icon Box */}
                        <div className={`relative w-16 h-16 bg-gradient-to-r ${gradients[index]} rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                          {/* Rotating Ring */}
                          <div className="absolute inset-0 border-2 border-white/30 rounded-2xl animate-spin-slow"></div>
                          <IconComponent className="text-white relative z-10" size={32} />
                        </div>

                        {/* Decorative Corner Badge */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-xs font-bold text-blue-600">★</span>
                        </div>
                      </div>

                      {/* Title - Fixed Height */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 min-h-[64px] flex items-start">
                        {service.title}
                      </h3>

                      {/* Description - Fixed Height with Line Clamp */}
                      <p className="text-gray-600 leading-relaxed mb-6 flex-grow line-clamp-3">
                        {service.desc}
                      </p>

                      {/* Tags - Always at Bottom */}
                      <div className="mt-auto">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {service.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="group/tag relative px-3 py-1.5 bg-white rounded-full text-sm font-medium border border-gray-200 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 cursor-default shadow-sm"
                              style={{
                                animationDelay: `${(index * 100) + (idx * 50)}ms`,
                              }}
                            >
                              {/* Tag Glow */}
                              <div className={`absolute inset-0 bg-gradient-to-r ${gradients[index]} rounded-full opacity-0 group-hover/tag:opacity-20 transition-opacity duration-300`}></div>

                              {/* Tag Text */}
                              <span className="relative z-10 text-gray-700 group-hover/tag:text-blue-600 transition-colors duration-300">
                                {tag}
                              </span>
                            </span>
                          ))}
                        </div>

                        {/* Bottom Accent Line */}
                        <div className={`h-1 bg-gradient-to-r ${gradients[index]} rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100`}></div>
                      </div>
                    </div>

                    {/* Decorative Corner Element */}
                    <div className="absolute top-0 right-0 w-20 h-20 opacity-5 pointer-events-none">
                      <div className={`w-full h-full bg-gradient-to-br ${gradients[index]} rounded-bl-full`}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-16 text-center">
            <div className="inline-block relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-2xl opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-6 rounded-2xl shadow-xl">
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                  <div className="text-left">
                    <h3 className="text-2xl font-bold mb-2">Ready to Build Something Great?</h3>
                    <p className="text-blue-100 text-sm">
                      Let&apos;s discuss how I can help bring your project to life
                    </p>

                  </div>
                  <button
                    onClick={() => scrollToSection(contactRef)}
                    className="group/btn flex-shrink-0 px-8 py-3 bg-white text-blue-600 rounded-xl font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                  >
                    <span>Get In Touch</span>
                    <ChevronRight size={20} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Animated Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-200/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </section>


      {/* ==================== SKILLS SECTION - LIGHT THEME ==================== */}
      <section ref={skillsRef} className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center animate-pulse shadow-lg">
                  <Code className="text-white" size={28} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Technical Arsenal
                </h2>
              </div>
            </div>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              Cutting-edge technologies I use to build production-ready systems
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Core Expertise Banner */}
          <div className="relative mb-16 group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 md:p-10 rounded-3xl shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Zap className="text-yellow-300 animate-bounce" size={32} />
                <h3 className="text-2xl md:text-3xl font-bold">Core Expertise</h3>
                <Zap className="text-yellow-300 animate-bounce" size={32} />
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 text-lg md:text-xl font-semibold">
                {['Java', 'Spring Boot', 'Microservices', 'MySQL', 'AWS', 'RESTful APIs'].map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300 cursor-default shadow-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {Object.entries(skills).map(([category, data], index) => (
              <div key={index} className="group relative">
                {/* Glowing Background */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${data.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>

                {/* Card */}
                <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-3 overflow-hidden border border-gray-100">
                  {/* Animated Top Border */}
                  <div className={`h-2 bg-gradient-to-r ${data.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}></div>

                  <div className="p-6">
                    {/* Category Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`px-5 py-2.5 bg-gradient-to-r ${data.color} text-white rounded-xl font-bold text-base shadow-lg transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-300`}>
                        {category}
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-md">
                        <span className="text-xl font-bold text-gray-600">
                          {data.items.length}
                        </span>
                      </div>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {data.items.map((skill, idx) => (
                        <div key={idx} className="group/item relative">
                          {/* Glow Effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-2xl opacity-0 group-hover/item:opacity-100 blur-md transition-opacity duration-300"></div>

                          {/* Skill Item */}
                          <div className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 p-4 rounded-2xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:-rotate-2 cursor-pointer">
                            <div className="flex flex-col items-center gap-3">
                              {/* Icon Container */}
                              <div className="relative w-12 h-12 flex items-center justify-center">
                                {/* Rotating Ring */}
                                <div className="absolute inset-0 border-2 border-blue-400/30 rounded-full animate-spin-slow opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                                <Image
                                  src={skill.icon}
                                  alt={skill.name}
                                  width={44}
                                  height={44}
                                  className="w-11 h-11 object-contain relative z-10 transform group-hover/item:scale-125 transition-transform duration-500 filter drop-shadow-md"
                                  loading="lazy"
                                />

                              </div>

                              {/* Skill Name */}
                              <span className="text-gray-800 font-semibold text-xs text-center leading-tight group-hover/item:text-blue-600 transition-colors duration-300">
                                {skill.name}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Count Badge */}
                    <div className="mt-6 pt-6 border-t-2 border-gray-200">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                        <span className="text-sm font-bold text-gray-600">
                          {data.items.length} {data.items.length === 1 ? "Technology" : "Technologies"} Mastered
                        </span>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Currently Learning */}
          <div className="relative group mb-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 rounded-3xl opacity-20 group-hover:opacity-30 blur-2xl transition-opacity duration-500"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-10 border-2 border-yellow-200">
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <Sparkles className="text-white animate-pulse" size={28} />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg">
                    <div className="w-full h-full bg-green-500 rounded-full animate-ping"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Currently Learning</h3>
                  <p className="text-gray-600 text-sm mt-1">Staying ahead of the curve 🚀</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {currentlyLearning.map((tech, idx) => (
                  <div key={idx} className="group/tech relative">
                    {/* Glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl opacity-0 group-hover/tech:opacity-30 blur-lg transition-opacity duration-300"></div>

                    {/* Tech Card */}
                    <div className="relative bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-50 p-5 rounded-2xl border-2 border-yellow-300 hover:border-orange-400 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer">
                      <div className="flex flex-col items-center gap-3">
                        {/* Icon */}
                        <div className="relative">
                          <div className="absolute inset-0 bg-yellow-400/20 rounded-full animate-ping"></div>
                          <Image
                            src={tech.icon}
                            alt={tech.name}
                            width={48}
                            height={48}
                            className="relative w-12 h-12 object-contain transform group-hover/tech:rotate-12 group-hover/tech:scale-125 transition-transform duration-500 filter drop-shadow-lg"
                            loading="lazy"
                          />

                        </div>

                        {/* Name */}
                        <span className="font-bold text-sm text-center text-gray-800 group-hover/tech:text-orange-600 transition-colors duration-300">
                          {tech.name}
                        </span>

                        {/* Progress Bar */}
                        <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                          <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transform origin-left scale-x-50 group-hover/tech:scale-x-75 transition-transform duration-700 shadow-md"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-gray-600 text-sm mt-6 text-center italic flex items-center justify-center gap-2">
                <Target size={16} className="text-orange-500" />
                Continuously expanding my tech stack to stay ahead in the industry
              </p>
            </div>
          </div>


        </div>
      </section>

      {/* ==================== EXPERIENCE SECTION - REDESIGNED ==================== */}
      <section ref={experienceRef} className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-64 bg-blue-300 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-cyan-300 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                  <Briefcase className="text-white" size={28} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Work Experience
                </h2>
              </div>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              My journey in backend development and system architecture
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Timeline Line - Desktop Only */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-500 to-blue-600"></div>

            {/* Experience Cards */}
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="relative group"
                  style={{
                    animationDelay: `${index * 200}ms`,
                  }}
                >
                  {/* Timeline Dot - Desktop */}
                  <div className="hidden md:flex absolute left-6 top-8 w-5 h-5 items-center justify-center">
                    <div className="absolute w-5 h-5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full"></div>
                  </div>

                  {/* Current Role Indicator */}
                  {exp.current && (
                    <div className="hidden md:block absolute left-2 -top-3">
                      <div className="relative">
                        <div className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          CURRENT
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Experience Card */}
                  <div className="md:ml-20">
                    {/* Glowing Background */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>

                    {/* Main Card */}
                    <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                      {/* Top Accent Bar */}
                      <div className={`h-2 bg-gradient-to-r ${exp.current ? 'from-green-500 to-emerald-500' : 'from-blue-500 to-cyan-500'} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}></div>

                      <div className="p-8">
                        {/* Header Section */}
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                          <div className="flex-1">
                            {/* Role & Type */}
                            <div className="flex flex-wrap items-center gap-3 mb-3">
                              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                {exp.role}
                              </h3>
                              {exp.type && (
                                <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-lg text-sm font-bold border border-blue-200">
                                  {exp.type}
                                </span>
                              )}
                            </div>

                            {/* Company */}
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                                <Briefcase className="text-white" size={16} />
                              </div>
                              <p className="text-xl font-bold text-gray-800">{exp.company}</p>
                            </div>
                          </div>

                          {/* Date & Location */}
                          <div className="mt-4 lg:mt-0 lg:text-right space-y-2">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl border border-gray-200">
                              <Calendar className="text-blue-600" size={18} />
                              <span className="text-gray-700 font-semibold">{exp.period}</span>
                            </div>
                            <div className="flex lg:justify-end">
                              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl border border-gray-200">
                                <MapPin className="text-blue-600" size={18} />
                                <span className="text-gray-700 font-medium">{exp.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Highlights */}
                        <div className="mb-6">
                          <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Target className="text-blue-600" size={20} />
                            Key Achievements
                          </h4>
                          <ul className="space-y-3">
                            {exp.highlights.map((highlight, idx) => (
                              <li
                                key={idx}
                                className="group/item flex items-start gap-3 text-gray-700 hover:text-gray-900 transition-colors duration-200"
                                style={{
                                  animationDelay: `${(index * 200) + (idx * 50)}ms`,
                                }}
                              >
                                <div className="flex-shrink-0 mt-1">
                                  <div className="relative w-5 h-5">
                                    <div className="absolute inset-0 bg-green-500/20 rounded-full group-hover/item:scale-150 transition-transform duration-300"></div>
                                    <CheckCircle2 className="relative text-green-500 group-hover/item:scale-110 transition-transform duration-300" size={20} />
                                  </div>
                                </div>
                                <span className="leading-relaxed">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-sm font-bold text-gray-600 mb-3 flex items-center gap-2">
                            <Code size={16} className="text-blue-600" />
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="group/tag relative px-3 py-1.5 bg-gradient-to-r from-slate-50 to-blue-50 border border-gray-200 hover:border-blue-400 text-gray-700 hover:text-blue-600 rounded-lg text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 cursor-default"
                                style={{
                                  animationDelay: `${(index * 200) + (idx * 30)}ms`,
                                }}
                              >
                                {/* Tag Glow */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg opacity-0 group-hover/tag:opacity-20 transition-opacity duration-300"></div>
                                <span className="relative z-10">{tech}</span>
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Bottom Accent */}
                        <div className={`h-1 bg-gradient-to-r ${exp.current ? 'from-green-500 to-emerald-500' : 'from-blue-500 to-cyan-500'} rounded-full mt-6 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100`}></div>
                      </div>

                      {/* Index Badge */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 border-4 border-white">
                        <span className="text-white font-bold text-lg">0{index + 1}</span>
                      </div>

                      {/* Current Badge - Mobile */}
                      {exp.current && (
                        <div className="md:hidden absolute top-4 left-4">
                          <div className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            CURRENT
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Years Experience', value: '2+', icon: Calendar },
              { label: 'Projects Delivered', value: '10+', icon: Target },
              { label: 'Technologies', value: '15+', icon: Code },
              { label: 'APIs Integrated', value: '50+', icon: Zap }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ==================== PROJECTS SECTION - UPDATED ==================== */}
      <section ref={projectsRef} className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-40 left-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-40 right-20 w-80 h-80 bg-cyan-200 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                  <FileCode className="text-white" size={28} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Featured Projects
                </h2>
              </div>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Real-world enterprise solutions I&apos;ve architected and delivered
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Projects Cards */}
          <div className="space-y-12">
            {projects.map((project, index) => {
              const gradients = [
                'from-blue-500 to-cyan-500',
                'from-purple-500 to-pink-500',
                'from-green-500 to-emerald-500',
                'from-orange-500 to-red-500'
              ];

              return (
                <div
                  key={index}
                  className="group relative"
                  style={{
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  {/* Glowing Background */}
                  <div className={`absolute -inset-2 bg-gradient-to-r ${gradients[index]} rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700`}></div>

                  {/* Project Card */}
                  <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 overflow-hidden border border-gray-100">
                    {/* Animated Top Bar */}
                    <div className={`h-2 bg-gradient-to-r ${gradients[index]} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000`}></div>

                    <div className="p-8 md:p-10">
                      {/* Header */}
                      <div className="mb-8">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className={`px-5 py-2 bg-gradient-to-r ${gradients[index]} text-white rounded-full text-sm font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                            {project.category}
                          </span>
                          <div className="flex items-center gap-2 px-4 py-1 bg-slate-100 rounded-full">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-semibold text-gray-700">Live Project</span>
                          </div>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-lg text-blue-600 font-medium italic flex items-center gap-2">
                          <Sparkles size={20} className="text-yellow-500" />
                          {project.tagline}
                        </p>
                      </div>

                      {/* Problem & Solution */}
                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="relative group/card">
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-red-400 to-orange-400 rounded-2xl opacity-0 group-hover/card:opacity-20 blur transition-opacity duration-300"></div>
                          <div className="relative bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-2xl border-2 border-red-200 hover:border-red-300 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center shadow-lg">
                                <Target size={20} className="text-white" />
                              </div>
                              <h4 className="text-lg font-bold text-gray-900">The Challenge</h4>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">{project.problem}</p>
                          </div>
                        </div>

                        <div className="relative group/card">
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl opacity-0 group-hover/card:opacity-20 blur transition-opacity duration-300"></div>
                          <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-green-200 hover:border-green-300 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center shadow-lg">
                                <CheckCircle2 size={20} className="text-white" />
                              </div>
                              <h4 className="text-lg font-bold text-gray-900">The Solution</h4>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">{project.solution}</p>
                          </div>
                        </div>
                      </div>

                      {/* Impact Metrics Banner */}
                      <div className={`bg-gradient-to-r ${gradients[index]} bg-opacity-10 p-6 rounded-2xl mb-8 border-2 border-blue-100`}>
                        <div className="flex items-center gap-3 mb-4">
                          <Zap className="text-yellow-500" size={24} />
                          <h4 className="text-xl font-bold text-gray-900">Impact & Results</h4>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4">
                          {project.impact.map((item, idx) => (
                            <div
                              key={idx}
                              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                            >
                              <div className="flex items-start gap-2">
                                <Target className="text-blue-600 flex-shrink-0 mt-1" size={18} />
                                <span className="text-gray-800 font-semibold text-sm leading-tight">{item}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Two Column: Features & Highlights */}
                      <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {/* Key Features */}
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Layers size={20} className="text-blue-600" />
                            Key Features
                          </h4>
                          <div className="space-y-2">
                            {project.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-2 p-3 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors duration-200"
                              >
                                <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                                <span className="text-gray-700 text-sm leading-snug">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technical Implementation */}
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Code size={20} className="text-purple-600" />
                            Technical Highlights
                          </h4>
                          <div className="space-y-2">
                            {project.highlights.slice(0, 6).map((highlight, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-2 p-3 bg-slate-50 rounded-xl hover:bg-purple-50 transition-colors duration-200"
                              >
                                <ChevronRight className="text-purple-600 flex-shrink-0 mt-0.5" size={16} />
                                <span className="text-gray-700 text-sm leading-snug">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="mb-8">
                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <Server size={20} className="text-blue-600" />
                          Technology Stack
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {project.tech.map((tech, idx) => (
                            <span
                              key={idx}
                              className={`px-4 py-2 bg-gradient-to-r ${gradients[index]} text-white rounded-xl text-sm font-bold shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 cursor-default`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-4 pt-6 border-t-2 border-gray-200">
                        {project.live && (
                          Array.isArray(project.live) ? (
                            project.live.map((link, idx) => (
                              <a
                                key={idx}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group/btn px-6 py-3 bg-gradient-to-r ${gradients[index]} text-white rounded-xl font-bold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2`}
                              >
                                <ExternalLink size={18} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                                {link.name}
                              </a>
                            ))
                          ) : (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`group/btn px-6 py-3 bg-gradient-to-r ${gradients[index]} text-white rounded-xl font-bold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2`}
                            >
                              <ExternalLink size={18} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                              View Live Project
                            </a>
                          )
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn px-6 py-3 bg-gray-900 text-white rounded-xl font-bold shadow-lg hover:shadow-2xl hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                          >
                            <Github size={18} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                            View Code
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Project Number Badge */}
                    <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border-4 border-white">
                      <span className="text-white font-bold text-2xl">0{index + 1}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ==================== EDUCATION SECTION - UPDATED ==================== */}
      <section ref={educationRef} className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-200 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Education
                </h2>
              </div>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Academic foundation in Computer Science and Engineering
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Education Cards */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group relative"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                {/* Glowing Background */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700"></div>

                {/* Education Card */}
                <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 overflow-hidden border border-gray-100">
                  {/* Animated Top Bar */}
                  <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"></div>

                  <div className="p-8 md:p-10">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      {/* Left Side - Main Content */}
                      <div className="flex-1">
                        {/* Degree Icon & Badge */}
                        <div className="flex items-start gap-4 mb-6">
                          <div className="relative">
                            {/* Icon Glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300"></div>

                            {/* Icon Container */}
                            <div className="relative w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                              <GraduationCap className="text-white" size={32} />
                            </div>
                          </div>

                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-3 mb-3">
                              <span className="px-4 py-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-xs font-bold shadow-lg">
                                Bachelor&apos;s Degree
                              </span>
                              <span className="px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-bold border border-green-300">
                                Graduated 2024
                              </span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                              {edu.degree}
                            </h3>

                            <a
                              href={edu.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-lg text-blue-600 hover:text-cyan-600 font-semibold transition-colors duration-300 group/link"
                            >
                              {edu.institution}
                              <ExternalLink size={18} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                            </a>
                          </div>
                        </div>

                        {/* Details Row */}
                        <div className="flex flex-wrap gap-4 mb-6">
                          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl border border-gray-200">
                            <Calendar size={18} className="text-blue-600" />
                            <span className="text-sm font-semibold text-gray-700">{edu.period}</span>
                          </div>

                          {edu.location && (
                            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl border border-gray-200">
                              <MapPin size={18} className="text-blue-600" />
                              <span className="text-sm font-semibold text-gray-700">{edu.location}</span>
                            </div>
                          )}
                        </div>

                        {/* CGPA/Grade (if available) */}
                        {edu.cgpa && (
                          <div className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-2 border-green-200">
                            <Award size={20} className="text-green-600" />
                            <div>
                              <p className="text-xs text-gray-600 font-medium">CGPA</p>
                              <p className="text-lg font-bold text-gray-900">{edu.cgpa}</p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Right Side - Quick Stats */}
                      <div className="lg:w-48 space-y-4">
                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 border border-blue-200">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-1">4</div>
                            <div className="text-xs text-gray-600 font-medium">Years</div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 border border-purple-200">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-1">B.E.</div>
                            <div className="text-xs text-gray-600 font-medium">Degree</div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-200">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-green-600 mb-1">CSE</div>
                            <div className="text-xs text-gray-600 font-medium">Branch</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Accent Line */}
                    <div className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-6 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100"></div>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-5 pointer-events-none">
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 rounded-bl-full"></div>
                  </div>

                  {/* Index Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border-4 border-white">
                    <span className="text-white font-bold text-lg">0{index + 1}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Academic Journey Timeline (Optional Enhancement) */}
          <div className="mt-16">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 shadow-2xl">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-3 flex items-center justify-center gap-2">
                    <Sparkles size={24} />
                    Academic Excellence
                    <Sparkles size={24} />
                  </h3>
                  <p className="text-blue-100 max-w-2xl mx-auto leading-relaxed">
                    Strong foundation in Computer Science with focus on backend development,
                    system design, and software engineering principles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ==================== CERTIFICATIONS SECTION - UPDATED ==================== */}
      <section ref={certificationsRef} className="py-20 bg-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-cyan-50/30 pointer-events-none"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                  <Award className="text-white" size={28} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Certifications & Achievements
                </h2>
              </div>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Professional certifications validating my expertise in backend development
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => {
              const gradients = [
                'from-blue-500 to-cyan-500',
                'from-purple-500 to-pink-500',
                'from-green-500 to-emerald-500',
                'from-orange-500 to-red-500',
                'from-indigo-500 to-purple-500',
                'from-cyan-500 to-blue-500'
              ];

              const icons = ['🏆', '🎖️', '🥇', '🎓', '⭐', '🔥'];

              return (
                <div
                  key={index}
                  className="group relative"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Glowing Background */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${gradients[index]} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>

                  {/* Certificate Card */}
                  <div className="relative h-full bg-gradient-to-br from-white via-slate-50 to-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 overflow-hidden border border-gray-100">
                    {/* Animated Top Border */}
                    <div className={`h-2 bg-gradient-to-r ${gradients[index]} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}></div>

                    <div className="p-6">
                      {/* Icon & Badge */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="relative">
                          {/* Icon Glow */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${gradients[index]} rounded-2xl opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300`}></div>

                          {/* Icon Container */}
                          <div className={`relative w-16 h-16 bg-gradient-to-r ${gradients[index]} rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                            <span className="text-3xl">{icons[index]}</span>
                          </div>
                        </div>

                        {/* Verified Badge */}
                        <div className="px-3 py-1 bg-green-100 border border-green-300 rounded-full flex items-center gap-1">
                          <CheckCircle2 size={14} className="text-green-600" />
                          <span className="text-xs font-bold text-green-700">Verified</span>
                        </div>
                      </div>

                      {/* Certificate Details */}
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                          {cert.name}
                        </h3>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                              <Briefcase size={16} className="text-gray-600" />
                            </div>
                            <span className="text-sm font-medium text-gray-700">{cert.issuer}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                              <Calendar size={16} className="text-gray-600" />
                            </div>
                            <span className="text-sm font-semibold text-blue-600">{cert.year}</span>
                          </div>
                        </div>
                      </div>

                      {/* Progress/Skill Level */}
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-gray-600">Skill Level</span>
                          <span className="text-xs font-bold text-blue-600">Expert</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className={`h-full bg-gradient-to-r ${gradients[index]} rounded-full shadow-md transform origin-left scale-x-100 transition-transform duration-1000`}></div>
                        </div>
                      </div>

                      {/* Bottom Accent */}
                      <div className={`h-1 bg-gradient-to-r ${gradients[index]} rounded-full mt-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100`}></div>
                    </div>

                    {/* Corner Decoration */}
                    <div className="absolute top-0 right-0 w-20 h-20 opacity-5 pointer-events-none">
                      <div className={`w-full h-full bg-gradient-to-br ${gradients[index]} rounded-bl-full`}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Stats Section */}
          <div className="mt-16">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    <div className="text-3xl md:text-4xl font-bold mb-2">{certifications.length}+</div>
                    <div className="text-sm md:text-base opacity-90">Certifications</div>
                  </div>
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    <div className="text-3xl md:text-4xl font-bold mb-2">5+</div>
                    <div className="text-sm md:text-base opacity-90">Skills Validated</div>
                  </div>
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
                    <div className="text-sm md:text-base opacity-90">Completion Rate</div>
                  </div>
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    <div className="text-3xl md:text-4xl font-bold mb-2">2024</div>
                    <div className="text-sm md:text-base opacity-90">Latest Cert</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Continuous Learning Banner */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-full">
              <Sparkles className="text-yellow-500" size={20} />
              <span className="text-gray-800 font-semibold">Continuously learning and upskilling</span>
              <Sparkles className="text-yellow-500" size={20} />
            </div>
          </div>
        </div>
      </section>


      {/* ==================== CONTACT SECTION - FIXED UNIFORM SIZES ==================== */}
      <section ref={contactRef} className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-200 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                  <Send className="text-white" size={28} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Let&apos;s Connect
                </h2>
              </div>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Have a project in mind or just want to chat? I&apos;m always open to discussing new opportunities and ideas
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Contact Details & Social Links - Fixed Heights */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Phone size={24} className="text-blue-600" />
                Contact Information
              </h3>
              <div className="space-y-4">
                {/* Email Card - Fixed Height */}
                <div className="group relative h-32">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
                  <div className="relative h-full flex items-center gap-4 p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 shadow-md hover:shadow-xl">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">Email</h4>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-blue-600 hover:text-cyan-600 transition-colors break-all font-medium text-sm"
                      >
                        {personalInfo.email}
                      </a>
                      <p className="text-xs text-gray-500 mt-1">Response within 24 hours</p>
                    </div>
                  </div>
                </div>

                {/* Phone Card - Fixed Height */}
                <div className="group relative h-32">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
                  <div className="relative h-full flex items-center gap-4 p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-green-400 transition-all duration-300 shadow-md hover:shadow-xl">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">Phone</h4>
                      <a
                        href={`tel:${personalInfo.phone}`}
                        className="text-green-600 hover:text-emerald-600 transition-colors font-medium"
                      >
                        {personalInfo.phone}
                      </a>
                      <p className="text-xs text-gray-500 mt-1">Available 9 AM - 9 PM IST</p>
                    </div>
                  </div>
                </div>

                {/* Location Card - Fixed Height */}
                <div className="group relative h-32">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
                  <div className="relative h-full flex items-center gap-4 p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-purple-400 transition-all duration-300 shadow-md hover:shadow-xl">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">Location</h4>
                      <p className="text-gray-700 font-medium">{personalInfo.location}</p>
                      <p className="text-xs text-gray-500 mt-1">IST (UTC+5:30)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Share2 size={24} className="text-blue-600" />
                Connect on Social
              </h3>
              <div className="space-y-4">
                {/* LinkedIn - Fixed Height */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block h-32"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
                  <div className="relative h-full flex items-center gap-4 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1">
                    <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Linkedin className="text-white" size={28} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">LinkedIn</h4>
                      <p className="text-sm text-gray-600">Professional networking</p>
                    </div>
                    <ExternalLink className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={20} />
                  </div>
                </a>

                {/* GitHub - Fixed Height */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block h-32"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
                  <div className="relative h-full flex items-center gap-4 p-6 bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1">
                    <div className="w-14 h-14 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Github className="text-white" size={28} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors">GitHub</h4>
                      <p className="text-sm text-gray-600">Code repositories & projects</p>
                    </div>
                    <ExternalLink className="text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={20} />
                  </div>
                </a>

                {/* Quick Response Badge - Fixed Height */}
                <div className="h-32 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                    <span className="text-sm font-bold text-gray-900">Available for Work</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    I typically respond to messages within 24 hours. For urgent inquiries, please call directly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Separator */}
          <div className="mt-16 pt-8 border-t-2 border-gray-200 text-center">
            <p className="text-gray-600 flex items-center justify-center gap-2 flex-wrap">
              <span>💼</span>
              <span className="font-medium">Open to:</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">Freelance Projects</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">Full-time Roles</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">Collaborations</span>
            </p>
          </div>
        </div>
      </section>


      {/* ==================== FOOTER - UPDATED ==================== */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Left: Brand & Description */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Code className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">MTU</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Backend Engineer crafting scalable solutions with Java, Spring Boot, and modern cloud technologies.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-semibold">Available for work</span>
                </div>
              </div>

              {/* Center: Quick Links */}
              <div>
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <ChevronRight size={20} className="text-blue-400" />
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  {navItems.slice(0, 6).map((item, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => scrollToSection(item.ref)}
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm flex items-center gap-2 group"
                      >
                        <ChevronRight size={14} className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Contact & Social */}
              <div>
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Mail size={20} className="text-blue-400" />
                  Get in Touch
                </h4>
                <div className="space-y-3">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm group"
                  >
                    <Mail size={16} className="group-hover:scale-110 transition-transform duration-200" />
                    <span className="break-all">{personalInfo.email}</span>
                  </a>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm group"
                  >
                    <Phone size={16} className="group-hover:scale-110 transition-transform duration-200" />
                    {personalInfo.phone}
                  </a>
                  <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <MapPin size={16} />
                    {personalInfo.location}
                  </div>

                  {/* Social Icons */}
                  <div className="flex gap-3 pt-4">
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} className="group-hover:scale-110 transition-transform duration-200" />
                    </a>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
                      aria-label="GitHub"
                    >
                      <Github size={20} className="group-hover:scale-110 transition-transform duration-200" />
                    </a>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="w-10 h-10 bg-white/10 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
                      aria-label="Email"
                    >
                      <Mail size={20} className="group-hover:scale-110 transition-transform duration-200" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10 mb-6"></div>

            {/* Bottom Bar */}
            {/* <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <p className="text-gray-300 text-sm">
                  © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Designed & Developed with 💙 using Next.js & Tailwind CSS
                </p>
              </div>

              <div className="flex items-center gap-6 text-sm">
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Privacy Policy
                </a>
                <span className="text-gray-600">•</span>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Terms of Service
                </a>
                <span className="text-gray-600">•</span>
                <button
                  onClick={scrollToTop}
                  className="flex items-center gap-1 text-gray-300 hover:text-blue-400 transition-colors duration-200 group"
                >
                  <span>Back to Top</span>
                  <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform duration-200" />
                </button>
              </div>
            </div> */}

            {/* Tech Stack Badge */}
            {/* <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <span className="text-xs text-gray-400">Built with</span>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs font-semibold">Next.js</span>
                  <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded text-xs font-semibold">Tailwind</span>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs font-semibold">React</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </footer>

      {/* ==================== SCROLL TO TOP BUTTON ==================== */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 z-40"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}