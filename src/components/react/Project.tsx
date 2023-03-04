import { useState } from 'react';
import { IProject } from "@types";
import "../../styles/style.css";

interface myComponent {
    project: IProject;
}

export const Project = (props: myComponent) => {

    return (
<div className="cont">
    <div className="card-cont-2">
      <div className="img-p3">
        <img
          src={props.project.image}
          className="img-p1 md:max-w-lg max-w-full"
          alt={props.project.name}
          loading="lazy"
        />
      </div>
    </div>
    <div className="card-cont-1 flex flex-col md:items-end sm:text-justify text-light gap-y-2 ">
      <p className="font-bold dark:text-light-green text-dark-green text-sm">
        Feature project
      </p>
      <h3 className="text-dark-green dark:text-light font-bold text-2xl">
        {props.project.name}
      </h3>
      <p className="paragraph-card my-2 p-5 sm:pl-0 max-w-lg text-dark-green font-bold dark:text-light">
        {props.project.description}
      </p>
      <ul className="flex gap-4">
        {props.project.technologies.map((tech: string) => (
          <li className="font-bold text-dark-green dark:text-light">
            {tech.toUpperCase()}
          </li>
        ))}
      </ul>
      <div className="flex gap-x-2">
        <a
          className="h-8 w-8 github-icon cursor-pointer "
          href={props.project.code}
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 30 30"
            className="dark:stroke-light stroke-dark-green hover:stroke-[#009644] dark:hover:stroke-[#878b80]"
            fill="none"
          >
            <>
              <title>GitHub</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </>
          </svg>
        </a>
        <a
          className={`h-8 w-8 github-icon cursor-pointer ${
            !props.project.isDeploy ? "hidden" : "block"
          }`}
          href={props.project.liveSite}
          target="_blank"
        >
          <svg
            className="path-link dark:stroke-light stroke-dark-green hover:fill-[#009644] dark:hover:fill-[#878b80] hover:stroke-[#009644] dark:hover:stroke-[#878b80] fill-dark-green dark:fill-light "
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 130 256"
          >
            <path
              className=" "
              d="M 86 34.303 c -2.209 0 -4 -1.791 -4 -4 V 8 H 59.697 c -2.209 0 -4 -1.791 -4 -4 s 1.791 -4 4 -4 H 86 c 2.209 0 4 1.791 4 4 v 26.303 C 90 32.512 88.209 34.303 86 34.303 z"
              transform=" matrix(1 0 0 1 0 0) "
              stroke-linecap="round"
            />
            <path
              className=" "
              d="M 33.395 60.604 c -1.024 0 -2.047 -0.391 -2.829 -1.172 c -1.562 -1.562 -1.562 -4.095 0 -5.656 L 83.172 1.171 c 1.561 -1.562 4.094 -1.562 5.656 0 c 1.563 1.563 1.563 4.095 0 5.657 L 36.224 59.433 C 35.442 60.214 34.418 60.604 33.395 60.604 z"
              transform=" matrix(1 0 0 1 0 0) "
              stroke-linecap="round"
            />
            <path
              className=" "
              d="M 75.128 90 H 14.872 C 6.671 90 0 83.328 0 75.128 V 14.872 C 0 6.671 6.671 0 14.872 0 h 18.523 c 2.209 0 4 1.791 4 4 s -1.791 4 -4 4 H 14.872 C 11.083 8 8 11.083 8 14.872 v 60.256 C 8 78.917 11.083 82 14.872 82 h 60.256 C 78.917 82 82 78.917 82 75.128 V 56.604 c 0 -2.209 1.791 -4 4 -4 s 4 1.791 4 4 v 18.523 C 90 83.328 83.328 90 75.128 90 z"
              transform=" matrix(1 0 0 1 0 0) "
              stroke-linecap="round"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
    )
}
