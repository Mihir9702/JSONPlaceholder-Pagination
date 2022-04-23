import React from "react";

interface PaginationProps {
  pageState: [number, React.Dispatch<React.SetStateAction<number>>];
}

const Pagination: React.FC<PaginationProps> = ({ pageState }) => {
  const [page, setPage] = pageState;

  // Pages are 20 items per page - 100 items total / 20 items per page = 5 pages
  const TOTALPOSTS = 100;
  const PAGESIZE = 20;
  const postsList = new Array(TOTALPOSTS / PAGESIZE).fill(0);

  return (
    <div className="pagination">
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Prev
      </button>

      {postsList.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setPage(idx + 1)}
          disabled={idx + 1 === page}
        >
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
