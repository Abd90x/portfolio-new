
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
    {
      name: "Testimonials",
      link: "#testimonials",
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
      review: "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
      imgPath: "/images/exp1.png",
      logoPath: "/images/logo1.png",
      title: "Frontend Developer",
      date: "January 2023 - Present",
      responsibilities: [
        "Developed and maintained user-facing features for the Hostinger website.",
        "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
        "Optimized web applications for maximum speed and scalability.",
      ],
    },
    {
      review: "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
      imgPath: "/images/exp2.png",
      logoPath: "/images/logo2.png",
      title: "Full Stack Developer",
      date: "June 2020 - December 2023",
      responsibilities: [
        "Led the development of Docker's web applications, focusing on scalability.",
        "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
        "Contributed to open-source projects that were used with the Docker ecosystem.",
      ],
    },
    {
      review: "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
      imgPath: "/images/exp3.png",
      logoPath: "/images/logo3.png",
      title: "React Native Developer",
      date: "March 2019 - May 2020",
      responsibilities: [
        "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
        "Improved app performance and user experience through code optimization and testing.",
        "Coordinated with the product team to implement features based on feedback.",
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
  
  

  export { words, counterItems, navLinks, logoIconsList, abilities, expCards, expLogos };
