// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import {
//   Mail, Phone, MapPin, Linkedin, Github, Download, Menu, X,
//   Briefcase, GraduationCap, Server, Code, Share2, Database,
//   Award, ArrowUp, ExternalLink, Calendar, ChevronRight,
//   Sparkles, FileCode, Layers, GitBranch, Send, Clock,
//   CheckCircle2, Zap, Target, Users
// } from 'lucide-react';
// import Image from 'next/image';

// // ==================== DATA CONFIGURATION ====================

// const personalInfo = {
//   name: "Mohammad Talib Uddin",
//   role: "Backend Engineer",
//   headline: "Building Enterprise-Grade APIs & Scalable Microservices",
//   tagline: "Backend Engineer specializing in Spring Boot & Django | Delivered solutions for Ed-Tech, E-Commerce & HR platforms | Based in India, working with teams globally",
//   email: "talib.uddin626@gmail.com",
//   phone: "+91-7725050626",
//   location: "Bhopal, Madhya Pradesh, India",
//   timezone: "IST (UTC+5:30)",
//   responseTime: "I typically respond within 24 hours",
//   cv: '/Talib_Software_Engineer.pdf',
//   linkedin: "https://www.linkedin.com/in/dz-txlib/",
//   github: "https://github.com/mohammadtalibuddin",
//   website: "https://talibuddin.me",
//   image: '/profile.png',
//   availability: "Open to freelance projects and full-time opportunities"
// };

// const professionalSummary = {
//   intro: "Backend Engineer with 2+ years of experience building scalable microservices and RESTful APIs using Java (Spring Boot) and Python (Django REST Framework).",

//   story: "My journey into software development began with a fascination for solving complex problems through code. What started as building small applications evolved into architecting enterprise-grade systems serving thousands of users daily. I've worked on diverse projects—from multi-tenant Learning Management Systems to AI-powered recruitment platforms—each presenting unique challenges that shaped my expertise in backend development.",

//   expertise: "I specialize in designing robust backend architectures with a focus on performance, scalability, and security. My experience spans the complete development lifecycle: from database schema design and API development to cloud deployment and monitoring. I've optimized systems to handle high traffic loads, reduced query latency by up to 40%, and implemented secure authentication mechanisms protecting sensitive user data.",

//   approach: "I believe in writing clean, maintainable code and following industry best practices. Whether implementing microservices architecture, optimizing database queries, or setting up CI/CD pipelines, I approach each challenge with a focus on long-term sustainability and system reliability.",

//   impact: "Throughout my career, I've integrated 50+ RESTful APIs, deployed applications on AWS and Hostinger VPS, and collaborated with cross-functional teams to deliver production-ready solutions. I enjoy mentoring junior developers and contributing to architectural decisions that shape the technical direction of projects."
// };

// const stats = [
//   { icon: Code, number: "50+", label: "APIs Integrated" },
//   { icon: Zap, number: "40%", label: "Performance Boost" },
//   { icon: Target, number: "99.9%", label: "Uptime Achieved" },
//   { icon: Users, number: "1000+", label: "Users Served" }
// ];

// const services = [
//   {
//     icon: Code,
//     title: 'Backend Development',
//     desc: 'Building robust and scalable server-side applications using Java (Spring Boot) and Python (Django REST Framework).',
//     tags: ['Spring Boot', 'Django', 'FastAPI']
//   },
//   {
//     icon: Share2,
//     title: 'Microservices Architecture',
//     desc: 'Designing and implementing distributed systems with independent, reliable, and versioned microservices.',
//     tags: ['Microservices', 'Service Mesh', 'API Gateway']
//   },
//   {
//     icon: Server,
//     title: 'RESTful API Design',
//     desc: 'Developing clean, secure, and well-documented RESTful APIs with JWT authentication, RBAC, and comprehensive documentation.',
//     tags: ['REST', 'JWT', 'Swagger/OpenAPI']
//   },
//   {
//     icon: Database,
//     title: 'Database Optimization',
//     desc: 'Architecting and optimizing relational & NoSQL databases with efficient schema design, indexing, and caching strategies.',
//     tags: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis']
//   },
//   {
//     icon: Layers,
//     title: 'Cloud & DevOps',
//     desc: 'Deploying and managing applications on AWS and VPS, implementing CI/CD pipelines for automated deployment.',
//     tags: ['AWS', 'Docker', 'CI/CD', 'Nginx']
//   },
//   {
//     icon: GitBranch,
//     title: 'System Architecture',
//     desc: 'Architecting modular, scalable, and high-availability software solutions that solve complex business challenges.',
//     tags: ['System Design', 'Scalability', 'Performance']
//   },
// ];

