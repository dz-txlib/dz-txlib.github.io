// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import { Mail, Phone, MapPin, Linkedin, Github, Download, Menu, X, Briefcase, GraduationCap, Server, Code, Share2, Database, Award, ArrowUp, ExternalLink, Calendar, ChevronRight, Sparkles, FileCode, Layers, GitBranch } from 'lucide-react';
// import Image from 'next/image';

// const personalInfo = {
//   name: "Mohammad Talib Uddin",
//   role: "Software Engineer",
//   tagline: "Backend Engineer passionate about building robust, high-performance APIs and scalable server-side systems using Spring Boot and Django REST Framework.",
//   email: "talib.uddin626@gmail.com",
//   phone: "+91-7725050626",
//   location: "Bhopal, Madhya Pradesh, India",
//   cv: "/Talib_Software_Engineer.pdf",
//   linkedin: "https://www.linkedin.com/in/dz-txlib",
//   github: "https://github.com/mohammadtalibuddin",
//   image: "/profile2.png"
// };

// const professionalSummary = {
//   intro: "I am a Software Engineer with a strong focus on backend development, leveraging Java (Spring Boot) and Python (Django REST Framework) to build secure, efficient, and scalable applications.",
//   about: "I specialize in designing and implementing RESTful APIs, optimizing database performance, and architecting modular, maintainable backends. My experience spans across the full development lifecycle—from ideation and development to deployment and monitoring. I’ve collaborated with DevOps teams to deploy applications on AWS and Hostinger VPS, ensuring reliability, scalability, and performance. Passionate about clean architecture and modern backend practices, I enjoy transforming complex problems into simple, elegant software solutions."
// };

// const services = [
//   { icon: Code, title: "Backend Development", desc: "Building robust and scalable server-side applications using Java (Spring Boot) and Python (Django)." },
//   { icon: Share2, title: "Microservices Architecture", desc: "Designing and implementing distributed systems with independent, reliable, and versioned microservices." },
//   { icon: Server, title: "RESTful API Design", desc: "Developing clean, secure, and well-documented RESTful APIs with JWT, RBAC, and OpenAPI/Swagger." },
//   { icon: Database, title: "Database Management", desc: "Optimizing and maintaining relational & NoSQL databases like MySQL, PostgreSQL, and MongoDB with Redis caching." },
//   { icon: Layers, title: "DevOps & Cloud Deployment", desc: "Deploying and managing applications on AWS & Hostinger VPS, and setting up CI/CD pipelines." },
//   { icon: GitBranch, title: "System Design & Architecture", desc: "Architecting modular, scalable, and high-availability software solutions for complex business needs." }
// ];

// const skills = {
//   languages: ["Java", "Python", "SQL"],
//   frameworks: ["Spring Boot", "Django REST Framework", "FastAPI", "Hibernate", "Microservices"],
//   databases: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
//   devops: ["AWS (EC2, S3)", "Hostinger VPS", "Docker", "CI/CD", "Nginx", "Apache Tomcat"],
//   tools: ["Git", "Postman", "Swagger", "IntelliJ IDEA", "VS Code", "pgAdmin"],
//   concepts: ["RESTful API Design", "JWT", "RBAC", "System Design", "Agile/Scrum", "OOP", "Data Structures"]
// };

// const experience = [
//   {
//     company: "Affy Cloud IT Solutions",
//     role: "Software Engineer (Intern → Full-Time)",
//     period: "March 2024 – Present",
//     location: "Bhopal, India",
//     highlights: [
//       "Developed and maintained backend systems for multiple products using Java (Spring Boot) and Python (Django).",
//       "Designed scalable microservices and integrated 50+ RESTful APIs, ensuring reliability and backward compatibility.",
//       "Implemented secure authentication with JWT and RBAC, and optimized database schemas (MySQL, PostgreSQL, MongoDB), reducing query latency by 35%.",
//       "Collaborated with DevOps to configure cloud infrastructure (AWS, Hostinger VPS) and set up CI/CD pipelines.",
//       "Mentored junior developers on backend design patterns, clean coding practices, and debugging strategies."
//     ]
//   },
//   {
//     company: "Orange Antelopes",
//     role: "Software Engineer Intern",
//     period: "Sep 2023 – Feb 2024",
//     location: "Bhopal, India",
//     highlights: [
//       "Developed backend systems using Java Spring Boot, building scalable RESTful APIs.",
//       "Implemented core backend concepts including database schema design, query optimization, and secure authentication.",
//       "Collaborated with frontend teams to ensure seamless API integration and smooth data flow.",
//       "Gained hands-on experience with cloud deployment, server configuration, and CI/CD pipelines."
//     ]
//   }
// ];

