import { Network, Boxes, Workflow, ShieldCheck, Braces } from 'lucide-react';

export const skills = {
    "Backend Development": {
        items: [
            { name: 'Java', icon: '/icons/java.svg' },
            { name: 'Spring Boot', icon: '/icons/spring.svg' },
            { name: 'Python', icon: '/icons/python.svg' },
            { name: 'Django REST', icon: '/icons/django.svg' },
            { name: 'FastAPI', icon: '/icons/fastapi.svg' },
            { name: 'Hibernate', icon: '/icons/hibernate.svg' }
        ],
        color: 'from-blue-500 to-cyan-500'
    },
    "Databases": {
        items: [
            { name: 'MySQL', icon: '/icons/mysql.svg' },
            { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
            { name: 'MongoDB', icon: '/icons/mongodb.svg' },
            { name: 'Redis', icon: '/icons/redis.svg' }
        ],
        color: 'from-green-500 to-emerald-500'
    },
    "Cloud & DevOps": {
        items: [
            { name: 'AWS', icon: '/icons/aws.svg' },
            { name: 'Docker', icon: '/icons/docker.svg' },
            { name: 'CI/CD', icon: '/icons/githubactions.svg' },
            { name: 'Nginx', icon: '/icons/nginx.svg' },
            { name: 'Linux/VPS', icon: '/icons/linux.svg' }
        ],
        color: 'from-orange-500 to-red-500'
    },
    "Tools & Version Control": {
        items: [
            { name: 'Git/GitHub', icon: '/icons/github.svg' },
            { name: 'Postman', icon: '/icons/postman.svg' },
            { name: 'Swagger', icon: '/icons/swagger.svg' },
            { name: 'IntelliJ IDEA', icon: '/icons/intellij.svg' },
            { name: 'VS Code', icon: '/icons/vscode.svg' }
        ],
        color: 'from-purple-500 to-pink-500'
    },
    "Architecture & Concepts": {
        items: [
            { name: 'RESTful APIs', lucide: Network },
            { name: 'Microservices', lucide: Boxes },
            { name: 'System Design', lucide: Workflow },
            { name: 'JWT & RBAC', lucide: ShieldCheck },
            { name: 'OOP & SOLID', lucide: Braces }
        ],
        color: 'from-indigo-500 to-blue-500'
    }
};
