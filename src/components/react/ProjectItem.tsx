import { IProject } from "@types";

interface ProjectItemProps {
  project: IProject;
}

export const ProjectItem = ({ project }: ProjectItemProps) => {
  return (
    <article 
      className="project-card-item group relative bg-white dark:bg-[#1a1a1a] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-dark-green/10 dark:border-light-green/20 hover:border-dark-green/30 dark:hover:border-light-green/40 hover:-translate-y-1"
      role="article"
      aria-labelledby={`project-item-${project.name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-dark-green/5 dark:bg-light-green/5">
        <a
          href={project.isDeploy ? project.liveSite : project.code}
          target={project.isDeploy ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="block relative aspect-video overflow-hidden"
          aria-label={`View ${project.name} project`}
        >
          <img
            src={project.image}
            alt={`${project.name} project screenshot`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-green/90 via-dark-green/50 to-transparent dark:from-dark/90 dark:via-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Action buttons - visible on hover */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-white/90 dark:bg-dark/90 backdrop-blur-sm rounded-full text-dark-green dark:text-light-green hover:bg-white dark:hover:bg-dark transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-dark-green dark:focus:ring-light-green focus:ring-offset-2"
              aria-label={`View ${project.name} source code on GitHub`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
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
                className="flex items-center justify-center w-10 h-10 bg-white/90 dark:bg-dark/90 backdrop-blur-sm rounded-full text-dark-green dark:text-light-green hover:bg-white dark:hover:bg-dark transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-dark-green dark:focus:ring-light-green focus:ring-offset-2"
                aria-label={`Visit ${project.name} live site`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
        </a>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="mb-4">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 
              id={`project-item-${project.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-xl sm:text-2xl font-bold text-dark dark:text-light group-hover:text-dark-green dark:group-hover:text-light-green transition-colors duration-200 flex-1"
            >
              <a
                href={project.isDeploy ? project.liveSite : project.code}
                target={project.isDeploy ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-dark-green dark:focus:ring-light-green focus:ring-offset-2 rounded"
              >
                {project.name}
              </a>
            </h3>
            {/* Project Type Badge */}
            {(project.clientProject || project.projectType === "client") ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800 flex-shrink-0" title="Client Project">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                Client
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold bg-dark-green/10 dark:bg-light-green/20 text-dark-green dark:text-light-green rounded-full border border-dark-green/20 dark:border-light-green/30 flex-shrink-0" title="Personal Project">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Personal
              </span>
            )}
          </div>
          
          {/* Client Name (if client project) */}
          {project.clientName && (
            <p className="text-sm text-dark-green dark:text-light-green font-medium mb-2">
              For {project.clientName}
            </p>
          )}
          
          <p className="text-base text-dark/80 dark:text-light/80 leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string, index: number) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-dark-green/10 dark:bg-light-green/20 text-dark-green dark:text-light-green border border-dark-green/20 dark:border-light-green/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer with links */}
        <div className="flex items-center justify-between pt-4 border-t border-dark-green/10 dark:border-light-green/20">
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-dark-green dark:text-light-green hover:underline focus:outline-none focus:ring-2 focus:ring-dark-green dark:focus:ring-light-green focus:ring-offset-2 rounded"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            View Code
          </a>
          
          {project.isDeploy && (
            <a
              href={project.liveSite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-dark-green dark:text-light-green hover:underline focus:outline-none focus:ring-2 focus:ring-dark-green dark:focus:ring-light-green focus:ring-offset-2 rounded"
            >
              <span>Live Demo</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
