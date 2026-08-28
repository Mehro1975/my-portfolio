export type Project = {
  title: string;
  blurb: string;
  story?: string;
  stack: string[];
  year: string;
  links: { live?: string; source?: string };
  featured?: boolean;
  status?: string;
  image?: string;
  categories?: ("Frontend" | "Backend" | "Fullstack")[];
};

export type Job = {
  company: string;
  role: string;
  period: string;
  blurb: string;
  url?: string;
};

export type Post = {
  title: string;
  summary: string;
  date: string;
  url: string;
  readingTime?: string;
};

export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  details?: string;
};

export type CertificationItem = {
  title: string;
  issuer: string;
  year: string;
};

export const site = {
  name: "Harsh Kumar Jha",
  firstName: "Harsh",
  url: "https://harshkumarjha.dev",
  quote: {
    text: "Simplicity is prerequisite for reliability.",
    author: "Edsger W. Dijkstra",
  },
  profileImages: [
    "/Profile_Photo.jpg",
  ],
  bannerImage: "/images/cover.jpg",
  socialBannerImage: "/social-banner.png",
  initials: "HKJ",
  role: "Full Stack Developer",
  location: "Ludhiana, Punjab, India",
  timezone: "Asia/Kolkata",
  email: "hjha5316@gmail.com",
  greeting: "Hey, I'm Harsh",
  tagline: "I build clean, scalable full-stack web applications, mobile apps, and robust backend microservices.",
  about: [
    "Hey, I'm Harsh, a full stack developer who loves building highly scalable web architectures, cross-platform mobile applications, and backend automation platforms. I study Computer Science Engineering with a specialization in Full Stack Development at UPES, Dehradun.",
    "I focus on writing clean, reusable, and maintainable code. My experience includes working with React, TypeScript, Node.js, Express, Kotlin, Python, and cloud infrastructure like AWS.",
    "I believe in shipping robust solutions that focus heavily on practical efficiency, security, and delightful user experience."
  ],
  tldr: [
    "Building scalable platforms.",
    "AWS & Backend Engineering.",
    "MERN Stack & Mobile (Kotlin).",
    "Focused on high performance."
  ],
  status: {
    available: true,
    availableText: "open to opportunities",
    nowLearning: "System Design • AWS Cloud • Microservices • DevOps",
    nowBuilding: "BillSense & WhatsApp Bots",
    nowListening: "focus playlists",
  },
  socials: {
    github: "https://github.com/Mehro1975",
    twitter: "https://x.com/hkj22534690",
    linkedin: "https://linkedin.com/in/harsh-kumar-jha-1b976131b",
    email: "mailto:hjha5316@gmail.com",
    resume: "https://drive.google.com/file/d/1YnyA9jHkLmHZ9Q-WuEJoDpTnOo0ASFtw/view?usp=sharing",
    discord: "",
    medium: "",
  },
  experience: [
    {
      company: "Xebia",
      role: "Full Stack Intern",
      period: "June – July 2026",
      blurb:
        "Implemented scalable frontend and backend modules for a confidential LMS using the MERN Stack, TypeScript, and JavaScript, contributing to database schema design and project architecture. Developed reusable API clients, authentication interceptors, error handling, and React Query (TanStack Query) integrations while consuming REST APIs documented with Swagger and tested using Postman. Worked in an Agile/Scrum environment, collaborating through Git, GitHub, GitLab, Merge Requests, code reviews, and integration branch workflows to maintain code quality and streamline software delivery.",
      url: "https://xebia.com",
    },
    {
      company: "Virtual View India",
      role: "Software Developer Intern",
      period: "June – July 2025",
      blurb:
        "Developed responsive and cross-browser compatible web applications, improving user experience through modern frontend development practices. Debugged, tested, and deployed software following the Software Development Life Cycle (SDLC) and Agile methodologies. Utilized Git/GitHub for version control while writing clean, reusable, and maintainable code to deliver high-quality software solutions.",
      url: "",
    },
  ] as Job[],
  projects: [
    {
      title: "BillSense",
      blurb:
        "An OCR-powered Android platform for document-driven resource intelligence. Scans bills to automatically extract data, eliminate manual entry, and categorise expenses.",
      story:
        "Engineered a scalable microservice architecture using Node.js, Express.js, FastAPI, REST APIs, and MongoDB Atlas. Developed an OCR-powered Android app using Kotlin, Jetpack Compose, Kraken OCR, and OpenCV to parse and extract structured bill information dynamically.",
      stack: ["Android", "Kotlin", "Jetpack Compose", "Node.js", "Express.js", "FastAPI", "Python", "Kraken OCR", "OpenCV", "MongoDB Atlas"],
      year: "2025",
      links: {
        source: "https://github.com/Mehro1975",
      },
      featured: true,
      image: "/project-images/billsense.jpg",
      categories: ["Fullstack", "Backend"],
    },
    {
      title: "WhatsRemind",
      blurb:
        "A WhatsApp reminder bot and task scheduler that sends automated, time-sensitive task notifications directly to users' WhatsApp.",
      story:
        "Developed custom RESTful APIs with Node.js, Express, and MongoDB. Implemented robust server-side scheduling to manage user reminders and integrated Twilio's WhatsApp API to dispatch alerts in real-time.",
      stack: ["React.js", "Express.js", "Node.js", "MongoDB", "Twilio API"],
      year: "2026",
      links: {
        source: "https://github.com/Mehro1975",
      },
      featured: true,
      image: "/project-images/WhatsRemind.png",
      categories: ["Fullstack", "Backend"],
    },
    {
      title: "CarRental",
      blurb:
        "A responsive MERN-stack car rental booking system featuring dynamic car browsing, real-time availability checks, and secure user flows.",
      story:
        "Created an end-to-end booking portal with JWT authentication, role-based access control, paginated listings, and modular backend routing for maximum scalability.",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
      year: "2025",
      links: {
        source: "https://github.com/Mehro1975",
      },
      featured: true,
      image: "/project-images/carrental.png",
      categories: ["Fullstack", "Frontend"],
    },
  ] as Project[],
  skills: [
    "Java",
    "Python",
    "JavaScript",
    "HTML5",
    "CSS3",
    "MySQL",
    "MongoDB",
    "SQL",
    "React.js",
    "React Native",
    "Node.js",
    "Express.js",
    "FastAPI",
    "Kotlin",
    "Tailwind CSS",
    "Jetpack Compose",
    "REST APIs",
    "API Integration",
    "Authentication",
    "Postman",
    "Swagger",
    "AWS",
    "Firebase",
    "Git",
    "GitHub",
    "Visual Studio Code",
    "Android Studio",
  ],
  writing: [] as Post[],
  education: [
    {
      institution: "UPES, Dehradun, India",
      degree: "B.Tech CSE (Hons.), Full Stack Development",
      period: "2023 – Present",
      details: "CGPA: 8.37 (Current)",
    },
    {
      institution: "Green Land Convent School, Ludhiana, Punjab",
      degree: "Intermediate & Matriculation (CBSE)",
      period: "Completed",
      details: "Matriculation (X): 93.4%  |  Intermediate (XII): 93%",
    },
  ] as EducationItem[],
  certifications: [
    {
      title: "AWS Certified Developer – Associate (DVA-C02)",
      issuer: "Amazon Web Services",
      year: "2026",
    },
    {
      title: "Python Essentials",
      issuer: "Cisco Networking Academy",
      year: "Completed",
    },
    {
      title: "CCNA: Enterprise Networking, Security, and Automation",
      issuer: "Cisco Networking Academy",
      year: "Completed",
    }
  ] as CertificationItem[],
  github: {
    username: "Mehro1975",
  },
  footerNote: "Built with ❤️ and hardwork"
} as const;

export type Site = typeof site;
