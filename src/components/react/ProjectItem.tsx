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
          <h3 
            id={`project-item-${project.name.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-xl sm:text-2xl font-bold text-dark dark:text-light mb-2 group-hover:text-dark-green dark:group-hover:text-light-green transition-colors duration-200"
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
