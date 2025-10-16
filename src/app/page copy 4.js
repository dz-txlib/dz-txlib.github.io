// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import { Mail, Phone, MapPin, Linkedin, Github, Download, Menu, X, Briefcase, GraduationCap, Server, Code, Share2, Database, Award, ArrowUp, ExternalLink, Calendar, ChevronRight, Sparkles, FileCode, Layers, GitBranch } from 'lucide-react';

// // --- Data ---
// const personalInfo = {
//   name: "Mohammad Talib Uddin",
//   role: "Software Engineer",
//   tagline: "Crafting Robust Backend Systems & Scalable Solutions",
//   email: "talib.uddin626@gmail.com",
//   phone: "+91-7725050626",
//   location: "Bhopal, Madhya Pradesh, India",
//   cv: "/Talib_Resume.pdf",
//   linkedin: "https://www.linkedin.com/in/dz-txlib",
//   github: "https://github.com/mohammadtalibuddin",
// };

// const professionalSummary = {
//   intro: "As a Software Engineer, I specialize in building robust and scalable backend systems that power modern applications.",
//   about: "Detail-oriented and highly motivated Computer Science graduate with a strong foundation in software development, data structures, and object-oriented programming. Proficient in Java and Python with hands-on experience in building robust backend systems using Spring Boot, Django REST Framework, and Microservices architecture. Adept at working in Agile environments, collaborating in team settings, and delivering high-quality, scalable solutions that drive business value."
// };

// const services = [
//   { icon: Server, title: "RESTful API Design", desc: "Developing clean, secure, and well-documented RESTful APIs with OpenAPI/Swagger specifications." },
//   { icon: Code, title: "Backend Development", desc: "Building scalable server-side applications using Spring Boot, Django, and modern frameworks." },
//   { icon: Share2, title: "Microservices Architecture", desc: "Designing and implementing distributed systems with independent, deployable services." },
//   { icon: Database, title: "Database Management", desc: "Optimizing and maintaining relational databases with MySQL, PostgreSQL, and efficient query design." },
//   { icon: Layers, title: "System Integration", desc: "Seamlessly integrating third-party services, payment gateways, and external APIs." },
//   { icon: GitBranch, title: "Version Control & CI/CD", desc: "Managing codebases with Git and implementing automated deployment pipelines." }
// ];

// const skills = {
//   languages: ["Java", "Python", "JavaScript", "SQL", "HTML/CSS"],
//   frameworks: ["Spring Boot", "Spring MVC", "Django REST Framework", "Hibernate", "JPA"],
//   databases: ["MySQL", "PostgreSQL", "MongoDB"],
//   tools: ["Git", "Docker", "Maven", "Postman", "Swagger", "Jenkins"],
//   concepts: ["RESTful APIs", "Microservices", "OOP", "Data Structures", "Algorithms", "Design Patterns", "Agile/Scrum"]
// };

// const experience = [
//   {
//     company: "Tech Solutions Inc.",
//     role: "Backend Developer",
//     period: "Jan 2023 - Present",
//     location: "Remote",
//     highlights: [
//       "Developed and maintained RESTful APIs serving 100K+ daily requests using Spring Boot",
//       "Optimized database queries reducing response time by 40%",
//       "Implemented microservices architecture for improved scalability",
//       "Collaborated with cross-functional teams in Agile environment"
//     ]
//   },
//   {
//     company: "Innovation Labs",
//     role: "Software Engineer Intern",
//     period: "Jun 2022 - Dec 2022",
//     location: "Bhopal, India",
//     highlights: [
//       "Built backend services for e-commerce platform using Django REST Framework",
//       "Integrated payment gateway (Razorpay) for seamless transactions",
//       "Wrote unit tests achieving 85% code coverage",
//       "Participated in code reviews and sprint planning sessions"
//     ]
//   }
// ];

// const education = [
//   {
//     degree: "Bachelor of Technology in Computer Science",
//     institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
//     period: "2019 - 2023",
//     grade: "CGPA: 8.2/10",
//     highlights: [
//       "Relevant Coursework: Data Structures, Algorithms, Database Management, Operating Systems, Software Engineering",
//       "Final Year Project: E-Learning Management System with Spring Boot and MySQL"
//     ]
//   }
// ];

// const certifications = [
//   { name: "Oracle Certified Associate, Java SE 8 Programmer", issuer: "Oracle", year: "2023" },
//   { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2023" },
//   { name: "Spring Framework Certification", issuer: "Spring Academy", year: "2022" },
//   { name: "Python for Data Science", issuer: "Coursera", year: "2022" }
// ];

// const projects = [
//   {
//     title: "E-Learning Management System",
//     category: "Full-Stack Application",
//     desc: "Comprehensive LMS platform with course management, video streaming, and real-time collaboration features",
//     tech: ["Spring Boot", "MySQL", "WebSocket", "JWT", "Swagger"],
//     github: "https://github.com/mohammadtalibuddin/lms-platform",
//     live: null,
//     highlights: [
//       "Implemented JWT-based authentication and authorization",
//       "Built WebSocket service for real-time chat and notifications",
//       "Integrated third-party APIs for video conferencing",
//       "Designed RESTful APIs with comprehensive Swagger documentation"
//     ]
//   },
//   {
//     title: "E-Commerce Backend System",
//     category: "Backend API",
//     desc: "Scalable e-commerce backend with product management, order processing, and payment integration",
//     tech: ["Spring Boot", "PostgreSQL", "Razorpay API", "Redis", "Docker"],
//     github: "https://github.com/mohammadtalibuddin/ecommerce-api",
//     live: null,
//     highlights: [
//       "Integrated Razorpay for payment processing and subscriptions",
//       "Implemented caching layer with Redis for improved performance",
//       "Built coupon and discount management system",
//       "Deployed using Docker containers for scalability"
//     ]
//   },
//   {
//     title: "Microservices Task Manager",
//     category: "Distributed System",
//     desc: "Task management system built with microservices architecture for enhanced scalability",
//     tech: ["Spring Boot", "Spring Cloud", "Eureka", "MySQL", "RabbitMQ"],
//     github: "https://github.com/mohammadtalibuddin/task-manager-microservices",
//     live: null,
//     highlights: [
//       "Designed service discovery with Eureka server",
//       "Implemented inter-service communication with RabbitMQ",
//       "Built API Gateway for routing and load balancing",
//       "Containerized services with Docker Compose"
//     ]
//   },
//   {
//     title: "REST API Template",
//     category: "Boilerplate",
//     desc: "Production-ready Spring Boot template with best practices for rapid API development",
//     tech: ["Spring Boot", "Spring Security", "MySQL", "JWT", "Swagger"],
//     github: "https://github.com/mohammadtalibuddin/spring-boot-template",
//     live: null,
//     highlights: [
//       "Pre-configured security with JWT authentication",
//       "Exception handling and validation framework",
//       "Automated API documentation with Swagger",
//       "Database migration scripts with Flyway"
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
//     { name: 'Education', id: 'education', ref: educationRef },
//     { name: 'Projects', id: 'projects', ref: projectsRef },
//     { name: 'Certifications', id: 'certifications', ref: certificationsRef },
//     { name: 'Contact', id: 'contact', ref: contactRef }
//   ];

