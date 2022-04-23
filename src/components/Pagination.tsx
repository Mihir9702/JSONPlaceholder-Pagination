import React from "react";

interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({ page, setPage }) => {
  // Pages are 20 items per page - 100 items total
  const TOTALPOSTS = 100;
  const PAGESIZE = 20;
  const pages = new Array(TOTALPOSTS / PAGESIZE).fill(0);

  return (
    <div className="pagination">
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Prev
      </button>

      {pages.map((_, idx) => (
        <button key={idx} onClick={() => setPage(idx + 1)}>
          {idx + 1}
        </button>
      ))}

      <button onClick={() => setPage(page + 1)} disabled={page === 5}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
