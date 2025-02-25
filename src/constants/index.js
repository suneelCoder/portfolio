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
  name: "Ishan",
  fullName: "Ishan Yadav",
  email:"ishanyadav13290@gmail.com",
  whatsapp:"+919588826337",
  designation: "Full-Stack Developer",
  shortInfo: "I develop Full-Stack Applications,\nuser interfaces and android applications",
  about: "I'm a skilled software developer with expertise in JavaScript and TypeScript, specializing in React.js, React Native, and Node.js. I have experience working with MongoDB, Express.js, REST APIs, OData V4, and EJS, along with frontend technologies like HTML, CSS, Tailwind, and DOM manipulation. I am proficient in version control with GitHub and have hands-on experience with tools like npm and Jira. A quick learner and a strong collaborator, I focus on building efficient, scalable, and user-friendly solutions that solve real-world problems. Let’s work together to turn your ideas into reality!",
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "CEOITBOX",
    icon: ceoitbox,
    iconBg: "#ffffff",
    date: "June 2024 - Present",
    site:"https://ceoitbox.com/",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "ICFDR (NGO)",
    // icon: tesla,
    icon: "https://icfdr.org/wp-content/uploads/2023/01/ICFDR.png",
    iconBg: "#E6DEDD",
    date: "Apr 2023 - May 2024",
    site:"https://icfdr.org/",
    points: [
      "Developing and maintaining web applications like CRM and Unified Social Media Content Management using React.js and other related technologies for internal use.",
      "Led the Development Team and guided other fellow teammates and interns for timely delivery of projects.",
      "Learnt and implement various new technologies including Facebook, Instagram, X (Twitter), Drive and One Drive API's for unified social media content management.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "The Help Foundation (Intern)",
    // icon: shopify,
    icon: "data:image/png;base64,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",
    iconBg: "#383E56",
    date: "Feb 2023 - Apr 2023",
    site:"https://helpprojectfoundation.in/Team",
    points: [
      'Teamed with other fellow Intern to create a website for "The Help Foundation" NGO.',
      "Learned and implemented various skills regarding coding and web development.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "Notes",
    description:
      "Web-based note making platform with features like collaborative editing, voice notes, nested notes, label sharing, task management, and deadline tracking, advanced search, location based reminders, and task reminders, font formatting any many more.",
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
    ],
    image: notes,
    source_code_link: null,
    projectLink:"https://notes.ceoitbox.com/"
  },
  {
    name: "Kollab- Draw & Chat Live with People",
    description:
      "Web app to draw and chat live with people. It has features like drawing with different colors, erasing, clearing the canvas, and chatting with people in the same room.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "web-sockets",
        color: "pink-text-gradient",
      },
    ],
    image: kollab,
    source_code_link: "https://github.com/ishanyadav13290/collaborative-jamboard",
    projectLink:"https://kollab.onrender.com/"
  },
  {
    name: "Chess Game",
    description:
      "A live two-player chess game with features like moving pieces, castling, en-passant, promotion, check, checkmate, and stalemate.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: chess,
    source_code_link: "https://github.com/ishanyadav13290/React-Chess",
    projectLink: "https://react-chess-ishan.netlify.app/",
  },
  {
    name: "Mirraw Clone",
    description:
      "A clone of the Mirraw website with features like product listing, product details, product search, and product filtering, adding to cart, checkout etc.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "chakr-ui",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: mirraw,
    source_code_link: null,
    projectLink: "https://e-commerce-clone-b5604.web.app/",
  },
  {
    name: "Country Finder",
    description:
      "A begineer friendly project to get information about countries like population, area, capital, language, currency, and flag with search and filters.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: countryFinder,
    source_code_link: null,
    projectLink: "https://e-commerce-clone-b5604.web.app/",
  },
  {
    name: "Tic-Tac-Toe Game",
    description:
      "A beginners project to play tic-tac-toe game to built with motive to learn JavaScript and build logic.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tictactoe,
    source_code_link: null,
    projectLink: "https://c6ngrw.csb.app/",
  },
];

const testimonials = [
  {
    testimonial:
      "Ishan is a talented and dedicated developer who consistently delivers high-quality work. His ability to adapt, collaborate, and think creatively made a significant impact on our project. I would highly recommend working with him.",
    name: "Malikrehan Meeranaik",
    designation: "Software Engineer",
    company: "BrainerHub Solutions",
    image: "https://avatars.githubusercontent.com/u/113381261?v=4",
  },
  {
    testimonial:
      `Working with Ishan was a great experience. His technical expertise, problem-solving skills, and attention to detail played a crucial role in the project's success. He is a reliable team player who brings innovative ideas to the table.`,
    name: "Amit Chakraborty",
    designation: "Sr. Developer",
    company: "Crosslynx",
    image: "https://media-pnq1-2.cdn.whatsapp.net/v/t61.24694-24/432252514_1165582571262524_537616694281757381_n.jpg?ccb=11-4&oh=01_Q5AaIGZMfBuGFlpUNHVxGq1Toq7OzHTFElCi9ENpIOriONRD&oe=67C94186&_nc_sid=5e03e0&_nc_cat=111",
  },
  {
    testimonial:
      `I had the pleasure of working with ${userDetails.name} on a project, and I can wholeheartedly recommend him. His dedication, creativity, and collaborative spirit made our project a success. It was a fantastic teamwork experience.`,
    name: "Mohit Kumar",
    designation: "Dev",
    company: "FixItWizards",
    image: "https://avatars.githubusercontent.com/u/114150173?v=4",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