//   if (isLoading) {
//     return (
//       <div className="loading-screen">
//         <div className="loader">
//           <div className="loader-inner">
//             <div className="loader-circle"></div>
//             <div className="loader-circle"></div>
//             <div className="loader-circle"></div>
//           </div>
//           <p className="loader-text">Loading Portfolio...</p>
//         </div>
//         <style jsx>{`
//           .loading-screen {
//             position: fixed;
//             top: 0;
//             left: 0;
//             width: 100vw;
//             height: 100vh;
//             background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             z-index: 9999;
//           }
//           .loader {
//             text-align: center;
//           }
//           .loader-inner {
//             display: flex;
//             gap: 12px;
//             justify-content: center;
//             margin-bottom: 20px;
//           }
//           .loader-circle {
//             width: 16px;
//             height: 16px;
//             background: white;
//             border-radius: 50%;
//             animation: bounce 1.4s infinite ease-in-out both;
//           }
//           .loader-circle:nth-child(1) {
//             animation-delay: -0.32s;
//           }
//           .loader-circle:nth-child(2) {
//             animation-delay: -0.16s;
//           }
//           .loader-text {
//             color: white;
//             font-size: 18px;
//             font-weight: 500;
//             letter-spacing: 1px;
//           }
//           @keyframes bounce {
//             0%, 80%, 100% { transform: scale(0); }
//             40% { transform: scale(1); }
//           }
//         `}</style>
//       </div>
//     );
//   }

//   return (
//     <div className="portfolio-container">
//       {/* Navigation */}
//       <nav className="navbar">
//         <div className="nav-content">
//           <div className="nav-brand">
//             <Sparkles size={24} className="brand-icon" />
//             <span className="brand-text">{personalInfo.name.split(' ')[0]}</span>
//           </div>

//           {/* Desktop Menu */}
//           <ul className="nav-menu desktop-menu">
//             {navItems.map(item => (
//               <li key={item.id}>
//                 <button
//                   onClick={() => scrollToSection(item.ref)}
//                   className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
//                 >
//                   {item.name}
//                 </button>
//               </li>
//             ))}
//           </ul>

//           {/* Mobile Menu Toggle */}
//           <button 
//             className="mobile-menu-toggle"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="mobile-menu">
//             <ul className="mobile-menu-list">
//               {navItems.map(item => (
//                 <li key={item.id}>
//                   <button
//                     onClick={() => scrollToSection(item.ref)}
//                     className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
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
//       <section ref={heroRef} className="hero-section">
//         <div className="hero-bg-shapes">
//           <div className="shape shape-1"></div>
//           <div className="shape shape-2"></div>
//           <div className="shape shape-3"></div>
//         </div>
        
//         <div className="hero-content">
//           <div className="hero-text-wrapper">
//             <p className="hero-greeting">Hello, I'm</p>
//             <h1 className="hero-name">{personalInfo.name}</h1>
//             <div className="hero-role-wrapper">
//               <h2 className="hero-role">
//                 {typedRole}
//                 <span className={`cursor ${cursorVisible ? 'visible' : ''}`}>|</span>
//               </h2>
//             </div>
//             <p className="hero-tagline">{personalInfo.tagline}</p>
            
//             <div className="hero-cta">
//               <a href={personalInfo.cv} download className="btn btn-primary">
//                 <Download size={18} />
//                 Download CV
//               </a>
//               <button onClick={() => scrollToSection(contactRef)} className="btn btn-secondary">
//                 Get in Touch
//                 <ChevronRight size={18} />
//               </button>
//             </div>

//             <div className="hero-social">
//               <a href={`mailto:${personalInfo.email}`} className="social-link" aria-label="Email">
//                 <Mail size={20} />
//               </a>
//               <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
//                 <Linkedin size={20} />
//               </a>
//               <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
//                 <Github size={20} />
//               </a>
//             </div>
//           </div>

//           <div className="hero-image-wrapper">
//             <div className="hero-image-placeholder">
//               <Code size={80} className="placeholder-icon" />
//             </div>
//           </div>
//         </div>

//         <div className="scroll-indicator">
//           <div className="scroll-mouse"></div>
//           <p>Scroll Down</p>
//         </div>
//       </section>

//       {/* About Section */}
//       <section ref={aboutRef} className="section about-section">
//         <div className="container">
//           <div className="section-header">
//             <h2 className="section-title">About Me</h2>
//             <div className="section-divider"></div>
//           </div>

//           <div className="about-content">
//             <div className="about-text">
//               <p className="about-intro">{professionalSummary.intro}</p>
//               <p className="about-description">{professionalSummary.about}</p>
              
