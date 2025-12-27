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
              className="w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-3 sm:py-3.5 text-sm sm:text-base bg-white dark:bg-[#1a1a1a] border-2 border-dark-green/20 dark:border-light-green/20 rounded-xl text-dark dark:text-light placeholder:text-light-green/50 dark:placeholder:text-light-green/30 focus:outline-none focus:ring-2 focus:ring-dark-green dark:focus:ring-light-green focus:border-dark-green dark:focus:border-light-green transition-all duration-200 shadow-sm"
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
                className="absolute inset-y-0 right-0 pr-3 sm:pr-4 flex items-center text-light-green dark:text-light-green/70 hover:text-dark-green dark:hover:text-light-green transition-colors cursor-pointer touch-manipulation"
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

        {/* Filters Container */}
        <div className="bg-white dark:bg-[#1a1a1a] rounded-xl p-4 sm:p-6 border border-dark-green/10 dark:border-light-green/20 shadow-sm">
          <div className="flex flex-col gap-5 sm:gap-6">
            {/* Project Type Filter */}
            <div className="filter-group">
              <label className="block text-xs sm:text-sm font-semibold text-dark dark:text-light mb-3 sm:mb-4 uppercase tracking-wide">
                Project Type
              </label>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleProjectTypeFilter("all");
                  }}
                  className={`px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-green dark:focus:ring-light-green cursor-pointer touch-manipulation min-h-[44px] ${
                    projectTypeFilter === "all"
                      ? "bg-dark-green dark:bg-light-green text-white shadow-md"
                      : "bg-white dark:bg-[#252525] text-dark-green dark:text-light-green border-2 border-dark-green/20 dark:border-light-green/20 hover:border-dark-green dark:hover:border-light-green hover:shadow-sm"
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
                  className={`px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-green dark:focus:ring-light-green cursor-pointer touch-manipulation min-h-[44px] ${
                    projectTypeFilter === "client"
                      ? "bg-dark-green dark:bg-light-green text-white shadow-md"
                      : "bg-white dark:bg-[#252525] text-dark-green dark:text-light-green border-2 border-dark-green/20 dark:border-light-green/20 hover:border-dark-green dark:hover:border-light-green hover:shadow-sm"
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
                  className={`px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-green dark:focus:ring-light-green cursor-pointer touch-manipulation min-h-[44px] ${
                    projectTypeFilter === "personal"
                      ? "bg-dark-green dark:bg-light-green text-white shadow-md"
                      : "bg-white dark:bg-[#252525] text-dark-green dark:text-light-green border-2 border-dark-green/20 dark:border-light-green/20 hover:border-dark-green dark:hover:border-light-green hover:shadow-sm"
                  }`}
                  aria-pressed={projectTypeFilter === "personal"}
                >
                  Personal Projects
                </button>
              </div>
            </div>

            {/* Technology Filter */}
            <div className="filter-group">
              <label className="block text-xs sm:text-sm font-semibold text-dark dark:text-light mb-3 sm:mb-4 uppercase tracking-wide">
                Technology
              </label>
              <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                <div className="flex gap-2 sm:gap-3 min-w-max sm:flex-wrap">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleTechFilter("all");
                    }}
                    className={`px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-green dark:focus:ring-light-green cursor-pointer touch-manipulation min-h-[44px] whitespace-nowrap flex-shrink-0 ${
                      selectedTech === "all"
                        ? "bg-dark-green dark:bg-light-green text-white shadow-md"
                        : "bg-white dark:bg-[#252525] text-dark-green dark:text-light-green border-2 border-dark-green/20 dark:border-light-green/20 hover:border-dark-green dark:hover:border-light-green hover:shadow-sm"
                    }`}
                    aria-pressed={selectedTech === "all"}
                  >
                    All
                  </button>
                  {allTechnologies.slice(0, 10).map((tech) => (
                    <button
                      key={tech}
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleTechFilter(tech);
                      }}
                      className={`px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-green dark:focus:ring-light-green cursor-pointer touch-manipulation min-h-[44px] whitespace-nowrap flex-shrink-0 ${
                        selectedTech.toLowerCase() === tech.toLowerCase()
                          ? "bg-dark-green dark:bg-light-green text-white shadow-md"
                          : "bg-white dark:bg-[#252525] text-dark-green dark:text-light-green border-2 border-dark-green/20 dark:border-light-green/20 hover:border-dark-green dark:hover:border-light-green hover:shadow-sm"
                      }`}
                      aria-pressed={selectedTech.toLowerCase() === tech.toLowerCase()}
                    >
                      {tech.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Deployment Filter */}
            <div className="filter-group border-t border-dark-green/10 dark:border-light-green/20 pt-4 sm:pt-5">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={showDeployedOnly}
                  onChange={handleDeploymentFilter}
                  className="w-5 h-5 sm:w-6 sm:h-6 text-dark-green dark:text-light-green border-2 border-dark-green/30 dark:border-light-green/30 rounded focus:ring-2 focus:ring-dark-green dark:focus:ring-light-green cursor-pointer touch-manipulation"
                  aria-label="Show only deployed projects"
                />
                <span className="text-sm sm:text-base font-medium text-dark dark:text-light group-hover:text-dark-green dark:group-hover:text-light-green transition-colors">
                  Show only live demos
                </span>
              </label>
            </div>
          </div>

          {/* Active Filters & Clear */}
          {hasActiveFilters && (
            <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-dark-green/10 dark:border-light-green/20">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <span className="text-xs sm:text-sm font-semibold text-dark/70 dark:text-light/70 uppercase tracking-wide">
                  Active Filters:
                </span>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  {searchQuery && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm bg-dark-green/10 dark:bg-light-green/20 text-dark-green dark:text-light-green rounded-full font-medium">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      "{searchQuery}"
                    </span>
                  )}
                  {selectedTech !== "all" && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm bg-dark-green/10 dark:bg-light-green/20 text-dark-green dark:text-light-green rounded-full font-medium">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      {selectedTech.toUpperCase()}
                    </span>
                  )}
                  {projectTypeFilter !== "all" && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm bg-dark-green/10 dark:bg-light-green/20 text-dark-green dark:text-light-green rounded-full font-medium">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {projectTypeFilter === "client" ? "Client" : "Personal"}
                    </span>
                  )}
                  {showDeployedOnly && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm bg-dark-green/10 dark:bg-light-green/20 text-dark-green dark:text-light-green rounded-full font-medium">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Live Demos
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      clearFilters();
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-semibold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 focus:ring-offset-2 rounded cursor-pointer touch-manipulation"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Clear All
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mt-4 sm:mt-5 text-xs sm:text-sm text-dark/70 dark:text-light/70 font-medium">
          Showing <span className="font-semibold text-dark dark:text-light">{paginatedProjects.length}</span> of <span className="font-semibold text-dark dark:text-light">{filteredProjects.length}</span> project
          {filteredProjects.length !== 1 ? "s" : ""}
          {filteredProjects.length !== projectsList.length && (
            <span className="ml-1">
              (filtered from <span className="font-semibold">{projectsList.length}</span> total)
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
              className="pagination-nav mt-8 sm:mt-12"
              aria-label="Projects pagination"
            >
              {/* Mobile: Simplified Pagination */}
              <div className="flex sm:hidden items-center justify-between gap-3 bg-white dark:bg-[#1a1a1a] rounded-xl p-4 border border-dark-green/10 dark:border-light-green/20 shadow-sm">
                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage <= 1}
                  className="flex items-center justify-center w-12 h-12 rounded-lg text-dark-green dark:text-light-green bg-dark-green/10 dark:bg-light-green/20 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-dark-green/20 dark:hover:bg-light-green/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-dark-green dark:focus:ring-light-green focus:ring-offset-2 touch-manipulation"
                  aria-label="Go to previous page"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="flex-1 text-center">
                  <span className="text-sm font-semibold text-dark dark:text-light">
                    Page {currentPage}
                  </span>
                  <span className="text-xs text-dark/60 dark:text-light/60 block mt-0.5">
                    of {totalPages}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage >= totalPages}
                  className="flex items-center justify-center w-12 h-12 rounded-lg text-dark-green dark:text-light-green bg-dark-green/10 dark:bg-light-green/20 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-dark-green/20 dark:hover:bg-light-green/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-dark-green dark:focus:ring-light-green focus:ring-offset-2 touch-manipulation"
                  aria-label="Go to next page"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Desktop: Full Pagination */}
              <div className="hidden sm:flex items-center justify-between gap-4 bg-white dark:bg-[#1a1a1a] rounded-xl p-4 sm:p-5 border border-dark-green/10 dark:border-light-green/20 shadow-sm">
                {/* Page Info */}
                <div className="text-sm font-medium text-dark/70 dark:text-light/70">
                  Page <span className="font-semibold text-dark dark:text-light">{currentPage}</span> of <span className="font-semibold text-dark dark:text-light">{totalPages}</span>
                </div>

                {/* Pagination Controls */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage <= 1}
                    className="inline-flex items-center px-4 py-2.5 text-sm font-semibold text-dark-green dark:text-light-green bg-dark-green/10 dark:bg-light-green/20 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-dark-green/20 dark:hover:bg-light-green/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-green dark:focus:ring-light-green"
                    aria-label="Go to previous page"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    Previous
                  </button>

                  {/* Page Numbers */}
                  <div className="flex items-center gap-1.5">
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
                              className={`min-w-[2.75rem] h-10 px-3 text-sm font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-green dark:focus:ring-light-green ${
                                currentPage === page
                                  ? "bg-dark-green dark:bg-light-green text-white shadow-md"
                                  : "bg-white dark:bg-[#252525] text-dark-green dark:text-light-green border-2 border-dark-green/20 dark:border-light-green/20 hover:border-dark-green dark:hover:border-light-green hover:shadow-sm"
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
                              className="px-2 text-dark/40 dark:text-light/40 font-medium"
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
                    className="inline-flex items-center px-4 py-2.5 text-sm font-semibold text-dark-green dark:text-light-green bg-dark-green/10 dark:bg-light-green/20 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-dark-green/20 dark:hover:bg-light-green/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-green dark:focus:ring-light-green"
                    aria-label="Go to next page"
                  >
                    Next
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
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
