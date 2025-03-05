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
  figma,
  docker,
  meta,
  starbucks,
  ceoitbox,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  resumeFile,
  notes,
  kollab,
  mirraw,
  countryFinder,
  tictactoe,
  chess
} from "../assets";


export const userDetails = {
  name: "Suneel",
  fullName: "Suneel Kumar",
  email: "rsuneel47@gmail.com",
  whatsapp: "+917351437357",
  designation: "Associate Software Developer",
  shortInfo: "I develop Full-Stack Applications,\nuser interfaces and android applications",
  about: "I'm a skilled software engineer with expertise in JavaScript and TypeScript, specializing in React.js, React Native, and Node.js. I have experience working with MongoDB, Express.js, REST APIs, along with frontend technologies like HTML, CSS, Tailwind.\
Additionally, I have expertise in building microservices using Kafka and TypeORM, ensuring scalable and event-driven architectures. I am well-versed in containerization and orchestration with Docker and Kubernetes, enabling efficient deployment and management of applications. A quick learner and a strong collaborator, I focus on developing efficient, scalable, and user-friendly solutions that solve real-world problems.\Let’s work together to turn your ideas into reality!"
};

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

export const resume = resumeFile || "link"; //either store in assets or provide a resume link

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React & React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer (Node.js & Django)",
    icon: backend,
  }
];


const experiences = [
  {
    title: "Associate Software Developer",
    company_name: "CEOITBOX",
    icon: ceoitbox,
    iconBg: "#ffffff",
    date: "January 2024 - Present",
    site: "https://ceoitbox.com/",
    points: [
      "Architected and delivered a high-performance Helpdesk System utilizing MERN stack, Python-based Machine Learning, and Kafka, resulting in 40% faster ticket resolution.",
      "Engineered a robust Task Delegation System with MERN, TypeScript, and Role-Based Access Control (RBAC), improving team productivity by 30%.",
      "Spearheaded implementation of automated CI/CD pipelines and Docker containerization, reducing deployment time by 60%.",
      "Received Best Performer Award twice for exceptional problem-solving skills, successfully resolving 50+ critical bugs and optimizing system performance."
    ],

  },
  {
    title: "SDE Intern",
    company_name: "CEOITBOX",
    icon: ceoitbox,
    iconBg: "#ffffff",
    date: "June 2023 - December 2023",
    site: "https:ceoitbox.com/",
    points: [
      "Designed and implemented CBXMeet, a full-stack meeting application integrating Google OAuth and Calendar API, serving 1000+ users.",
      "Developed a comprehensive HR Feedback System using MERN stack and Redux, streamlining the employee evaluation process by 45%.",
      "Engineered an automated Recurring Reminder Application utilizing MERN stack and cron jobs, achieving 99.9% notification reliability.",
      "Leveraged modern tech stack including JavaScript, React, Node.js, Express, MongoDB, Google Cloud Console, and AWS."
    ],

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
    name: "TypeScript",
    icon: typescript,
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const projects = [
  {
    name: "OneLink",
    description:
      "Create a Single URL for Multiple Links.Consolidate all your important links into one easy-to-share URL with customizable menus and branding.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "zustand",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://onlk.in/"
  }
  ,
  {
    name: "E-Commerce",
    description:
      "Developed a high-performance Multi-Seller E-Commerce Web App• Designed a robust seller dashboard with order management, product listings, and sales analytics• Implemented real-time order notifications using WebSockets, ensuring instant alerts to sellers for new orders",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient", //tailwind classes
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "web-sockets",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: notes,
    source_code_link: 'https://github.com/suneel7351/revise-ecommerce',
    projectLink: "https://ecom-l278.onrender.com/"
  },
  {
    name: "FreshMeal-Website",
    description:
      "A modern and responsive food delivery website designed while learning HTML, CSS, and JavaScript. This project showcases my front-end development skills, including layout design, animations, and interactive UI elements.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },],
    image: kollab,
    source_code_link: "https://github.com/suneel7351/FreshMeal-Website",
    projectLink: "https://fresh-meal-website.netlify.app/"
  },
];

const testimonials = [
  {
    testimonial: "Suneel is an exceptional MERN Stack Developer and mentor. His expertise in MongoDB, Express.js, React, and Node.js, combined with strong problem-solving skills, has been invaluable. Always supportive and approachable, he fosters a collaborative environment and guides juniors effortlessly. I highly recommend him as a skilled and reliable developer."
    ,
    name: "Ishan Yadav",
    designation: "Full Stack Developer",
    company: "CEOITBOX",
    image: "https://avatars.githubusercontent.com/u/112482175?v=4",
  },
  {
    testimonial: "Suneel Kumar is a professional who produces outstanding results. His adaptability, collaborative spirit, and innovative problem-solving have led to transformative contributions on every project he undertakes. His technical brilliance with his visionary approach, elevates teams and inspires excellence. Working with him is both a privilege and ensures success—he’s an invaluable asset to any endeavor"
    ,
    name: "Aditya Kumar Dixit",
    designation: "Associate Software Developer",
    company: "Swiggy",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFDR1IeKXHW9Q/profile-displayphoto-shrink_200_200/B56ZTq1VfGHoAY-/0/1739106638528?e=1746662400&v=beta&t=pEqxYjlzu4sSFUL5NKSfCniD5Q5DQn340MTKYjsmlcw",
  },
  {
    testimonial: "Suneel is a highly skilled MERN Stack Developer and an excellent mentor. His deep knowledge of MongoDB, Express.js, React, and Node.js, along with his strong problem-solving abilities, makes him an invaluable asset. He is always supportive and approachable, creating a collaborative environment while effortlessly guiding junior developers. I strongly endorse him as a talented and dependable professional."
    ,
    name: "Ajay Barman",
    designation: "Implementation Consultant",
    company: "CEOITBOX",
    image: "https://media.licdn.com/dms/image/v2/D5603AQESJBBpW7Nebw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1725910078143?e=1746662400&v=beta&t=KnFWmRUnH4UIB0F0ESbEdVw2mBmAVE80_sdoGowkHow",
  },
];

export { services, technologies, experiences, testimonials, projects };
