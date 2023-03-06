/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, _ as __astro_tag_component__, d as renderComponent, e as renderHead, f as renderSlot } from '../astro.4d138c46.mjs';
import 'html-escaper';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import axios from 'axios';

const info = {
  name: "Martinsito Brito Diaz",
  degree: "System Engineer",
  "short-description": "Over the course of my career I've worked extensively with ASP .NET C#, React JS, TypeScript, and SQL Server, often taking on tasks that are typically assigned to full stack developers. ",
  description: "Over the course of my career I've worked extensively with ASP .NET C#, React JS, TypeScript, and SQL Server, often taking on tasks that are typically assigned to full stack developers. I take pride in my technical expertise, analytical and problem-solving skills, and ability to create robust and efficient solutions that meet business needs. As someone who is committed to staying up-to-date with the latest industry trends, I'm constantly seeking out new challenges and opportunities for growth. ",
  profile: "/assets/images/profile-foto.jpeg",
  hobbies: "I love listening to music, playing video games (add me on playstation user: martinsitobd), also I love traveling abroad. ",
  aboutMe: "My name is Martinsito Brito Diaz, I currently live the Dominican Republic. I'm a young man who is always looking for new oportunities. I am 22 years old, at the age of fourteen, it was my first time programming while I was at highschool, since that time I have been loving this area. ",
  courses: [
    {
      course: "Java Script ES9 & NodeJS",
      institute: "Udemy",
      accomplishDate: "2022"
    },
    {
      course: "Git Professional",
      institute: "Codigo Facilito",
      accomplishDate: "2022"
    },
    {
      course: "Responsive Web Design",
      institute: "Free Code Camp",
      accomplishDate: "2022"
    },
    {
      course: "Power BI",
      institute: "Infotep",
      accomplishDate: "2021"
    },
    {
      course: "Intro. CiberSecurity",
      institute: "Cisco Networking Academy",
      accomplishDate: "2021"
    },
    {
      course: "Linux Unhatched",
      institute: "Cisco Networking Academy",
      accomplishDate: "2021"
    },
    {
      course: "Technical Support Fundamentals",
      institute: "Google / Coursera",
      accomplishDate: "2021"
    }
  ],
  experiences: [
    {
      company: "Camsoft SRL",
      role: "System Engineer Jr.",
      duration: "Oct. 2022 - Currently",
      work: [
        {
          exp: "Developed UI components for web applications in React, Typescript and DevExtreme."
        },
        {
          exp: "Managed data with SQL and SQL Server."
        },
        {
          exp: "Developed web services in Asp Dot Net C#, always using the best practices like Clean Code, SOLID and dependency injection."
        }
      ]
    },
    {
      company: "Soluciones Almonte Gil",
      role: "Web Developer (Internship)",
      duration: "Jan. 2021 - May. 2021",
      work: [
        {
          exp: "Developed a web application on ASP Dot NET 5, Blazor and C#, in this project I learn how to create web services, API and handle data with web scraping."
        },
        {
          exp: "Designed and Developed a static website, the mock up of this web site was made on adobe xd, later it was developed using HTML, CSS and JS."
        }
      ]
    },
    {
      company: "Universidad Católica Nordestana",
      role: "Back End (Internship)",
      duration: "Oct. 2019 - March 2020",
      work: [
        {
          exp: "Collaborated in the development group of a server side application, that gets data to manage, analyze and send it, as a valuable information to all the employees in the company. This project was made using C#, SQL Server."
        },
        {
          exp: "Assisted as an IT Support helping out to create a IT lab for one school near the university."
        }
      ]
    }
  ],
  work: {
    projects: [
      {
        name: "Blog Café",
        description: "Static web page about a blog café, this project is part of a web development course in Udemy by Juan Pablo De la Torre.",
        technologies: ["HTML", "CSS", "JS", "SASS", "GULP"],
        url: "https://www.udemy.com/course/desarrollo-web-completo-con-html5-css3-js-php-y-mysql/",
        code: "https://github.com/MartinsitoBritoDiaz/BlogDeCafe",
        liveSite: "https://blogdecafembd.netlify.app/",
        isDeploy: true,
        image: "/assets/images/project-blog-cafe.webp"
      },
      {
        name: "Hardware Store",
        description: "Web application created as a university final project, this project is a Point-Of-Sales web app, also it has many modules to work with.",
        technologies: ["C#", "Blazor", "JS", "CSS", "Sql server"],
        url: "",
        code: "https://github.com/MartinsitoBritoDiaz/ProyectoFinal_Ferreteria-FBF-",
        liveSite: "/",
        isDeploy: false,
        image: "/assets/images/project-hardware-store.webp"
      },
      {
        name: "Advice Generator",
        description: "Web site that gets a bunch of different advice each time you press the dice icon, in this project I was practicing fecth API request with JS.",
        technologies: ["HTML", "CSS", "JS", "API"],
        url: "https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db",
        code: "https://github.com/MartinsitoBritoDiaz/Advice-Generator-App",
        liveSite: "https://martinsitobritodiaz.github.io/Advice-Generator-App/",
        isDeploy: true,
        image: "/assets/images/project-advice-generator.webp"
      },
      {
        name: "Journal Web App",
        description: "Web App where you can save your daily notes about food, excersices and more information. This project is part of a web development course in Udemy by Juan Pablo De la Torre.",
        technologies: ["React", "JS", "mui", "API", "Firebase"],
        url: "https://www.udemy.com/course/react-cero-experto/",
        code: "https://github.com/MartinsitoBritoDiaz/Journal-React-MUI",
        liveSite: "https://journalapp-omega.vercel.app/",
        isDeploy: true,
        image: "/assets/images/project-journal-app.webp"
      },
      {
        name: "Heroes",
        description: "Web site about some super heroes, It was my first time using react router. ",
        technologies: ["React", "TS", "HTML", "Bootstrap", "Css"],
        url: "https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db",
        code: "https://github.com/MartinsitoBritoDiaz/HeroesReactApp",
        liveSite: "https://heroesapp-martinsito.netlify.app/",
        isDeploy: true,
        image: "/assets/images/project-heroes.webp"
      },
      {
        name: "News Website Homepage",
        description: "News landing page, this project was built in HTML, CSS. ",
        technologies: ["HTML", "CSS", "JS"],
        url: "https://www.frontendmentor.io/",
        code: "https://github.com/MartinsitoBritoDiaz/News-HomePage",
        liveSite: "https://news-homepage-mbd.netlify.app/",
        isDeploy: true,
        image: "/assets/images/project-landing-news-page.webp"
      },
      {
        name: "Music Festival",
        description: "Static web page about one music festival in the Dominican Republic, this project is part of a web development course in Udemy by Juan Pablo De la Torre.",
        technologies: ["HTML", "CSS", "JS", "SASS", "GULP"],
        url: "https://www.udemy.com/course/desarrollo-web-completo-con-html5-css3-js-php-y-mysql/",
        code: "https://github.com/MartinsitoBritoDiaz/MusicFestival",
        liveSite: "https://music-festival-mbd.netlify.app/",
        isDeploy: true,
        image: "/assets/images/project-music-festival.webp"
      },
      {
        name: "FAQ Accordin Card",
        description: "FAQ component, when I made this project I was practicing JS. ",
        technologies: ["HTML", "CSS", "JS"],
        url: "https://www.frontendmentor.io/",
        code: "https://github.com/MartinsitoBritoDiaz/Faq-Accordion-Card",
        liveSite: "https://martinsitobritodiaz.github.io/Faq-Accordion-Card/",
        isDeploy: true,
        image: "/assets/images/project-faq-according-card.webp"
      },
      {
        name: "Front End Store",
        description: "Landing page about a cloth store. ",
        technologies: ["HTML", "CSS", "JS"],
        url: "",
        code: "https://github.com/MartinsitoBritoDiaz/FrontEndStore",
        liveSite: "https://stingfrontendstore.netlify.app/",
        isDeploy: true,
        image: "/assets/images/project-frontend-store.webp"
      },
      {
        name: "Interactive Rating Component",
        description: "Interactive Rating Component. ",
        technologies: ["HTML", "CSS", "JS"],
        url: "https://www.frontendmentor.io/",
        code: "https://github.com/MartinsitoBritoDiaz/Interactive-Rating--Component",
        liveSite: "https://martinsitobritodiaz.github.io/Interactive-Rating--Component/",
        isDeploy: true,
        image: "/assets/images/interactive-rating-component.webp"
      },
      {
        name: "Product Preview Card",
        description: "Product Preview Card. ",
        technologies: ["HTML", "CSS", "JS"],
        url: "https://www.frontendmentor.io/",
        code: "https://github.com/MartinsitoBritoDiaz/ProductPreviewCardComponent",
        liveSite: "https://productpreviewcardmbd.netlify.app/",
        isDeploy: true,
        image: "/assets/images/product-preview-card-component.webp"
      },
      {
        name: "Social Proof Section",
        description: "Social Proof Section. ",
        technologies: ["HTML", "CSS", "JS"],
        url: "https://www.frontendmentor.io/",
        code: "https://github.com/MartinsitoBritoDiaz/Social-Proof-Section",
        liveSite: "https://martinsitobritodiaz.github.io/Social-Proof-Section/",
        isDeploy: true,
        image: "/assets/images/social-proof-component.webp"
      },
      {
        name: "Intro SignUp Form",
        description: "Intro SignUp Form. ",
        technologies: ["HTML", "CSS", "JS"],
        url: "https://www.frontendmentor.io/",
        code: "https://github.com/MartinsitoBritoDiaz/Intro-Component-With-Signup-Form",
        liveSite: "https://intro-component-mbd.netlify.app/",
        isDeploy: true,
        image: "/assets/images/signup-form-component.webp"
      },
      {
        name: "Coming Soon Ping",
        description: "Coming Soon Ping. ",
        technologies: ["HTML", "CSS", "JS"],
        url: "https://www.frontendmentor.io/",
        code: "https://github.com/MartinsitoBritoDiaz/Coming-Soon-Page",
        liveSite: "https://coming-soon-ping-mbd.netlify.app/",
        isDeploy: true,
        image: "/assets/images/coming-soon-ping-project.webp"
      },
      {
        name: "NFT Card Component",
        description: "NFT Card Component. ",
        technologies: ["HTML", "CSS", "JS"],
        url: "https://www.frontendmentor.io/",
        code: "https://github.com/MartinsitoBritoDiaz/Nft-Preview-Card-Component",
        liveSite: "https://nft-card-mbd.netlify.app/",
        isDeploy: true,
        image: "/assets/images/nft-card-component.webp"
      }
    ]
  },
  contact: {
    twitter: "https://twitter.com/martinbd09",
    instagram: "https://www.instagram.com/martinbd09/",
    github: "https://github.com/MartinsitoBritoDiaz",
    linkedin: "https://www.linkedin.com/in/martinsito-brito-diaz-ab4a48213/"
  },
  logo: "/assets/images/logo.png",
  logoA: "/assets/logoA.gif",
  codeBackground: "/assets/codeBackground2.svg"
};

