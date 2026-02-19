export const projects = [
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
        live: "https://accent-talk.tutorio.in/",
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
            { name: "Meher Sambalpur Hub", url: "https://mehersambalpurihub.com/" },
            { name: "M Organic Farm", url: "https://morganics.ae" },
            { name: "Tarhaab Fashion", url: "https://tarhaab.com/" }
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