// const skills = {
//   "Backend Development": {
//     items: ['Java', 'Spring Boot', 'Python', 'Django REST Framework', 'FastAPI', 'Hibernate'],
//     color: 'from-blue-500 to-cyan-500'
//   },
//   "Databases": {
//     items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
//     color: 'from-green-500 to-emerald-500'
//   },
//   "Cloud & DevOps": {
//     items: ['AWS (EC2, S3)', 'Hostinger VPS', 'Docker', 'CI/CD', 'Nginx', 'Apache Tomcat'],
//     color: 'from-orange-500 to-red-500'
//   },
//   "Tools & Technologies": {
//     items: ['Git', 'Postman', 'Swagger', 'IntelliJ IDEA', 'VS Code', 'pgAdmin'],
//     color: 'from-purple-500 to-pink-500'
//   },
//   "Core Concepts": {
//     items: ['RESTful APIs', 'Microservices', 'JWT & RBAC', 'System Design', 'Agile/Scrum', 'OOP'],
//     color: 'from-indigo-500 to-blue-500'
//   }
// };

// const experience = [
//   {
//     company: "Affy Cloud IT Solutions",
//     role: "Software Engineer",
//     type: "(Intern → Full-Time)",
//     period: "March 2024 – Present",
//     location: "Bhopal, India",
//     current: true,
//     highlights: [
//       "Architected and developed backend systems for multiple client and in-house products using Java (Spring Boot) and Python (Django)",
//       "Designed scalable microservices architecture and integrated 50+ RESTful APIs with focus on reliability and backward compatibility",
//       "Implemented enterprise-grade security with JWT authentication and RBAC across multiple applications",
//       "Optimized database schemas (MySQL, PostgreSQL, MongoDB) and implemented Redis caching, reducing query latency by 35%",
//       "Collaborated with DevOps to configure AWS and Hostinger VPS infrastructure and set up automated CI/CD pipelines",
//       "Mentored 3+ junior developers on backend design patterns, clean code practices, and debugging strategies"
//     ],
//     technologies: ["Spring Boot", "Django", "MySQL", "PostgreSQL", "MongoDB", "Redis", "AWS", "Docker"]
//   },
//   {
//     company: "Orange Antelopes",
//     role: "Software Engineer Intern",
//     type: "",
//     period: "Sep 2023 – Feb 2024",
//     location: "Bhopal, India",
//     current: false,
//     highlights: [
//       "Developed scalable backend systems using Java Spring Boot, building RESTful APIs for web and mobile applications",
//       "Implemented database schema design, query optimization, and secure authentication mechanisms",
//       "Collaborated with frontend teams to ensure seamless API integration and efficient data flow",
//       "Gained hands-on experience with cloud deployment, server configuration, and CI/CD pipelines"
//     ],
//     technologies: ["Spring Boot", "MySQL", "REST APIs", "Cloud Deployment"]
//   }
// ];

