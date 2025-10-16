// 'use client';
// import { useState, useEffect, useRef } from 'react';
// import { Mail, Phone, MapPin, Linkedin, Github, Download, Menu, X, Briefcase, GraduationCap, Server, Code, Share2, Database, Award, ArrowUp, ArrowUpRight } from 'lucide-react';

// // --- Data ---
// const personalInfo = {
//   name: "Mohammad Talib Uddin",
//   role: " Software Engineer",
//   email: "talib.uddin626@gmail.com",
//   phone: "+91-7725050626",
//   location: "Bhopal, Madhya Pradesh, India",
//   cv: "/Talib_Resume.pdf",
//   linkedin: "https://www.linkedin.com/in/dz-txlib", 
//   github: "https://github.com/mohammadtalibuddin",
// };

// const professionalSummary = {
//     intro: "As a Software Engineer, I specialize in building robust and scalable backend systems.",
//     about: "Detail-oriented and highly motivated Computer Science graduate with a strong foundation in software development, data structures, and object-oriented programming. Proficient in Java and Python, and web technologies with hands-on experience in building robust backend systems using Spring Boot, Django REST Framework, and Microservices. Adept at working in Agile environments, collaborating in team settings, and delivering high-quality, scalable backend solutions."
// };

// const services = [
//     { icon: <Server size={32} />, title: "Backend Development", desc: "Creating robust and efficient server-side logic using Java Spring Boot and Python Django." },
//     { icon: <Share2 size={32} />, title: "Microservices", desc: "Designing and implementing scalable microservice architectures for complex applications." },
//     { icon: <Code size={32} />, title: "RESTful API Design", desc: "Developing clean, secure, and well-documented RESTful APIs with OpenAPI/Swagger." },
//     { icon: <Database size={32} />, title: "Database Management", desc: "Optimizing database performance and schema design with MySQL and PostgreSQL." },
// ];

// const skills = [
//     "Java", "Python", "Spring Boot", "Spring Data JPA", "Hibernate", "Microservices", "Django", "RESTful APIs", "JWT", "Agile",
//     "Django REST Framework", "MySQL", "PostgreSQL", "GitHub", "Git", "Docker", "AWS", "Linux", "OOP"
// ];

// const resumeData = {
//     experience: [
//         { 
//             duration: "April 2025 – Present", 
//             role: "Software Engineer", 
//             company: "Affy Cloud IT Solutions", 
//             companyLink: "https://www.affyclouditsolutions.com/",
//             desc: "Architected and delivered enterprise-grade backend solutions leveraging Spring Boot Microservices, handling high concurrency and large-scale data." 
//         },
//         { 
//             duration: "March 2024 – March 2025", 
//             role: "Software Engineer Intern", 
//             company: "Affy Cloud IT Solutions", 
//             companyLink: "https://www.affyclouditsolutions.com/",
//             desc: "Built and maintained scalable backend services using Java Spring Boot Microservices and assisted in developing REST APIs with Python Django." 
//         },
//     ],
//     education: [
//         { 
//             duration: "2021 - 2025", 
//             degree: "Bachelor of Technology, Computer Science", 
//             institution: "SAM College Of Engineering and Technology", 
//             institutionLink: "https://www.samglobaluniversity.ac.in/",
//             desc: "Focused on core computer science principles including data structures, algorithms, and software engineering." 
//         },
//     ]
// };

// const certificationsData = [
//     { name: "Java Programming: Mastering the Fundamentals", issuer: "Certificate of Excellence", date: "Sep 2024" },
//     { name: "Blockchain Development: Building Robust Solutions", issuer: "Certificate of Completion", date: "Mar 2024" },
//     { name: "Java Programming: Foundations and Core Principles", issuer: "Certificate of Achievement", date: "Jan 2024" },
// ];

