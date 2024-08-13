import Link from "next/link";
import React from "react";

const Pagination = ({
  totalPage,
  currentPage,
}: {
  totalPage: number;
  currentPage: number;
}) => {
  const page = parseInt(currentPage.toString(),10) 
  return (
    <>
      <nav aria-label="Page navigation example max-h-[100px] h-full">
        <ul className="inline-flex text-base h-full space-x-1">
          {page > 1 && (
            <Link href={`/products?page=${page - 1}`}>
              <div className="bg-slate-400 px-8 py-4 rounded cursor-pointer">
                Previous
              </div>
            </Link>
          )}
          {[...Array(totalPage)].map((_ele, index) => (
            <Link
              href={`/products?page=${index + 1}`}
              key={index}
              passHref
            >
              <button
                className={`px-5 py-4 rounded ${
                  page === index + 1 ? "bg-blue-500" : "bg-slate-200"
                } cursor-pointer`}
              >
                {index + 1}
              </button>
            </Link>
          ))}
          {page < totalPage && (
            <Link href={`/products?page=${page + 1}`}>
              <div className="bg-slate-400 px-8 py-4 rounded cursor-pointer">
                Next
              </div>
            </Link>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