// const projects = [
//   {
//     title: "TUTORIO - Multi-Tenant LMS Platform",
//     category: "Ed-Tech Solution",
//     tagline: "Enterprise Learning Management System serving 1000+ students",
//     problem: "Educational institutions needed a comprehensive digital platform to manage courses, conduct live classes, and handle student assessments while maintaining data isolation between organizations.",
//     solution: "Engineered a multi-tenant Learning Management System enabling schools, universities, and coaching centers to manage their own digital learning ecosystems with complete data isolation.",
//     role: "Lead Backend Developer",
//     impact: [
//       "Reduced query response time by 40% through Redis caching",
//       "Achieved 99.9% uptime serving 1000+ concurrent users",
//       "Processed 10,000+ course enrollments and transactions"
//     ],
//     tech: ["Spring Boot", "Microservices", "MySQL", "Redis", "JWT", "AWS"],
//     github: null,
//     live: "https://web.tutorio.in/",
//     highlights: [
//       "Developed backend using Spring Boot Microservices with secure multi-tenant data isolation architecture",
//       "Integrated comprehensive course management: live/recorded classes, test series, eBooks, and real-time doubt-solving",
//       "Implemented role-based access control (RBAC) with JWT authentication for Admins, Teachers, and Students",
//       "Built e-commerce module enabling course purchases, payment processing, and enrollment management",
//       "Optimized database schema and Redis caching layer, improving performance by 40%",
//       "Deployed on AWS with CI/CD pipelines ensuring 99.9% uptime"
//     ],
//     features: [
//       "Multi-tenant architecture with complete data isolation",
//       "Live and recorded class management",
//       "Integrated test series and assessment system",
//       "E-commerce functionality for course sales",
//       "Real-time doubt solving platform",
//       "Comprehensive analytics dashboard"
//     ]
//   },
//   {
//     title: "WhatARecruiter - AI Recruitment Platform",
//     category: "HR Tech Solution",
//     tagline: "Intelligent hiring platform with AI-powered candidate matching",
//     problem: "HR teams struggled with manual resume screening and inefficient hiring workflows, leading to prolonged recruitment cycles.",
//     solution: "Developed an AI-powered Recruitment Management System that automates resume parsing and matches candidates to job requirements.",
//     role: "Backend Architect & Lead Developer",
//     impact: [
//       "Reduced recruitment cycle time by 50%",
//       "Improved candidate-job matching accuracy by 35%",
//       "Processed 5,000+ resumes with AI parsing"
//     ],
//     tech: ["Spring Boot", "Microservices", "FastAPI", "MySQL", "Redis", "Hostinger VPS", "AI/ML"],
//     github: null,
//     live: null,
//     highlights: [
//       "Built Spring Boot microservices integrated with FastAPI-based AI service for intelligent resume parsing",
//       "Implemented AI-driven resume analysis to extract and structure candidate data automatically",
//       "Designed dynamic job requisition and approval workflows for admins, recruiters, and hiring managers",
//       "Optimized MySQL queries with Redis caching, improving response times by 35%",
//       "Deployed on Hostinger VPS with microservice orchestration ensuring high availability"
//     ],
//     features: [
//       "AI-powered resume parsing and analysis",
//       "Intelligent candidate-job matching",
//       "Dynamic workflow management",
//       "Multi-role access control",
//       "Automated candidate recommendations",
//       "Real-time hiring analytics"
//     ]
//   },
//   {
//     title: "E-Commerce Platform Suite",
//     category: "Multi-Industry E-Commerce",
//     tagline: "Scalable e-commerce backend powering 3 live platforms",
//     problem: "Small to medium businesses needed robust e-commerce solutions for online orders, payment processing, and shipment tracking.",
//     solution: "Architected a reusable, modular e-commerce backend framework powering multiple online stores.",
//     role: "Backend Architect",
//     impact: [
//       "Reduced page load time by 40% through optimization",
//       "Processed 15,000+ orders across platforms",
//       "Achieved 99% payment success rate"
//     ],
//     tech: ["Spring Boot", "Microservices", "Razorpay API", "Shiprocket API", "MySQL", "Redis"],
//     github: null,
//     live: [
//       { name: "Tarhaab Fashion", url: "https://tarhaab.com/" },
//       { name: "Meher Sambalpur Hub", url: "https://mehersambalpurihub.com/" },
//       { name: "M Organic Farm", url: "https://morganicfarm.com/" }
//     ],
//     highlights: [
//       "Engineered modular backend framework supporting multiple e-commerce platforms",
//       "Implemented product catalog, cart management, order tracking, and secure checkout",
//       "Integrated Razorpay payment gateway and automated shipment tracking via Shiprocket API",
//       "Optimized backend with caching and connection pooling (40% faster response times)",
//       "Built analytics dashboards for real-time sales and inventory insights"
//     ],
//     features: [
//       "Multi-platform support with shared backend",
//       "Guest and registered user checkout",
//       "Razorpay payment integration",
//       "Automated shipment tracking",
//       "Real-time inventory management",
//       "Sales analytics dashboard"
//     ]
//   },
//   {
//     title: "Dclean - Laundry Management System",
//     category: "Operations Management",
//     tagline: "Complete laundry operations platform with multi-role access",
//     problem: "Laundry businesses needed a digital solution to manage orders and track pickups/deliveries across different user roles.",
//     solution: "Developed a comprehensive Laundry Management System using Django REST Framework.",
//     role: "Full-Stack Backend Developer",
//     impact: [
//       "Improved data retrieval speed by 30%",
//       "Streamlined operations for 500+ orders/month",
//       "Reduced manual processing time by 60%"
//     ],
//     tech: ["Django REST Framework", "PostgreSQL", "Nginx", "Gunicorn"],
//     github: null,
//     live: "https://dclean.me/",
//     highlights: [
//       "Developed backend with separate panels for Admin, Customer, and Delivery Agents",
//       "Implemented end-to-end laundry operations: order creation, scheduling, payment processing",
//       "Built mobile-friendly Delivery App API with real-time order assignments",
//       "Created Admin Dashboard for order tracking and operational analytics",
//       "Optimized database queries, improving retrieval speed by 30%"
//     ],
//     features: [
//       "Multi-role access system",
//       "Order management and tracking",
//       "Automated pickup/delivery scheduling",
//       "Payment and invoice generation",
//       "Real-time delivery tracking",
//       "Operational analytics"
//     ]
//   }
// ];