// const education = [
//   {
//     degree: "Bachelor of Technology in Computer Science",
//     institution: "SAM College of Engineering and Technology",
//     period: "August 2021 – May 2025",
//     location: "Bhopal, Madhya Pradesh",
//     link: "https://samglobaluniversity.ac.in"
//   }
// ];

// const certifications = [
//   { name: "Java Programming: Mastering the Fundamentals", issuer: "Certificate of Excellence", year: "Sep 2024" },
//   { name: "Blockchain Development: Building Robust Solutions", issuer: "Certificate of Completion", year: "Mar 2024" },
//   { name: "Java Programming: Foundations and Core Principles", issuer: "Certificate of Achievement", year: "Jan 2024" },
// ];

// const projects = [
//     {
//     title: "TUTORIO - Multi-Tenant LMS",
//     category: "Ed-Tech Platform",
//     desc: "Engineered a multi-tenant Learning Management System (LMS) for schools, universities, and coaching centers to manage their own digital learning ecosystems.",
//     tech: ["Spring Boot", "Microservices", "MySQL", "Redis", "JWT", "AWS"],
//     github: null,
//     live: "https://web.tutorio.in",
//     highlights: [
//       "Developed backend using Spring Boot Microservices with secure multi-tenant data isolation.",
//       "Integrated course management, live/recorded classes, test series, eBooks, and doubt-solving modules.",
//       "Optimized database schema and Redis caching, reducing query response time by up to 40%.",
//       "Built an e-commerce module for purchasing courses, eBooks, and test series."
//     ]
//   },
//   {
//     title: "WhatARecruiter - Smart Recruitment System",
//     category: "AI-Powered HR Tech",
//     desc: "Developed an AI-powered Recruitment Management System to streamline the end-to-end hiring process for enterprises and HR teams.",
//     tech: ["Spring Boot", "Microservices", "FastAPI", "MySQL", "Redis", "Hostinger VPS"],
//     github: null,
//     live: null,
//     highlights: [
//       "Integrated a FastAPI-based AI service for intelligent resume parsing and candidate matching.",
//       "Designed dynamic job requisition and approval workflows for admins, recruiters, and hiring managers.",
//       "Implemented secure RBAC with JWT and optimized MySQL queries with Redis, improving response times by 35%.",
//       "Deployed on Hostinger VPS with microservice orchestration for high availability."
//     ]
//   },
//   {
//     title: "E-Commerce Platform Suite",
//     category: "Multi-Industry E-Commerce",
//     desc: "Architected backend systems for multiple e-commerce platforms (fashion, organic products), enabling online stores and mobile app integrations.",
//     tech: ["Spring Boot", "Microservices", "Razorpay", "Shiprocket API", "Hostinger VPS"],
//     github: null,
//     live: "https://tarhaab.com",
//     highlights: [
//       "Engineered a modular, reusable backend framework supporting cart management, order tracking, and secure payments.",
//       "Integrated Razorpay for payments and automated shipment tracking via Shiprocket API.",
//       "Optimized backend performance with caching and connection pooling, achieving 40% faster response times.",
//       "Built analytics dashboards for real-time sales and performance insights."
//     ]
//   },
//   {
//     title: "Dclean - Laundry Management System",
//     category: "Operations Management",
//     desc: "Developed a comprehensive Laundry Management System using Django REST Framework with separate panels for Admin, Customer, and Delivery Agents.",
//     tech: ["Django REST", "Nginx", "Gunicorn"],
//     github: null,
//     live: "https://dclean.me",
//     highlights: [
//       "Implemented end-to-end laundry operations: order management, pickups, payments, and invoicing.",
//       "Built a mobile-friendly Delivery App API and a centralized Admin Dashboard.",
//       "Optimized database queries and schema, improving data retrieval speed by up to 30%.",
//       "Deployed on Nginx + Gunicorn, ensuring high availability and scalability."
//     ]
//   }
// ];

