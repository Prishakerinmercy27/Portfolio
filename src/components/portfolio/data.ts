import { Linkedin, Mail, Phone, Github } from "lucide-react";

export const profile = {
  name: "Prisha Kerin Mercy D",
  firstName: "Prisha",
  role: "AI-Driven Developer & Technical Support Engineer",
  taglines: [
    "Aspiring UI/UX",
    "Front-end Enthusiast",
    "RPA Explorer",
    "UiPath",
    "Building Scalable AI-Driven Web Applications",
    "Web Development",
    "Technical Supporter",
    "AI Prompting",
  ],
  email: "prishamercy27082005@gmail.com",
  phone: "+91 9944548755",
  linkedin: "https://www.linkedin.com/in/prishakerinmercy27",
  github: "https://github.com/Prishakerinmercy27",
  location: "Chennai, India",
  summary:
    "I'm an AI-loving Computer Science engineer who blends thoughtful UI/UX, clean front-end code and automation (RPA) to build scalable, AI-driven web experiences. With hands-on prompting skills and a knack for clear communication, I thrive in technical support and IT communication roles — turning complex tech into delightful, human experiences.",
};

export const contactLinks = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  { icon: Linkedin, label: "LinkedIn", value: "prishakerinmercy27", href: profile.linkedin },
  { icon: Github, label: "GitHub", value: "Prishakerinmercy27", href: profile.github },
];

export const stats = [
  { value: "8.76", label: "CGPA" },
  { value: "Top 10", label: "AgentHack India" },
  { value: "3+", label: "Certifications" },
  { value: "2", label: "Internships" },
];

export const skillGroups = [
  {
    title: "AI & Prompting",
    emoji: "🤖",
    skills: ["Prompt Engineering", "AI Tools", "IBM AI", "AI-Driven Apps", "ML Basics"],
  },
  {
    title: "Automation / RPA",
    emoji: "⚙️",
    skills: ["UiPath", "Automation Explorer", "Automation Developer", "Bot Workflows"],
  },
  {
    title: "Front-end & UI/UX",
    emoji: "🎨",
    skills: ["React", "HTML", "CSS", "JavaScript", "Figma", "Wireframing", "Prototyping"],
  },
  {
    title: "Back-end & Data",
    emoji: "🗄️",
    skills: ["Node.js", "MongoDB", "MySQL", "Python", "C", "REST APIs"],
  },
];

export const timeline = [
  {
    type: "Experience",
    title: "UI/UX Intern",
    org: "CodeSoft (Online)",
    period: "2024",
    points: [
      "Hands-on user-centered design, prototyping and wireframing.",
      "Conducted user research to inform interface decisions.",
    ],
  },
  {
    type: "Experience",
    title: "Web Development Intern",
    org: "Cad Desk · Tirunelveli",
    period: "2024",
    points: [
      "Built front-end & back-end with HTML, CSS, JavaScript and React.",
      "Worked with Node.js and MySQL; joined code reviews and deployments.",
    ],
  },
  {
    type: "Education",
    title: "B.E. Computer Science Engineering",
    org: "St. Joseph's Institute of Technology · Chennai",
    period: "2023 – 2027",
    points: ["CGPA: 8.76", "Active in national hackathons & AI/automation communities."],
  },
  {
    type: "Education",
    title: "Senior Secondary (90%)",
    org: "Saraswathi Vidhyalaya Matric Hr. Sec School",
    period: "2023",
    points: ["Graduated with 90% in Senior Secondary."],
  },
];

export const projects = [
  {
    title: "Smart Attendance System",
    tag: "Web Development",
    emoji: "🗓️",
    desc: "Full-stack attendance platform with an admin dashboard for leave approvals and attendance analytics.",
    stack: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
  },
  {
    title: "Smart Crop Recommendation",
    tag: "Machine Learning",
    emoji: "🌾",
    desc: "ML crop-prediction system using Random Forest, integrated with weather APIs and a friendly responsive UI for farmers.",
    stack: ["Python", "Random Forest", "Weather API", "MongoDB"],
  },
];

export const certifications = [
  { title: "Artificial Intelligence", by: "IBM SkillsBuild" },
  { title: "Automation Explorer", by: "UiPath Academy" },
  { title: "Automation Developer Associate", by: "UiPath Academy" },
];

export const achievements = [
  { title: "UiPath AgentHack India 2025", detail: "Top 10 Finalist · Student Edition, Bengaluru" },
  { title: "HackAthena'25", detail: "Top 15 Finalist · National Hackathon, Kerala" },
  { title: "Hack Hustle'24", detail: "Finalist · Saveetha Engineering College, Chennai" },
  {
    title: "MyGov Campus Ambassador",
    detail: "Government of India initiative for civic engagement",
  },
];
