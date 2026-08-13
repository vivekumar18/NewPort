export const personalDetails = {
  name: "Vivek Kumar",
  title: "MCA Graduate | Full Stack Developer | Software Developer",
  shortTitle: "Full Stack Software Developer",
  tagline: "Passionate software developer with a strong foundation in web development, Java, Python, databases, and modern technologies. I enjoy building practical, user-friendly applications and continuously improving my technical skills.",
  location: "Noida, Uttar Pradesh, India",
  email: "vivekkumar.mca26@gmail.com",
  github: "https://github.com/vivekkumar-mca",
  linkedin: "https://linkedin.com/in/vivekkumar-mca",
  status: "Open to Full-Time Roles & Opportunities",
  avatar: "/assets/profile.jpg",
  resumeUrl: "/resume/Vivek-Kumar-Resume.pdf",
};

export const aboutHighlights = [
  {
    icon: "FaBrain",
    title: "Problem Solving",
    description: "Strong analytical mindset with core knowledge of Data Structures, Algorithms, and Object-Oriented Programming principles."
  },
  {
    icon: "FaLayerGroup",
    title: "Full-Stack Development",
    description: "Hands-on experience building seamless web applications from modern React UIs to scalable Node.js & PHP REST backends."
  },
  {
    icon: "FaDatabase",
    title: "Database Management",
    description: "Proficient in relational (MySQL, Oracle, SQL, PL/SQL) and NoSQL databases (MongoDB) for robust data architecture."
  },
  {
    icon: "FaMobileScreen",
    title: "Responsive UI Design",
    description: "Crafting pixel-perfect, accessible, fluid interfaces using React.js, Tailwind CSS, HTML5, and Framer Motion."
  },
  {
    icon: "FaPlug",
    title: "API Integration",
    description: "Building, documenting, and consuming RESTful APIs to deliver dynamic user experiences."
  },
  {
    icon: "FaPeopleGroup",
    title: "Team Collaboration",
    description: "A proactive collaborator using Git/GitHub, agile workflows, and clear technical communication."
  },
  {
    icon: "FaGraduationCap",
    title: "Continuous Learning",
    description: "Constantly expanding skills in Cloud technologies (AWS), AI Foundations, and modern software engineering practices."
  }
];

export const stats = [
  { label: "Degree Level", value: "MCA Graduate", detail: "Graphic Era University (7.96 CGPA)" },
  { label: "Major Projects", value: "4+ Full Projects", detail: "Web, Desktop & AI Applications" },
  { label: "Internships", value: "2 Internships", detail: "Full Stack & Web Engineering" },
  { label: "Tech Stack", value: "15+ Core Skills", detail: "React, Node, Java, Python, AWS" }
];

export const skillCategories = [
  {
    id: "languages",
    name: "Programming Languages",
    skills: [
      { name: "Java", level: 88, icon: "FaJava", category: "Core Backend" },
      { name: "Python", level: 85, icon: "FaPython", category: "Scripting & AI" },
      { name: "JavaScript", level: 90, icon: "SiJavascript", category: "Web Standard" },
      { name: "C", level: 80, icon: "SiC", category: "Systems" },
      { name: "C++", level: 82, icon: "SiCplusplus", category: "OOP & DSA" },
      { name: "PHP", level: 78, icon: "FaPhp", category: "Web Scripting" }
    ]
  },
  {
    id: "web",
    name: "Web Technologies",
    skills: [
      { name: "React.js", level: 90, icon: "FaReact", category: "Frontend UI" },
      { name: "Node.js", level: 82, icon: "FaNodeJs", category: "Backend Runtime" },
      { name: "Express.js", level: 80, icon: "SiExpress", category: "Server Framework" },
      { name: "HTML5", level: 95, icon: "FaHtml5", category: "Markup" },
      { name: "CSS3", level: 92, icon: "FaCss3Alt", category: "Styling" },
      { name: "Tailwind CSS", level: 90, icon: "SiTailwindcss", category: "Utility CSS" }
    ]
  },
  {
    id: "database",
    name: "Databases",
    skills: [
      { name: "MySQL", level: 86, icon: "SiMysql", category: "Relational DB" },
      { name: "MongoDB", level: 82, icon: "SiMongodb", category: "NoSQL DB" },
      { name: "Oracle DB", level: 78, icon: "SiOracle", category: "Enterprise DB" },
      { name: "SQL", level: 88, icon: "FaDatabase", category: "Queries" },
      { name: "PL/SQL", level: 76, icon: "FaCode", category: "Procedural SQL" }
    ]
  },
  {
    id: "tools",
    name: "Tools & Cloud",
    skills: [
      { name: "Git", level: 88, icon: "FaGitAlt", category: "Version Control" },
      { name: "GitHub", level: 90, icon: "FaGithub", category: "Collaboration" },
      { name: "VS Code", level: 95, icon: "TbBrandVscode", category: "IDE" },
      { name: "AWS", level: 75, icon: "FaAws", category: "Cloud Platform" },
      { name: "Netlify", level: 85, icon: "SiNetlify", category: "Deployment" },
      { name: "REST APIs", level: 88, icon: "FaPlug", category: "Architecture" }
    ]
  }
];

