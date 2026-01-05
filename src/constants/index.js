import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = ` I am a passionate Full Stack Developer and Software Engineering undergraduate at the University of Peradeniya, with strong hands-on experience in building modern, scalable applications. I work across the full development lifecycle using Java, MySQL, the MERN stack (MongoDB, Express, React, Node.js), Flutter, and Firebase.

I enjoy turning ideas into real-world solutions, whether it’s web applications, mobile apps, or backend systems. Alongside my technical skills, I bring leadership, teamwork, and problem-solving experience gained through university organizations and freelance work. My goal is to continuously grow as a developer while contributing to impactful, user-focused software products.`;


export const EXPERIENCES = [
  {
    year: "2026 - Present",
    role: "Full Stack Development Internship",
    company: "CodeAlpha",
    description: `Developed and maintained full-stack web applications using JavaScript, React.js, Node.js, and MongoDB. Built RESTful APIs and collaborated with the team to deliver project requirements.`,
    technologies: ["Javascript", "React.js", "Node.js", "mongoDB"],
  },
  
];

export const PROJECTS = [

  {
    title: "Coffee Shop Web Site",
    image: project1,
    embedUrl: "https://coffee-shop-lovat-three.vercel.app/",
    deploys: [
      { name: "Web Site", url: "https://coffee-shop-lovat-three.vercel.app/" }
    ],
    description:
      "Coffee Shop Website is a responsive and visually engaging front-end web project designed to showcase a modern coffee shop’s brand, products, and customer experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },

  {
    title: "BioHarvest – Organic Lifestyle & Learning Platform",
    image: project2,
    embedUrl: "https://bio-harvest-l6os.vercel.app/",
    deploys: [
      { name: "Client", url: "https://bio-harvest-l6os.vercel.app/" },
      { name: "Admin", url: "https://bio-harvest-rmbv.vercel.app/" },
    ],
    description:
      "BioHarvest is a full-stack MERN web application focused on promoting organic living, healthy lifestyles, and sustainable food practices.The platform educates users on organic food, enables community engagement, and allows buying and selling of admin-verified organic products.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  
  {
    title: "Portfolio Website",
    image: project3,
    embedUrl: "https://portfolio-one-bay-54.vercel.app/",
    deploys: [
      { name: "Web Site", url: "https://portfolio-one-bay-54.vercel.app/" }
    ],
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Vite" , "React", "Tailwind css" , "Frame-Motion"],
  },
  

   {
    title: "Apple Website",
    image: project3,
    embedUrl: "https://apple-web-lac.vercel.app/",
    deploys: [
      { name: "Web Site", url: "https://apple-web-lac.vercel.app/" }
    ],
    description:
      "Built an Apple-style web UI with 3D model integration, focusing on clean design, smooth animations, and a premium interactive user experience.",
    technologies: ["Vite" , "React", "Tailwind css" , "gsap" , "three.js"],
  },






];

export const CONTACT = {
  address: "Eranawila , Meetiyagoda",
  phoneNo: "+94763336479 ",
  email: "banukaweerapperuma@gmail.com",
};