const $$Astro$c = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Hero;
  const { name, degree, about } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="md:flex">
  <div class="dark:text-light md:flex-1">
    <div class="text-xl py-1 ">Hi there 👋</div>
    <div class="text-5xl font-bold mt-5">
      I'm <span class="text-gradient">${name}</span>
    </div>
    <div class="text-3xl py-3 font-bold">${degree}</div>
    <div class="py-2">
      <text class="text-lg">
        ${about}
      </text>
    </div>
    <div class="my-5">
      <a href="/about#contactForm" class=" bg-dark-green text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline">Contact</a>  
    </div>
  </div>
  <div class=" md:flex-1 flex items-center justify-center">
    <img width="100" height="100"${addAttribute(info.codeBackground, "src")} class="h-70 w-60 my-10" alt="Coding image">
  </div>
</div>`;
}, "C:/Users/martinsito/Desktop/Workspace/Projects/Portfolio-Astro/src/components/home/Hero.astro");

const Project = (props) => {
  return /* @__PURE__ */ jsxs("div", {
    className: "cont animate__animated animate__fadeInDown animate__faster",
    children: [/* @__PURE__ */ jsx("div", {
      className: "card-cont-2",
      children: /* @__PURE__ */ jsx("div", {
        className: "img-p3",
        children: /* @__PURE__ */ jsx("img", {
          width: "100%",
          height: "100%",
          src: props.project.image,
          className: "img-p1 md:max-w-lg max-w-full",
          alt: props.project.name,
          loading: "lazy"
        })
      })
    }), /* @__PURE__ */ jsxs("div", {
      className: "card-cont-1 flex flex-col md:items-end sm:text-justify text-light gap-y-2 ",
      children: [/* @__PURE__ */ jsx("p", {
        className: "font-bold dark:text-light-green text-dark-green text-sm",
        children: "Feature project"
      }), /* @__PURE__ */ jsx("h3", {
        className: "text-dark-green dark:text-light font-bold text-2xl",
        children: props.project.name
      }), /* @__PURE__ */ jsx("p", {
        className: "paragraph-card my-2 p-5 sm:pl-0 max-w-lg text-dark-green font-bold dark:text-light",
        children: props.project.description
      }), /* @__PURE__ */ jsx("ul", {
        className: "flex gap-4",
        children: props.project.technologies.map((tech) => /* @__PURE__ */ jsx("li", {
          className: "font-bold text-dark-green dark:text-light",
          children: tech.toUpperCase()
        }))
      }), /* @__PURE__ */ jsxs("div", {
        className: "flex gap-x-2",
        children: [/* @__PURE__ */ jsx("a", {
          className: "h-8 w-8 github-icon cursor-pointer ",
          href: props.project.code,
          target: "_blank",
          "aria-label": "Git Hub",
          children: /* @__PURE__ */ jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            role: "img",
            viewBox: "0 0 30 30",
            className: "dark:stroke-light stroke-dark-green hover:stroke-[#009644] dark:hover:stroke-[#878b80]",
            fill: "none",
            children: /* @__PURE__ */ jsxs(Fragment, {
              children: [/* @__PURE__ */ jsx("title", {
                children: "GitHub"
              }), /* @__PURE__ */ jsx("path", {
                d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
              })]
            })
          })
        }), /* @__PURE__ */ jsx("a", {
          className: `h-8 w-8 github-icon cursor-pointer ${!props.project.isDeploy ? "hidden" : "block"}`,
          href: props.project.liveSite,
          target: "_blank",
          "aria-label": "Live Site",
          children: /* @__PURE__ */ jsxs("svg", {
            className: "path-link dark:stroke-light stroke-dark-green hover:fill-[#009644] dark:hover:fill-[#878b80] hover:stroke-[#009644] dark:hover:stroke-[#878b80] fill-dark-green dark:fill-light ",
            xmlns: "http://www.w3.org/2000/svg",
            role: "img",
            viewBox: "0 0 130 256",
            children: [/* @__PURE__ */ jsx("path", {
              className: " ",
              d: "M 86 34.303 c -2.209 0 -4 -1.791 -4 -4 V 8 H 59.697 c -2.209 0 -4 -1.791 -4 -4 s 1.791 -4 4 -4 H 86 c 2.209 0 4 1.791 4 4 v 26.303 C 90 32.512 88.209 34.303 86 34.303 z",
              transform: " matrix(1 0 0 1 0 0) ",
              strokeLinecap: "round"
            }), /* @__PURE__ */ jsx("path", {
              className: " ",
              d: "M 33.395 60.604 c -1.024 0 -2.047 -0.391 -2.829 -1.172 c -1.562 -1.562 -1.562 -4.095 0 -5.656 L 83.172 1.171 c 1.561 -1.562 4.094 -1.562 5.656 0 c 1.563 1.563 1.563 4.095 0 5.657 L 36.224 59.433 C 35.442 60.214 34.418 60.604 33.395 60.604 z",
              transform: " matrix(1 0 0 1 0 0) ",
              strokeLinecap: "round"
            }), /* @__PURE__ */ jsx("path", {
              className: " ",
              d: "M 75.128 90 H 14.872 C 6.671 90 0 83.328 0 75.128 V 14.872 C 0 6.671 6.671 0 14.872 0 h 18.523 c 2.209 0 4 1.791 4 4 s -1.791 4 -4 4 H 14.872 C 11.083 8 8 11.083 8 14.872 v 60.256 C 8 78.917 11.083 82 14.872 82 h 60.256 C 78.917 82 82 78.917 82 75.128 V 56.604 c 0 -2.209 1.791 -4 4 -4 s 4 1.791 4 4 v 18.523 C 90 83.328 83.328 90 75.128 90 z",
              transform: " matrix(1 0 0 1 0 0) ",
              strokeLinecap: "round"
            })]
          })
        })]
      })]
    })]
  });
};
__astro_tag_component__(Project, "@astrojs/react");

const ProjectItem = ({
  project
}) => {
  return /* @__PURE__ */ jsxs("article", {
    className: "w-full max-h-[16rem] md:max-h-[14rem] md:min-h-[14rem] overflow-hidden relative group",
    children: [/* @__PURE__ */ jsxs("div", {
      className: "flex items-center absolute right-4 top-4 z-10",
      children: [/* @__PURE__ */ jsx("a", {
        href: project.code,
        className: "text-white p-3 bg-black/50 rounded-full backdrop-blur-md cursor-pointer",
        "aria-label": "Social Media",
        target: "_blank",
        children: /* @__PURE__ */ jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "20",
          height: "20",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          className: "feather feather-github",
          children: /* @__PURE__ */ jsx("path", {
            d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
          })
        })
      }), /* @__PURE__ */ jsx("a", {
        href: project.liveSite,
        className: `text-white p-3 bg-black/50 rounded-full backdrop-blur-md ml-1 cursor-pointer  ${!project.isDeploy ? "hidden" : "block"}`,
        "aria-label": "Social Media",
        target: "_blank",
        children: /* @__PURE__ */ jsxs("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "20",
          height: "20",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          className: "feather feather-link-2",
          children: [/* @__PURE__ */ jsx("path", {
            d: "M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"
          }), /* @__PURE__ */ jsx("line", {
            x1: "8",
            y1: "12",
            x2: "16",
            y2: "12"
          })]
        })
      })]
    }), /* @__PURE__ */ jsx("img", {
      alt: project.name,
      src: project.image,
      className: "w-full h-auto scale-100 hover:scale-110 transition duration-[1.5s]",
      loading: "lazy",
      width: "100%",
      height: "100%"
    }), /* @__PURE__ */ jsx("div", {
      className: "absolute w-full bottom-0 left-0 backdrop-blur-md dark:text-white text-white bg-black/50 p-4 translate-y-[100%] group-hover:translate-y-0 transition duration-700",
      children: /* @__PURE__ */ jsx("h3", {
        className: "mr-2 text-xl",
        children: project.name
      })
    })]
  });
};
__astro_tag_component__(ProjectItem, "@astrojs/react");

const PaginationChanges = () => {
  const pageSize = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [projects, setProjects] = useState(info.work.projects);
  const totalPages = Math.ceil(projects.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, projects.length);
  const content = projects.slice(startIndex, endIndex);
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx("div", {
      className: "grid md:grid-cols-2 gap-10 sm:gap-y-20 sm:grid-cols-1 mb-10 ",
      children: content.map((project, index) => /* @__PURE__ */ jsx(ProjectItem, {
        project
      }, index))
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex place-content-center justify-center my-10 mt-0",
      children: [/* @__PURE__ */ jsxs("button", {
        type: "button",
        onClick: () => handlePageChange(currentPage - 1),
        disabled: currentPage <= 1 ? true : false,
        className: `disabled:opacity-50  inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-light bg-dark-green rounded-lg  dark:bg-dark-green dark:border-gray-700 dark:text-light ${(currentPage <= 1 ? true : false) ? "" : "hover:bg-gray-500 hover:text-light dark:hover:bg-gray-700 dark:hover:text-light"}`,
        children: [/* @__PURE__ */ jsx("svg", {
          "aria-hidden": "true",
          className: "w-5 h-5 mr-2",
          fill: "currentColor",
          viewBox: "0 0 20 20",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ jsx("path", {
            fillRule: "evenodd",
            d: "M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z",
            clipRule: "evenodd"
          })
        }), "Previous"]
      }), /* @__PURE__ */ jsxs("button", {
        disabled: currentPage >= totalPages,
        type: "button",
        onClick: () => handlePageChange(currentPage + 1),
        className: `disabled:opacity-50  inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-light bg-dark-green rounded-lg  dark:bg-dark-green dark:border-gray-700 dark:text-light ${currentPage >= totalPages ? "" : "hover:bg-gray-500 hover:text-light dark:hover:bg-gray-700 dark:hover:text-light"}`,
        children: ["Next", /* @__PURE__ */ jsx("svg", {
          "aria-hidden": "true",
          className: "w-5 h-5 ml-2",
          fill: "currentColor",
          viewBox: "0 0 20 20",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ jsx("path", {
            fillRule: "evenodd",
            d: "M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",
            clipRule: "evenodd"
          })
        })]
      })]
    })]
  });
};
__astro_tag_component__(PaginationChanges, "@astrojs/react");

const ContactForm = () => {
  const [validation, setValidation] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    subject: "",
    message: ""
  });
  const handleOnChange = (event) => {
    event.persist();
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value
    }));
  };
  useEffect(() => {
    setValidation(inputs.email === "" || inputs.message === "" || inputs.subject === "");
  }, [inputs]);
  const handleOnSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: "https://formbold.com/s/3nQx5",
      data: inputs
    }).then((r) => {
      setInputs({
        email: "",
        subject: "",
        message: ""
      });
    }).catch((r) => {
      console.log("Communication error");
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("h2", {
      className: "text-dark dark:text-light font-bold text-2xl",
      id: "contactForm",
      children: "Get in touch"
    }), /* @__PURE__ */ jsxs("form", {
      className: "shadow-md dark:shadow-md rounded px-8 pt-6 pb-8 mb-4 dark:text-light",
      onSubmit: handleOnSubmit,
      children: [/* @__PURE__ */ jsxs("div", {
        className: "mb-4",
        children: [/* @__PURE__ */ jsx("label", {
          className: "block  mb-2",
          children: "Your email:"
        }), /* @__PURE__ */ jsx("input", {
          className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
          onChange: handleOnChange,
          value: inputs.email,
          id: "email",
          type: "email",
          name: "email",
          placeholder: "Email"
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "mb-4",
        children: [/* @__PURE__ */ jsx("label", {
          className: "block  mb-2",
          children: "Subject:"
        }), /* @__PURE__ */ jsx("input", {
          className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
          onChange: handleOnChange,
          value: inputs.subject,
          id: "subject",
          type: "text",
          name: "subject",
          placeholder: "Subject"
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "mb-4",
        children: [/* @__PURE__ */ jsx("label", {
          className: "block  mb-2",
          children: "Message:"
        }), /* @__PURE__ */ jsx("textarea", {
          className: "shadow appearance-none border rounded w-full h-28 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
          onChange: handleOnChange,
          value: inputs.message,
          id: "message",
          name: "message",
          placeholder: "Type your message"
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "flex items-center justify-center",
        children: /* @__PURE__ */ jsx("button", {
          className: "disabled:opacity-50 bg-dark-green text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
          type: "submit",
          disabled: validation,
          children: "Send message"
        })
      })]
    })]
  });
};
__astro_tag_component__(ContactForm, "@astrojs/react");

const $$Astro$b = createAstro();
const $$HomeProjects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$HomeProjects;
  const { projects } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="h-100 w-full before:dark:bg-[#202020] before:bg-light-green my-28">
    <h2 class="py-5 dark:text-light text-dark-green text-3xl font-bold  my-10">
      Some of my projects
    </h2>
    <div class="grid gap-y-10 mx-auto">
      ${projects.slice(0, 4).map((project) => renderTemplate`${renderComponent($$result, "Project", Project, { "project": project })}`)}
    </div>
  </div>`;
}, "C:/Users/martinsito/Desktop/Workspace/Projects/Portfolio-Astro/src/components/home/HomeProjects.astro");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$a = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Navbar;
  const textLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" }
  ];
  return renderTemplate(_a || (_a = __template(["", '<nav class="container flex items-center justify-between h-[80px] sm:h-[200px] sm:justify-center sm:flex-col mt-5 sm:mb-5 mb-10">\n  <img width="100" height="100"', ' class="object-contain h-20 w-30 sm:h-40 sm:w-50"', '>\n  <ul class="nav-items dark:bg-[#202020] dark:text-light ">\n    ', '\n  </ul>\n  \n  <ul class="flex items-center ">    \n    <li>\n      <button aria-label="theme-button" id="theme-button" class="dark:text-light rounded-lg p-4 ml-2 bg-[#3d403a] dark:bg-[#202020] sm:hidden"></button>\n    </li>\n  </ul>\n</nav>\n\n<div class="fixed bottom-4 right-4 z-10">\n  <button aria-label="theme-button" id="theme-button-mobile" class="dark:text-light rounded-lg p-4 ml-2 bg-[#3d403a] dark:bg-[#202020]  hidden sm:block">\n  </button>\n</div>\n\n\n<script>\n  const moon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;\n  const sun = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;\n  const themeButton = document.getElementById("theme-button");\n  const themeButtonMobile = document.getElementById("theme-button-mobile");\n  const browserTheme = document.querySelector(\'[name="theme-color"]\');\n  const theme = (() => {\n    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {\n      return localStorage.getItem("theme");\n    }\n    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {\n      return "dark";\n    }\n    return "light";\n  })();\n  let isDark;\n  \n  if (theme === "light") {\n    document.documentElement.setAttribute("data-theme", "light");\n    isDark = true;\n    themeButton.innerHTML = moon;\n    themeButtonMobile.innerHTML = moon;\n    browserTheme.content = "#FFFFFF";\n  } else {\n    document.documentElement.setAttribute("data-theme", "dark");\n    isDark = false;\n    themeButton.innerHTML = sun;\n    themeButtonMobile.innerHTML = sun;\n    browserTheme.content = "#111111";\n\n  }\n  window.localStorage.setItem("theme", theme);\n\n  const darkModeHandler = () => {\n    if (isDark) {\n      document.documentElement.setAttribute("data-theme", "dark");\n      localStorage.theme = "dark";\n      isDark = false;\n      themeButton.innerHTML = sun;\n      themeButtonMobile.innerHTML = sun;\n      browserTheme.content = "#111111";\n    } else {\n      document.documentElement.setAttribute("data-theme", "light");\n      localStorage.theme = "light";\n      isDark = true;\n      themeButton.innerHTML = moon;\n      themeButtonMobile.innerHTML = moon;\n      browserTheme.content = "#FFFFFF";\n    }\n  };\n\n  themeButton.addEventListener("click", darkModeHandler);\n  themeButtonMobile.addEventListener("click", darkModeHandler);\n<\/script>'], ["", '<nav class="container flex items-center justify-between h-[80px] sm:h-[200px] sm:justify-center sm:flex-col mt-5 sm:mb-5 mb-10">\n  <img width="100" height="100"', ' class="object-contain h-20 w-30 sm:h-40 sm:w-50"', '>\n  <ul class="nav-items dark:bg-[#202020] dark:text-light ">\n    ', '\n  </ul>\n  \n  <ul class="flex items-center ">    \n    <li>\n      <button aria-label="theme-button" id="theme-button" class="dark:text-light rounded-lg p-4 ml-2 bg-[#3d403a] dark:bg-[#202020] sm:hidden"></button>\n    </li>\n  </ul>\n</nav>\n\n<div class="fixed bottom-4 right-4 z-10">\n  <button aria-label="theme-button" id="theme-button-mobile" class="dark:text-light rounded-lg p-4 ml-2 bg-[#3d403a] dark:bg-[#202020]  hidden sm:block">\n  </button>\n</div>\n\n\n<script>\n  const moon = \\`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>\\`;\n  const sun = \\`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>\\`;\n  const themeButton = document.getElementById("theme-button");\n  const themeButtonMobile = document.getElementById("theme-button-mobile");\n  const browserTheme = document.querySelector(\'[name="theme-color"]\');\n  const theme = (() => {\n    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {\n      return localStorage.getItem("theme");\n    }\n    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {\n      return "dark";\n    }\n    return "light";\n  })();\n  let isDark;\n  \n  if (theme === "light") {\n    document.documentElement.setAttribute("data-theme", "light");\n    isDark = true;\n    themeButton.innerHTML = moon;\n    themeButtonMobile.innerHTML = moon;\n    browserTheme.content = "#FFFFFF";\n  } else {\n    document.documentElement.setAttribute("data-theme", "dark");\n    isDark = false;\n    themeButton.innerHTML = sun;\n    themeButtonMobile.innerHTML = sun;\n    browserTheme.content = "#111111";\n\n  }\n  window.localStorage.setItem("theme", theme);\n\n  const darkModeHandler = () => {\n    if (isDark) {\n      document.documentElement.setAttribute("data-theme", "dark");\n      localStorage.theme = "dark";\n      isDark = false;\n      themeButton.innerHTML = sun;\n      themeButtonMobile.innerHTML = sun;\n      browserTheme.content = "#111111";\n    } else {\n      document.documentElement.setAttribute("data-theme", "light");\n      localStorage.theme = "light";\n      isDark = true;\n      themeButton.innerHTML = moon;\n      themeButtonMobile.innerHTML = moon;\n      browserTheme.content = "#FFFFFF";\n    }\n  };\n\n  themeButton.addEventListener("click", darkModeHandler);\n  themeButtonMobile.addEventListener("click", darkModeHandler);\n<\/script>'])), maybeRenderHead($$result), addAttribute(info.logo, "src"), addAttribute(info.name, "alt"), textLinks.map(({ label, href }) => renderTemplate`<li>
          <a${addAttribute(Astro2.url.pathname === href, "aria-current")}${addAttribute([
    "text-sm font-semibold link",
    {
      active: Astro2.url.pathname === href || href !== "/" && Astro2.url.pathname.startsWith(href)
    }
  ], "class:list")}${addAttribute(href, "href")}>
            ${label}
          </a>
        </li>`));
}, "C:/Users/martinsito/Desktop/Workspace/Projects/Portfolio-Astro/src/components/general/Navbar.astro");

