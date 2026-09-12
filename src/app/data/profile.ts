export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  Certification: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Profile {
  name: string;
  title: string;
  summary: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  skills: SkillCategory[];
  experience: Experience[];
  education: Education[];
}

export const profile: Profile = {
  name: "Zawar Ahmed",
  title: "Full-Stack Developer | Backend & System Design Specialist",
  summary: "Full-Stack Developer focused on Python/Django and RESTful architectures. Experienced in building and deploying scalable web applications using React, Node.js, and MySQL. Passionate about backend optimization, data structures, efficient coding practices, and system performance analytics.",

  email: "zawarcore@gmail.com",
  phone: "+92 327 7894326 ",
  location: "Lahore, Pakistan",
  github: "https://github.com/zawar-gh",
  linkedin: "https://linkedin.com/in/zawar-li/",

  skills: [
    {
      category: "Backend & Core Development",
      skills: ["Django", "Django REST Framework (DRF)", "Node.js", "Python"]
    },
    {
      category: "Frontend & Mobile",
      skills: ["React", "React Native", "JavaScript (ES6+)", "HTML5", "CSS3"]
    },
    {
      category: "Databases & Storage",
      skills: ["MySQL", "PostgreSQL", "SQLite"]
    },
    {
      category: "Tools & Ecosystem",
      skills: ["Cursor AI", "Figma", "Thunder Client", "Expo", "Git"]
    },
    {
      category: "Deployment & Cloud Infrastructure",
      skills: ["Vercel", "PythonAnywhere"]
    }
  ] as SkillCategory[],

  experience: [
    {
      title: "Python Developer Intern (CMIT-IP)",
      company: "PITB - PureLogics",
      location: "Lahore, Pakistan",
      period: "Jan 2026 - June 2026",
      description: [
"As a Python Developer at PureLogics under the PITB - CMIT Internship Program, I worked on backend API development using Django REST Framework, focusing on processing logic for system diagnostics and hardware benchmarking.",
"Integrated these backend APIs with React frontends while handling production deployments across Vercel and PythonAnywhere."
      ],
      technologies: ["Django", "Django REST Framework", "Python", "React", "Vercel", "PythonAnywhere"]
    },
    {
      title: "Software Engineering Intern",
      company: "PureLogics",
      location: "Lahore, Pakistan",
      period: "Aug 2025 - Nov 2025",
      description: [
        "Learned Django and Django REST Framework from scratch, applying them to construct core backend logic, JWT authentication, and database models in MySQL.",
        "Practiced using AI tools to rapidly prototype React frontends and integrate them with custom-built endpoints." 
      ],
      technologies: ["Django", "DRF", "React", "MySQL", "Python", "REST APIs"]
    }
  ] as Experience[],

  education: [
    {
      degree: "BS Information Technology (4-Years)",
      institution: "University of Punjab",
      location: "Lahore, Pakistan",
      period: "2021 - 2025",
      Certification: "Google AI Essentials Specialization (Issued: May 2026)",
    }
  ] as Education[]
};