//               <div className="about-info-grid">
//                 <div className="info-item">
//                   <Mail className="info-icon" size={20} />
//                   <div>
//                     <p className="info-label">Email</p>
//                     <p className="info-value">{personalInfo.email}</p>
//                   </div>
//                 </div>
//                 <div className="info-item">
//                   <Phone className="info-icon" size={20} />
//                   <div>
//                     <p className="info-label">Phone</p>
//                     <p className="info-value">{personalInfo.phone}</p>
//                   </div>
//                 </div>
//                 <div className="info-item">
//                   <MapPin className="info-icon" size={20} />
//                   <div>
//                     <p className="info-label">Location</p>
//                     <p className="info-value">{personalInfo.location}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section ref={servicesRef} className="section services-section">
//         <div className="container">
//           <div className="section-header">
//             <h2 className="section-title">What I Do</h2>
//             <div className="section-divider"></div>
//             <p className="section-subtitle">Specialized services in backend development and system architecture</p>
//           </div>

//           <div className="services-grid">
//             {services.map((service, index) => (
//               <div key={index} className="service-card">
//                 <div className="service-icon-wrapper">
//                   <service.icon className="service-icon" size={32} />
//                 </div>
//                 <h3 className="service-title">{service.title}</h3>
//                 <p className="service-desc">{service.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section ref={skillsRef} className="section skills-section">
//         <div className="container">
//           <div className="section-header">
//             <h2 className="section-title">Technical Skills</h2>
//             <div className="section-divider"></div>
//           </div>

//           <div className="skills-grid">
//             <div className="skill-category">
//               <h3 className="skill-category-title">
//                 <FileCode size={24} />
//                 Programming Languages
//               </h3>
//               <div className="skill-tags">
//                 {skills.languages.map((skill, index) => (
//                   <span key={index} className="skill-tag">{skill}</span>
//                 ))}
//               </div>
//             </div>

//             <div className="skill-category">
//               <h3 className="skill-category-title">
//                 <Layers size={24} />
//                 Frameworks & Libraries
//               </h3>
//               <div className="skill-tags">
//                 {skills.frameworks.map((skill, index) => (
//                   <span key={index} className="skill-tag">{skill}</span>
//                 ))}
//               </div>
//             </div>

//             <div className="skill-category">
//               <h3 className="skill-category-title">
//                 <Database size={24} />
//                 Databases
//               </h3>
//               <div className="skill-tags">
//                 {skills.databases.map((skill, index) => (
//                   <span key={index} className="skill-tag">{skill}</span>
//                 ))}
//               </div>
//             </div>

//             <div className="skill-category">
//               <h3 className="skill-category-title">
//                 <Server size={24} />
//                 Tools & Technologies
//               </h3>
//               <div className="skill-tags">
//                 {skills.tools.map((skill, index) => (
//                   <span key={index} className="skill-tag">{skill}</span>
//                 ))}
//               </div>
//             </div>

//             <div className="skill-category skill-category-full">
//               <h3 className="skill-category-title">
//                 <Code size={24} />
//                 Core Concepts
//               </h3>
//               <div className="skill-tags">
//                 {skills.concepts.map((skill, index) => (
//                   <span key={index} className="skill-tag">{skill}</span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Experience Section */}
//       <section ref={experienceRef} className="section experience-section">
//         <div className="container">
//           <div className="section-header">
//             <h2 className="section-title">Work Experience</h2>
//             <div className="section-divider"></div>
//           </div>

//           <div className="timeline">
//             {experience.map((exp, index) => (
//               <div key={index} className="timeline-item">
//                 <div className="timeline-marker">
//                   <Briefcase size={20} />
//                 </div>
//                 <div className="timeline-content">
//                   <div className="timeline-header">
//                     <h3 className="timeline-title">{exp.role}</h3>
//                     <span className="timeline-period">
//                       <Calendar size={16} />
//                       {exp.period}
//                     </span>
//                   </div>
//                   <p className="timeline-company">{exp.company} • {exp.location}</p>
//                   <ul className="timeline-highlights">
//                     {exp.highlights.map((highlight, idx) => (
//                       <li key={idx}>{highlight}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Education Section */}
//       <section ref={educationRef} className="section education-section">
//         <div className="container">
//           <div className="section-header">
//             <h2 className="section-title">Education</h2>
//             <div className="section-divider"></div>
//           </div>

//           <div className="education-grid">
//             {education.map((edu, index) => (
//               <div key={index} className="education-card">
//                 <div className="education-icon">
//                   <GraduationCap size={40} />
//                 </div>
//                 <h3 className="education-degree">{edu.degree}</h3>
//                 <p className="education-institution">{edu.institution}</p>
//                 <p className="education-period">{edu.period}</p>
//                 <p className="education-grade">{edu.grade}</p>
//                 <ul className="education-highlights">
//                   {edu.highlights.map((highlight, idx) => (
//                     <li key={idx}>{highlight}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section ref={projectsRef} className="section projects-section">
//         <div className="container">
//           <div className="section-header">
//             <h2 className="section-title">Featured Projects</h2>
//             <div className="section-divider"></div>
//             <p className="section-subtitle">Showcase of my recent work and contributions</p>
//           </div>

//           <div className="projects-grid">
//             {projects.map((project, index) => (
//               <div key={index} className="project-card">
//                 <div className="project-header">
//                   <span className="project-category">{project.category}</span>
//                   <div className="project-links">
//                     {project.github && (
//                       <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub">
//                         <Github size={18} />
//                       </a>
//                     )}
//                     {project.live && (
//                       <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Live Demo">
//                         <ExternalLink size={18} />
//                       </a>
//                     )}
//                   </div>
//                 </div>
                
//                 <h3 className="project-title">{project.title}</h3>
//                 <p className="project-desc">{project.desc}</p>
                
//                 <div className="project-tech">
//                   {project.tech.map((tech, idx) => (
//                     <span key={idx} className="tech-tag">{tech}</span>
//                   ))}
//                 </div>

