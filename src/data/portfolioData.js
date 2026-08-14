// Centralized Portfolio Data for Vivek Kumar - Full Stack Developer

export const personalDetails = {
  name: "Vivek Kumar",
  title: "Aspiring Full Stack Developer",
  tagline: "Building Scalable Web Applications, RESTful APIs & Enterprise Software",
  bio: "Aspiring Full Stack Developer with hands-on experience in building responsive web applications using Java, JavaScript, React.js, Node.js, and MySQL. Skilled in developing RESTful APIs, clean user interfaces, and scalable solutions. Seeking an opportunity to contribute to real-world software engineering projects.",
  location: "Noida, Uttar Pradesh, India",
  email: "vivekkumar120103@gmail.com",
  phone: "+91-9576742410",
  status: "Available for Full-Stack & Software Developer Roles",
  avatar: "/assets/profile.jpg",
  avatarFull: "/assets/profile_full.png",
  resumeUrl: "/resume/Vivek-Kumar-Resume.pdf",
  github: "https://github.com/vivekumar18",
  linkedin: "https://www.linkedin.com/in/vivek-kumar-3579841a7",
  socials: {
    github: "https://github.com/vivekumar18",
    linkedin: "https://www.linkedin.com/in/vivek-kumar-3579841a7",
    email: "mailto:vivekkumar120103@gmail.com",
    phone: "tel:+919576742410",
  },
};

export const stats = [
  { label: "MCA CGPA", value: "8.0 / 10", detail: "Graphic Era University" },
  { label: "BCA Score", value: "74.65%", detail: "BRABU University" },
  { label: "Tech Stack", value: "Full Stack", detail: "React, Node, Java, MySQL" },
  { label: "Location", value: "Noida, UP", detail: "Open to Remote & Onsite" },
];

export const aboutHighlights = [
  {
    title: "Full Stack Engineering",
    description: "Building responsive web applications using React.js, HTML5, CSS3, JavaScript, Node.js, and RESTful APIs.",
    icon: "code",
  },
  {
    title: "Object-Oriented Java & Python",
    description: "Proficient in C, C++, Java, Object-Oriented System Design, Data Structures & Algorithms, and Python scripting.",
    icon: "java",
  },
  {
    title: "Database Architecture",
    description: "Hands-on experience with MySQL, Oracle DB, and MongoDB for schema design, query optimization, and data storage.",
    icon: "database",
  },
  {
    title: "Cloud & Dev Tooling",
    description: "AWS Cloud certified, proficient with Git, GitHub, VS Code, SolarWinds, Jira, and Agile SDLC methodologies.",
    icon: "cloud",
  },
];