// const education = [
//   {
//     degree: "Bachelor of Technology in Computer Science",
//     institution: "SAM College of Engineering and Technology",
//     period: "August 2021 - May 2025",
//     location: "Bhopal, Madhya Pradesh",
//     link: "https://samglobaluniversity.ac.in/"
//   }
// ];

// const certifications = [
//   {
//     name: 'Java Programming: Mastering the Fundamentals',
//     issuer: 'Certificate of Excellence',
//     year: 'Sep 2024'
//   },
//   {
//     name: 'Blockchain Development: Building Robust Solutions',
//     issuer: 'Certificate of Completion',
//     year: 'Mar 2024'
//   },
//   {
//     name: 'Java Programming: Foundations and Core Principles',
//     issuer: 'Certificate of Achievement',
//     year: 'Jan 2024'
//   },
// ];

// // ==================== MAIN COMPONENT ====================

// export default function Portfolio() {
//   const [activeSection, setActiveSection] = useState('home');
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [showScrollTop, setShowScrollTop] = useState(false);
//   const [typedText, setTypedText] = useState('');
//   const [cursorVisible, setCursorVisible] = useState(true);
//   const [isLoading, setIsLoading] = useState(true);

//   const heroRef = useRef(null);
//   const aboutRef = useRef(null);
//   const servicesRef = useRef(null);
//   const skillsRef = useRef(null);
//   const experienceRef = useRef(null);
//   const projectsRef = useRef(null);
//   const educationRef = useRef(null);
//   const certificationsRef = useRef(null);
//   const contactRef = useRef(null);

//   // Typing effect
//   useEffect(() => {
//     const text = personalInfo.headline;
//     let index = 0;
//     const typingInterval = setInterval(() => {
//       if (index <= text.length) {
//         setTypedText(text.slice(0, index));
//         index++;
//       } else {
//         clearInterval(typingInterval);
//       }
//     }, 50);
//     return () => clearInterval(typingInterval);
//   }, []);

//   // Cursor blink
//   useEffect(() => {
//     const cursorInterval = setInterval(() => {
//       setCursorVisible(prev => !prev);
//     }, 530);
//     return () => clearInterval(cursorInterval);
//   }, []);

//   // Loading animation
//   useEffect(() => {
//     setTimeout(() => setIsLoading(false), 1200);
//   }, []);

