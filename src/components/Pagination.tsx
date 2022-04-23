import React from "react";

type Page = number;
type SetPage = React.Dispatch<React.SetStateAction<Page>>;

interface PaginationProps {
  pageState: [Page, SetPage];
}

const Pagination: React.FC<PaginationProps> = ({ pageState }) => {
  const [page, setPage] = pageState;

  // Pages are 20 items per page - 100 items total / 20 items per page = 5 pages
  const TOTALPOSTS = 100;
  const PAGESIZE = 20;
  const postsList = new Array(TOTALPOSTS / PAGESIZE).fill(0);
  const postPages = postsList.map((_, idx) => idx + 1);

  return (
    <div className="pagination">
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Prev
      </button>

      {postPages.map((postPage) => (
        <button
          key={postPage}
          onClick={() => setPage(postPage)}
          disabled={postPage === page}
        >
          {postPage}
        </button>
      ))}

      <button onClick={() => setPage(page + 1)} disabled={page === 5}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