export const skillCategories = [
  {
    id: "programming",
    title: "Programming Languages",
    skills: [
      { name: "Java", level: "Advanced", percentage: 90, icon: "java" },
      { name: "JavaScript (ES6+)", level: "Advanced", percentage: 88, icon: "js" },
      { name: "C / C++", level: "Intermediate", percentage: 82, icon: "cpp" },
      { name: "Python", level: "Intermediate", percentage: 80, icon: "python" },
    ],
  },
  {
    id: "web",
    title: "Web & Cloud Tech",
    skills: [
      { name: "React.js", level: "Advanced", percentage: 88, icon: "react" },
      { name: "Node.js & Express", level: "Intermediate", percentage: 82, icon: "node" },
      { name: "REST APIs", level: "Advanced", percentage: 88, icon: "api" },
      { name: "HTML5 & CSS3", level: "Expert", percentage: 95, icon: "html" },
      { name: "Tailwind CSS", level: "Advanced", percentage: 90, icon: "tailwind" },
      { name: "AWS Cloud", level: "Intermediate", percentage: 78, icon: "aws" },
    ],
  },
  {
    id: "databases",
    title: "Databases & Core CS",
    skills: [
      { name: "MySQL", level: "Advanced", percentage: 88, icon: "mysql" },
      { name: "MongoDB", level: "Intermediate", percentage: 80, icon: "mongodb" },
      { name: "Oracle DB", level: "Intermediate", percentage: 78, icon: "oracle" },
      { name: "Data Structures & Algorithms", level: "Advanced", percentage: 85, icon: "dsa" },
      { name: "DBMS & Operating Systems", level: "Advanced", percentage: 88, icon: "cs" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Methodologies",
    skills: [
      { name: "Git & GitHub", level: "Advanced", percentage: 90, icon: "git" },
      { name: "VS Code", level: "Expert", percentage: 95, icon: "vscode" },
      { name: "Jira & SolarWinds", level: "Intermediate", percentage: 78, icon: "jira" },
      { name: "Agile & SDLC Practices", level: "Advanced", percentage: 85, icon: "agile" },
    ],
  },
];

export const experiences = [
  {
    id: "happieloop",
    role: "Fullstack Development Intern",
    company: "Happieloop Technologies",
    location: "Remote",
    period: "March 2026",
    type: "Internship",
    description: [
      "Developed and maintained responsive web applications using HTML, CSS, JavaScript, and backend technologies, ensuring cross-browser compatibility and optimized performance.",
      "Designed and implemented RESTful APIs and integrated frontend with backend services, enabling efficient data flow and seamless user experience.",
      "Worked with MySQL databases for efficient data storage, retrieval, and query optimization.",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "REST APIs", "MySQL", "Node.js"],
  },
  {
    id: "oasis",
    role: "Web Development Intern",
    company: "Oasis Infobyte",
    location: "Remote",
    period: "Previous Internship",
    type: "Internship",
    description: [
      "Built interactive web applications and responsive landing pages using modern frontend framework principles.",
      "Collaborated on API endpoints, state management, and code refactoring to improve overall load times and performance.",
    ],
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Git"],
  },
];

export const educationList = [
  {
    id: "mca",
    degree: "Master of Computer Applications (MCA)",
    institution: "Graphic Era (Deemed to be) University",
    location: "Dehradun, Uttarakhand",
    period: "2024 – 2026",
    grade: "CGPA: 8.0 / 10",
    details: "Specialized in Full Stack Engineering, Advanced Database Systems, Software Architecture, and Cloud Technologies.",
  },
  {
    id: "bca",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Babasaheb Bhimrao Ambedkar Bihar University",
    location: "Muzaffarpur, Bihar",
    period: "2020 – 2023",
    grade: "Percentage: 74.65%",
    details: "Core focus on C/C++, Java Programming, Data Structures, Operating Systems, Computer Networks, and Database Management.",
  },
  {
    id: "senior-secondary",
    degree: "Senior Secondary (Intermediate - 12th)",
    institution: "Mahant Sheo Shankar Giri College",
    location: "Areraj, Bihar",
    period: "2018 – 2020",
    grade: "Percentage: 80.4%",
    details: "Science Stream with focus on Mathematics, Physics, and Computer Fundamentals.",
  },
];

export const projectsList = [
  {
    id: "gameverse",
    title: "GameVerse: Java Mini-Game System",
    category: "Java / Desktop App",
    image: "/assets/gameverse.jpg",
    period: "Jan 2025 - May 2025",
    tagline: "Object-Oriented Desktop Gaming Suite in Java",
    description:
      "Developed Number Guessing Games, Word Jumble Game, and Color Coding Game in Java, implementing game logic, intuitive UI, and event handling. Integrated multiple games into a single maintainable system applying Object-Oriented Design (OOD), Agile, and SDLC practices.",
    technologies: ["Java", "DSA", "Object-Oriented Design", "Agile", "SDLC"],
    github: "https://github.com/vivekumar18",
    liveDemo: "#",
    features: [
      "Number Guessing, Word Jumble, and Color Coding Games",
      "Unified desktop menu interface with event handling",
      "Applied Object-Oriented Programming (OOP) principles",
      "Optimized data structures for score tracking and state management",
    ],
  },
  {
    id: "college-website",
    title: "College Website Development",
    category: "Full Stack Web",
    image: "/assets/trishul_crm.jpg",
    period: "Jan 2024 - May 2024",
    tagline: "Responsive Web Portal for Academic Institutions",
    description:
      "Designed and developed a responsive college website with comprehensive modules for About Us, Courses, Faculty Directory, Photo Gallery, Student Results, and Contact Portal using HTML, CSS, JavaScript, PHP, and MySQL.",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "VS Code"],
    github: "https://github.com/vivekumar18",
    liveDemo: "#",
    features: [
      "Dynamic Courses, Faculty Directory, and Gallery sections",
      "Student result lookup and contact form backend integration",
      "MySQL database for structured content management",
      "Built following Agile methodologies and SDLC standards",
    ],
  },
  {
    id: "trishul-crm",
    title: "Trishul CRM Portal",
    category: "Full Stack Web",
    image: "/assets/trishul_crm.jpg",
    period: "Recent Project",
    tagline: "Lead Management & Customer Relationship Platform",
    description:
      "Full-stack CRM web application designed to manage client interactions, sales pipelines, and task schedules with role-based dashboard authentication and MongoDB database.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/vivekumar18",
    liveDemo: "#",
    features: [
      "Role-based authentication & dashboard analytics",
      "Client pipeline tracking & scheduled task notifications",
      "RESTful API backend powered by Express & MongoDB",
    ],
  },
  {
    id: "buy-makhana",
    title: "Buy Makhana Online E-Commerce",
    category: "Full Stack Web",
    image: "/assets/makhana_ecom.jpg",
    period: "Recent Project",
    tagline: "Specialized Superfood E-Commerce Marketplace",
    description:
      "E-commerce Web application featuring product catalog filters, dynamic shopping cart management, user accounts, and checkout workflows built with PHP, MySQL, and Tailwind CSS.",
    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "Tailwind CSS"],
    github: "https://github.com/vivekumar18",
    liveDemo: "#",
    features: [
      "Interactive product catalog with category filter",
      "Dynamic cart state management & checkout simulation",
      "Relational MySQL backend schema for order storage",
    ],
  },
  {
    id: "ai-assistant",
    title: "AI Voice Personal Assistant",
    category: "Python / AI",
    image: "/assets/ai_assistant.jpg",
    period: "Recent Project",
    tagline: "Voice-Controlled Desktop Automation Assistant",
    description:
      "Python desktop voice assistant capable of processing speech commands to open applications, search Google & Wikipedia, play YouTube videos, and report weather forecasts.",
    technologies: ["Python", "SpeechRecognition", "Pyttsx3", "PyWhatKit"],
    github: "https://github.com/vivekumar18",
    liveDemo: "#",
    features: [
      "Voice recognition & text-to-speech feedback",
      "Desktop application automation & web searches",
      "YouTube video playback & news integration",
    ],
  },
];

