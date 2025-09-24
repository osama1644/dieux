"use client";
import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function PaginationComp() {
  const totalPages = 10;
  const [currPage, setCurrPage] = useState(1);

  const handlePageClick = (page: number) => {
    setCurrPage(page);
  };

  const handlePrev = () => {
    if (currPage > 1) setCurrPage(currPage - 1);
  };

  const handleNext = () => {
    if (currPage < totalPages) setCurrPage(currPage + 1);
  };

  // الصفحات اللي هنعرضها (1 و 2 و آخر صفحة)
  const pagesToShow = [1, 2, totalPages];

  return (
    <div dir="rtl" className="mt-[50px]">
      <Pagination>
        <PaginationContent>
          <PaginationItem >
            <PaginationPrevious href="#" onClick={handlePrev} className={`${currPage === 1 ?"opacity-50 pointer-events-none" : ""}`} />
          </PaginationItem>

          {pagesToShow.map((page, index) => (
            <>
              <PaginationItem key={page} className={`${currPage === page ? "bg-[#283A90] text-white hover:bg-[#8f9ad0]" : "bg-[#F9F9FC]"} rounded-[8px]`}>
                <PaginationLink
                  href="#"
                 
                  onClick={() => handlePageClick(page)}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>

              {/* بعد رقم 2 نضيف الايليبسيس كعنصر منفصل */}
              {index === 1 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
            </>
          ))}

          <PaginationItem>
            <PaginationNext href="#" onClick={handleNext} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default PaginationComp;
