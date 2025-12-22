import { IProject } from "@types";
import "../../styles/style.css";

interface ProjectProps {
  project: IProject;
}

export const Project = ({ project }: ProjectProps) => {
  return (
    <article 
      className="project-card group relative"
      role="article"
      aria-labelledby={`project-${project.name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {/* Image Container */}
      <div className="project-image-container">
        <div className="project-image-wrapper">
          <a
            href={project.isDeploy ? project.liveSite : project.code}
            target={project.isDeploy ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="block relative overflow-hidden rounded-lg"
            aria-label={`View ${project.name} project`}
          >
            <img
              src={project.image}
              alt={`${project.name} project screenshot`}
              className="project-image w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-green/80 via-transparent to-transparent dark:from-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>

      {/* Content Container */}
      <div className="project-content">
        <div className="project-content-inner">
          <div className="flex items-center gap-2 mb-2">
            <p className="project-label">
              Featured Project
            </p>
            {/* Project Type Badge */}
            {(project.clientProject || project.projectType === "client") ? (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800" title="Client Project">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                Client
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-semibold bg-dark-green/10 dark:bg-light-green/20 text-dark-green dark:text-light-green rounded-full border border-dark-green/20 dark:border-light-green/30" title="Personal Project">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Personal
              </span>
            )}
          </div>
          
          <h3 
            id={`project-${project.name.toLowerCase().replace(/\s+/g, '-')}`}
            className="project-title"
          >
            <a
              href={project.isDeploy ? project.liveSite : project.code}
              target={project.isDeploy ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="hover:text-dark-green dark:hover:text-light-green transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-dark-green dark:focus:ring-light-green focus:ring-offset-2 rounded"
            >
              {project.name}
            </a>
          </h3>
          
          {/* Client Name (if client project) */}
          {project.clientName && (
            <p className="text-sm text-dark-green dark:text-light-green font-medium mb-2">
              For {project.clientName}
            </p>
          )}
          
          <p className="project-description">
            {project.description}
          </p>

          {/* Technologies */}
          <ul className="project-technologies" role="list">
            {project.technologies.map((tech: string, index: number) => (
              <li 
                key={index}
                className="project-tech-item"
                role="listitem"
              >
                {tech}
              </li>
            ))}
          </ul>

          {/* Action Links */}
          <div className="project-links">
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label={`View ${project.name} source code on GitHub`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
                aria-hidden="true"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              <span className="sr-only">GitHub</span>
            </a>
            
            {project.isDeploy && (
              <a
                href={project.liveSite}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label={`Visit ${project.name} live site`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                <span className="sr-only">External Link</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
