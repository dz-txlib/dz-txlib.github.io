// 'use client';
// import { useState, useEffect, useRef } from 'react';
// import { Mail, Phone, MapPin, Linkedin, Github, Download, Menu, X, Briefcase, GraduationCap, Server, Code, Share2, Database, Award, ArrowUp, ArrowUpRight, ChevronRight, Sparkles } from 'lucide-react';

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
//     intro: "As a Software Engineer, I specialize in building robust and scalable backend systems that power modern applications.",
//     about: "Detail-oriented and highly motivated Computer Science graduate with a strong foundation in software development, data structures, and object-oriented programming. Proficient in Java and Python with hands-on experience in building robust backend systems using Spring Boot, Django REST Framework, and Microservices architecture. Adept at working in Agile environments, collaborating in team settings, and delivering high-quality, scalable solutions that drive business value."
// };

// const services = [
//     { icon: <Server size={28} />, title: "Backend Development", desc: "Creating robust and efficient server-side logic using Java Spring Boot and Python Django with focus on performance and scalability." },
//     { icon: <Share2 size={28} />, title: "Microservices Architecture", desc: "Designing and implementing scalable microservice architectures for complex, distributed applications." },
//     { icon: <Code size={28} />, title: "RESTful API Design", desc: "Developing clean, secure, and well-documented RESTful APIs with OpenAPI/Swagger specifications." },
//     { icon: <Database size={28} />, title: "Database Management", desc: "Optimizing database performance and schema design with MySQL and PostgreSQL for enterprise applications." },
// ];

// const skills = {
//   "Languages": ["Java", "Python", "SQL"],
//   "Frameworks": ["Spring Boot", "Django", "Django REST Framework"],
//   "Technologies": ["Microservices", "RESTful APIs", "JWT", "Hibernate", "Spring Data JPA"],
//   "Databases": ["MySQL", "PostgreSQL"],
//   "Tools & Platforms": ["Git", "GitHub", "Docker", "AWS", "Linux", "Agile/Scrum"]
// };

// const resumeData = {
//     experience: [
//         { 
//             duration: "April 2025 – Present", 
//             role: "Software Engineer", 
//             company: "Affy Cloud IT Solutions", 
//             companyLink: "https://www.affyclouditsolutions.com/",
//             desc: "Architecting and delivering enterprise-grade backend solutions leveraging Spring Boot Microservices, handling high concurrency and large-scale data processing. Leading development of critical APIs and system optimizations.",
//             highlights: ["Microservices Architecture", "High Performance APIs", "System Optimization"]
//         },
//         { 
//             duration: "March 2024 – March 2025", 
//             role: "Software Engineer Intern", 
//             company: "Affy Cloud IT Solutions", 
//             companyLink: "https://www.affyclouditsolutions.com/",
//             desc: "Built and maintained scalable backend services using Java Spring Boot Microservices. Developed REST APIs with Python Django and contributed to multiple production systems.",
//             highlights: ["REST API Development", "Database Optimization", "Agile Development"]
//         },
//     ],
//     education: [
//         { 
//             duration: "2021 - 2025", 
//             degree: "Bachelor of Technology", 
//             field: "Computer Science",
//             institution: "SAM College Of Engineering and Technology", 
//             institutionLink: "https://www.samglobaluniversity.ac.in/",
//             desc: "Focused on core computer science principles including data structures, algorithms, software engineering, and modern development practices."
//         },
//     ]
// };

// const certificationsData = [
//     { name: "Java Programming: Mastering the Fundamentals", issuer: "Certificate of Excellence", date: "Sep 2024", icon: <Award className="text-amber-400" size={20} /> },
//     { name: "Blockchain Development: Building Robust Solutions", issuer: "Certificate of Completion", date: "Mar 2024", icon: <Award className="text-blue-400" size={20} /> },
//     { name: "Java Programming: Foundations and Core Principles", issuer: "Certificate of Achievement", date: "Jan 2024", icon: <Award className="text-emerald-400" size={20} /> },
// ];