//   // Scroll tracking
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = [
//         { id: 'home', ref: heroRef },
//         { id: 'about', ref: aboutRef },
//         { id: 'services', ref: servicesRef },
//         { id: 'skills', ref: skillsRef },
//         { id: 'experience', ref: experienceRef },
//         { id: 'projects', ref: projectsRef },
//         { id: 'education', ref: educationRef },
//         { id: 'certifications', ref: certificationsRef },
//         { id: 'contact', ref: contactRef },
//       ];

//       const scrollPosition = window.scrollY + 100;
//       for (let i = sections.length - 1; i >= 0; i--) {
//         const section = sections[i];
//         if (section.ref.current && section.ref.current.offsetTop <= scrollPosition) {
//           setActiveSection(section.id);
//           break;
//         }
//       }
//       setShowScrollTop(window.scrollY > 400);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (ref) => {
//     ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     setIsMenuOpen(false);
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const navItems = [
//     { name: 'Home', id: 'home', ref: heroRef },
//     { name: 'About', id: 'about', ref: aboutRef },
//     { name: 'Services', id: 'services', ref: servicesRef },
//     { name: 'Skills', id: 'skills', ref: skillsRef },
//     { name: 'Experience', id: 'experience', ref: experienceRef },
//     { name: 'Projects', id: 'projects', ref: projectsRef },
//     { name: 'Contact', id: 'contact', ref: contactRef },
//   ];

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
//         <div className="text-center">
//           <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//           <p className="text-white text-lg font-medium">Loading Portfolio...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">

//       {/* ==================== NAVIGATION ==================== */}
//       <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50 transition-all duration-300">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection(heroRef)}>
//               <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
//                 MTU
//               </h1>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex space-x-1">
//               {navItems.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.ref)}
//                   className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeSection === item.id
//                     ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
//                     : 'text-gray-700 hover:bg-blue-50'
//                     }`}
//                 >
//                   {item.name}
//                 </button>
//               ))}
//               <a
//                 href={personalInfo.cv}
//                 download
//                 className="ml-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 flex items-center gap-2"
//               >
//                 <Download size={16} />
//                 Resume
//               </a>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="md:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors"
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-white border-t border-gray-200">
//             <div className="px-4 py-2 space-y-1">
//               {navItems.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.ref)}
//                   className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeSection === item.id
//                     ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
//                     : 'text-gray-700 hover:bg-blue-50'
//                     }`}
//                 >
//                   {item.name}
//                 </button>
//               ))}
//               <a
//                 href={personalInfo.cv}
//                 download
//                 className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg flex items-center justify-center gap-2"
//               >
//                 <Download size={16} />
//                 Download Resume
//               </a>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* ==================== HERO SECTION ==================== */}
//       <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-slate-50 opacity-50"></div>
//         <div className="absolute inset-0">
//           <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
//           <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
//           <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
//         </div>

//         <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//           {/* Text Content */}
//           <div className="space-y-6 text-center md:text-left">
//             <div className="space-y-2">
//               <p className="text-blue-600 font-medium text-lg">Hello, I'm</p>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
//                 {personalInfo.name}
//               </h1>
//               <div className="h-16 md:h-20">
//                 <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
//                   {typedText}
//                   <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
//                 </h2>
//               </div>
//             </div>

//             <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
//               {personalInfo.tagline}
//             </p>

//             <div className="flex flex-wrap gap-4 justify-center md:justify-start">
//               <button
//                 onClick={() => scrollToSection(projectsRef)}
//                 className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
//               >
//                 View My Work
//               </button>
//               <button
//                 onClick={() => scrollToSection(contactRef)}
//                 className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-all duration-200"
//               >
//                 Let's Connect
//               </button>
//             </div>

//             {/* Social Links */}
//             <div className="flex gap-4 justify-center md:justify-start">
//               <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
//                 className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
//                 <Linkedin className="text-blue-600" size={24} />
//               </a>
//               <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
//                 className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
//                 <Github className="text-gray-900" size={24} />
//               </a>
//               <a href={`mailto:${personalInfo.email}`}
//                 className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
//                 <Mail className="text-blue-600" size={24} />
//               </a>
//             </div>
//           </div>

//           {/* Profile Image - FIXED with proper positioning */}
//           <div className="relative flex justify-center items-center">
//             <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
//               {/* Outer animated gradient ring */}
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse opacity-30"></div>

//               {/* Middle rotating gradient ring */}
//               <div className="absolute inset-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-spin-slow opacity-20"></div>

//               {/* Image container with proper sizing and positioning */}
//               <div className="absolute inset-6 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100 shadow-2xl">
//                 <Image
//                   src={personalInfo.image}
//                   alt={personalInfo.name}
//                   fill
//                   className="object-cover"
//                   priority
//                   sizes="(max-width: 768px) 288px, (max-width: 1024px) 384px, 450px"
//                   style={{
//                     objectPosition: '50% 20%' // Moves image up to show full head
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <ChevronRight size={32} className="text-blue-600 rotate-90" />
//         </div>
//       </section>


//       {/* ==================== STATS SECTION ==================== */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => {
//               const IconComponent = stat.icon;
//               return (
//                 <div key={index} className="text-center">
//                   <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mb-4">
//                     <IconComponent className="text-white" size={32} />
//                   </div>
//                   <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</h3>
//                   <p className="text-gray-600 font-medium">{stat.label}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ==================== ABOUT SECTION ==================== */}
//       <section ref={aboutRef} className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
//               <Sparkles className="text-blue-600" size={32} />
//               About Me
//             </h2>
//             <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
//           </div>

//           <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-6">
//             <div className="space-y-4">
//               <h3 className="text-2xl font-bold text-gray-900">Introduction</h3>
//               <p className="text-gray-700 leading-relaxed text-lg">{professionalSummary.intro}</p>
//             </div>

//             <div className="space-y-4">
//               <h3 className="text-2xl font-bold text-gray-900">My Journey</h3>
//               <p className="text-gray-700 leading-relaxed">{professionalSummary.story}</p>
//             </div>

//             <div className="space-y-4">
//               <h3 className="text-2xl font-bold text-gray-900">Expertise</h3>
//               <p className="text-gray-700 leading-relaxed">{professionalSummary.expertise}</p>
//             </div>

//             <div className="space-y-4">
//               <h3 className="text-2xl font-bold text-gray-900">My Approach</h3>
//               <p className="text-gray-700 leading-relaxed">{professionalSummary.approach}</p>
//             </div>

//             <div className="space-y-4">
//               <h3 className="text-2xl font-bold text-gray-900">Impact & Collaboration</h3>
//               <p className="text-gray-700 leading-relaxed">{professionalSummary.impact}</p>
//             </div>

//             <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
//               <div className="flex items-start gap-3">
//                 <Mail className="text-blue-600 flex-shrink-0" size={24} />
//                 <div>
//                   <p className="text-sm text-gray-500">Email</p>
//                   <a href={`mailto:${personalInfo.email}`} className="text-gray-900 hover:text-blue-600 transition-colors break-all">
//                     {personalInfo.email}
//                   </a>
//                 </div>
//               </div>
//               <div className="flex items-start gap-3">
//                 <MapPin className="text-blue-600 flex-shrink-0" size={24} />
//                 <div>
//                   <p className="text-sm text-gray-500">Location</p>
//                   <p className="text-gray-900">{personalInfo.location}</p>
//                   <p className="text-sm text-gray-600">{personalInfo.timezone}</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-3">
//                 <Clock className="text-blue-600 flex-shrink-0" size={24} />
//                 <div>
//                   <p className="text-sm text-gray-500">Availability</p>
//                   <p className="text-gray-900">{personalInfo.availability}</p>
//                   <p className="text-sm text-gray-600">{personalInfo.responseTime}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ==================== SERVICES SECTION ==================== */}
//       <section ref={servicesRef} className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">What I Do</h2>
//             <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//               Specialized services in backend development and system architecture
//             </p>
//             <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mt-4"></div>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => {
//               const IconComponent = service.icon;
//               return (
//                 <div
//                   key={index}
//                   className="group bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
//                 >
//                   <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
//                     <IconComponent className="text-white" size={32} />
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
//                   <p className="text-gray-600 leading-relaxed mb-4">{service.desc}</p>
//                   <div className="flex flex-wrap gap-2">
//                     {service.tags.map((tag, idx) => (
//                       <span key={idx} className="px-3 py-1 bg-white rounded-full text-sm text-blue-600 font-medium">
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ==================== SKILLS SECTION ==================== */}
//       <section ref={skillsRef} className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
//             <p className="text-gray-600 text-lg">Technologies and tools I work with</p>
//             <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mt-4"></div>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {Object.entries(skills).map(([category, data], index) => (
//               <div
//                 key={index}
//                 className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
//               >
//                 <div className={`inline-block px-4 py-2 bg-gradient-to-r ${data.color} text-white rounded-lg font-bold text-lg mb-4`}>
//                   {category}
//                 </div>
//                 <div className="flex flex-wrap gap-2">
//                   {data.items.map((skill, idx) => (
//                     <span key={idx} className="px-3 py-2 bg-gradient-to-br from-slate-50 to-blue-50 text-gray-700 rounded-lg text-sm font-medium hover:shadow-md transition-shadow duration-200">
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ==================== EXPERIENCE SECTION ==================== */}
//       <section ref={experienceRef} className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
//               <Briefcase className="text-blue-600" size={36} />
//               Work Experience
//             </h2>
//             <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
//           </div>