// const initialProjects = [
//     { 
//         title: "EFFERVESCENT-CLASSES", 
//         category: "Learning Management System", 
//         link: "https://web.effervescentclasses.com", 
//         img: "https://placehold.co/600x400/0f172a/0ea5e9?text=E-Learning+Platform",
//         desc: "A comprehensive LMS to deliver dynamic educational experiences, featuring scalable microservices, robust authentication, and an intuitive interface for content delivery.",
//         technologies: ["Java", "Spring Boot", "Microservices", "MySQL", "JWT"]
//     },
//     { 
//         title: "What A Recruiter", 
//         category: "Recruitment Management System", 
//         link: "#", 
//         img: "https://placehold.co/600x400/0f172a/0ea5e9?text=HR+Tech",
//         desc: "A dynamic Recruitment Management System designed to centralize and accelerate talent acquisition with an optimized backend for rapid candidate search and data retrieval.",
//         technologies: ["Python", "Django REST", "PostgreSQL", "AI/ML"]
//     },
//     { 
//         title: "T-RACK Ticketing Tool", 
//         category: "Project Management Tool", 
//         link: "https://t-racktool.com", 
//         img: "https://placehold.co/600x400/0f172a/0ea5e9?text=Productivity+App",
//         desc: "A full-stack project management solution to streamline task tracking and workflow management, featuring a custom RESTful API and real-time collaboration.",
//         technologies: ["Java", "Spring Boot", "MySQL", "React"]
//     },
//     { 
//         title: "TARHAAB", 
//         category: "E-Commerce Platform", 
//         link: "https://tarhaab.com", 
//         img: "https://placehold.co/600x400/0f172a/0ea5e9?text=E-Commerce+Site",
//         desc: "A full-stack e-commerce platform delivering a seamless and secure online shopping experience, with secure payment gateway integration and inventory management.",
//         technologies: ["Python", "Django", "PostgreSQL", "Razorpay API"]
//     },
// ];

// // --- Custom Hooks ---
// const useTypingEffect = (text, duration) => {
//     const [typedText, setTypedText] = useState('');
//     useEffect(() => {
//         setTypedText(''); // Reset on text change
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
//             { threshold: 0.1 }
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
//   <a href={href} onClick={onClick} className={`text-sm font-medium transition-colors ${active ? 'text-sky-400' : 'text-slate-300 hover:text-sky-400'}`}>
//     {children}
//   </a>
// );

// const Header = ({ activeSection }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const handleLinkClick = () => setIsOpen(false);
//   const navItems = ['Home', 'About', 'Skills', 'Services', 'Resume', 'Certifications', 'Projects'];

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm shadow-md">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <a href="#" className="text-xl font-bold text-white">
//             Talib<span className="text-sky-400">.</span>
//           </a>
//           <nav className="hidden md:flex items-center space-x-8">
//             {navItems.map(item => (
//               <NavLink key={item} href={`#${item.toLowerCase()}`} active={activeSection === item.toLowerCase()}>
//                 {item}
//               </NavLink>
//             ))}
//           </nav>
//           <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <X /> : <Menu />}
//           </button>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="md:hidden bg-slate-900">
//           <nav className="flex flex-col items-center space-y-4 py-4">
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
//         className={`py-16 md:py-24 transition-all duration-700 ${className} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
//     >
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             {children}
//         </div>
//     </section>
// );

// const SectionTitle = ({ children }) => (
//   <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
//     {children}<span className="text-sky-400">.</span>
//   </h2>
// );

// const Hero = ({ addRef, isVisible }) => {
//     const typedRole = useTypingEffect(personalInfo.role, 1000);
//     return (
//         <Section id="home" className="pt-32 md:pt-40" addRef={addRef} isVisible={isVisible}>
//             <div className="flex flex-col md:flex-row items-center gap-12">
//                 <div className="md:w-1/2 text-center md:text-left">
//                     <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
//                         Hi, I'm <span className="text-sky-400">{personalInfo.name}</span>
//                     </h1>
//                     <p className="mt-4 text-lg md:text-xl text-slate-300">{professionalSummary.intro}</p>
//                     <p className="mt-2 text-md text-sky-400 h-6">{typedRole}</p>
//                     <div className="mt-8 flex justify-center md:justify-start items-center gap-4">
//                         <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors"><Linkedin /></a>
//                         <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors"><Github /></a>
//                     </div>
//                     <a href={personalInfo.cv} download className="mt-8 inline-flex items-center gap-2 bg-sky-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-sky-600 transition-transform hover:scale-105 duration-300">
//                         <Download size={20} /> Download CV
//                     </a>
//                 </div>
//                 <div className="md:w-1/2 flex justify-center">
//                     <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-slate-800 overflow-hidden border-4 border-sky-500/50 shadow-lg">
//                         <img src="https://placehold.co/400x400/1e293b/ffffff?text=MTU" alt={personalInfo.name} className="w-full h-full object-cover" />
//                     </div>
//                 </div>
//             </div>
//         </Section>
//     );
// };