// const initialProjects = [
//     { 
//         title: "EFFERVESCENT-CLASSES", 
//         category: "Learning Management System", 
//         link: "https://web.effervescentclasses.com", 
//         img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
//         desc: "A comprehensive LMS delivering dynamic educational experiences with scalable microservices, robust authentication, and an intuitive interface for seamless content delivery.",
//         technologies: ["Java", "Spring Boot", "Microservices", "MySQL", "JWT"],
//         gradient: "from-purple-600 to-pink-600"
//     },
//     { 
//         title: "What A Recruiter", 
//         category: "Recruitment Management System", 
//         link: "#", 
//         img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
//         desc: "A dynamic Recruitment Management System designed to centralize and accelerate talent acquisition with an optimized backend for rapid candidate search and intelligent data retrieval.",
//         technologies: ["Python", "Django REST", "PostgreSQL", "AI/ML"],
//         gradient: "from-blue-600 to-cyan-600"
//     },
//     { 
//         title: "T-RACK Ticketing Tool", 
//         category: "Project Management Platform", 
//         link: "https://t-racktool.com", 
//         img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
//         desc: "A full-stack project management solution streamlining task tracking and workflow management with a custom RESTful API and real-time collaboration features.",
//         technologies: ["Java", "Spring Boot", "MySQL", "React"],
//         gradient: "from-emerald-600 to-teal-600"
//     },
//     { 
//         title: "TARHAAB", 
//         category: "E-Commerce Platform", 
//         link: "https://tarhaab.com", 
//         img: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
//         desc: "A full-stack e-commerce platform delivering seamless and secure online shopping experiences with integrated payment gateway, inventory management, and order processing.",
//         technologies: ["Python", "Django", "PostgreSQL", "Razorpay API"],
//         gradient: "from-orange-600 to-red-600"
//     },
// ];

// // --- Custom Hooks ---
// const useTypingEffect = (text, duration = 2000) => {
//     const [typedText, setTypedText] = useState('');
//     useEffect(() => {
//         setTypedText('');
//         if (text) {
//             let i = 0;
//             const typingInterval = setInterval(() => {
//                 if (i < text.length) {
//                     setTypedText(prev => prev + text.charAt(i));
//                     i++;
//                 } else {
//                     clearInterval(typingInterval);
//                 }
//             }, duration / text.length);
//             return () => clearInterval(typingInterval);
//         }
//     }, [text, duration]);
//     return typedText;
// };

// const useScrollFadeIn = () => {
//     const [visibleSections, setVisibleSections] = useState({});
//     const sectionRefs = useRef({});

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
//                     }
//                 });
//             },
//             { threshold: 0.15 }
//         );

//         Object.values(sectionRefs.current).forEach((section) => {
//             if (section) observer.observe(section);
//         });

//         return () => {
//             Object.values(sectionRefs.current).forEach((section) => {
//                 if (section) observer.unobserve(section);
//             });
//         };
//     }, []);

//     const addRef = (id, el) => {
//         if (el && !sectionRefs.current[id]) {
//             sectionRefs.current[id] = el;
//         }
//     };

//     return [visibleSections, addRef];
// };

// // --- Components ---
// const NavLink = ({ href, children, active, onClick }) => (
//   <a 
//     href={href} 
//     onClick={onClick} 
//     className={`text-sm font-medium transition-all duration-300 relative group ${active ? 'text-sky-400' : 'text-slate-300 hover:text-sky-400'}`}
//   >
//     {children}
//     <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-cyan-400 transition-all duration-300 group-hover:w-full ${active ? 'w-full' : ''}`}></span>
//   </a>
// );