//                 {project.highlights && (
//                   <ul className="project-highlights">
//                     {project.highlights.map((highlight, idx) => (
//                       <li key={idx}>{highlight}</li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Certifications Section */}
//       <section ref={certificationsRef} className="section certifications-section">
//         <div className="container">
//           <div className="section-header">
//             <h2 className="section-title">Certifications</h2>
//             <div className="section-divider"></div>
//           </div>

//           <div className="certifications-grid">
//             {certifications.map((cert, index) => (
//               <div key={index} className="certification-card">
//                 <Award className="cert-icon" size={32} />
//                 <h3 className="cert-name">{cert.name}</h3>
//                 <p className="cert-issuer">{cert.issuer}</p>
//                 <p className="cert-year">{cert.year}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section ref={contactRef} className="section contact-section">
//         <div className="container">
//           <div className="section-header">
//             <h2 className="section-title">Get In Touch</h2>
//             <div className="section-divider"></div>
//             <p className="section-subtitle">Feel free to reach out for collaborations or just a friendly chat</p>
//           </div>

//           <div className="contact-content">
//             <div className="contact-info">
//               <div className="contact-item">
//                 <div className="contact-icon">
//                   <Mail size={24} />
//                 </div>
//                 <div>
//                   <h3>Email</h3>
//                   <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
//                 </div>
//               </div>

//               <div className="contact-item">
//                 <div className="contact-icon">
//                   <Phone size={24} />
//                 </div>
//                 <div>
//                   <h3>Phone</h3>
//                   <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
//                 </div>
//               </div>

//               <div className="contact-item">
//                 <div className="contact-icon">
//                   <MapPin size={24} />
//                 </div>
//                 <div>
//                   <h3>Location</h3>
//                   <p>{personalInfo.location}</p>
//                 </div>
//               </div>

//               <div className="contact-social">
//                 <h3>Connect With Me</h3>
//                 <div className="social-links">
//                   <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn">
//                     <Linkedin size={20} />
//                     LinkedIn
//                   </a>
//                   <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-btn">
//                     <Github size={20} />
//                     GitHub
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div className="contact-form-wrapper">
//               <form className="contact-form">
//                 <div className="form-group">
//                   <label htmlFor="name">Name</label>
//                   <input type="text" id="name" name="name" required placeholder="Your Name" />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="email">Email</label>
//                   <input type="email" id="email" name="email" required placeholder="your.email@example.com" />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="subject">Subject</label>
//                   <input type="text" id="subject" name="subject" required placeholder="Project Inquiry" />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="message">Message</label>
//                   <textarea id="message" name="message" rows="5" required placeholder="Your message here..."></textarea>
//                 </div>

//                 <button type="submit" className="btn btn-primary btn-full">
//                   Send Message
//                   <ChevronRight size={18} />
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="container">
//           <p className="footer-text">
//             © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
//           </p>
//           <p className="footer-subtext">Built with Next.js & Modern Web Technologies</p>
//         </div>
//       </footer>

//       {/* Scroll to Top Button */}
//       {showScrollTop && (
//         <button 
//           className="scroll-to-top"
//           onClick={scrollToTop}
//           aria-label="Scroll to top"
//         >
//           <ArrowUp size={20} />
//         </button>
//       )}

//       <style jsx>{`
//         /* ===== Global Styles ===== */
//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         .portfolio-container {
//           font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
//           color: #e2e8f0;
//           background: #0f172a;
//           overflow-x: hidden;
//         }

//         .container {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 20px;
//         }

//         /* ===== Navigation ===== */
//         .navbar {
//           position: fixed;
//           top: 0;
//           left: 0;
//           right: 0;
//           background: rgba(15, 23, 42, 0.95);
//           backdrop-filter: blur(10px);
//           box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
//           z-index: 1000;
//           transition: all 0.3s ease;
//           border-bottom: 1px solid rgba(255, 255, 255, 0.05);
//         }

//         .nav-content {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 20px;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }

//         .nav-brand {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           font-size: 24px;
//           font-weight: 700;
//           color: #667eea;
//         }

//         .brand-icon {
//           animation: rotate 3s linear infinite;
//         }

//         @keyframes rotate {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }

//         .brand-text {
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }

//         .nav-menu {
//           display: flex;
//           gap: 30px;
//           list-style: none;
//         }

//         .desktop-menu {
//           display: flex;
//         }

//         @media (max-width: 968px) {
//           .desktop-menu {
//             display: none;
//           }
//         }

//         .nav-link {
//           background: none;
//           border: none;
//           font-size: 16px;
//           font-weight: 500;
//           color: #94a3b8;
//           cursor: pointer;
//           transition: color 0.3s ease;
//           position: relative;
//           padding: 5px 0;
//         }

//         .nav-link:hover,
//         .nav-link.active {
//           color: #667eea;
//         }

//         .nav-link.active::after {
//           content: '';
//           position: absolute;
//           bottom: -5px;
//           left: 0;
//           right: 0;
//           height: 2px;
//           background: linear-gradient(90deg, #667eea, #764ba2);
//           border-radius: 2px;
//         }

//         .mobile-menu-toggle {
//           display: none;
//           background: none;
//           border: none;
//           cursor: pointer;
//           color: #94a3b8;
//           padding: 5px;
//         }

//         @media (max-width: 968px) {
//           .mobile-menu-toggle {
//             display: block;
//           }
//         }

//         .mobile-menu {
//           background: #1e293b;
//           padding: 20px;
//           border-top: 1px solid rgba(255, 255, 255, 0.05);
//         }

//         .mobile-menu-list {
//           list-style: none;
//           display: flex;
//           flex-direction: column;
//           gap: 15px;
//         }

//         .mobile-nav-link {
//           background: none;
//           border: none;
//           font-size: 18px;
//           font-weight: 500;
//           color: #94a3b8;
//           cursor: pointer;
//           text-align: left;
//           padding: 10px;
//           transition: all 0.3s ease;
//           border-radius: 8px;
//           width: 100%;
//         }

//         .mobile-nav-link:hover,
//         .mobile-nav-link.active {
//           color: #667eea;
//           background: rgba(102, 126, 234, 0.1);
//         }