//           <div className="space-y-8">
//             {experience.map((exp, index) => (
//               <div
//                 key={index}
//                 className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
//               >
//                 <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                       {exp.role} {exp.type && <span className="text-blue-600">{exp.type}</span>}
//                     </h3>
//                     <p className="text-lg text-gray-700 font-medium">{exp.company}</p>
//                   </div>
//                   <div className="mt-2 md:mt-0 text-left md:text-right">
//                     <p className="text-gray-600 font-medium flex items-center gap-2">
//                       <Calendar size={18} className="text-blue-600" />
//                       {exp.period}
//                     </p>
//                     <p className="text-gray-600 flex items-center gap-2 mt-1">
//                       <MapPin size={18} className="text-blue-600" />
//                       {exp.location}
//                     </p>
//                   </div>
//                 </div>

//                 <ul className="space-y-3 mb-6">
//                   {exp.highlights.map((highlight, idx) => (
//                     <li key={idx} className="flex items-start gap-3 text-gray-700">
//                       <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-1" size={20} />
//                       <span>{highlight}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <div className="flex flex-wrap gap-2">
//                   {exp.technologies.map((tech, idx) => (
//                     <span key={idx} className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm font-medium shadow-sm">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ==================== PROJECTS SECTION ==================== */}
//       <section ref={projectsRef} className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
//               <FileCode className="text-blue-600" size={36} />
//               Featured Projects
//             </h2>
//             <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//               Case studies of enterprise solutions I've architected and delivered
//             </p>
//             <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mt-4"></div>
//           </div>

