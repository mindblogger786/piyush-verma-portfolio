export interface Skill {
  name: string;
  category: string;
  level: number;
}

export const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    description: "Building beautiful, responsive interfaces",
    color: "#6366F1",
    skills: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Responsive Design",
      "DOM Manipulation",
    ],
  },
  {
    id: "backend",
    name: "Backend",
    description: "Server-side logic and APIs",
    color: "#10B981",
    skills: [
      "Python",
      "Django",
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Auth",
    ],
  },
  {
    id: "database",
    name: "Database",
    description: "Data modeling and optimization",
    color: "#EC4899",
    skills: [
      "MySQL",
      "MongoDB",
      "Database Design",
      "Query Optimization",
      "CRUD",
    ],
  },
  {
    id: "languages",
    name: "Languages",
    description: "Programming languages I work with",
    color: "#F97316",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C"],
  },
  {
    id: "tools",
    name: "Tools",
    description: "Development tools and platforms",
    color: "#8B5CF6",
    skills: ["Git", "GitHub", "VS Code", "Postman", "WordPress"],
  },
  {
    id: "cloud",
    name: "Cloud",
    description: "Deployment and cloud services",
    color: "#06B6D4",
    skills: ["Firebase", "Supabase", "Vercel", "Netlify"],
  },
];