export const projects = [
  {
    id: "gameverse",
    title: "GameVerse Platform",
    category: "Java / Desktop",
    image: "/assets/gameverse.jpg",
    description: "A Java Swing-based desktop gaming platform combining multiple interactive mini-games into a single unified desktop interface.",
    features: [
      "Multiple built-in classic mini-games (Tic-Tac-Toe, Snake, Sudoku)",
      "Interactive Java Swing desktop graphical user interface",
      "Centralized game dashboard & player session tracking",
      "User-friendly desktop navigation and instant game switching",
      "Real-time score calculation and game interaction feedback"
    ],
    technologies: ["Java", "Java Swing", "OOP Principles", "Desktop Development"],
    github: "https://github.com/vivekkumar-mca/gameverse",
    demo: "#",
    featured: true
  },
  {
    id: "trishul-crm",
    title: "Trishul CRM",
    category: "Full Stack",
    image: "/assets/trishul_crm.jpg",
    description: "A customer relationship management web application engineered to track client interactions, sales pipelines, and business datasets efficiently.",
    features: [
      "Comprehensive customer profile management & interaction tracking",
      "Dynamic sales pipeline metrics & analytics dashboard",
      "Fast client search, multi-column filtering, and records sorting",
      "Complete CRUD operations for accounts, leads, and tasks",
      "Responsive React UI paired with Express & MongoDB backend REST services"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/vivekkumar-mca/trishul-crm",
    demo: "#",
    featured: true
  },
  {
    id: "makhana-ecom",
    title: "Buy Makhana Online",
    category: "E-Commerce",
    image: "/assets/makhana_ecom.jpg",
    description: "A full-featured e-commerce platform for browsing, filtering, and ordering organic roasted makhana products online.",
    features: [
      "Interactive product catalog with rich media cards & pricing",
      "Product search, category filter, and detailed product modal",
      "Responsive shopping interface tuned for mobile & desktop buyers",
      "Email notification triggers for order confirmations",
      "PHP & MySQL database integration for backend data persistence"
    ],
    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/vivekkumar-mca/buy-makhana-online",
    demo: "#",
    featured: true
  },
  {
    id: "ai-assistant",
    title: "AI-Based Personal Assistant",
    category: "Python / AI",
    image: "/assets/ai_assistant.jpg",
    description: "A Python desktop virtual assistant capable of understanding voice commands and performing automated system tasks.",
    features: [
      "Voice recognition engine converting speech to actionable commands",
      "Natural Text-to-Speech audio response playback",
      "Desktop application launching & web search automation",
      "WhatsApp automated message sending via PyWhatKit integration",
      "Voice-based system controls and live waveform activity UI"
    ],
    technologies: ["Python", "SpeechRecognition", "Pyttsx3", "PyWhatKit", "Automation"],
    github: "https://github.com/vivekkumar-mca/ai-personal-assistant",
    demo: "#",
    featured: true
  }
];

export const experience = [
  {
    id: "happieloop",
    role: "Full Stack Development Intern",
    company: "Happieloop Technology",
    location: "Noida, India",
    duration: "Internship Project Duration",
    type: "Internship",
    description: "Collaborated in designing and building full-stack web applications, strengthening end-to-end web engineering workflows.",
    responsibilities: [
      "Designed and implemented clean, responsive user interfaces using React.js and modern CSS practices.",
      "Integrated frontend components with Node.js RESTful APIs for dynamic asynchronous data fetching.",
      "Optimized database schema queries and structured collections for performance.",
      "Participated in active code reviews, bug fixes, and Git feature branching."
    ],
    outcomes: "Enhanced full-stack software development competencies, production API consumption, and team code delivery.",
    skills: ["React.js", "Node.js", "Express.js", "REST APIs", "Git", "Tailwind CSS"]
  },
  {
    id: "oasis",
    role: "Web Development Intern",
    company: "Oasis Infobyte",
    location: "Remote / Noida, India",
    duration: "Internship Project Duration",
    type: "Internship",
    description: "Focused on frontend web engineering, crafting interactive, accessible client interfaces.",
    responsibilities: [
      "Created structured HTML5 pages and custom styled CSS3 layouts following visual mockups.",
      "Developed interactive JavaScript logic for forms, DOM manipulation, and visual animations.",
      "Ensured seamless cross-browser compatibility and fluid mobile-first responsiveness.",
      "Fixed layout bottlenecks and improved page load performance."
    ],
    outcomes: "Mastered fundamental web standards, responsive UI layouts, and core JavaScript techniques.",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX Best Practices"]
  }
];

export const education = [
  {
    id: "mca",
    degree: "Master of Computer Applications (MCA)",
    institution: "Graphic Era (Deemed to be University), Dehradun",
    period: "2024 – 2026",
    grade: "CGPA: 7.96 / 10",
    badge: "Post Graduation",
    highlights: [
      "Advanced coursework in Software Engineering, Cloud Computing, System Architecture, and Database Systems.",
      "Hands-on project work in Web Technologies, Enterprise Java, and Python AI applications."
    ]
  },
  {
    id: "bca",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Munshi Singh College, Motihari",
    period: "2020 – 2023",
    grade: "Percentage: 74.65%",
    badge: "Graduation",
    highlights: [
      "Core foundation in Computer Fundamentals, C/C++, Java, DBMS, Mathematics, and Data Structures.",
      "Developed foundational academic software projects and web applications."
    ]
  },
  {
    id: "senior-secondary",
    degree: "Senior Secondary (12th / Intermediate)",
    institution: "M.S.S.G. College, Areraj",
    period: "2018 – 2020",
    grade: "Percentage: 80.4%",
    badge: "Higher Secondary",
    highlights: [
      "Completed Senior Secondary education with focus on Science and Mathematics.",
      "Maintained strong academic performance."
    ]
  }
];

export const certifications = [
  {
    id: "aws-ai",
    title: "AWS Artificial Intelligence Practitioner Learning Plan",
    issuer: "Amazon Web Services (AWS)",
    year: "2024",
    badge: "AWS Certified Path",
    description: "Comprehensive training on AWS AI services, Machine Learning basics, SageMaker fundamentals, and cloud AI architecture.",
    verifyUrl: "https://aws.amazon.com/training/"
  },
  {
    id: "aws-genai",
    title: "AWS Generative AI Learning Courses",
    issuer: "Amazon Web Services (AWS)",
    year: "2024",
    badge: "AI Specialty",
    description: "Specialized coursework covering foundation models, Prompt Engineering, AWS Bedrock, and generative AI application design.",
    verifyUrl: "https://aws.amazon.com/generative-ai/"
  },
  {
    id: "aws-foundations",
    title: "AWS Foundations Accreditation",
    issuer: "Amazon Web Services (AWS)",
    year: "2024",
    badge: "Cloud Foundation",
    description: "Core cloud concepts, AWS Global Infrastructure, IAM security, EC2 computing, S3 storage, and cloud economics.",
    verifyUrl: "https://aws.amazon.com/training/"
  },
  {
    id: "aws-well-architected",
    title: "AWS Well-Architected Foundations",
    issuer: "Amazon Web Services (AWS)",
    year: "2024",
    badge: "Architecture",
    description: "Best practices across Operational Excellence, Security, Reliability, Performance Efficiency, and Cost Optimization on AWS.",
    verifyUrl: "https://aws.amazon.com/architecture/well-architected/"
  },
  {
    id: "hackerrank-js",
    title: "HackerRank JavaScript Skill Certification",
    issuer: "HackerRank",
    year: "2023",
    badge: "Verified Skill",
    description: "Verified skill assessment covering asynchronous JavaScript, ES6+ scope, functions, objects, and DOM manipulation.",
    verifyUrl: "https://www.hackerrank.com/certificates"
  }
];
