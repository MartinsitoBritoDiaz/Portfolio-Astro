import { useState } from "react";

export interface Page<T> {
  content: T[];
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalElements: number;
}

export interface PaginatorProps<T> {
  items: T[];
  pageSize: number;
  children: (page: Page<T>) => React.ReactNode;
}

function Paginator<T>({ items, pageSize, children }: PaginatorProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  console.log("#########################################################################")

  const totalPages = Math.ceil(items.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, items.length);
  const content = items.slice(startIndex, endIndex);
  console.log(content);

  const totalElements = items.length;

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const page: Page<T> = {
    content,
    pageNumber: currentPage,
    pageSize,
    totalPages,
    totalElements,
  };

  return <>{children(page)}</>;
}

export default Paginator;