export const projects = projectsList;


export const certifications = [
  {
    id: "fullstack-apna",
    title: "Full Stack Web Development",
    issuer: "Apna College",
    date: "March 2025",
    year: "March 2025",
    badge: "Full Stack Engineering",
    credentialId: "APNA-FSWD-2025",
    icon: "code",
    link: "https://www.linkedin.com/posts/vivek-kumar-3579841a7_fullstackdevelopment-webdevelopment-apnacollege-activity-7320480921466343424-ldd-?utm_source=share&utm_medium=member_desktop&rcm=ACoAADBgQPMBw24NXc4FGpzWItvNBaoM3-x2GDs",
    verifyUrl: "https://www.linkedin.com/posts/vivek-kumar-3579841a7_fullstackdevelopment-webdevelopment-apnacollege-activity-7320480921466343424-ldd-?utm_source=share&utm_medium=member_desktop&rcm=ACoAADBgQPMBw24NXc4FGpzWItvNBaoM3-x2GDs",
    description: "Certified Full Stack Web Developer proficient in React.js, Node.js, Express, JavaScript, HTML5/CSS3, and MySQL database management.",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "MySQL", "REST APIs"],
  },
  {
    id: "isp-internshala",
    title: "Internshala Student Partner (ISP)",
    issuer: "Internshala",
    date: "July 2025",
    year: "July 2025",
    badge: "Leadership & Community",
    credentialId: "ISP-2025-VK",
    icon: "award",
    link: "https://github.com/vivekumar18",
    verifyUrl: "https://github.com/vivekumar18",
    description: "Selected as Internshala Student Partner representing academic technical communities.",
    skills: ["Leadership", "Technical Communication", "Community Building"],
  },
  {
    id: "aws-cloud",
    title: "AWS Cloud Fundamentals",
    issuer: "Amazon Web Services",
    date: "Oct 2025",
    year: "Oct 2025",
    badge: "Cloud Computing",
    credentialId: "AWS-CLOUD-2025",
    icon: "aws",
    link: "https://github.com/vivekumar18",
    verifyUrl: "https://github.com/vivekumar18",
    description: "Certified in AWS Cloud Foundation concepts, EC2 computing instances, S3 storage, IAM security, and cloud architecture.",
    skills: ["EC2", "S3", "Cloud Concepts", "IAM", "VPC"],
  },
];

export const experience = experiences;
export const education = educationList;

export const achievements = [
  {
    title: "DSA Problem Solving",
    description: "Solved Data Structures and Algorithms problems on platforms including LeetCode and GeeksforGeeks, demonstrating strong analytical and problem-solving abilities.",
  },
];