// // --- Component ---
// export default function Portfolio() {
//   const [activeSection, setActiveSection] = useState('home');
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [showScrollTop, setShowScrollTop] = useState(false);
//   const [typedRole, setTypedRole] = useState('');
//   const [cursorVisible, setCursorVisible] = useState(true);
//   const [isLoading, setIsLoading] = useState(true);

//   // Refs
//   const heroRef = useRef(null);
//   const aboutRef = useRef(null);
//   const servicesRef = useRef(null);
//   const skillsRef = useRef(null);
//   const experienceRef = useRef(null);
//   const educationRef = useRef(null);
//   const projectsRef = useRef(null);
//   const certificationsRef = useRef(null);
//   const contactRef = useRef(null);

//   // Typing effect for role
//   useEffect(() => {
//     const roleText = personalInfo.role;
//     let index = 0;
//     const typingInterval = setInterval(() => {
//       if (index <= roleText.length) {
//         setTypedRole(roleText.slice(0, index));
//         index++;
//       } else {
//         clearInterval(typingInterval);
//       }
//     }, 100);

//     return () => clearInterval(typingInterval);
//   }, []);

//   // Cursor blink effect
//   useEffect(() => {
//     const cursorInterval = setInterval(() => {
//       setCursorVisible(prev => !prev);
//     }, 530);
//     return () => clearInterval(cursorInterval);
//   }, []);

//   // Loading animation
//   useEffect(() => {
//     setTimeout(() => setIsLoading(false), 1500);
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
//         { id: 'education', ref: educationRef },
//         { id: 'projects', ref: projectsRef },
//         { id: 'certifications', ref: certificationsRef },
//         { id: 'contact', ref: contactRef }
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

//   // Smooth scroll function
//   const scrollToSection = (ref) => {
//     ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     setIsMenuOpen(false);
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   // Navigation items
//   const navItems = [
//     { name: 'Home', id: 'home', ref: heroRef },
//     { name: 'About', id: 'about', ref: aboutRef },
//     { name: 'Services', id: 'services', ref: servicesRef },
//     { name: 'Skills', id: 'skills', ref: skillsRef },
//     { name: 'Experience', id: 'experience', ref: experienceRef },
//     { name: 'Projects', id: 'projects', ref: projectsRef },
//     { name: 'Certifications', id: 'certifications', ref: certificationsRef },
//     { name: 'Contact', id: 'contact', ref: contactRef }
//   ];

//   if (isLoading) {
//     return (
//       <div className="fixed inset-0 bg-gradient-to-br from-blue-600 to-cyan-700 flex items-center justify-center z-[9999]">
//         <div className="text-center">
//           <div className="flex gap-3 justify-center mb-5">
//             <div className="w-4 h-4 bg-white rounded-full animate-bounce" style={{ animationDelay: '-0.32s' }}></div>
//             <div className="w-4 h-4 bg-white rounded-full animate-bounce" style={{ animationDelay: '-0.16s' }}></div>
//             <div className="w-4 h-4 bg-white rounded-full animate-bounce"></div>
//           </div>
//           <p className="text-white text-lg font-medium tracking-wide">Loading Portfolio...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-slate-950 text-slate-200 overflow-x-hidden">
//       {/* Navigation */}
//       <nav className="fixed top-0 left-0 right-0 bg-slate-950/95 backdrop-blur-lg shadow-lg z-[1000] border-b border-white/5">
//         <div className="max-w-7xl mx-auto px-5 py-5 flex justify-between items-center">
//           <div className="flex items-center gap-2.5 text-2xl font-bold text-blue-500">
//             <Sparkles size={24} className="animate-spin" style={{ animationDuration: '3s' }} />
//             <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
//               {personalInfo.name.split(' ')[0]}
//             </span>
//           </div>

//           {/* Desktop Menu */}
//           <ul className="hidden lg:flex gap-8 list-none">
//             {navItems.map(item => (
//               <li key={item.id}>
//                 <button
//                   onClick={() => scrollToSection(item.ref)}
//                   className={`text-base font-medium transition-colors relative py-1 ${
//                     activeSection === item.id ? 'text-blue-500' : 'text-slate-400 hover:text-blue-500'
//                   }`}
//                 >
//                   {item.name}
//                   {activeSection === item.id && (
//                     <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></span>
//                   )}
//                 </button>
//               </li>
//             ))}
//           </ul>

