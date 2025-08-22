"use client";

type BlogPaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export const BlogPagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: BlogPaginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center gap-2">
      {Array.from({ length: totalPages }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => onPageChange(idx + 1)}
          className={`cursor-pointer rounded-md px-4 py-2 ${
            currentPage === idx + 1
              ? "bg-black text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {idx + 1}
        </button>
      ))}
    </div>
  );
};
