
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface CustomPaginationNumbersProps {
  totalRecords: number;
  totalPages: number;
  currentPage: number;
  gotoPage: (page: number) => void;
  goPrevious: () => void;
  goNext: () => void;
}
const CustomPaginationNumbers = (props: CustomPaginationNumbersProps) => {
  const { gotoPage, currentPage, totalPages, goPrevious, goNext } = props;
  const sanitizePage = (a: string) => {
    return a.replaceAll("...", "");
  };
  const filterPages = (visiblePages: any, totalPages: any) => {
    return visiblePages.filter((page: any) => page <= totalPages);
  };
  const getVisiblePages = (page: any, total: any) => {
    if (total < 7) {
      return filterPages([1, 2, 3, 4, 5, 6], total);
    } else {
      if (page % 5 >= 0 && page > 4 && page + 2 < total) {
        return [`${1}...`, page - 1, page, page + 1, `...${total}`];
      } else if (page % 5 >= 0 && page > 4 && page + 2 >= total) {
        return [`${1}...`, total - 3, total - 2, total - 1, total];
      } else {
        return [1, 2, 3, 4, 5, `...${total}`];
      }
    }
  };
  const a = getVisiblePages(currentPage, totalPages);
  return (
    <ul className="flex align-items text-onSurface p-4 justify-center">
      <li>
        <button
          onClick={(e) => {
            e.preventDefault();
            goPrevious();
          }}
          className="mr-2"
        >
          Previous
        </button>
      </li>
      {a.map((page: any) => {
        return (
          <li
            key={page}
            className={`${
              currentPage === page ? "text-primary" : "text-onSurface"
            }`}
          >
            <button
              className="mx-2"
              onClick={() => {
                let w = page + "";
                if (w.includes("...")) {
                  w = sanitizePage(page);
                }
                const q = Number(w);
                gotoPage(q);
              }}
            >
              {page}
            </button>
          </li>
        );
      })}
      <li>
        <button
          onClick={(e) => {
            e.preventDefault();
            goNext();
          }}
          className="ml-2"
        >
          Next
        </button>
      </li>
    </ul>
  );
};

interface BackendPaginationProps {
  totalPages: number;
  totalRecords: number;
  currentPage: number;
  gotoPage: (pageNumber: number) => void;
}

export default function Pagination(props: BackendPaginationProps) {
  const { currentPage, gotoPage, totalRecords, totalPages } = props;
  return (
    <CustomPaginationNumbers
      currentPage={currentPage}
      totalRecords={totalRecords}
      gotoPage={(pageNumber: number) => {
        gotoPage(pageNumber);
      }}
      totalPages={totalPages}
      goPrevious={() => {
        if (currentPage > 1) {
          gotoPage(currentPage - 1);
        } else {
          console.log("get previous");
        }
      }}
      goNext={() => {
        if (currentPage < totalPages) {
          gotoPage(currentPage + 1);
        } else {
          console.log("get next");
        }
      }}
    />
  );
}