//           {/* Mobile Menu Toggle */}
//           <button 
//             className="lg:hidden p-1.5 text-slate-400"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="lg:hidden bg-slate-900 px-5 py-5 border-t border-white/5">
//             <ul className="flex flex-col gap-4 list-none">
//               {navItems.map(item => (
//                 <li key={item.id}>
//                   <button
//                     onClick={() => scrollToSection(item.ref)}
//                     className={`text-lg font-medium transition-all p-2.5 rounded-lg w-full text-left ${
//                       activeSection === item.id 
//                         ? 'text-blue-500 bg-blue-500/10' 
//                         : 'text-slate-400 hover:text-blue-500 hover:bg-blue-500/10'
//                     }`}
//                   >
//                     {item.name}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section ref={heroRef} className="min-h-screen flex items-center justify-center relative px-5 pt-32 pb-16 bg-slate-950 overflow-hidden">
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        
//         <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
//           <div className="text-center lg:text-left">
//             <p className="text-xl font-medium mb-4 text-slate-400 animate-fadeInUp">Hello, I am</p>
//             <h1 className="text-5xl md:text-7xl font-extrabold mb-5 leading-tight text-slate-100 animate-fadeInUp" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
//               {personalInfo.name}
//             </h1>
//             <div className="min-h-[45px] mb-6">
//               <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-fadeInUp" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
//                 {typedRole}
//                 <span className={`ml-0.5 transition-opacity duration-100 text-blue-400 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>|</span>
//               </h2>
//             </div>
//             <p className="text-lg md:text-xl mb-12 text-slate-400 max-w-xl mx-auto lg:mx-0 animate-fadeInUp" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
//               {personalInfo.tagline}
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-5 mb-12 animate-fadeInUp" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
//               <a 
//                 href={personalInfo.cv} 
//                 download 
//                 className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/40 transition-all"
//               >
//                 <Download size={18} />
//                 Download CV
//               </a>
//               <button 
//                 onClick={() => scrollToSection(contactRef)} 
//                 className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-full bg-blue-500/10 text-blue-400 border-2 border-blue-500/30 hover:bg-blue-500/20 hover:-translate-y-1 transition-all"
//               >
//                 Get in Touch
//                 <ChevronRight size={18} />
//               </button>
//             </div>

//             <div className="flex gap-4 justify-center lg:justify-start animate-fadeInUp" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
//               <a href={`mailto:${personalInfo.email}`} className="w-11 h-11 flex items-center justify-center bg-blue-500/10 rounded-full text-blue-400 border border-blue-500/20 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:-translate-y-1 hover:shadow-md hover:shadow-blue-500/30 transition-all" aria-label="Email">
//                 <Mail size={20} />
//               </a>
//               <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center bg-blue-500/10 rounded-full text-blue-400 border border-blue-500/20 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:-translate-y-1 hover:shadow-md hover:shadow-blue-500/30 transition-all" aria-label="LinkedIn">
//                 <Linkedin size={20} />
//               </a>
//               <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center bg-blue-500/10 rounded-full text-blue-400 border border-blue-500/20 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:-translate-y-1 hover:shadow-md hover:shadow-blue-500/30 transition-all" aria-label="GitHub">
//                 <Github size={20} />
//               </a>
//             </div>
//           </div>

//           <div className="flex justify-center items-center animate-fadeIn" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
//             <div className="relative w-full max-w-[400px] aspect-square">
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 to-cyan-500/40 rounded-full blur-3xl opacity-70"></div>
//               <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl shadow-blue-900/50">
//                 <Image
//                   src={personalInfo.image}
//                   alt={personalInfo.name}
//                   fill
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                   className="object-cover"
//                   priority
//                   quality={95}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 text-slate-400 animate-fadeIn" style={{ animationDelay: '1.5s', animationFillMode: 'both' }}>
//           <div className="w-6 h-10 border-2 border-blue-400 rounded-2xl relative">
//             <div className="w-1 h-2 bg-blue-400 rounded-sm absolute top-2 left-1/2 -translate-x-1/2 animate-scroll"></div>
//           </div>
//           <p className="text-sm">Scroll Down</p>
//         </div>
//       </section>