//         /* ===== Hero Section ===== */
//         .hero-section {
//           min-height: 100vh;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           position: relative;
//           padding: 120px 20px 60px;
//           background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
//           overflow: hidden;
//         }

//         .hero-bg-shapes {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           overflow: hidden;
//         }

//         .shape {
//           position: absolute;
//           background: rgba(102, 126, 234, 0.08);
//           border-radius: 50%;
//         }

//         .shape-1 {
//           width: 300px;
//           height: 300px;
//           top: -100px;
//           right: -100px;
//           animation: float 6s ease-in-out infinite;
//         }

//         .shape-2 {
//           width: 200px;
//           height: 200px;
//           bottom: 50px;
//           left: -50px;
//           animation: float 8s ease-in-out infinite reverse;
//         }

//         .shape-3 {
//           width: 150px;
//           height: 150px;
//           top: 50%;
//           left: 10%;
//           animation: float 7s ease-in-out infinite;
//         }

//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }

//         .hero-content {
//           max-width: 1200px;
//           width: 100%;
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 60px;
//           align-items: center;
//           position: relative;
//           z-index: 1;
//         }

//         @media (max-width: 968px) {
//           .hero-content {
//             grid-template-columns: 1fr;
//             text-align: center;
//           }
//         }

//         .hero-text-wrapper {
//           color: #e2e8f0;
//         }

//         .hero-greeting {
//           font-size: 20px;
//           font-weight: 500;
//           margin-bottom: 10px;
//           color: #94a3b8;
//           animation: fadeInUp 0.6s ease;
//         }

//         .hero-name {
//           font-size: 56px;
//           font-weight: 800;
//           margin-bottom: 15px;
//           line-height: 1.2;
//           color: #f1f5f9;
//           animation: fadeInUp 0.6s ease 0.2s both;
//         }

//         @media (max-width: 768px) {
//           .hero-name {
//             font-size: 36px;
//           }
//         }

//         .hero-role-wrapper {
//           min-height: 45px;
//           margin-bottom: 15px;
//         }

//         .hero-role {
//           font-size: 36px;
//           font-weight: 600;
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           animation: fadeInUp 0.6s ease 0.4s both;
//         }

//         @media (max-width: 768px) {
//           .hero-role {
//             font-size: 24px;
//           }
//         }

//         .cursor {
//           display: inline-block;
//           margin-left: 2px;
//           opacity: 0;
//           transition: opacity 0.1s;
//           color: #667eea;
//         }

//         .cursor.visible {
//           opacity: 1;
//         }

//         .hero-tagline {
//           font-size: 20px;
//           margin-bottom: 40px;
//           color: #94a3b8;
//           animation: fadeInUp 0.6s ease 0.6s both;
//         }

//         @media (max-width: 768px) {
//           .hero-tagline {
//             font-size: 16px;
//           }
//         }

//         .hero-cta {
//           display: flex;
//           gap: 20px;
//           margin-bottom: 40px;
//           animation: fadeInUp 0.6s ease 0.8s both;
//         }

//         @media (max-width: 768px) {
//           .hero-cta {
//             flex-direction: column;
//           }
//         }

//         .btn {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           padding: 14px 28px;
//           font-size: 16px;
//           font-weight: 600;
//           border-radius: 50px;
//           border: none;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           text-decoration: none;
//         }

//         .btn-primary {
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//           color: white;
//         }

//         .btn-primary:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
//         }

//         .btn-secondary {
//           background: rgba(102, 126, 234, 0.1);
//           color: #667eea;
//           border: 2px solid rgba(102, 126, 234, 0.3);
//         }

//         .btn-secondary:hover {
//           background: rgba(102, 126, 234, 0.2);
//           transform: translateY(-2px);
//         }

//         .btn-full {
//           width: 100%;
//           justify-content: center;
//         }

//         .hero-social {
//           display: flex;
//           gap: 15px;
//           animation: fadeInUp 0.6s ease 1s both;
//         }

//         @media (max-width: 968px) {
//           .hero-social {
//             justify-content: center;
//           }
//         }

//         .social-link {
//           width: 45px;
//           height: 45px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: rgba(102, 126, 234, 0.1);
//           border-radius: 50%;
//           color: #667eea;
//           transition: all 0.3s ease;
//           border: 1px solid rgba(102, 126, 234, 0.2);
//         }

//         .social-link:hover {
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//           color: white;
//           transform: translateY(-3px);
//           box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
//         }

//         .hero-image-wrapper {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           animation: fadeIn 1s ease 0.5s both;
//         }

//         @media (max-width: 968px) {
//           .hero-image-wrapper {
//             margin-top: 40px;
//           }
//         }

//         .hero-image-placeholder {
//           width: 400px;
//           height: 400px;
//           background: rgba(102, 126, 234, 0.05);
//           border-radius: 30px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           border: 2px solid rgba(102, 126, 234, 0.2);
//           animation: pulse 3s ease-in-out infinite;
//         }

//         @media (max-width: 768px) {
//           .hero-image-placeholder {
//             width: 300px;
//             height: 300px;
//           }
//         }

//         .placeholder-icon {
//           color: rgba(102, 126, 234, 0.5);
//         }

//         @keyframes pulse {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(1.05); }
//         }

//         .scroll-indicator {
//           position: absolute;
//           bottom: 30px;
//           left: 50%;
//           transform: translateX(-50%);
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 10px;
//           color: #94a3b8;
//           animation: fadeIn 1s ease 1.5s both;
//         }

//         .scroll-mouse {
//           width: 25px;
//           height: 40px;
//           border: 2px solid #667eea;
//           border-radius: 15px;
//           position: relative;
//         }

//         .scroll-mouse::before {
//           content: '';
//           width: 4px;
//           height: 8px;
//           background: #667eea;
//           border-radius: 2px;
//           position: absolute;
//           top: 8px;
//           left: 50%;
//           transform: translateX(-50%);
//           animation: scroll 2s ease infinite;
//         }

