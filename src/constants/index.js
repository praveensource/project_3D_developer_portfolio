import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  gymexercises,
  admindashboard,
  librarysystem,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },

];
const experiences = [
  {
    title: "Started Programming Journey",
    company_name: "Self-Learning",
    date: "2021",
    points: [
      "Started learning HTML and CSS to build basic web pages.",
      "Learned the fundamentals of web development and design.",
      "Developed a passion for creating websites and exploring coding.",
    ],
  },
  {
    title: "Learned Python Programming",
    company_name: "Self-Learning",
    date: "2022",
    points: [
      "Dived deep into Python programming language.",
      "Built small projects to understand Python syntax and logic.",
      "Focused on understanding data structures and algorithms.",
    ],
  },
  {
    title: "Problem Solving and Data Structures (DSA)",
    company_name: "LeetCode | Self-Projects",
    date: "2023",
    points: [
      "Started practicing problem-solving on platforms like LeetCode using Python.",
      "Strengthened knowledge in data structures and algorithms.",
      "Built projects using DSA principles to solve real-world problems.",
    ],
  },
  {
    title: "Explored Frontend Technologies",
    company_name: "Self-Learning",
    date: "2024",
    points: [
      "Explored frontend development with JavaScript and ReactJS.",
      "Built interactive user interfaces with React and basic JavaScript.",
      "Learned modern web development tools and frameworks.",
    ],
  },
  {
    title: "Full-Stack Development (MERN Stack)",
    company_name: "Self-Projects",
    date: "2025 - Present",
    points: [
      "Started working on MERN stack, focusing on MongoDB, Express, React, and Node.js.",
      "Built dynamic full-stack applications and integrated APIs.",
      "Continuing to develop my skills in full-stack development, focusing on performance and scalability.",
    ],
  },
  {
    title: "Teaching Python to Beginners",
    company_name: "Freelance | Cybeorg",
    date: "Dec 2024 - Present",
    points: [
      "Started teaching Python to beginners with structured and personalized lesson plans.",
      "Focused on breaking down complex programming concepts into manageable lessons.",
      "Helped students build a strong foundation in Python, solving problems and creating projects.",
    ],
  },
];



const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];
const projects = [
  {
    name: "Gym Exercises",
    description:
      "An interactive fitness app built using ReactJS and RapidAPI that lets users explore exercises by muscle groups, watch YouTube tutorials, and get workout suggestions with smart API rate-limit handling.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "material-ui",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: gymexercises, // You can name your image import
    source_code_link: "https://github.com/", // Replace with your real link if available
  },
  {
    name: "AI-Powered Web Summarizer",
    description:
      "A responsive web application that summarizes content from any URL (blogs, articles, documentation) using AI via RapidAPI, published as an open-source project with a clean TailwindCSS UI.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    // image: summarizer, // Name your image import
    source_code_link: "https://github.com/", // Replace with your real link
  },
  {
    name: "React Admin Dashboard",
    description:
      "A business dashboard using ReactJS and Syncfusion for tracking customer, employee, and order data with mobile-responsive, interactive charts and tables.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "syncfusion",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: admindashboard,
    source_code_link: "https://admin-dashboard-pi-eight-70.vercel.app/",
  },
  {
    name: "Library Management System",
    description:
      "A real-world library system developed in Python with unique book IDs, lending, returning, and due-date tracking functionalities using Object-Oriented Programming concepts.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "oop",
        color: "green-text-gradient",
      },
      {
        name: "cli-app",
        color: "pink-text-gradient",
      },
    ],
    image: librarysystem,
    source_code_link: "https://github.com/", // Add your real repo link if available
  },
];


export { services, technologies, experiences, testimonials, projects };