const SITE_TITLE = "Martinsito BD";
const SITE_DESCRIPTION = "Welcome to my portfolio website!";

const $$Astro$9 = createAstro();
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title, description, image = "/placeholder-social.jpg" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="generator"${addAttribute(Astro2.generator, "content")}>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="theme-color" content="#ffffff">

<!-- Primary Meta Tags -->
<title>${title}</title>
<meta name="title"${addAttribute(title, "content")}>
<meta name="description"${addAttribute(description, "content")}>

<!-- Link -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">

<link rel="shortcut icon" href="#">`;
}, "C:/Users/martinsito/Desktop/Workspace/Projects/Portfolio-Astro/src/components/general/BaseHead.astro");

const $$Astro$8 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Footer;
  Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="container">
<footer class="p-4 rounded-t-lg shadow flex flex-col  justify-between md:p-6 bg-white dark:bg-[#202020]">
    <div class="flex sm:flex-col sm:gap-y-5 sm:items-center sm:text-center justify-between">
      <ul class="flex flex-wrap gap-x-5 items-center text-sm text-gray-500 dark:text-gray-400">
        <li>
          <a href="/" class="hover:text-dark-green dark:hover:text-light">Home</a>
        </li>
        <li>
          <a href="/projects" class="hover:text-dark-green dark:hover:text-light">Projects</a>
        </li>
        <li>
          <a href="/about" class="hover:text-dark-green dark:hover:text-light">About</a>
        </li>
      </ul>
      <div class="sm:flex sm:items-center sm:justify-between">
        <div class="flex gap-x-5 sm:justify-center ">
          <a${addAttribute(info.contact.linkedin, "href")} class="text-gray-500 hover:text-gray-900 dark:hover:text-light">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
            <span class="sr-only">LinkedIn</span>
          </a>
          <a${addAttribute(info.contact.instagram, "href")} class="text-gray-500 hover:text-gray-900 dark:hover:text-light">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Instagram page</span>
          </a>
          <a${addAttribute(info.contact.twitter, "href")} class="text-gray-500 hover:text-gray-900 dark:hover:text-light">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
            <span class="sr-only">Twitter page</span>
          </a>
          <a${addAttribute(info.contact.github, "href")} class="text-gray-500 hover:text-gray-900 dark:hover:text-light">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">GitHub account</span>
          </a>
        </div>
      </div>
    </div>
    
    <hr class="my-6 border-gray-500  bg-gray-500 lg:my-8">
    <span class="block text-sm text-gray-500 text-center dark:text-gray-400"> 
      <p>This project was created by 
      <a href="https://github.com/MartinsitoBritoDiaz"><span class="font-bold dark:text-light hover:text-dark-green">Martinsito</span></a> ©
      </p>
    </span>
    </footer>
  </div>`;
}, "C:/Users/martinsito/Desktop/Workspace/Projects/Portfolio-Astro/src/components/general/Footer.astro");