// const Header = ({ activeSection }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const handleLinkClick = () => setIsOpen(false);
//   const navItems = ['Home', 'About', 'Skills', 'Services', 'Resume', 'Certifications', 'Projects'];

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <a href="#" className="text-2xl font-bold text-white tracking-tight">
//             <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">Talib</span>
//             <span className="text-sky-400">.</span>
//           </a>
//           <nav className="hidden md:flex items-center space-x-8">
//             {navItems.map(item => (
//               <NavLink key={item} href={`#${item.toLowerCase()}`} active={activeSection === item.toLowerCase()}>
//                 {item}
//               </NavLink>
//             ))}
//           </nav>
//           <button 
//             className="md:hidden text-white p-2 rounded-lg hover:bg-slate-800 transition-colors" 
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800">
//           <nav className="flex flex-col items-center space-y-4 py-6">
//             {navItems.map(item => (
//               <NavLink key={item} href={`#${item.toLowerCase()}`} active={activeSection === item.toLowerCase()} onClick={handleLinkClick}>
//                 {item}
//               </NavLink>
//             ))}
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// const Section = ({ id, children, className, addRef, isVisible }) => (
//     <section 
//         id={id} 
//         ref={(el) => addRef(id, el)}
//         className={`py-20 md:py-28 transition-all duration-1000 ${className} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
//     >
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             {children}
//         </div>
//     </section>
// );

// const SectionTitle = ({ children, subtitle }) => (
//   <div className="text-center mb-16">
//     <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 inline-block">
//       {children}
//       <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">.</span>
//     </h2>
//     {subtitle && <p className="text-slate-400 text-lg mt-2 max-w-2xl mx-auto">{subtitle}</p>}
//   </div>
// );

// const Hero = ({ addRef, isVisible }) => {
//     const typedRole = useTypingEffect(personalInfo.role, 1500);
    
//     return (
//         <Section id="home" className="pt-32 md:pt-40 min-h-screen flex items-center relative overflow-hidden" addRef={addRef} isVisible={isVisible}>
//             <div className="absolute inset-0 opacity-30">
//                 <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500/30 rounded-full filter blur-3xl animate-pulse"></div>
//                 <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
//             </div>
            
//             <div className="flex flex-col md:flex-row items-center gap-12 relative z-10 w-full">
//                 <div className="md:w-1/2 text-center md:text-left">
//                     <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-4 py-2 mb-6">
//                         <Sparkles size={16} className="text-sky-400" />
//                         <span className="text-sm text-slate-300">Available for opportunities</span>
//                     </div>
                    
//                     <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4">
//                         Hi, I'm <br />
//                         <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
//                             {personalInfo.name}
//                         </span>
//                     </h1>
                    
//                     <div className="h-8 mb-4">
//                         <p className="text-2xl md:text-3xl font-semibold text-sky-400">{typedRole}</p>
//                     </div>
                    
//                     <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">{personalInfo.tagline}</p>
                    
//                     <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
//                         <a 
//                             href="#projects" 
//                             className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-sky-500/50 transition-all duration-300 hover:scale-105"
//                         >
//                             View My Work
//                             <ChevronRight size={20} />
//                         </a>
//                         <a 
//                             href={personalInfo.cv} 
//                             download 
//                             className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 text-white font-semibold px-8 py-4 rounded-full hover:bg-slate-700 transition-all duration-300 hover:scale-105"
//                         >
//                             <Download size={20} /> 
//                             Download CV
//                         </a>
//                     </div>
                    
//                     <div className="flex justify-center md:justify-start items-center gap-4">
//                         <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-all duration-300 hover:scale-110 p-2">
//                             <Linkedin size={24} />
//                         </a>
//                         <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-all duration-300 hover:scale-110 p-2">
//                             <Github size={24} />
//                         </a>
//                         <a href={`mailto:${personalInfo.email}`} className="text-slate-400 hover:text-sky-400 transition-all duration-300 hover:scale-110 p-2">
//                             <Mail size={24} />
//                         </a>
//                     </div>
//                 </div>
                
//                 <div className="md:w-1/2 flex justify-center">
//                     <div className="relative">
//                         <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
//                         <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl">
//                             <img 
//                                 src="Gemini_Generated_Image_fa16hnfa16hnfa16.png" 
//                                 alt={personalInfo.name} 
//                                 className="w-full h-full object-cover"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </Section>
//     );
// };