//       {/* About Section */}
//       <section ref={aboutRef} className="py-24 px-5 bg-slate-950">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-4">About Me</h2>
//             <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
//           </div>

//           <div className="max-w-4xl mx-auto">
//             <div className="text-center">
//               <p className="text-xl md:text-2xl font-semibold text-blue-400 mb-5 leading-relaxed">{professionalSummary.intro}</p>
//               <p className="text-lg leading-relaxed text-slate-400 mb-10">{professionalSummary.about}</p>
              
//               <div className="grid md:grid-cols-3 gap-8">
//                 <div className="flex gap-4 p-5 bg-slate-900 rounded-xl border border-blue-500/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg hover:shadow-black/30 transition-all">
//                   <Mail className="text-blue-400 flex-shrink-0" size={20} />
//                   <div className="text-left">
//                     <p className="text-sm font-semibold text-slate-500 mb-1">Email</p>
//                     <p className="text-base text-slate-200 break-words">{personalInfo.email}</p>
//                   </div>
//                 </div>
//                 <div className="flex gap-4 p-5 bg-slate-900 rounded-xl border border-blue-500/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg hover:shadow-black/30 transition-all">
//                   <Phone className="text-blue-400 flex-shrink-0" size={20} />
//                   <div className="text-left">
//                     <p className="text-sm font-semibold text-slate-500 mb-1">Phone</p>
//                     <p className="text-base text-slate-200">{personalInfo.phone}</p>
//                   </div>
//                 </div>
//                 <div className="flex gap-4 p-5 bg-slate-900 rounded-xl border border-blue-500/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg hover:shadow-black/30 transition-all">
//                   <MapPin className="text-blue-400 flex-shrink-0" size={20} />
//                   <div className="text-left">
//                     <p className="text-sm font-semibold text-slate-500 mb-1">Location</p>
//                     <p className="text-base text-slate-200">{personalInfo.location}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section ref={servicesRef} className="py-24 px-5 bg-slate-900">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-4">What I Do</h2>
//             <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
//             <p className="text-lg text-slate-400 mt-4">My professional services in backend development and system architecture.</p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <div key={index} className="p-10 bg-slate-950 rounded-2xl text-center border border-blue-500/10 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-xl hover:shadow-black/30 transition-all group">
//                 <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:rotate-y-180 transition-transform duration-500">
//                   <service.icon className="text-white" size={32} />
//                 </div>
//                 <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-4">{service.title}</h3>
//                 <p className="text-base text-slate-400 leading-relaxed">{service.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section ref={skillsRef} className="py-24 px-5 bg-slate-950">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-4">Technical Skills</h2>
//             <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//              <div className="bg-slate-900 p-8 rounded-2xl border border-blue-500/10 hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30 transition-all">
//               <h3 className="flex items-center gap-3 text-xl font-bold mb-5 text-slate-100">
//                 <FileCode size={24} />
//                 Languages
//               </h3>
//               <div className="flex flex-wrap gap-3">
//                 {skills.languages.map((skill, index) => (
//                   <span key={index} className="px-5 py-2.5 bg-blue-500/10 rounded-full text-sm font-medium border border-blue-500/20 text-slate-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/30 transition-all cursor-default">
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
            
