import React from "react";
import "./projects.css";
import IMG1 from "../assets/Jobplus App 1 1.svg";
import IMG2 from "../assets/Website 1.svg";
import IMG3 from "../assets/Prototype 1.svg";
import IMG4 from "../assets/Jobplus App 1 1.svg";
import IMG5 from "../assets/Website 1.svg";
import IMG6 from "../assets/Prototype 1.svg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Jobplus App",
    github: "https://github.com",
    demo: "https://onomavwe.github.io",
  },
  {
    id: 2,
    image: IMG2,
    title: "Event Management App",
    github: "https://github.com",
    demo: "https://brilliant-maamoul-4a5ba3.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Figma dashboard UI kit for data design web apps",
    github: "https://github.com",
    demo: "https://onomavwe.github.io",
  },
  {
    id: 4,
    image: IMG4,
    title: "Maitaining tasks and tracking progress",
    github: "https://github.com",
    demo: "https://onomavwe.github.io",
  },
  {
    id: 5,
    image: IMG5,
    title: "Figma dashboard UI kit for data design web apps",
    github: "https://github.com",
    demo: "https://onomavwe.github.io",
  },
  {
    id: 6,
    image: IMG6,
    title: "Figma dashboard UI kit for data design web apps",
    github: "https://github.com",
    demo: "https://onomavwe.github.io",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container projects__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="project__item" item>
              <div className="project__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="project__item-cta">
                <a href={github} className="btn" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
