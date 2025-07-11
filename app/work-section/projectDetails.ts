export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "AI Trip Genenrator",
    description:
      "Developed an AI based Travel Advisor that enhanced user engagement by 60% through personalized itineraries.",
    technologies: ["MongoDB", "React.js", "Node.js"],
    github: "https://github.com/antan2002/AI-Trip-Generator",
    demo: "https://ai-based-tripgenerator.netlify.app/",
    image: require(".//../../public/projects/Trip-Generate.png"),
    available: true,
  },
  {
    id: 1,
    name: "ChargeX",
    description:
      "Developed and designed a comprehensive full-stack e-commerce platform focused on electric vehicle (EV) chargers.",
    technologies: ["React.js", "Node.js", "Stripe API"],
    github: "https://github.com/antan2002/CHARGEX",
    demo: "https://6696cff4fb4c601df4fc63f9--cerulean-bunny-01ffc0.netlify.app/",
    image: require(".//../../public/projects/ChargeX.png"),
    available: true,
  },
  {
    id: 2,
    name: "Chess.com",
    description:
      "This project is an online chess game where two players can play against each other in real time. It uses Socket.IO to send and receive updates instantly between the players.",
    technologies: ["HTML", "CSS", "Node.js", "Socket.io"],
    github: "https://github.com/antan2002/Chess.com",
    demo: "https://github.com/antan2002/Chess.com",
    image: require(".//../../public/projects/Chess.png"),
    available: true,
  },
  {
    id: 3,
    name: "FaceBrain",
    description:
      "A face recognition app is a smart Brain that utilizes computer vision technology to detect and identify faces within images or video streams.",
    technologies: ["React.js", "Node.js", "PostgreSQL"],
    github: "https://github.com/antan2002/FaceRecognizeBrain",
    demo: "https://github.com/antan2002/FaceRecognizeBrain",
    image: require(".//../../public/projects/Facebrain.png"),
    available: true,
  },
  {
    id: 4,
    name: "Spacer-main",
    description:
      "A space-themed landing page built with React, featuring a full-screen starry background, parallax scrolling, and interactive elements.",
    technologies: ["React", "JavaScript", "HTML/CSS"],
    github: "https://github.com/antan2002/Spacer-main",
    demo: "https://spacer-main.netlify.app/",
    image: require(".//../../public/projects/Spacer-main.png"),
    available: true,
  },
];