//         @keyframes scroll {
//           0% { opacity: 1; transform: translateX(-50%) translateY(0); }
//           100% { opacity: 0; transform: translateX(-50%) translateY(15px); }
//         }

//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }

//         /* ===== Section Styles ===== */
//         .section {
//           padding: 100px 20px;
//         }

//         .section-header {
//           text-align: center;
//           margin-bottom: 60px;
//         }

//         .section-title {
//           font-size: 42px;
//           font-weight: 800;
//           color: #f1f5f9;
//           margin-bottom: 15px;
//         }

//         @media (max-width: 768px) {
//           .section-title {
//             font-size: 32px;
//           }
//         }

//         .section-divider {
//           width: 80px;
//           height: 4px;
//           background: linear-gradient(90deg, #667eea, #764ba2);
//           margin: 0 auto;
//           border-radius: 2px;
//         }

//         .section-subtitle {
//           font-size: 18px;
//           color: #94a3b8;
//           margin-top: 15px;
//         }

//         /* ===== About Section ===== */
//         .about-section {
//           background: #0f172a;
//         }

//         .about-content {
//           max-width: 900px;
//           margin: 0 auto;
//         }

//         .about-text {
//           text-align: center;
//         }

//         .about-intro {
//           font-size: 22px;
//           font-weight: 600;
//           color: #667eea;
//           margin-bottom: 20px;
//           line-height: 1.6;
//         }

//         .about-description {
//           font-size: 18px;
//           line-height: 1.8;
//           color: #94a3b8;
//           margin-bottom: 40px;
//         }

//         .about-info-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//           gap: 30px;
//           margin-top: 40px;
//         }

//         .info-item {
//           display: flex;
//           gap: 15px;
//           align-items: flex-start;
//           padding: 20px;
//           background: #1e293b;
//           border-radius: 12px;
//           border: 1px solid rgba(102, 126, 234, 0.1);
//           transition: all 0.3s ease;
//         }

//         .info-item:hover {
//           transform: translateY(-5px);
//           border-color: rgba(102, 126, 234, 0.3);
//           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
//         }

//         .info-icon {
//           color: #667eea;
//           flex-shrink: 0;
//         }

//         .info-label {
//           font-size: 14px;
//           font-weight: 600;
//           color: #64748b;
//           margin-bottom: 5px;
//         }

//         .info-value {
//           font-size: 16px;
//           color: #e2e8f0;
//           word-break: break-word;
//         }

//         /* ===== Services Section ===== */
//         .services-section {
//           background: #1e293b;
//         }

//         .services-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//           gap: 30px;
//           max-width: 1200px;
//           margin: 0 auto;
//         }

//         .service-card {
//           padding: 40px 30px;
//           background: #0f172a;
//           border-radius: 16px;
//           text-align: center;
//           transition: all 0.3s ease;
//           border: 1px solid rgba(102, 126, 234, 0.1);
//         }

//         .service-card:hover {
//           transform: translateY(-10px);
//           border-color: rgba(102, 126, 234, 0.3);
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
//         }

//         .service-icon-wrapper {
//           width: 80px;
//           height: 80px;
//           margin: 0 auto 25px;
//           background: linear-gradient(135deg, #667eea, #764ba2);
//           border-radius: 16px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.3s ease;
//         }

//         .service-card:hover .service-icon-wrapper {
//           transform: rotateY(180deg);
//         }

//         .service-icon {
//           color: white;
//         }

//         .service-title {
//           font-size: 22px;
//           font-weight: 700;
//           color: #f1f5f9;
//           margin-bottom: 15px;
//         }

//         .service-desc {
//           font-size: 16px;
//           color: #94a3b8;
//           line-height: 1.6;
//         }

//         /* ===== Skills Section ===== */
//         .skills-section {
//           background: #0f172a;
//         }

//         .skills-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//           gap: 30px;
//           max-width: 1200px;
//           margin: 0 auto;
//         }

//         .skill-category {
//           background: #1e293b;
//           padding: 30px;
//           border-radius: 16px;
//           border: 1px solid rgba(102, 126, 234, 0.1);
//           transition: all 0.3s ease;
//         }

//         .skill-category:hover {
//           border-color: rgba(102, 126, 234, 0.3);
//           transform: translateY(-5px);
//           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
//         }

//         .skill-category-full {
//           grid-column: 1 / -1;
//         }

//         .skill-category-title {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           font-size: 20px;
//           font-weight: 700;
//           margin-bottom: 20px;
//           color: #f1f5f9;
//         }

//         .skill-tags {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 12px;
//         }

//         .skill-tag {
//           padding: 10px 18px;
//           background: rgba(102, 126, 234, 0.1);
//           border-radius: 25px;
//           font-size: 14px;
//           font-weight: 500;
//           border: 1px solid rgba(102, 126, 234, 0.2);
//           transition: all 0.3s ease;
//           color: #e2e8f0;
//         }

//         .skill-tag:hover {
//           background: linear-gradient(135deg, #667eea, #764ba2);
//           color: white;
//           transform: translateY(-2px);
//           box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
//         }

//         /* ===== Experience Section ===== */
//         .experience-section {
//           background: #1e293b;
//         }

//         .timeline {
//           max-width: 900px;
//           margin: 0 auto;
//           position: relative;
//         }

//         .timeline::before {
//           content: '';
//           position: absolute;
//           left: 30px;
//           top: 0;
//           bottom: 0;
//           width: 2px;
//           background: linear-gradient(180deg, #667eea, #764ba2);
//         }

//         @media (max-width: 768px) {
//           .timeline::before {
//             left: 15px;
//           }
//         }

//         .timeline-item {
//           position: relative;
//           padding-left: 80px;
//           margin-bottom: 50px;
//         }

//         @media (max-width: 768px) {
//           .timeline-item {
//             padding-left: 50px;
//           }
//         }

//         .timeline-marker {
//           position: absolute;
//           left: 20px;
//           width: 40px;
//           height: 40px;
//           background: linear-gradient(135deg, #667eea, #764ba2);
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: white;
//           box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
//         }

