import { Code, Share2, Server, Database, Layers, GitBranch } from 'lucide-react';

export const services = [
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
