import { ProjectItem } from "./ProjectItem";
import { useState, useMemo, useEffect } from "react";
import { IProject } from "@types";

interface PaginationChangesProps {
  projects: IProject[];
}

export const PaginationChanges = ({ projects = [] }: PaginationChangesProps) => {
  const pageSize = 9;
  
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTech, setSelectedTech] = useState<string>("all");
  const [showDeployedOnly, setShowDeployedOnly] = useState(false);
  const [projectTypeFilter, setProjectTypeFilter] = useState<"all" | "client" | "personal">("all");

  // Ensure we have projects data
  const projectsList = Array.isArray(projects) ? projects : [];

  // Get all unique technologies from projects
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projectsList.forEach((project) => {
      if (project.technologies && Array.isArray(project.technologies)) {
        project.technologies.forEach((tech) => {
          if (tech && typeof tech === 'string') {
            techSet.add(tech.toLowerCase());
          }
        });
      }
    });
    return Array.from(techSet).sort();
  }, [projectsList]);

  // Filter projects based on search, technology, and deployment status
  const filteredProjects = useMemo(() => {
    if (!projectsList || projectsList.length === 0) return [];
    
    return projectsList.filter((project) => {
      // Search filter
      const matchesSearch =
        searchQuery === "" ||
        (project.name && project.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (project.description && project.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (project.technologies && project.technologies.some((tech) =>
          tech && tech.toLowerCase().includes(searchQuery.toLowerCase())
        ));

      // Technology filter
      const matchesTech =
        selectedTech === "all" ||
        (project.technologies && project.technologies.some(
          (tech) => tech && tech.toLowerCase() === selectedTech.toLowerCase()
        ));

      // Deployment filter
      const matchesDeployment =
        !showDeployedOnly || project.isDeploy === true;

      // Project type filter
      const isClientProject = project.clientProject === true || project.projectType === "client";
      const isPersonalProject = !project.clientProject && project.projectType !== "client";
      
      const matchesProjectType =
        projectTypeFilter === "all" ||
        (projectTypeFilter === "client" && isClientProject) ||
        (projectTypeFilter === "personal" && isPersonalProject);

      return matchesSearch && matchesTech && matchesDeployment && matchesProjectType;
    });
  }, [projectsList, searchQuery, selectedTech, showDeployedOnly, projectTypeFilter]);

  const totalPages = Math.ceil(filteredProjects.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredProjects.length);
  const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      // Scroll to top of projects section
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const value = e.target.value;
    setSearchQuery((prev) => value);
    setCurrentPage(1);
  };

  const handleTechFilter = (tech: string) => {
    setSelectedTech((prev) => tech);
    setCurrentPage((prev) => 1);
  };

  const handleDeploymentFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const checked = e.target.checked;
    setShowDeployedOnly((prev) => checked);
    setCurrentPage((prev) => 1);
  };

  const handleProjectTypeFilter = (type: "all" | "client" | "personal") => {
    setProjectTypeFilter((prev) => type);
    setCurrentPage((prev) => 1);
  };

  const clearFilters = () => {
    setSearchQuery((prev) => "");
    setSelectedTech((prev) => "all");
    setShowDeployedOnly((prev) => false);
    setProjectTypeFilter((prev) => "all");
    setCurrentPage((prev) => 1);
  };

  const hasActiveFilters =
    searchQuery !== "" || selectedTech !== "all" || showDeployedOnly || projectTypeFilter !== "all";

  return (
    <section className="projects-content" aria-labelledby="projects-content-heading">
      {/* Search and Filters */}
      <div className="filters-section mb-8 sm:mb-12">
        {/* Search Bar */}
        <div className="mb-6">
          <label htmlFor="project-search" className="sr-only">
            Search projects
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-light-green dark:text-light-green/70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              id="project-search"
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white dark:bg-[#1a1a1a] border-2 border-dark-green/20 dark:border-light-green/20 rounded-lg text-dark dark:text-light placeholder:text-light-green/50 dark:placeholder:text-light-green/30 focus:outline-none focus:ring-2 focus:ring-dark-green dark:focus:ring-light-green focus:border-dark-green dark:focus:border-light-green transition-all duration-200"
              aria-label="Search projects"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSearchQuery("");
                  setCurrentPage(1);
                }}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-light-green dark:text-light-green/70 hover:text-dark-green dark:hover:text-light-green transition-colors cursor-pointer"
                aria-label="Clear search"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Filters Row */}
        <div className="flex flex-col gap-4">
          {/* Project Type Filter */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
            <span className="text-xs sm:text-sm font-semibold text-dark dark:text-light whitespace-nowrap">
              Project type:
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleProjectTypeFilter("all");
                }}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-green dark:focus:ring-light-green cursor-pointer ${
                  projectTypeFilter === "all"
                    ? "bg-dark-green dark:bg-light-green text-white"
                    : "bg-white dark:bg-[#1a1a1a] text-dark-green dark:text-light-green border-2 border-dark-green/20 dark:border-light-green/20 hover:border-dark-green dark:hover:border-light-green"
                }`}
                aria-pressed={projectTypeFilter === "all"}
              >
                All Projects
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleProjectTypeFilter("client");
                }}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-green dark:focus:ring-light-green cursor-pointer ${
                  projectTypeFilter === "client"
                    ? "bg-blue-600 dark:bg-blue-500 text-white"
                    : "bg-white dark:bg-[#1a1a1a] text-blue-600 dark:text-blue-400 border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600"
                }`}
                aria-pressed={projectTypeFilter === "client"}
              >
                Client Projects
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleProjectTypeFilter("personal");
                }}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-green dark:focus:ring-light-green cursor-pointer ${
                  projectTypeFilter === "personal"
                    ? "bg-dark-green dark:bg-light-green text-white"
                    : "bg-white dark:bg-[#1a1a1a] text-dark-green dark:text-light-green border-2 border-dark-green/20 dark:border-light-green/20 hover:border-dark-green dark:hover:border-light-green"
                }`}
                aria-pressed={projectTypeFilter === "personal"}
              >
                Personal Projects
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Technology Filter */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <span className="text-xs sm:text-sm font-semibold text-dark dark:text-light whitespace-nowrap">
                Filter by technology:
              </span>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleTechFilter("all");
                  }}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-green dark:focus:ring-light-green cursor-pointer ${
                    selectedTech === "all"
                      ? "bg-dark-green dark:bg-light-green text-white"
                      : "bg-white dark:bg-[#1a1a1a] text-dark-green dark:text-light-green border-2 border-dark-green/20 dark:border-light-green/20 hover:border-dark-green dark:hover:border-light-green"
                  }`}
                  aria-pressed={selectedTech === "all"}
                >
                  All
                </button>
                {allTechnologies.slice(0, 8).map((tech) => (
                  <button
                    key={tech}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleTechFilter(tech);
                    }}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-green dark:focus:ring-light-green cursor-pointer ${
                      selectedTech.toLowerCase() === tech.toLowerCase()
                        ? "bg-dark-green dark:bg-light-green text-white"
                        : "bg-white dark:bg-[#1a1a1a] text-dark-green dark:text-light-green border-2 border-dark-green/20 dark:border-light-green/20 hover:border-dark-green dark:hover:border-light-green"
                    }`}
                    aria-pressed={selectedTech.toLowerCase() === tech.toLowerCase()}
                  >
                    {tech.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Deployment Filter */}
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showDeployedOnly}
                  onChange={handleDeploymentFilter}
                  className="w-4 h-4 text-dark-green dark:text-light-green border-dark-green/30 dark:border-light-green/30 rounded focus:ring-2 focus:ring-dark-green dark:focus:ring-light-green"
                  aria-label="Show only deployed projects"
                />
                <span className="text-sm font-medium text-dark dark:text-light">
                  Live demos only
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Active Filters & Clear */}
        {hasActiveFilters && (
          <div className="mt-4 flex items-center gap-3 flex-wrap">
            <span className="text-sm text-dark/70 dark:text-light/70">
              Active filters:
            </span>
            {searchQuery && (
              <span className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-dark-green/10 dark:bg-light-green/20 text-dark-green dark:text-light-green rounded-full">
                Search: "{searchQuery}"
              </span>
            )}
            {selectedTech !== "all" && (
              <span className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-dark-green/10 dark:bg-light-green/20 text-dark-green dark:text-light-green rounded-full">
                Tech: {selectedTech.toUpperCase()}
              </span>
            )}
            {projectTypeFilter !== "all" && (
              <span className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-dark-green/10 dark:bg-light-green/20 text-dark-green dark:text-light-green rounded-full">
                Type: {projectTypeFilter === "client" ? "Client" : "Personal"}
              </span>
            )}
            {showDeployedOnly && (
              <span className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-dark-green/10 dark:bg-light-green/20 text-dark-green dark:text-light-green rounded-full">
                Live demos
              </span>
            )}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                clearFilters();
              }}
              className="text-sm font-medium text-dark-green dark:text-light-green hover:underline focus:outline-none focus:ring-2 focus:ring-dark-green dark:focus:ring-light-green focus:ring-offset-2 rounded cursor-pointer"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Results Count */}
        <div className="mt-4 text-sm text-dark/70 dark:text-light/70">
          Showing {paginatedProjects.length} of {filteredProjects.length} project
          {filteredProjects.length !== 1 ? "s" : ""}
          {filteredProjects.length !== projectsList.length && (
            <span className="ml-1">
              (filtered from {projectsList.length} total)
            </span>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      {paginatedProjects.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {paginatedProjects.map((project: IProject, index: number) => (
              <div
                key={`${project.name}-${index}`}
                className="project-item-wrapper"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <ProjectItem project={project} />
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <nav
              className="pagination-nav"
              aria-label="Projects pagination"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Page Info */}
                <div className="text-sm text-dark/70 dark:text-light/70">
                  Page {currentPage} of {totalPages}
                </div>

                {/* Pagination Controls */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage <= 1}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-dark-green dark:bg-light-green rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-dark-green/90 dark:hover:bg-light-green/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-green dark:focus:ring-light-green"
                    aria-label="Go to previous page"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Previous
                  </button>

                  {/* Page Numbers */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => {
                        // Show first page, last page, current page, and pages around current
                        if (
                          page === 1 ||
                          page === totalPages ||
                          (page >= currentPage - 1 && page <= currentPage + 1)
                        ) {
                          return (
                            <button
                              key={page}
                              type="button"
                              onClick={() => handlePageChange(page)}
                              className={`min-w-[2.5rem] px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-green dark:focus:ring-light-green ${
                                currentPage === page
                                  ? "bg-dark-green dark:bg-light-green text-white"
                                  : "bg-white dark:bg-[#1a1a1a] text-dark-green dark:text-light-green border-2 border-dark-green/20 dark:border-light-green/20 hover:border-dark-green dark:hover:border-light-green"
                              }`}
                              aria-label={`Go to page ${page}`}
                              aria-current={currentPage === page ? "page" : undefined}
                            >
                              {page}
                            </button>
                          );
                        } else if (
                          page === currentPage - 2 ||
                          page === currentPage + 2
                        ) {
                          return (
                            <span
                              key={page}
                              className="px-2 text-dark/50 dark:text-light/50"
                              aria-hidden="true"
                            >
                              ...
                            </span>
                          );
                        }
                        return null;
                      }
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage >= totalPages}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-dark-green dark:bg-light-green rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-dark-green/90 dark:hover:bg-light-green/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-green dark:focus:ring-light-green"
                    aria-label="Go to next page"
                  >
                    Next
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </nav>
          )}
        </>
      ) : (
        <div className="text-center py-16">
          <svg
            className="w-16 h-16 mx-auto text-light-green dark:text-light-green/50 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="text-xl font-bold text-dark dark:text-light mb-2">
            No projects found
          </h3>
          <p className="text-dark/70 dark:text-light/70 mb-4">
            Try adjusting your search or filter criteria.
          </p>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex items-center gap-2 px-6 py-3 bg-dark-green dark:bg-light-green text-white font-semibold rounded-lg hover:bg-dark-green/90 dark:hover:bg-light-green/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-green dark:focus:ring-light-green"
            >
              Clear Filters
            </button>
          )}
        </div>
      )}
    </section>
  );
};