//         @media (max-width: 768px) {
//           .timeline-marker {
//             left: 5px;
//             width: 30px;
//             height: 30px;
//           }
//         }

//         .timeline-content {
//           background: #0f172a;
//           padding: 30px;
//           border-radius: 16px;
//           border: 1px solid rgba(102, 126, 234, 0.1);
//           transition: all 0.3s ease;
//         }

//         .timeline-content:hover {
//           transform: translateY(-5px);
//           border-color: rgba(102, 126, 234, 0.3);
//           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
//         }

//         .timeline-header {
//           display: flex;
//           justify-content: space-between;
//           align-items: flex-start;
//           margin-bottom: 10px;
//           gap: 20px;
//         }

//         @media (max-width: 768px) {
//           .timeline-header {
//             flex-direction: column;
//             gap: 10px;
//           }
//         }

//         .timeline-title {
//           font-size: 22px;
//           font-weight: 700;
//           color: #f1f5f9;
//         }

//         .timeline-period {
//           display: flex;
//           align-items: center;
//           gap: 6px;
//           font-size: 14px;
//           color: #94a3b8;
//           white-space: nowrap;
//         }

//         .timeline-company {
//           font-size: 16px;
//           color: #667eea;
//           font-weight: 600;
//           margin-bottom: 20px;
//         }

//         .timeline-highlights {
//           list-style: none;
//           padding: 0;
//         }

//         .timeline-highlights li {
//           padding-left: 25px;
//           margin-bottom: 12px;
//           color: #94a3b8;
//           line-height: 1.6;
//           position: relative;
//         }

//         .timeline-highlights li::before {
//           content: '▹';
//           position: absolute;
//           left: 0;
//           color: #667eea;
//           font-weight: bold;
//         }

//         /* ===== Education Section ===== */
//         .education-section {
//           background: #0f172a;
//         }

//         .education-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
//           gap: 30px;
//           max-width: 1000px;
//           margin: 0 auto;
//         }

//         @media (max-width: 768px) {
//           .education-grid {
//             grid-template-columns: 1fr;
//           }
//         }

//         .education-card {
//           background: #1e293b;
//           padding: 40px;
//           border-radius: 16px;
//           text-align: center;
//           transition: all 0.3s ease;
//           border: 1px solid rgba(102, 126, 234, 0.1);
//         }

//         .education-card:hover {
//           transform: translateY(-10px);
//           border-color: rgba(102, 126, 234, 0.3);
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
//         }

//         .education-icon {
//           width: 80px;
//           height: 80px;
//           margin: 0 auto 25px;
//           background: linear-gradient(135deg, #667eea, #764ba2);
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: white;
//         }

//         .education-degree {
//           font-size: 20px;
//           font-weight: 700;
//           color: #f1f5f9;
//           margin-bottom: 15px;
//           line-height: 1.4;
//         }

//         .education-institution {
//           font-size: 16px;
//           color: #667eea;
//           font-weight: 600;
//           margin-bottom: 10px;
//         }

//         .education-period {
//           font-size: 14px;
//           color: #94a3b8;
//           margin-bottom: 8px;
//         }

//         .education-grade {
//           font-size: 16px;
//           color: #48bb78;
//           font-weight: 600;
//           margin-bottom: 20px;
//         }

//         .education-highlights {
//           list-style: none;
//           padding: 0;
//           text-align: left;
//         }

//         .education-highlights li {
//           padding-left: 25px;
//           margin-bottom: 10px;
//           color: #94a3b8;
//           line-height: 1.6;
//           position: relative;
//           font-size: 14px;
//         }

//         .education-highlights li::before {
//           content: '▹';
//           position: absolute;
//           left: 0;
//           color: #667eea;
//           font-weight: bold;
//         }

//         /* ===== Projects Section ===== */
//         .projects-section {
//           background: #1e293b;
//         }

//         .projects-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
//           gap: 40px;
//           max-width: 1200px;
//           margin: 0 auto;
//         }

//         @media (max-width: 768px) {
//           .projects-grid {
//             grid-template-columns: 1fr;
//           }
//         }

//         .project-card {
//           background: #0f172a;
//           padding: 35px;
//           border-radius: 16px;
//           transition: all 0.3s ease;
//           border: 1px solid rgba(102, 126, 234, 0.1);
//         }

//         .project-card:hover {
//           transform: translateY(-10px);
//           border-color: rgba(102, 126, 234, 0.3);
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
//         }

//         .project-header {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-bottom: 20px;
//         }

//         .project-category {
//           font-size: 12px;
//           font-weight: 600;
//           color: #667eea;
//           background: rgba(102, 126, 234, 0.1);
//           padding: 6px 12px;
//           border-radius: 20px;
//           border: 1px solid rgba(102, 126, 234, 0.2);
//         }

//         .project-links {
//           display: flex;
//           gap: 10px;
//         }

//         .project-link {
//           width: 35px;
//           height: 35px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: rgba(102, 126, 234, 0.1);
//           border-radius: 50%;
//           color: #667eea;
//           transition: all 0.3s ease;
//           border: 1px solid rgba(102, 126, 234, 0.2);
//         }

//         .project-link:hover {
//           background: linear-gradient(135deg, #667eea, #764ba2);
//           color: white;
//           transform: translateY(-2px);
//           box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
//         }

//         .project-title {
//           font-size: 24px;
//           font-weight: 700;
//           color: #f1f5f9;
//           margin-bottom: 15px;
//         }

//         .project-desc {
//           font-size: 16px;
//           color: #94a3b8;
//           line-height: 1.6;
//           margin-bottom: 20px;
//         }

//         .project-tech {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 10px;
//           margin-bottom: 20px;
//         }

//         .tech-tag {
//           font-size: 13px;
//           padding: 6px 12px;
//           background: rgba(102, 126, 234, 0.1);
//           color: #e2e8f0;
//           border-radius: 15px;
//           font-weight: 500;
//           border: 1px solid rgba(102, 126, 234, 0.2);
//         }

