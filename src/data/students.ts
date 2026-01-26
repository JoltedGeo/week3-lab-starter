import type { Student } from "../types/student";

export const students: Student[] = [
  {
    id: "STU001",
    name: "Alex Chen",
    year: 2,
    status: "Full-time",
    interests: ["Web Development", "Mobile Development", "Game Development", "AI/ML"],
    githubUsername: "alexchen92",
    funFact: "I have a black belt in karate.",
  },
  {
    id: "STU002",
    name: "Jordan Smith",
    year: 1,
    status: "Full-time",
    interests: ["Cloud Computing", "DevOps", "Cybersecurity"],
    githubUsername: "jordansmith",
  },
  {
    id: "STU003",
    name: "Casey Torres",
    year: 3,
    status: "Part-time",
    interests: ["Database Design", "Backend Development", "Data Analysis"],
    funFact: "I'm learning to speak Japanese in my spare time.",
  },
  {
    id: "STU004",
    name: "Morgan Lee",
    year: 2,
    status: "Full-time",
    interests: ["UI/UX Design", "Frontend Development", "Accessibility"],
    githubUsername: "morganlee88",
    funFact: "I designed my first website when I was 12 years old.",
  },
];