const $$Astro$7 = createAstro();
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$MainLayout;
  return renderTemplate`<html lang="en">
  <head>
    ${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}
  ${renderHead($$result)}</head>

  <body>
	${renderComponent($$result, "Navbar", $$Navbar, {})}
	<main class="container-sm sm:px-8 min-h-screen">
		${renderSlot($$result, $$slots["default"])}
	</main>
	${renderComponent($$result, "Footer", $$Footer, {})}
  </body></html>`;
}, "C:/Users/martinsito/Desktop/Workspace/Projects/Portfolio-Astro/src/layouts/MainLayout.astro");

const $$Astro$6 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Hero", $$Hero, { "name": info.name.split(" ")[0], "degree": info.degree, "about": info["short-description"] })}${renderComponent($$result2, "HomeProjects", $$HomeProjects, { "projects": info.work.projects })}` })}`;
}, "C:/Users/martinsito/Desktop/Workspace/Projects/Portfolio-Astro/src/pages/index.astro");

const $$file$2 = "C:/Users/martinsito/Desktop/Workspace/Projects/Portfolio-Astro/src/pages/index.astro";
const $$url$2 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<h1 class="dark:text-light font-bold sm:text-3xl md:text-5xl my-10 mb-20">Projects</h1>${renderComponent($$result2, "PaginationChanges", PaginationChanges, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/react/PaginationChanges", "client:component-export": "PaginationChanges" })}` })}`;
}, "C:/Users/martinsito/Desktop/Workspace/Projects/Portfolio-Astro/src/pages/projects.astro");