// const About = ({ addRef, isVisible }) => (
//     <Section id="about" className="bg-slate-800/50" addRef={addRef} isVisible={isVisible}>
//         <SectionTitle subtitle="Get to know more about my background and expertise">About Me</SectionTitle>
//         <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
//             <div className="lg:w-2/5 flex justify-center">
//                  <div className="relative group">
//                     <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
//                     <div className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-2xl">
//                         <img 
//                             src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=800&fit=crop" 
//                             alt="Coding" 
//                             className="w-full h-full object-cover"
//                         />
//                     </div>
//                 </div>
//             </div>
//             <div className="lg:w-3/5">
//                 <p className="text-slate-300 text-lg leading-relaxed mb-8">{professionalSummary.about}</p>
//                 <div className="grid sm:grid-cols-2 gap-4">
//                     <div className="flex items-start gap-3 p-4 bg-slate-900/50 rounded-lg border border-slate-700">
//                         <Mail size={20} className="text-sky-400 mt-1 flex-shrink-0"/>
//                         <div>
//                             <p className="text-xs text-slate-400 mb-1">Email</p>
//                             <a href={`mailto:${personalInfo.email}`} className="text-slate-200 hover:text-sky-400 transition-colors break-all">{personalInfo.email}</a>
//                         </div>
//                     </div>
//                     <div className="flex items-start gap-3 p-4 bg-slate-900/50 rounded-lg border border-slate-700">
//                         <Phone size={20} className="text-sky-400 mt-1 flex-shrink-0"/>
//                         <div>
//                             <p className="text-xs text-slate-400 mb-1">Phone</p>
//                             <span className="text-slate-200">{personalInfo.phone}</span>
//                         </div>
//                     </div>
//                     <div className="flex items-start gap-3 p-4 bg-slate-900/50 rounded-lg border border-slate-700 sm:col-span-2">
//                         <MapPin size={20} className="text-sky-400 mt-1 flex-shrink-0"/>
//                         <div>
//                             <p className="text-xs text-slate-400 mb-1">Location</p>
//                             <span className="text-slate-200">{personalInfo.location}</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </Section>
// );

// const Skills = ({ addRef, isVisible }) => (
//     <Section id="skills" addRef={addRef} isVisible={isVisible}>
//         <SectionTitle subtitle="Technologies and tools I work with">Technical Skills</SectionTitle>
//         <div className="max-w-5xl mx-auto space-y-8">
//             {Object.entries(skills).map(([category, items]) => (
//                 <div key={category} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-sky-500/50 transition-all duration-300">
//                     <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
//                         <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
//                         {category}
//                     </h3>
//                     <div className="flex flex-wrap gap-3">
//                         {items.map(skill => (
//                             <span 
//                                 key={skill} 
//                                 className="bg-slate-700/50 border border-slate-600 text-slate-200 px-4 py-2 rounded-lg font-medium text-sm hover:bg-slate-600 hover:border-sky-500 transition-all duration-300 hover:scale-105"
//                             >
//                                 {skill}
//                             </span>
//                         ))}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     </Section>
// );

// const Services = ({ addRef, isVisible }) => (
//     <Section id="services" className="bg-slate-800/50" addRef={addRef} isVisible={isVisible}>
//         <SectionTitle subtitle="Specialized services I offer to bring your ideas to life">What I Do</SectionTitle>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//             {services.map((service, idx) => (
//                 <div 
//                     key={service.title} 
//                     className="group bg-slate-900/50 backdrop-blur-sm border border-slate-700 p-6 rounded-xl hover:border-sky-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-500/20"
//                     style={{transitionDelay: `${idx * 50}ms`}}
//                 >
//                     <div className="text-sky-400 mb-4 transform group-hover:scale-110 transition-transform duration-300">
//                         {service.icon}
//                     </div>
//                     <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">{service.title}</h3>
//                     <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
//                 </div>
//             ))}
//         </div>
//     </Section>
// );

