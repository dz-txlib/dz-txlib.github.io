import { Briefcase } from 'lucide-react'; // Not strictly needed for logic but good for consistency if we import icons here. The original data didn't use icon imports inside the object, except for technologies array strings.

export const experience = [
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
