import React from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const windowSize = 5;


/**
 * The Pagination function is a React component that renders a pagination UI element with previous and
 * next buttons, page numbers, and information about the current page and total number of results.
 */
function Pagination({ currentPage, pageSize, setPage, elements }) {
  const prevPage = () => {
    setPage(currentPage - 1);
  };
  const nextPage = () => {
    setPage(currentPage + 1);
  };
  const totalPages = Math.ceil(elements.length / pageSize);
  const windowStart = Math.max(0, currentPage - Math.floor(windowSize / 2));
  const windowEnd = Math.min(totalPages, windowStart + windowSize - 1);

  const pageButtons = [];

  const currentPageClasses =
    "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
  const defaultPageClasses =
    "relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex";

  for (let i = windowStart; i < windowEnd; i++) {
    const isActive = i === currentPage;
    const className = isActive ? currentPageClasses : defaultPageClasses;
    pageButtons.push(
      <button
        id={`pageButton${i}`}
        className={className}
        onClick={() => setPage(i)}
      >
        {i + 1}
      </button>
    );
  }
  if (windowStart > 0) {
    pageButtons.unshift(
      <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
        ...
      </span>
    );
    pageButtons.unshift(
      <button
        id={`pageButton0`}
        className={defaultPageClasses}
        onClick={() => setPage(0)}
      >
        1
      </button>
    );
  }
  if (windowEnd < totalPages) {
    pageButtons.push(
      <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
        ...
      </span>
    );
    pageButtons.push(
      <button
        id={`pageButton${totalPages - 1}`}
        className={defaultPageClasses}
        onClick={() => setPage(totalPages - 1)}
      >
        {totalPages}
      </button>
    );
  }
  return (
    <div className="flex w-full items-center justify-between  border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          href="#"
          onClick={prevPage}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Anterior
        </button>
        <button
          href="#"
          onClick={nextPage}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Siguiente
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Mostrando{" "}
            <span className="font-medium">{1 + pageSize * currentPage}</span> a{" "}
            <span className="font-medium">
              {Math.min(elements.length, pageSize * (1 + currentPage))}
            </span>{" "}
            de <span className="font-medium">{elements.length}</span> resultados
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              <span className="sr-only">Anterior</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", 
                  Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}

            {pageButtons}
            <button
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              onClick={nextPage}
            >
              <span className="sr-only">Siguiente</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
