// Binary Upload Boom
import bub1 from "../assets/projects/binary-upload-boom/1.png";
import bub2 from "../assets/projects/binary-upload-boom/2.png";
import bub3 from "../assets/projects/binary-upload-boom/3.png";

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

// Dwights Restaurant
import dr1 from "../assets/projects/dwights/1.png";
import dr2 from "../assets/projects/dwights/2.png";
import dr3 from "../assets/projects/dwights/3.png";
import dr4 from "../assets/projects/dwights/4.png";

// Spectral Styling
import ss1 from "../assets/projects/spectral-styling/1.png";
import ss2 from "../assets/projects/spectral-styling/2.png";
import ss3 from "../assets/projects/spectral-styling/3.png";
import ss4 from "../assets/projects/spectral-styling/4.png";

// Luca Vanstone Portfolio
import lv1 from "../assets/projects/luca-vanstone/1.png";
import lv2 from "../assets/projects/luca-vanstone/2.png";
import lv3 from "../assets/projects/luca-vanstone/3.png";

// Rock Paper Scissors Lizard Spock
import rps1 from "../assets/projects/rock-paper-scissors/1.png";

export const projects = [
  {
    slug: "binary-upload-boom",
    title: "Binary Upload Boom",
    subtitle: "Full-Stack · Social Network · MVC",
    category: "learning",
    summary: "A full-stack social media application with user authentication, image uploads, and interactive commenting system built with Node.js and MongoDB.",
    overview: "A comprehensive social networking platform built as part of the 100Devs bootcamp curriculum. The application features secure user authentication, image sharing via Cloudinary integration, and an interactive commenting system. Built using MVC architecture, this project demonstrates modern full-stack development practices including session management, file uploads, and database-driven CRUD operations.",
    highlights: [
      "Implemented secure user authentication and session management using Passport.js with bcrypt password hashing",
      "Built complete MVC architecture with Express.js, MongoDB, and EJS templating for server-side rendering",
      "Integrated Cloudinary for secure image upload and storage with Multer file handling middleware",
      "Developed interactive commenting system and responsive UI that works seamlessly across all devices",
    ],
    techStack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Passport.js", "EJS", "Cloudinary", "Multer", "CSS3"],
    tags: ["Node", "Express", "MongoDB", "Full-Stack"],
    githubUrl: "https://github.com/JackGer26/binary-upload-boom",
    liveUrl: "https://binary-upload-boom-d56c.onrender.com",
    screenshots: [
      { src: bub1, alt: "Binary Upload Boom - social media feed" },
      { src: bub2, alt: "Binary Upload Boom - user profile and posts" },
      { src: bub3, alt: "Binary Upload Boom - post creation and image upload" },
    ],
  },
  {
    slug: "react-jobs-board",
    title: "React Jobs Board",
    subtitle: "Frontend · React",
    category: "learning",
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
    liveUrl: "https://100jobs.netlify.app/",
    screenshots: [
      { src: rjb2, alt: "React Jobs Board - jobs backend view" },
      { src: rjb3, alt: "React Jobs Board - jobs displayed on homepage" },
    ],
  },
  {
    slug: "movie-tracker-app",
    title: "Movie Watch List",
    subtitle: "Full-Stack · MVC · Authentication",
    category: "learning",
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
    category: "freelance",
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
    category: "freelance",
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
    category: "freelance",
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
  {
    slug: "dwights-restaurant",
    title: "Dwights Restaurant",
    subtitle: "Learning · Frontend · Modern Design",
    category: "learning",
    summary: "A restaurant website built with HTML, CSS, and JavaScript to practice fundamental web development skills and modern design principles.",
    overview: "A modern restaurant website created as a learning project to understand web development fundamentals and practice contemporary design patterns. The project focuses on clean code structure, responsive design, and user-friendly navigation while showcasing menu items and restaurant information in an appealing format.",
    highlights: [
      "Implemented responsive design principles for optimal viewing across all devices",
      "Practiced modern CSS techniques and layout methods for clean, professional presentation",
      "Built interactive elements using vanilla JavaScript to enhance user engagement",
      "Focused on accessibility and user experience best practices",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript"],
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: null,
    liveUrl: "https://dwights.netlify.app/",
    screenshots: [
      { src: dr1, alt: "Dwights Restaurant - homepage and hero section" },
      { src: dr2, alt: "Dwights Restaurant - menu showcase" },
      { src: dr3, alt: "Dwights Restaurant - about and services" },
      { src: dr4, alt: "Dwights Restaurant - contact and location" },
    ],
  },
  {
    slug: "spectral-styling",
    title: "Spectral Styling",
    subtitle: "Learning · Frontend · Modern Design",
    category: "learning",
    summary: "A modern hairdressing salon website built with HTML, CSS, and JavaScript featuring contemporary design and service showcase.",
    overview: "A sophisticated website for a hairdressing salon created to practice modern web development techniques and design principles. The project demonstrates advanced CSS styling, responsive layouts, and interactive JavaScript features while presenting salon services and team information in a visually appealing manner.",
    highlights: [
      "Designed a contemporary, visually striking interface that reflects modern salon aesthetics",
      "Implemented smooth animations and transitions to create an engaging user experience",
      "Built responsive design ensuring optimal performance across desktop and mobile devices",
      "Developed team showcase and service pages with clean, organized layouts",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript"],
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: null,
    liveUrl: "https://spectralstylinguk.netlify.app/team",
    screenshots: [
      { src: ss1, alt: "Spectral Styling - homepage and salon showcase" },
      { src: ss2, alt: "Spectral Styling - services and treatments" },
      { src: ss3, alt: "Spectral Styling - team page and stylists" },
      { src: ss4, alt: "Spectral Styling - contact and booking information" },
    ],
  },
  {
    slug: "luca-vanstone-portfolio",
    title: "Luca Vanstone Portfolio",
    subtitle: "Learning · Frontend · Artist Portfolio",
    category: "learning",
    summary: "An artist's portfolio website showcasing creative work, built with HTML, CSS, and JavaScript focusing on modern design and visual presentation.",
    overview: "A creative portfolio website designed for an artist to showcase their work and creative process. This project emphasized visual storytelling, modern design principles, and responsive layouts to create an immersive experience that highlights the artist's unique style and body of work.",
    highlights: [
      "Created a visually compelling layout that showcases artwork effectively",
      "Implemented modern design principles with focus on visual hierarchy and clean aesthetics",
      "Built responsive gallery systems for optimal artwork presentation across devices",
      "Developed smooth navigation and interactive elements to enhance portfolio browsing",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript"],
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: null,
    liveUrl: "https://lucavanstone.netlify.app/",
    screenshots: [
      { src: lv1, alt: "Luca Vanstone Portfolio - homepage and featured work" },
      { src: lv2, alt: "Luca Vanstone Portfolio - gallery and artwork showcase" },
      { src: lv3, alt: "Luca Vanstone Portfolio - about and contact section" },
    ],
  },
  {
    slug: "rock-paper-scissors-lizard-spock",
    title: "Rock Paper Scissors Lizard Spock",
    subtitle: "Learning · Full-Stack · Node.js",
    category: "learning",
    summary: "A full-stack web game implementing the expanded Rock Paper Scissors rules with Node.js backend and vanilla JavaScript frontend.",
    overview: "A collaborative full-stack web application that implements the classic Rock Paper Scissors game with the added complexity of Lizard and Spock (popularized by The Big Bang Theory). Built as a learning project to understand client-server communication, RESTful API design, and real-time user interaction using vanilla JavaScript and Node.js.",
    highlights: [
      "Built complete client-server architecture using Node.js HTTP module and vanilla JavaScript",
      "Implemented RESTful API design with proper HTTP methods and JSON response handling",
      "Developed comprehensive game logic for expanded Rock Paper Scissors Lizard Spock rules",
      "Added loading states and error handling for improved user experience on hosted platforms",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Node.js"],
    tags: ["Node", "JavaScript", "Full-Stack"],
    githubUrl: "https://github.com/JackGer26/Rock-Paper-Scissors-Lizard-Spock",
    liveUrl: "https://rock-paper-scissors-lizard-spock-kb42.onrender.com",
    screenshots: [
      { src: rps1, alt: "Rock Paper Scissors Lizard Spock - game interface and gameplay" },
    ],
  },
];