const $$file$1 = "C:/Users/martinsito/Desktop/Workspace/Projects/Portfolio-Astro/src/pages/projects.astro";
const $$url$1 = "/projects";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro();
const $$Certifications = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Certifications;
  return renderTemplate`${maybeRenderHead($$result)}<div class="my-8">
    <h3 class="text-dark dark:text-light font-bold text-xl">Certifications & Courses</h3>

    ${info.courses.map((course) => renderTemplate`<div class="text-dark dark:text-light my-5 flex gap-y-5">
          <div class="ml-8">
            <p class="font-bold text-lg">${course.course}</p>
            <h3 class=" font-bold text-md text-light-green dark:text-light">${course.institute} <span class="font-light text-sm pl-3">${course.accomplishDate}</span></h3>
          </div>
        </div>`)}  
  </div>`;
}, "C:/Users/martinsito/Desktop/Workspace/Projects/Portfolio-Astro/src/components/general/Certifications.astro");

const $$Astro$3 = createAstro();
const $$Experience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Experience;
  return renderTemplate`${maybeRenderHead($$result)}<div class="my-8">
    <h3 class="text-dark dark:text-light font-bold text-xl">Experience</h3>

    ${info.experiences.map((data) => renderTemplate`<div class="text-dark dark:text-light my-10 flex gap-y-5">
        <div class="border-l-4 border-dark-green h-fit pl-8">
          <p class="font-bold text-lg">${data.role}</p>
          <h3 class=" font-bold text-md text-light-green dark:text-light">${data.company} <span class="font-light text-sm pl-3">${data.duration}</span></h3>
          <ul class="list-disc list-inside flex flex-col gap-y-2">
            ${data.work.map((work) => renderTemplate`<li>${work.exp}</li>`)}
          </ul>
        </div>
      </div>`)}
  </div>`;
}, "C:/Users/martinsito/Desktop/Workspace/Projects/Portfolio-Astro/src/components/general/Experience.astro");