//             <div className="bg-slate-900 p-8 rounded-2xl border border-blue-500/10 hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30 transition-all">
//               <h3 className="flex items-center gap-3 text-xl font-bold mb-5 text-slate-100">
//                 <Layers size={24} />
//                 Frameworks
//               </h3>
//               <div className="flex flex-wrap gap-3">
//                 {skills.frameworks.map((skill, index) => (
//                   <span key={index} className="px-5 py-2.5 bg-blue-500/10 rounded-full text-sm font-medium border border-blue-500/20 text-slate-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/30 transition-all cursor-default">
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-slate-900 p-8 rounded-2xl border border-blue-500/10 hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30 transition-all">
//               <h3 className="flex items-center gap-3 text-xl font-bold mb-5 text-slate-100">
//                 <Database size={24} />
//                 Databases
//               </h3>
//               <div className="flex flex-wrap gap-3">
//                 {skills.databases.map((skill, index) => (
//                   <span key={index} className="px-5 py-2.5 bg-blue-500/10 rounded-full text-sm font-medium border border-blue-500/20 text-slate-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/30 transition-all cursor-default">
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-slate-900 p-8 rounded-2xl border border-blue-500/10 hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30 transition-all">
//               <h3 className="flex items-center gap-3 text-xl font-bold mb-5 text-slate-100">
//                 <Server size={24} />
//                 DevOps & Cloud
//               </h3>
//               <div className="flex flex-wrap gap-3">
//                 {skills.devops.map((skill, index) => (
//                   <span key={index} className="px-5 py-2.5 bg-blue-500/10 rounded-full text-sm font-medium border border-blue-500/20 text-slate-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/30 transition-all cursor-default">
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             <div className="md:col-span-2 bg-slate-900 p-8 rounded-2xl border border-blue-500/10 hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30 transition-all">
//               <h3 className="flex items-center gap-3 text-xl font-bold mb-5 text-slate-100">
//                 <Code size={24} />
//                 Tools & Concepts
//               </h3>
//               <div className="flex flex-wrap gap-3">
//                 {[...skills.tools, ...skills.concepts].map((skill, index) => (
//                   <span key={index} className="px-5 py-2.5 bg-blue-500/10 rounded-full text-sm font-medium border border-blue-500/20 text-slate-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/30 transition-all cursor-default">
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Experience Section */}
//       <section ref={experienceRef} className="py-24 px-5 bg-slate-900">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-4">Work Experience</h2>
//             <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
//           </div>

//           <div className="max-w-4xl mx-auto relative">
//             <div className="absolute left-8 md:left-[2.1rem] top-0 bottom-0 w-[3px] experience-line"></div>
            
//             {experience.map((exp, index) => (
//               <div key={index} className="relative pl-20 md:pl-32 mb-12 last:mb-0">
//                 <div className="absolute left-5 md:left-9 w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/40">
//                   <Briefcase size={20} />
//                 </div>
//                 <div className="bg-slate-950 p-8 rounded-2xl border border-blue-500/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg hover:shadow-black/30 transition-all">
//                   <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2.5 gap-5 md:gap-0">
//                     <h3 className="text-xl md:text-2xl font-bold text-slate-100">{exp.role}</h3>
//                     <span className="flex items-center gap-1.5 text-sm text-slate-400 whitespace-nowrap">
//                       <Calendar size={16} />
//                       {exp.period}
//                     </span>
//                   </div>
//                   <p className="text-base text-blue-400 font-semibold mb-5">{exp.company} • {exp.location}</p>
//                   <ul className="list-none p-0">
//                     {exp.highlights.map((highlight, idx) => (
//                       <li key={idx} className="pl-6 mb-3 text-slate-400 leading-relaxed relative before:content-['▹'] before:absolute before:left-0 before:text-blue-400 before:font-bold">
//                         {highlight}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section ref={projectsRef} className="py-24 px-5 bg-slate-950">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-4">Featured Projects</h2>
//             <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
//             <p className="text-lg text-slate-400 mt-4">A selection of my recent work and contributions.</p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-10">
//             {projects.map((project, index) => (
//               <div key={index} className="bg-slate-900 p-9 rounded-2xl border border-blue-500/10 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-xl hover:shadow-black/30 transition-all flex flex-col">
//                 <div className="flex justify-between items-center mb-5">
//                   <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20">
//                     {project.category}
//                   </span>
//                   <div className="flex gap-2.5">
//                     {project.github && (
//                       <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center bg-blue-500/10 rounded-full text-blue-400 border border-blue-500/20 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/30 transition-all" aria-label="GitHub">
//                         <Github size={18} />
//                       </a>
//                     )}
//                     {project.live && (
//                       <a href={project.live} target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center bg-blue-500/10 rounded-full text-blue-400 border border-blue-500/20 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/30 transition-all" aria-label="Live Demo">
//                         <ExternalLink size={18} />
//                       </a>
//                     )}
//                   </div>
//                 </div>
                