// const ResumeItem = ({ icon, duration, title, subtitle, subtitleLink, desc, highlights }) => (
//     <div className="relative pl-8 pb-12 last:pb-0">
//         <div className="absolute left-0 top-1.5 flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-sky-400 to-cyan-400 shadow-lg shadow-sky-500/50">
//             <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
//         </div>
//         <div className="absolute left-3 top-8 bottom-0 w-px bg-gradient-to-b from-slate-600 to-transparent"></div>
        
//         <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-5 hover:border-sky-500/50 transition-all duration-300">
//             <span className="text-xs font-semibold text-sky-400 bg-sky-400/10 px-3 py-1 rounded-full mb-3 inline-block">{duration}</span>
//             <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
//             <a href={subtitleLink} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-sky-400 transition-colors font-medium mb-3 inline-block">
//                 {subtitle}
//             </a>
//             <p className="text-slate-400 leading-relaxed mb-3">{desc}</p>
//             {highlights && (
//                 <div className="flex flex-wrap gap-2">
//                     {highlights.map(highlight => (
//                         <span key={highlight} className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded">
//                             {highlight}
//                         </span>
//                     ))}
//                 </div>
//             )}
//         </div>
//     </div>
// );

// const Resume = ({ addRef, isVisible }) => (
//     <Section id="resume" addRef={addRef} isVisible={isVisible}>
//         <SectionTitle subtitle="My professional journey and educational background">Resume</SectionTitle>
//         <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//             <div>
//                 <div className="flex items-center gap-3 mb-8">
//                     <div className="p-3 bg-sky-400/10 rounded-lg">
//                         <Briefcase className="text-sky-400" size={24} />
//                     </div>
//                     <h3 className="text-2xl font-bold text-white">Experience</h3>
//                 </div>
//                 <div>
//                     {resumeData.experience.map(item => (
//                         <ResumeItem 
//                             key={item.role} 
//                             icon={<Briefcase size={14}/>} 
//                             {...item} 
//                             title={item.role} 
//                             subtitle={item.company} 
//                             subtitleLink={item.companyLink} 
//                         />
//                     ))}
//                 </div>
//             </div>
//             <div>
//                 <div className="flex items-center gap-3 mb-8">
//                     <div className="p-3 bg-sky-400/10 rounded-lg">
//                         <GraduationCap className="text-sky-400" size={24} />
//                     </div>
//                     <h3 className="text-2xl font-bold text-white">Education</h3>
//                 </div>
//                 <div>
//                     {resumeData.education.map(item => (
//                         <ResumeItem 
//                             key={item.degree} 
//                             icon={<GraduationCap size={14}/>} 
//                             {...item} 
//                             title={`${item.degree} - ${item.field}`}
//                             subtitle={item.institution} 
//                             subtitleLink={item.institutionLink}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     </Section>
// );

// const Certifications = ({ addRef, isVisible }) => (
//     <Section id="certifications" className="bg-slate-800/50" addRef={addRef} isVisible={isVisible}>
//         <SectionTitle subtitle="Professional certifications and achievements">Certifications</SectionTitle>
//         <div className="max-w-4xl mx-auto space-y-4">
//             {certificationsData.map((cert, idx) => (
//                 <div 
//                     key={cert.name} 
//                     className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 p-6 rounded-xl flex items-center justify-between hover:border-sky-500/50 transition-all duration-300 hover:translate-x-2 group"
//                     style={{transitionDelay: `${idx * 100}ms`}}
//                 >
//                     <div className="flex items-center gap-4 flex-1">
//                         <div className="flex-shrink-0 p-3 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors">
//                             {cert.icon}
//                         </div>
//                         <div className="flex-1">
//                             <h3 className="font-bold text-white text-lg mb-1 group-hover:text-sky-400 transition-colors">{cert.name}</h3>
//                             <p className="text-sm text-slate-400">{cert.issuer}</p>
//                         </div>
//                     </div>
//                     <span className="text-sm font-medium text-sky-400 bg-sky-400/10 px-4 py-2 rounded-lg whitespace-nowrap ml-4">{cert.date}</span>
//                 </div>
//             ))}
//         </div>
//     </Section>
// );

