import React, { useState } from "react";
const items = Array.from({ length: 100 }, (_, index) => `Item ${index + 1}`);
const itemsPerPage = 10;

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = items.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

 const renderPageNumbers = () => {
   const pageNumbers: (number | string)[] = [];
   const maxVisiblePages = 5; // Adjust this value as needed

   if (totalPages <= maxVisiblePages) {
     // If there are fewer pages than the maximum visible pages, display all page numbers.
     for (let i = 1; i <= totalPages; i++) {
       pageNumbers.push(i);
     }
   } else {
     // If there are more pages, display ellipsis and select pages around the current page.
     const leftEllipsis = currentPage > maxVisiblePages - 2;
     const rightEllipsis = currentPage < totalPages - (maxVisiblePages - 2);

     if (leftEllipsis) {
       pageNumbers.push(1);
       pageNumbers.push("...");
     }

     const startPage = leftEllipsis ? currentPage - 1 : 1;
     const endPage = rightEllipsis ? currentPage + 1 : totalPages;

     for (let i = startPage; i <= endPage; i++) {
       pageNumbers.push(i);
     }

     if (rightEllipsis) {
       pageNumbers.push("...");
       pageNumbers.push(totalPages);
     }
   }

   return pageNumbers.map((page, index) => (
     <button
       key={index}
       className={`${currentPage === page ? "bg-blue-500 text-white" : ""} btn btn-sm`}
       onClick={() => handlePageChange(typeof page === "number" ? page : currentPage)}
       disabled={typeof page === "string"}
     >
       {page}
     </button>
   ));
 };


  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <p className="text-3xl font-bold mb-24">Pagination Demo</p>
      <div className="mb-4">
        {currentItems.map((item, index) => (
          <div key={index} className="mb-2">
            {item}
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-5 w-48">
        <button
          className={`${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "opacity-100"} btn btn-sm`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div className="flex space-x-2">{renderPageNumbers()}</div>
        <button
          className={`${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "opacity-100"} btn btn-sm`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