//                 <div className="flex-grow">
//                   <h3 className="text-2xl font-bold text-slate-100 mb-4">{project.title}</h3>
//                   <p className="text-base text-slate-400 leading-relaxed mb-5">{project.desc}</p>
                  
//                   <div className="flex flex-wrap gap-2.5 mb-5">
//                     {project.tech.map((tech, idx) => (
//                       <span key={idx} className="text-[13px] px-3 py-1.5 bg-blue-500/10 text-slate-200 rounded-2xl font-medium border border-blue-500/20">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>

//                   {project.highlights && (
//                     <ul className="list-none p-0 border-t border-blue-500/10 pt-5">
//                       {project.highlights.map((highlight, idx) => (
//                         <li key={idx} className="pl-6 mb-2.5 text-slate-400 leading-relaxed relative text-sm before:content-['▹'] before:absolute before:left-0 before:text-blue-400 before:font-bold">
//                           {highlight}
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Education & Certifications Section */}
//       <section ref={educationRef} className="py-24 px-5 bg-slate-900">
//          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
//             <div>
//               <div className="text-center lg:text-left mb-16">
//                 <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-4">Education</h2>
//                 <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto lg:mx-0 rounded-full"></div>
//               </div>
              
//               {education.map((edu, index) => (
//                 <div key={index} className="bg-slate-950 p-10 rounded-2xl text-center border border-blue-500/10 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-xl hover:shadow-black/30 transition-all">
//                   <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white">
//                     <GraduationCap size={40} />
//                   </div>
//                   <h3 className="text-xl font-bold text-slate-100 mb-4 leading-snug">{edu.degree}</h3>
//                   <a href={edu.link} target="_blank" rel="noopener noreferrer" className="text-base text-blue-400 font-semibold mb-2.5 inline-block hover:underline">{edu.institution}</a>
//                   <p className="text-sm text-slate-400">{edu.period}</p>
//                   {edu.location && <p className="text-sm text-slate-400">{edu.location}</p>}
//                 </div>
//               ))}
//             </div>

//             <div ref={certificationsRef}>
//               <div className="text-center lg:text-left mb-16">
//                 <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-4">Certifications</h2>
//                 <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto lg:mx-0 rounded-full"></div>
//               </div>

//               <div className="grid gap-8">
//                 {certifications.map((cert, index) => (
//                   <div key={index} className="bg-slate-950 p-8 rounded-2xl text-center md:text-left md:flex items-center gap-6 border border-blue-500/10 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-xl hover:shadow-black/30 transition-all">
//                     <Award className="text-yellow-500 mx-auto md:mx-0 mb-4 md:mb-0 flex-shrink-0" size={40} />
//                     <div>
//                       <h3 className="text-lg font-bold text-slate-100 mb-2 leading-snug">{cert.name}</h3>
//                       <p className="text-[15px] text-blue-400 font-semibold mb-1">{cert.issuer}</p>
//                       <p className="text-sm text-slate-400">{cert.year}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//          </div>
//       </section>

//       {/* Contact Section */}
//       <section ref={contactRef} className="py-24 px-5 bg-gradient-to-br from-slate-950 to-slate-900">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-4">Get In Touch</h2>
//             <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
//             <p className="text-lg text-slate-400 mt-4">Feel free to reach out for collaborations or just a friendly chat.</p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-16">
//             <div className="flex flex-col gap-8">
//               <div className="flex gap-5 items-start">
//                 <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-400 border border-blue-500/20">
//                   <Mail size={24} />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold mb-2 text-slate-100">Email</h3>
//                   <a href={`mailto:${personalInfo.email}`} className="text-base text-slate-400 hover:text-blue-400 transition-colors">
//                     {personalInfo.email}
//                   </a>
//                 </div>
//               </div>

//               <div className="flex gap-5 items-start">
//                 <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-400 border border-blue-500/20">
//                   <Phone size={24} />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold mb-2 text-slate-100">Phone</h3>
//                   <a href={`tel:${personalInfo.phone}`} className="text-base text-slate-400 hover:text-blue-400 transition-colors">
//                     {personalInfo.phone}
//                   </a>
//                 </div>
//               </div>