const $$Astro$2 = createAstro();
const $$Education = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Education;
  return renderTemplate`${maybeRenderHead($$result)}<div class="my-8">
    <h3 class="text-dark dark:text-light font-bold text-xl">Education</h3>

    <div class="text-dark dark:text-light my-2 flex ">
      <div class="ml-8">
        <p class="font-bold text-lg">System Engineer</p>
        <h3 class=" font-bold text-lg">Universidad Católica Nordestana<span class="font-light text-sm pl-3">2017 - 2021</span></h3>
      </div>
    </div>
      
</div>`;
}, "C:/Users/martinsito/Desktop/Workspace/Projects/Portfolio-Astro/src/components/general/Education.astro");

const $$Astro$1 = createAstro();
const $$WhoAmI = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WhoAmI;
  return renderTemplate`${maybeRenderHead($$result)}<div class="flex sm:flex-col-reverse">
    <div class="md:flex-1">
  
      <div class="my-10">
        <h3 class="text-dark dark:text-light font-bold text-xl">Who am I?</h3>
    
        <div class="text-dark dark:text-light my-5 flex gap-y-5">
          <div class="ml-8">
            <p class="  text-lg">${info.aboutMe}</p>
          </div>
        </div>
    
        <h3 class="text-dark dark:text-light font-bold text-xl">Hobbies</h3>
    
        <div class="text-dark dark:text-light my-5 flex gap-y-5">
          <div class="ml-8">
            <p class="  text-lg">${info.hobbies}</p>
          </div>
        </div>
        
      </div>
    </div>
    <div class="md:flex-1 flex items-center justify-center">
      <img width="100" height="100"${addAttribute(info.profile, "src")} class="h-72 w-72 my-10 rounded-full" alt="Coding image">
    </div>
  </div>`;
}, "C:/Users/martinsito/Desktop/Workspace/Projects/Portfolio-Astro/src/components/general/WhoAmI.astro");

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<h1 class="text-dark dark:text-light font-bold text-3xl">About me</h1>${renderComponent($$result2, "WhoAmI", $$WhoAmI, {})}${renderComponent($$result2, "Education", $$Education, {})}${renderComponent($$result2, "Experience", $$Experience, {})}${renderComponent($$result2, "Certifications", $$Certifications, {})}${renderComponent($$result2, "ContactForm", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/martinsito/Desktop/Workspace/Projects/Portfolio-Astro/src/components/react", "client:component-export": "ContactForm" })}` })}`;
}, "C:/Users/martinsito/Desktop/Workspace/Projects/Portfolio-Astro/src/pages/about.astro");

const $$file = "C:/Users/martinsito/Desktop/Workspace/Projects/Portfolio-Astro/src/pages/about.astro";
const $$url = "/about";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b };