//         .project-highlights {
//           list-style: none;
//           padding: 0;
//           border-top: 1px solid rgba(102, 126, 234, 0.1);
//           padding-top: 20px;
//         }

//         .project-highlights li {
//           padding-left: 25px;
//           margin-bottom: 10px;
//           color: #94a3b8;
//           line-height: 1.6;
//           position: relative;
//           font-size: 14px;
//         }

//         .project-highlights li::before {
//           content: '▹';
//           position: absolute;
//           left: 0;
//           color: #667eea;
//           font-weight: bold;
//         }

//         /* ===== Certifications Section ===== */
//         .certifications-section {
//           background: #0f172a;
//         }

//         .certifications-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//           gap: 30px;
//           max-width: 1200px;
//           margin: 0 auto;
//         }

//         .certification-card {
//           background: #1e293b;
//           padding: 35px;
//           border-radius: 16px;
//           text-align: center;
//           transition: all 0.3s ease;
//           border: 1px solid rgba(102, 126, 234, 0.1);
//         }

//         .certification-card:hover {
//           transform: translateY(-10px);
//           border-color: rgba(102, 126, 234, 0.3);
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
//         }

//         .cert-icon {
//           color: #ffd700;
//           margin-bottom: 20px;
//         }

//         .cert-name {
//           font-size: 18px;
//           font-weight: 700;
//           color: #f1f5f9;
//           margin-bottom: 12px;
//           line-height: 1.4;
//         }

//         .cert-issuer {
//           font-size: 15px;
//           color: #667eea;
//           font-weight: 600;
//           margin-bottom: 8px;
//         }

//         .cert-year {
//           font-size: 14px;
//           color: #94a3b8;
//         }

//         /* ===== Contact Section ===== */
//         .contact-section {
//           background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
//         }

//         .contact-content {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 60px;
//           max-width: 1200px;
//           margin: 0 auto;
//         }

//         @media (max-width: 968px) {
//           .contact-content {
//             grid-template-columns: 1fr;
//             gap: 40px;
//           }
//         }

//         .contact-info {
//           display: flex;
//           flex-direction: column;
//           gap: 30px;
//         }

//         .contact-item {
//           display: flex;
//           gap: 20px;
//           align-items: flex-start;
//         }

//         .contact-icon {
//           width: 50px;
//           height: 50px;
//           background: rgba(102, 126, 234, 0.1);
//           border-radius: 12px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-shrink: 0;
//           color: #667eea;
//           border: 1px solid rgba(102, 126, 234, 0.2);
//         }

//         .contact-item h3 {
//           font-size: 18px;
//           font-weight: 600;
//           margin-bottom: 8px;
//           color: #f1f5f9;
//         }

//         .contact-item a,
//         .contact-item p {
//           font-size: 16px;
//           color: #94a3b8;
//           text-decoration: none;
//           transition: color 0.3s ease;
//         }

//         .contact-item a:hover {
//           color: #667eea;
//         }

//         .contact-social h3 {
//           font-size: 18px;
//           font-weight: 600;
//           margin-bottom: 15px;
//           color: #f1f5f9;
//         }

//         .social-links {
//           display: flex;
//           gap: 15px;
//         }

//         .social-btn {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           padding: 12px 24px;
//           background: rgba(102, 126, 234, 0.1);
//           border-radius: 25px;
//           color: #667eea;
//           text-decoration: none;
//           font-weight: 600;
//           transition: all 0.3s ease;
//           border: 1px solid rgba(102, 126, 234, 0.2);
//         }

//         .social-btn:hover {
//           background: linear-gradient(135deg, #667eea, #764ba2);
//           color: white;
//           transform: translateY(-2px);
//           box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
//         }

//         .contact-form-wrapper {
//           background: rgba(102, 126, 234, 0.05);
//           padding: 40px;
//           border-radius: 16px;
//           border: 1px solid rgba(102, 126, 234, 0.1);
//         }

//         .contact-form {
//           display: flex;
//           flex-direction: column;
//           gap: 25px;
//         }

//         .form-group {
//           display: flex;
//           flex-direction: column;
//           gap: 8px;
//         }

//         .form-group label {
//           font-size: 14px;
//           font-weight: 600;
//           color: #e2e8f0;
//         }

//         .form-group input,
//         .form-group textarea {
//           padding: 14px 18px;
//           border: 1px solid rgba(102, 126, 234, 0.2);
//           border-radius: 10px;
//           font-size: 16px;
//           background: rgba(15, 23, 42, 0.5);
//           color: #e2e8f0;
//           transition: all 0.3s ease;
//         }

//         .form-group input::placeholder,
//         .form-group textarea::placeholder {
//           color: #64748b;
//         }

//         .form-group input:focus,
//         .form-group textarea:focus {
//           outline: none;
//           border-color: #667eea;
//           background: rgba(15, 23, 42, 0.8);
//         }

//         .form-group textarea {
//           resize: vertical;
//           font-family: inherit;
//         }

//         /* ===== Footer ===== */
//         .footer {
//           background: #0a0f1e;
//           color: #94a3b8;
//           padding: 40px 20px;
//           text-align: center;
//           border-top: 1px solid rgba(102, 126, 234, 0.1);
//         }

//         .footer-text {
//           font-size: 16px;
//           margin-bottom: 8px;
//           color: #e2e8f0;
//         }

//         .footer-subtext {
//           font-size: 14px;
//           color: #64748b;
//         }

//         /* ===== Scroll to Top Button ===== */
//         .scroll-to-top {
//           position: fixed;
//           bottom: 30px;
//           right: 30px;
//           width: 50px;
//           height: 50px;
//           background: linear-gradient(135deg, #667eea, #764ba2);
//           color: white;
//           border: none;
//           border-radius: 50%;
//           cursor: pointer;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
//           transition: all 0.3s ease;
//           z-index: 999;
//           animation: fadeInUp 0.3s ease;
//         }

//         .scroll-to-top:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
//         }

//         @media (max-width: 768px) {
//           .scroll-to-top {
//             bottom: 20px;
//             right: 20px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }
