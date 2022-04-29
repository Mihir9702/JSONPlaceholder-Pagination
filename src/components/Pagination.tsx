import React from "react";

type Page = number;
type SetPage = React.Dispatch<React.SetStateAction<Page>>;

interface PaginationProps {
  pageState: [Page, SetPage];
  POSTAMOUNT: number;
}

const Pagination: React.FC<PaginationProps> = ({ pageState, POSTAMOUNT }) => {
  const [page, setPage] = pageState;

  // Pages are 20 items per page - 100 items total / 20 items per page = 5 pages
  const TOTALPOSTS = 100;
  const postsList = new Array(Math.round(TOTALPOSTS / POSTAMOUNT)).fill(0);

  return (
    <div className="pagination">
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Prev
      </button>

      {postsList.map((_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          disabled={i + 1 === page}
        >
          {i + 1}
        </button>
      ))}

      <button onClick={() => setPage(page + 1)} disabled={page === 5}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