//               <div className="flex gap-5 items-start">
//                 <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-400 border border-blue-500/20">
//                   <MapPin size={24} />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold mb-2 text-slate-100">Location</h3>
//                   <p className="text-base text-slate-400">{personalInfo.location}</p>
//                 </div>
//               </div>

//               <div>
//                 <h3 className="text-lg font-semibold mb-4 text-slate-100">Connect With Me</h3>
//                 <div className="flex gap-4">
//                   <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 rounded-full text-blue-400 font-semibold border border-blue-500/20 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/30 transition-all">
//                     <Linkedin size={20} />
//                     LinkedIn
//                   </a>
//                   <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 rounded-full text-blue-400 font-semibold border border-blue-500/20 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/30 transition-all">
//                     <Github size={20} />
//                     GitHub
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-blue-500/5 p-10 rounded-2xl border border-blue-500/10">
//               <form className="flex flex-col gap-6">
//                 <div className="flex flex-col gap-2">
//                   <label htmlFor="name" className="text-sm font-semibold text-slate-200">Name</label>
//                   <input type="text" id="name" name="name" required placeholder="Your Name" className="px-5 py-3.5 border border-blue-500/20 rounded-lg text-base bg-slate-950/50 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:bg-slate-950/80 transition-all" />
//                 </div>

//                 <div className="flex flex-col gap-2">
//                   <label htmlFor="email" className="text-sm font-semibold text-slate-200">Email</label>
//                   <input type="email" id="email" name="email" required placeholder="your.email@example.com" className="px-5 py-3.5 border border-blue-500/20 rounded-lg text-base bg-slate-950/50 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:bg-slate-950/80 transition-all" />
//                 </div>

//                 <div className="flex flex-col gap-2">
//                   <label htmlFor="subject" className="text-sm font-semibold text-slate-200">Subject</label>
//                   <input type="text" id="subject" name="subject" required placeholder="Project Inquiry" className="px-5 py-3.5 border border-blue-500/20 rounded-lg text-base bg-slate-950/50 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:bg-slate-950/80 transition-all" />
//                 </div>

//                 <div className="flex flex-col gap-2">
//                   <label htmlFor="message" className="text-sm font-semibold text-slate-200">Message</label>
//                   <textarea id="message" name="message" rows="5" required placeholder="Your message here..." className="px-5 py-3.5 border border-blue-500/20 rounded-lg text-base bg-slate-950/50 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:bg-slate-950/80 transition-all resize-vertical font-sans"></textarea>
//                 </div>

//                 <button type="submit" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/40 transition-all w-full">
//                   Send Message
//                   <ChevronRight size={18} />
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-slate-950/60 text-slate-400 py-10 px-5 text-center border-t border-blue-500/10">
//         <div className="max-w-7xl mx-auto">
//           <p className="text-base mb-2 text-slate-200">
//             © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
//           </p>
//           <p className="text-sm text-slate-500">Built with Next.js & Tailwind CSS</p>
//         </div>
//       </footer>

//       {/* Scroll to Top Button */}
//       {showScrollTop && (
//         <button 
//           className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/50 transition-all z-[999] animate-fadeInUp"
//           onClick={scrollToTop}
//           aria-label="Scroll to top"
//         >
//           <ArrowUp size={20} />
//         </button>
//       )}

//       <style jsx>{`
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }
//         @keyframes float-reverse {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(20px); }
//         }
//         @keyframes scroll {
//           0% { opacity: 1; transform: translateX(-50%) translateY(0); }
//           100% { opacity: 0; transform: translateX(-50%) translateY(15px); }
//         }
//         .animate-fadeInUp { animation: fadeInUp 0.6s ease forwards; }
//         .animate-fadeIn { animation: fadeIn 1s ease forwards; }
//         .animate-float { animation: float 6s ease-in-out infinite; }
//         .animate-float-reverse { animation: float-reverse 8s ease-in-out infinite; }
//         .animate-scroll { animation: scroll 2s ease infinite; }
//         .rotate-y-180 { transform: rotateY(180deg); }
//         @keyframes slideBackground {
//           0% { background-position: 0 0; }
//           100% { background-position: 0 -400%; }
//         }
//         .experience-line {
//           background: linear-gradient(to bottom, transparent, #3b82f6, transparent);
//           background-size: 100% 400%;
//           animation: slideBackground 3s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// }