//           <div className="space-y-12">
//             {projects.map((project, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
//               >
//                 <div className="p-8 md:p-10">
//                   {/* Project Header */}
//                   <div className="mb-6">
//                     <span className="inline-block px-4 py-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm font-medium mb-3">
//                       {project.category}
//                     </span>
//                     <h3 className="text-3xl font-bold text-gray-900 mb-3">{project.title}</h3>
//                     <p className="text-lg text-blue-600 font-medium italic mb-4">{project.tagline}</p>
//                   </div>

//                   {/* Problem & Solution */}
//                   <div className="grid md:grid-cols-2 gap-6 mb-6">
//                     <div className="bg-red-50 p-6 rounded-xl">
//                       <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
//                         <span className="w-3 h-3 bg-red-500 rounded-full"></span>
//                         The Challenge
//                       </h4>
//                       <p className="text-gray-700">{project.problem}</p>
//                     </div>
//                     <div className="bg-green-50 p-6 rounded-xl">
//                       <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
//                         <span className="w-3 h-3 bg-green-500 rounded-full"></span>
//                         The Solution
//                       </h4>
//                       <p className="text-gray-700">{project.solution}</p>
//                     </div>
//                   </div>

//                   {/* Role & Impact */}
//                   <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl mb-6">
//                     <div className="grid md:grid-cols-2 gap-6">
//                       <div>
//                         <h4 className="text-lg font-bold text-gray-900 mb-2">My Role</h4>
//                         <p className="text-gray-700">{project.role}</p>
//                       </div>
//                       <div>
//                         <h4 className="text-lg font-bold text-gray-900 mb-3">Impact Metrics</h4>
//                         <ul className="space-y-2">
//                           {project.impact.map((item, idx) => (
//                             <li key={idx} className="flex items-start gap-2 text-gray-700">
//                               <Target className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
//                               <span className="font-medium">{item}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Tech Stack */}
//                   <div className="mb-6">
//                     <h4 className="text-lg font-bold text-gray-900 mb-3">Technology Stack</h4>
//                     <div className="flex flex-wrap gap-2">
//                       {project.tech.map((tech, idx) => (
//                         <span key={idx} className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg text-sm font-medium shadow-md">
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Key Features */}
//                   <div className="mb-6">
//                     <h4 className="text-lg font-bold text-gray-900 mb-3">Key Features</h4>
//                     <div className="grid md:grid-cols-2 gap-3">
//                       {project.features.map((feature, idx) => (
//                         <div key={idx} className="flex items-start gap-3 text-gray-700">
//                           <CheckCircle2 className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
//                           <span>{feature}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Highlights */}
//                   <div className="mb-6">
//                     <h4 className="text-lg font-bold text-gray-900 mb-3">Development Highlights</h4>
//                     <ul className="space-y-2">
//                       {project.highlights.map((highlight, idx) => (
//                         <li key={idx} className="flex items-start gap-3 text-gray-700">
//                           <ChevronRight className="text-blue-600 flex-shrink-0 mt-1" size={18} />
//                           <span>{highlight}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   {/* Links */}
//                   <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
//                     {project.live && (
//                       Array.isArray(project.live) ? (
//                         project.live.map((link, idx) => (
//                           <a
//                             key={idx}
//                             href={link.url}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
//                           >
//                             <ExternalLink size={18} />
//                             {link.name}
//                           </a>
//                         ))
//                       ) : (
//                         <a
//                           href={project.live}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
//                         >
//                           <ExternalLink size={18} />
//                           View Live Project
//                         </a>
//                       )
//                     )}
//                     {project.github && (
//                       <a
//                         href={project.github}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-all duration-200 flex items-center gap-2"
//                       >
//                         <Github size={18} />
//                         View Code
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ==================== EDUCATION SECTION ==================== */}
//       <section ref={educationRef} className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
//               <GraduationCap className="text-blue-600" size={36} />
//               Education
//             </h2>
//             <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
//           </div>

