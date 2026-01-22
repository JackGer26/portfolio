// React Jobs Board
import rjb1 from "../assets/projects/react-jobs-board/1.png";
import rjb2 from "../assets/projects/react-jobs-board/2.png";
import rjb3 from "../assets/projects/react-jobs-board/3.png";

// Movie Tracker
import mta1 from "../assets/projects/movie-tracker-app/1.png";
import mta2 from "../assets/projects/movie-tracker-app/2.png";
import mta3 from "../assets/projects/movie-tracker-app/3.png";
import mta4 from "../assets/projects/movie-tracker-app/4.png";

// Zenia Bakery
import zb1 from "../assets/projects/zenia-bakery/1.png";
import zb2 from "../assets/projects/zenia-bakery/2.png";
import zb3 from "../assets/projects/zenia-bakery/3.png";

// Green Cars Airport Transfers
import gc1 from "../assets/projects/green-cars-airport-transfers/1.png";
import gc2 from "../assets/projects/green-cars-airport-transfers/2.png";

// Cafe Rain
import cr1 from "../assets/projects/cafe-rain/1.png";
import cr2 from "../assets/projects/cafe-rain/2.png";
import cr3 from "../assets/projects/cafe-rain/3.png";
import cr4 from "../assets/projects/cafe-rain/4.png";

export const projects = [
  {
    slug: "react-jobs-board",
    title: "React Jobs Board",
    subtitle: "Frontend · React",
    summary: "A React-based jobs board focused on component architecture, state-driven UI, and modern frontend tooling.",
    overview: "A single-page jobs board application built with React to practice real-world frontend patterns such as component composition, routing, and CRUD-style data handling. The project evolved from a learning exercise into a fully branded platform with responsive design and structured UI components.",
    highlights: [
    "Built a React SPA using functional components, hooks, and clear separation of concerns",
    "Implemented client-side routing, state management patterns, and async data fetching",
    "Designed a responsive, mobile-first UI using Tailwind CSS and custom branding",
      ],
    techStack: ["React", "Vite", "JavaScript", "Tailwind CSS", "React Router", "JSON Server"],
    tags: ["React", "JavaScript", "CSS"],
    githubUrl: "https://github.com/JackGer26/100Jobs",
    liveUrl: null,
    screenshots: [
      { src: rjb2, alt: "React Jobs Board - jobs backend view" },
      { src: rjb3, alt: "React Jobs Board - jobs displayed on homepage" },
    ],
  },
  {
    slug: "movie-tracker-app",
    title: "Movie Watch List",
    subtitle: "Full-Stack · MVC · Authentication",
    summary: "A full-stack movie watchlist application built with MVC architecture, user authentication, and persistent data storage.",
    overview: "A full-stack movie watchlist application that allows users to create accounts, log in securely, and manage a personal collection of movies. Built using an MVC architecture, the project demonstrates backend structure, authentication flows, and database-driven CRUD functionality scoped to individual users.",
    highlights: [
    "Implemented secure user authentication and protected routes using Passport.js",
    "Designed a full MVC architecture with clear separation between models, views, and controllers",
    "Built persistent CRUD functionality backed by MongoDB and scoped to authenticated users",
      ],
    techStack: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB", "Mongoose", "Passport.js", "EJS"],
    tags: ["Node", "JavaScript", "MVC", "Passport"],
    githubUrl: "https://github.com/JackGer26/MVC-Passport-Movie-App",
    liveUrl: "https://movie-watch-list-myvh.onrender.com/movies",
    screenshots: [
      { src: mta1, alt: "Movie Tracker - login view" },
      { src: mta2, alt: "Movie Tracker - dashboard view"},
      { src: mta3, alt: "Movie Tracker - movie tracker view" },
      { src: mta4, alt: "Movie Tracker - login / auth view" },
    ],
  },
  {
    slug: "zenia-bakery",
    title: "Zenia Bakery",
    subtitle: "Freelance · Frontend",
    summary: "A freelance website built for a London-based bakery, focused on clean design, responsiveness, and real client requirements.",
    overview: "A freelance website built for a London-based bakery, focused on translating business requirements into a clean, responsive, and user-friendly web presence. The project emphasized clear communication, practical design decisions, and delivering a production-ready site for a real client.",
    highlights: [
    "Worked directly with a client to gather requirements and deliver a finished website",
    "Built a responsive, production-ready site focused on usability and clarity",
    "Delivered a polished solution suitable for a real business audience",
      ],
    techStack: ["HTML", "CSS", "JavaScript"],
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: null,
    liveUrl: "https://zeniabakery.com/",
    screenshots: [
      { src: zb1, alt: "Zenia Bakery - homepage" },
      { src: zb2, alt: "Zenia Bakery - menu / products section" },
      { src: zb3, alt: "Zenia Bakery - about section" },
    ],
  },
  {
    slug: "green-cars-airport-transfers",
    title: "Green Cars Airport Transfers",
    subtitle: "Freelance · Frontend",
    summary: "Freelance website for a local airport transfer company with online booking and contact integration.",
    overview: "A professional website built for Green Cars Airport Transfers, a local transportation service. The project focused on creating a clean, trustworthy online presence that would convert visitors into customers. Features include service information, pricing displays, and integrated contact forms with Email.js for seamless customer inquiries.",
    highlights: [
      "Delivered a complete business website from requirements gathering to deployment",
      "Integrated Email.js for reliable contact form submissions without backend infrastructure",
      "Built a responsive, mobile-first design optimized for local search and conversions",
      "Implemented clear pricing structure and service information to reduce customer friction",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "Email.js"],
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/JackGer26/Green-Cars-Airport-Transfers",
    liveUrl: "http://greencarsairporttransfers.co.uk/",
    screenshots: [
      { src: gc1, alt: "Green Cars Airport Transfers - homepage" },
      { src: gc2, alt: "Green Cars Airport Transfers - services and contact section" },
    ],
  },
  {
    slug: "cafe-rain",
    title: "Cafe Rain",
    subtitle: "Freelance · Frontend",
    summary: "A freelance project for a small local cafe featuring menu displays, atmosphere showcase, and customer engagement.",
    overview: "A custom website built for Cafe Rain, a cozy local coffee shop looking to establish their online presence. The project focused on creating a warm, inviting digital experience that reflects the cafe's atmosphere while providing essential information like menu items, location, and hours. The design emphasizes visual storytelling through imagery and creates an emotional connection with potential customers.",
    highlights: [
      "Created an immersive brand experience that captures the cafe's cozy atmosphere",
      "Designed an intuitive menu layout with clear pricing and appetizing descriptions",
      "Built a fully responsive site optimized for mobile customers searching for local cafes",
      "Implemented smooth animations and transitions to enhance the user experience",
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: null,
    liveUrl: "https://caferain.netlify.app/",
    screenshots: [
      { src: cr1, alt: "Cafe Rain - homepage hero section" },
      { src: cr2, alt: "Cafe Rain - menu section" },
      { src: cr3, alt: "Cafe Rain - about and atmosphere" },
      { src: cr4, alt: "Cafe Rain - contact and location details" },
    ],
  },
];
