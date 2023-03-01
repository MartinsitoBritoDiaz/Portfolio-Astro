
import { info } from "@data";
import Paginator, { Page } from "./Paginator";
import { ProjectItem } from "./ProjectItem";
import { useState } from "react";
import { IProject } from "@types";


export  const PaginationChanges = () => {
  const pageSize = 2;

  const renderPage = (page: Page<{}>) => {
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (event: any) => {
        const element = event.currentTarget;
        element.setPointerCapture(event?.pointerId);
        console.log("Hello")

        // const pageNumber: number = 2;
        // console.log(pageNumber)

        // if (pageNumber >= 1 && pageNumber <= Math.ceil(info.work.projects.length / pageSize)) {
        // setCurrentPage(pageNumber);
        // }
    };


    return (
      <div className="grid md:grid-cols-2 gap-10 sm:gap-y-20 sm:grid-cols-1">
        {
            page.content.map(( project: IProject, index: number ) => (
                <ProjectItem key={index} project={project} />
            ))
        }
        <div className="text-light">
          Page {page.pageNumber} of {page.totalPages}
        </div>
        
        <div className="flex place-content-center justify-center my-10 mt-0">
            <button
            type="button"
                disabled={page.pageNumber <= 1}
                className="inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-dark-green bg-light border border-dark-green rounded-lg hover:bg-gray-500 hover:text-light dark:bg-dark-green dark:border-gray-700 dark:text-light dark:hover:bg-gray-700 dark:hover:text-light"       //   onClick={() => handlePageChange(page.pageNumber - 1)}
            >
                <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                Previous
            </button>

            <button
                // disabled={page.pageNumber >= page.totalPages}
                type="button"
                onClick={(e) => handlePageChange(e)}
                className="inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-dark-green bg-light border border-dark-green rounded-lg hover:bg-gray-500 hover:text-light dark:bg-dark-green dark:border-gray-700 dark:text-light dark:hover:bg-gray-700 dark:hover:text-light"
            >
                Next
                <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
        </div>
      </div>
    );
  };

  return (
    <Paginator items={info.work.projects} pageSize={pageSize}>
      {(page: Page<{}>) => renderPage(page)}
    </Paginator>
  );
}
