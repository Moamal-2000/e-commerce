import { useState } from "react";

const usePagination = (totalItems, itemsPerPage, pageNumber) => {
  const [currentPage, setCurrentPage] = useState(pageNumber);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  function nextPage() {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  }

  function prevPage() {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  }

  function goToPage(page) {
    const pageNumber = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(pageNumber);
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage - 1, totalItems - 1);

  const paginationInfo = {
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
    startIndex,
    endIndex,
  };

  return paginationInfo;
};

export default usePagination;
