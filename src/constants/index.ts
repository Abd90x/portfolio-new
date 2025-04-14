
type Word = {
    text: string;
    imgPath: string;
}
type CounterItems = {
    value: number;
    suffix: string;
    label: string;
}

type NavLinks = {
    name: string;
    link: string;
}

type LogoIcons = {
    imgPath: string;
    name: string;
}

type Abilities = {
    imgPath: string;
    title: string;
    desc: string;
}

type ExpCard = {
    review: string;
    imgPath: string;
    logoPath: string;
    title: string;
    date: string;
    responsibilities: string[];
}
type ExpLogo = {
    name: string;
    imgPath: string;
}

type TechStackIcons = {
    name: string;
    modelPath: string;
    scale: number;
    rotation: [number, number, number];
}
type TechStackImgs = {
    name: string;
    imgPath: string;
}


 const words: Word[] = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Design", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Design", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
  ];
  
   const counterItems: CounterItems[] = [
    { value: 2, suffix: "+", label: "Years of Experience" },
    { value: 15, suffix: "+", label: "Satisfied Clients" },
    { value: 40, suffix: "+", label: "Completed Projects" },
    { value: 98, suffix: "%", label: "Client Retention Rate" },
  ];

   const navLinks: NavLinks[] = [
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },

  ];
  

   const logoIconsList: LogoIcons[] = [
    {
      imgPath: "/images/logos/company-logo-1.png",
      name: "Company 1",
    },
    {
      imgPath: "/images/logos/company-logo-2.png",
      name: "Company 2",
    },
    {
      imgPath: "/images/logos/company-logo-3.png",
      name: "Company 3",
    },
    {
      imgPath: "/images/logos/company-logo-4.png",
      name: "Company 4",
    },
    {
      imgPath: "/images/logos/company-logo-5.png",
      name: "Company 5",
    },
    {
      imgPath: "/images/logos/company-logo-6.png",
      name: "Company 6",
    },
    {
      imgPath: "/images/logos/company-logo-7.png",
      name: "Company 7",
    },
    {
      imgPath: "/images/logos/company-logo-8.png",
      name: "Company 8",
    },
    {
      imgPath: "/images/logos/company-logo-9.png",
      name: "Company 9",
    },
    {
      imgPath: "/images/logos/company-logo-10.png",
      name: "Company 10",
    },
    {
      imgPath: "/images/logos/company-logo-11.png",
      name: "Company 11",
    },
  ];
  
   const abilities: Abilities[] = [
    {
      imgPath: "/images/seo.png",
      title: "Quality Focus",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: "/images/time.png",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
  ];

  const expCards: ExpCard[] = [
    {
      review: "Abdellatif brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
      imgPath: "/images/immacomma.png",
      logoPath: "/images/imma-real.png",
      title: "Frontend Developer",
      date: "April 2024 - Present",
      responsibilities: [
        "Developed and maintained user-facing features for the Hostinger website.",
        "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
        "Optimized web applications for maximum speed and scalability.",
      ],
    },
    {
      review: "Abdellatif contributions to our web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
      imgPath: "/images/upwork.png",
      logoPath: "/images/upwork-c.png",
      title: "Full Stack Developer (Freenlancer)",
      date: "Sep 2023 - Present",
      responsibilities: [
        "Create and implement new user-facing features using Angular / React, and enhance the user experience. ",
        "Maintain and improve the existing codebase of the project, focusing on performance optimization",
        "Optimize the application for maximum speed and scalability"
      ],
    },

  ];
  
  const expLogos: ExpLogo[] = [
    {
      name: "logo1",
      imgPath: "/images/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "/images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "/images/logo3.png",
    },
  ];
  
  const techStackImgs: TechStackImgs[] = [
    {
      name: "React Developer",
      imgPath: "/images/logos/react.png",
    },
    {
      name: "Python Developer",
      imgPath: "/images/logos/python.svg",
    },
    {
      name: "Backend Developer",
      imgPath: "/images/logos/node.png",
    },
    {
      name: "Interactive Developer",
      imgPath: "/images/logos/three.png",
    },
    {
      name: "Project Manager",
      imgPath: "/images/logos/git.svg",
    },
  ];
  
  const techStackIcons: TechStackIcons[] = [
    {
      name: "React Developer",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    {
      name: "Typescript Developer",
      modelPath: "/models/typescript.glb",
      scale: 1.5,
      rotation: [0, 0, 0],
    },
    {
      name: "Javascript Developer",
      modelPath: "/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Interactive Developer",
      modelPath: "/models/three.js-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    {
      name: "Project Manager",
      modelPath: "/models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
  ];
  
  
  const socialImgs = [
    {
      name: "insta",
      imgPath: "/images/insta.png",
      link: "https://www.instagram.com/abd90v/",
    },
    {
      name: "fb",
      imgPath: "/images/fb.png",
      link: "https://www.facebook.com/abd90v",
    },
    {
      name: "x",
      imgPath: "/images/x.png",
      link: "https://twitter.com/abd90v",
    },
    {
      name: "linkedin",
      imgPath: "/images/linkedin.png",
      link: "https://www.linkedin.com/in/abdellatif-alrefahi",
    },
  ];


  export { words, counterItems, navLinks, logoIconsList, abilities, expCards, expLogos, techStackImgs, techStackIcons, socialImgs };