// const About = ({ addRef, isVisible }) => (
//     <Section id="about" className="bg-slate-800" addRef={addRef} isVisible={isVisible}>
//         <SectionTitle>About Me</SectionTitle>
//         <div className="flex flex-col md:flex-row items-center gap-12">
//             <div className="md:w-1/3 flex justify-center">
//                  <div className="w-60 h-60 md:w-72 md:h-72 rounded-lg bg-slate-700 overflow-hidden shadow-lg">
//                     <img src="https://placehold.co/400x400/334155/ffffff?text=Developer" alt="About" className="w-full h-full object-cover" />
//                 </div>
//             </div>
//             <div className="md:w-2/3">
//                 <p className="text-slate-300 text-lg mb-6">{professionalSummary.about}</p>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-300">
//                     <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 hover:text-sky-400"><Mail size={16} className="text-sky-400"/><span>{personalInfo.email}</span></a>
//                     <div className="flex items-center gap-3"><Phone size={16} className="text-sky-400"/><span>{personalInfo.phone}</span></div>
//                     <div className="flex items-center gap-3 col-span-1 sm:col-span-2"><MapPin size={16} className="text-sky-400"/><span>{personalInfo.location}</span></div>
//                 </div>
//             </div>
//         </div>
//     </Section>
// );

// const Services = ({ addRef, isVisible }) => (
//     <Section id="services" addRef={addRef} isVisible={isVisible}>
//         <SectionTitle>What I Do</SectionTitle>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {services.map(service => (
//                 <div key={service.title} className="bg-slate-800 p-6 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-lg">
//                     <div className="text-sky-400 inline-block mb-4">{service.icon}</div>
//                     <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
//                     <p className="text-slate-400 text-sm">{service.desc}</p>
//                 </div>
//             ))}
//         </div>
//     </Section>
// );

// const Skills = ({ addRef, isVisible }) => (
//     <Section id="skills" className="bg-slate-800" addRef={addRef} isVisible={isVisible}>
//         <SectionTitle>Technical Skills</SectionTitle>
//         <div className="flex flex-wrap justify-center gap-3 md:gap-4">
//             {skills.map(skill => (
//                 <span key={skill} className="bg-slate-700 text-slate-200 px-4 py-2 rounded-md font-medium text-sm md:text-base shadow-sm hover:bg-slate-600 transition-colors">
//                     {skill}
//                 </span>
//             ))}
//         </div>
//     </Section>
// );

// const ResumeItem = ({ icon, duration, title, subtitle, subtitleLink, desc }) => (
//     <div className="pl-12 relative">
//         <div className="absolute left-0 top-1 flex items-center justify-center w-8 h-8 rounded-full bg-slate-700 text-sky-400">
//             {icon}
//         </div>
//         <div className="absolute left-4 top-10 bottom-0 w-px bg-slate-600"></div>
//         <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded-md mb-2 inline-block">{duration}</span>
//         <h3 className="text-lg font-bold text-white">{title} <span className="text-slate-400 font-normal">- <a href={subtitleLink} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">{subtitle}</a></span></h3>
//         <p className="text-slate-400 mt-1">{desc}</p>
//     </div>
// );

// const Resume = ({ addRef, isVisible }) => (
//     <Section id="resume" addRef={addRef} isVisible={isVisible}>
//         <SectionTitle>Resume</SectionTitle>
//         <div className="grid md:grid-cols-2 gap-16">
//             <div>
//                 <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3"><Briefcase /> Experience</h3>
//                 <div className="space-y-10">
//                     {resumeData.experience.map(item => <ResumeItem key={item.role} icon={<Briefcase size={16}/>} {...item} title={item.role} subtitle={item.company} subtitleLink={item.companyLink} />)}
//                 </div>
//             </div>
//              <div>
//                 <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3"><GraduationCap /> Education</h3>
//                 <div className="space-y-10">
//                     {resumeData.education.map(item => <ResumeItem key={item.degree} icon={<GraduationCap size={16}/>} {...item} title={item.degree} subtitle={item.institution} subtitleLink={item.institutionLink}/>)}
//                 </div>
//             </div>
//         </div>
//     </Section>
// );

// const Certifications = ({ addRef, isVisible }) => (
//     <Section id="certifications" className="bg-slate-800" addRef={addRef} isVisible={isVisible}>
//         <SectionTitle>Certifications</SectionTitle>
//         <div className="max-w-3xl mx-auto space-y-6">
//             {certificationsData.map(cert => (
//                 <div key={cert.name} className="bg-slate-700 p-4 rounded-lg flex items-center justify-between shadow-sm">
//                     <div className="flex items-center gap-4">
//                         <Award className="text-sky-400 flex-shrink-0" size={24} />
//                         <div>
//                             <h3 className="font-bold text-white">{cert.name}</h3>
//                             <p className="text-sm text-slate-300">{cert.issuer}</p>
//                         </div>
//                     </div>
//                     <span className="text-xs text-slate-400 whitespace-nowrap">{cert.date}</span>
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