//           <div className="space-y-6">
//             {education.map((edu, index) => (
//               <div
//                 key={index}
//                 className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
//               >
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
//                 <a
//                   href={edu.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-xl text-blue-600 hover:underline font-medium mb-4 inline-block"
//                 >
//                   {edu.institution}
//                 </a>
//                 <div className="flex flex-col md:flex-row md:items-center gap-4 text-gray-600 mb-4">
//                   <p className="flex items-center gap-2">
//                     <Calendar size={18} className="text-blue-600" />
//                     {edu.period}
//                   </p>
//                   {edu.location && (
//                     <p className="flex items-center gap-2">
//                       <MapPin size={18} className="text-blue-600" />
//                       {edu.location}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ==================== CERTIFICATIONS SECTION ==================== */}
//       <section ref={certificationsRef} className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
//               <Award className="text-blue-600" size={36} />
//               Certifications
//             </h2>
//             <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {certifications.map((cert, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <Award className="text-white" size={24} />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h3>
//                     <p className="text-sm text-gray-600 mb-1">{cert.issuer}</p>
//                     <p className="text-sm text-blue-600 font-medium">{cert.year}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ==================== CONTACT SECTION ==================== */}
//       <section ref={contactRef} className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
//               <Send className="text-blue-600" size={36} />
//               Get In Touch
//             </h2>
//             <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//               Let's discuss your next project or just connect for a chat
//             </p>
//             <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mt-4"></div>
//           </div>

//           <div className="grid md:grid-cols-2 gap-12">
//             {/* Contact Info */}
//             <div className="space-y-6">
//               <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-2xl">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Work Together</h3>
//                 <p className="text-gray-700 mb-6 leading-relaxed">
//                   {personalInfo.availability}
//                 </p>
//                 <div className="space-y-4">
//                   <a
//                     href={`mailto:${personalInfo.email}`}
//                     className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow duration-200"
//                   >
//                     <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
//                       <Mail className="text-white" size={20} />
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Email</p>
//                       <p className="text-gray-900 font-medium break-all">{personalInfo.email}</p>
//                     </div>
//                   </a>

//                   <div className="flex items-center gap-4 p-4 bg-white rounded-xl">
//                     <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
//                       <MapPin className="text-white" size={20} />
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Location</p>
//                       <p className="text-gray-900 font-medium">{personalInfo.location}</p>
//                       <p className="text-sm text-gray-600">{personalInfo.timezone}</p>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-4 p-4 bg-white rounded-xl">
//                     <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
//                       <Clock className="text-white" size={20} />
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Response Time</p>
//                       <p className="text-gray-900 font-medium">{personalInfo.responseTime}</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-6 flex gap-4">
//                   <a
//                     href={personalInfo.linkedin}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex-1 p-4 bg-white rounded-xl hover:shadow-md transition-shadow duration-200 flex items-center justify-center gap-2 text-blue-600 font-medium"
//                   >
//                     <Linkedin size={20} />
//                     LinkedIn
//                   </a>
//                   <a
//                     href={personalInfo.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex-1 p-4 bg-white rounded-xl hover:shadow-md transition-shadow duration-200 flex items-center justify-center gap-2 text-gray-900 font-medium"
//                   >
//                     <Github size={20} />
//                     GitHub
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Form Placeholder */}
//             <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h3>
//               <p className="text-gray-600 mb-6">
//                 You can integrate a contact form here using services like Formspree, Netlify Forms, or EmailJS.
//               </p>
//               <div className="space-y-4">
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Your Email"
//                   className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
//                 />
//                 <textarea
//                   placeholder="Your Message"
//                   rows="5"
//                   className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none"
//                 ></textarea>
//                 <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2">
//                   <Send size={20} />
//                   Send Message
//                 </button>
//               </div>
//               <p className="text-sm text-gray-500 mt-4 text-center">
//                 Form integration coming soon. For now, please email me directly.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ==================== FOOTER ==================== */}
//       <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-8">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <p className="text-gray-300">
//               © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
//             </p>
//             <p className="text-gray-400 text-sm mt-2">
//               Built with Next.js & Tailwind CSS
//             </p>
//           </div>
//         </div>
//       </footer>

//       {/* ==================== SCROLL TO TOP BUTTON ==================== */}
//       {showScrollTop && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 z-40"
//         >
//           <ArrowUp size={24} />
//         </button>
//       )}
//     </div>
//   );
// }