// const Projects = ({ addRef, isVisible }) => {
//     return (
//         <Section id="projects" addRef={addRef} isVisible={isVisible}>
//             <SectionTitle>My Projects</SectionTitle>
//             <div className="grid sm:grid-cols-2 gap-8">
//                 {initialProjects.map((project) => (
//                     <a 
//                         key={project.title} 
//                         href={project.link} 
//                         target="_blank" 
//                         rel="noopener noreferrer" 
//                         className="block bg-slate-800 rounded-lg overflow-hidden group shadow-lg transition-all duration-300 hover:shadow-sky-500/20 hover:-translate-y-2"
//                     >
//                         <div className="relative h-56">
//                             <img 
//                                 src={project.img} 
//                                 alt={project.title} 
//                                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                             />
//                             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
//                             <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                                 <ArrowUpRight />
//                             </div>
//                         </div>
//                         <div className="p-5">
//                             <p className="text-sky-500 text-sm mb-2">{project.category}</p>
//                             <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors mb-3">{project.title}</h3>
//                             <p className="text-slate-400 text-sm mb-4">{project.desc}</p>
//                             <div className="flex flex-wrap gap-2">
//                                 {project.technologies.map(tech => (
//                                     <span key={tech} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">
//                                         {tech}
//                                     </span>
//                                 ))}
//                             </div>
//                         </div>
//                     </a>
//                 ))}
//             </div>
//         </Section>
//     );
// };

// const Footer = () => (
//     <footer className="bg-slate-900 border-t border-slate-800 py-8">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400">
//              <div className="flex justify-center items-center gap-6 mb-4">
//                 <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors"><Linkedin size={20} /></a>
//                 <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors"><Github size={20} /></a>
//                 <a href={`mailto:${personalInfo.email}`} className="text-slate-400 hover:text-sky-400 transition-colors"><Mail size={20} /></a>
//             </div>
//             <p className="text-sm">&copy; {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.</p>
//         </div>
//     </footer>
// );

// const BackToTopButton = () => {
//     const [isVisible, setIsVisible] = useState(false);

//     const toggleVisibility = () => {
//         if (window.pageYOffset > 300) {
//             setIsVisible(true);
//         } else {
//             setIsVisible(false);
//         }
//     };

//     const scrollToTop = () => {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         });
//     };

//     useEffect(() => {
//         window.addEventListener('scroll', toggleVisibility);
//         return () => window.removeEventListener('scroll', toggleVisibility);
//     }, []);

//     return (
//         <button 
//             onClick={scrollToTop}
//             className={`fixed bottom-5 right-5 bg-sky-500 text-white p-3 rounded-full shadow-lg hover:bg-sky-600 transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
//         >
//             <ArrowUp size={20} />
//         </button>
//     );
// };

// // --- Main Page Component ---

// export default function PortfolioPage() {
//     const [activeSection, setActiveSection] = useState('home');
//     const [visibleSections, addRef] = useScrollFadeIn();

//     useEffect(() => {
//         const handleScroll = () => {
//             const sections = ['home', 'about', 'skills', 'services', 'resume', 'certifications', 'projects'];
//             const scrollPosition = window.scrollY + window.innerHeight / 2.5;

//             for (const sectionId of sections) {
//                 const element = document.getElementById(sectionId);
//                 if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
//                     setActiveSection(sectionId);
//                     break;
//                 }
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <div className="bg-slate-900 text-slate-300 font-sans">
//             <Header activeSection={activeSection} />
//             <main>
//                 <Hero addRef={addRef} isVisible={visibleSections.home} />
//                 <About addRef={addRef} isVisible={visibleSections.about} />
//                 <Skills addRef={addRef} isVisible={visibleSections.skills} />
//                 <Services addRef={addRef} isVisible={visibleSections.services} />
//                 <Resume addRef={addRef} isVisible={visibleSections.resume} />
//                 <Certifications addRef={addRef} isVisible={visibleSections.certifications} />
//                 <Projects addRef={addRef} isVisible={visibleSections.projects} />
//             </main>
//             <Footer />
//             <BackToTopButton />
//         </div>
//     );
// }

