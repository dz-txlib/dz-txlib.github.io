export const projects = [
    {
        title: "TUTORIO \u2014 Multi-Tenant LMS Platform",
        category: "Ed-Tech",
        tagline: "Enterprise Learning Management System serving 1000+ students across multiple institutions",
        problem: "Educational institutions needed a unified digital platform to manage courses, conduct live classes, and handle assessments \u2014 all while maintaining strict data isolation between organizations.",
        solution: "Engineered a multi-tenant LMS with Spring Boot microservices, enabling schools and coaching centers to run independent digital learning ecosystems with complete data isolation and role-based access.",
        role: "Backend Engineer",
        impact: [
            "40% faster response times via Redis caching",
            "99.9% uptime with 1000+ concurrent users",
            "10,000+ course enrollments processed"
        ],
        tech: ["Spring Boot", "Microservices", "MySQL", "Redis", "JWT", "AWS"],
        github: null,
        live: "https://accent-talk.tutorio.in/",
        highlights: [],
        features: []
    },
    {
        title: "WhatARecruiter \u2014 AI Recruitment Platform",
        category: "HR Tech",
        tagline: "AI-powered hiring platform that automates resume screening and candidate matching",
        problem: "HR teams struggled with manual resume screening and inefficient hiring workflows, leading to recruitment cycles that stretched weeks longer than necessary.",
        solution: "Built an AI-powered recruitment system integrating Spring Boot microservices with a FastAPI-based ML service for intelligent resume parsing and automated candidate-job matching.",
        role: "Backend Engineer",
        impact: [
            "50% reduction in recruitment cycle time",
            "35% improvement in candidate-job match accuracy",
            "5,000+ resumes processed with AI parsing"
        ],
        tech: ["Spring Boot", "Microservices", "FastAPI", "MySQL", "Redis", "AI/ML"],
        github: null,
        live: null,
        highlights: [],
        features: []
    },
    {
        title: "E-Commerce Platform Suite",
        category: "E-Commerce",
        tagline: "Modular backend framework powering 3 live online stores",
        problem: "Small and medium businesses needed robust e-commerce backends for handling product catalogs, payment processing, and shipment tracking at scale.",
        solution: "Architected a reusable, modular Spring Boot backend framework with integrated payment (Razorpay) and logistics (Shiprocket) APIs, deployed across three independent storefronts.",
        role: "Backend Architect",
        impact: [
            "40% faster page load through backend optimization",
            "15,000+ orders processed across platforms",
            "99% payment success rate"
        ],
        tech: ["Spring Boot", "Microservices", "Razorpay", "Shiprocket", "MySQL", "Redis"],
        github: null,
        live: [
            { name: "Meher Sambalpur Hub", url: "https://mehersambalpurihub.com/" },
            { name: "M Organic Farm", url: "https://morganics.ae" },
            { name: "Tarhaab Fashion", url: "https://tarhaab.com/" }
        ],
        highlights: [],
        features: []
    },
    {
        title: "Dclean \u2014 Laundry Management System",
        category: "Operations",
        tagline: "End-to-end laundry operations platform with multi-role access and delivery tracking",
        problem: "Laundry businesses needed a digital solution to manage orders, track pickups and deliveries, and coordinate between customers, staff, and delivery agents.",
        solution: "Developed a comprehensive management system using Django REST Framework with separate panels for Admin, Customer, and Delivery roles \u2014 including a mobile-friendly delivery API.",
        role: "Backend Developer",
        impact: [
            "30% faster data retrieval through query optimization",
            "500+ orders managed per month",
            "60% reduction in manual processing time"
        ],
        tech: ["Django REST Framework", "PostgreSQL", "Nginx", "Gunicorn"],
        github: null,
        live: "https://dclean.me/",
        highlights: [],
        features: []
    }
];
