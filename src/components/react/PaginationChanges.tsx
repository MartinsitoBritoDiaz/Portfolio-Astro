
import { info } from "@data";
import { ProjectItem } from "./ProjectItem";
import { useState } from "react";
import { IProject } from "@types";


export  const PaginationChanges = () => {
  const pageSize = 8;
  
  const [currentPage, setCurrentPage] = useState(1);
  const [projects, setProjects] = useState<IProject[]>(info.work.projects);

  const totalPages = Math.ceil(projects.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, projects.length);
  const content = projects.slice(startIndex, endIndex);
  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div>
    <div className="grid md:grid-cols-2 gap-10 sm:gap-y-20 sm:grid-cols-1 mb-10 ">
      {
          content.map(( project: IProject, index: number ) => (
              <ProjectItem key={index} project={project} />
          ))
      }
    </div>
      
      <div className="flex place-content-center justify-center my-10 mt-0">
          <button
              type="button"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={ currentPage <= 1 ? true : false }
              className={`disabled:opacity-50  inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-light bg-dark-green rounded-lg  dark:bg-dark-green dark:border-gray-700 dark:text-light ${ (currentPage <= 1 ? true : false) ? '' : 'hover:bg-gray-500 hover:text-light dark:hover:bg-gray-700 dark:hover:text-light'}`}
          >
              <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
              Previous
          </button>

          <button
          
              disabled={currentPage >= totalPages}
              type="button"
              onClick={() => handlePageChange(currentPage + 1)}
              className={`disabled:opacity-50  inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-light bg-dark-green rounded-lg  dark:bg-dark-green dark:border-gray-700 dark:text-light ${currentPage >= totalPages ? '' : 'hover:bg-gray-500 hover:text-light dark:hover:bg-gray-700 dark:hover:text-light'}`}
          >
              Next
              <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>
      </div>
    </div>
  );
};
