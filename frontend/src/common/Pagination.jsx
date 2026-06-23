const Pagination = ({
  currentPage,
  totalPages,
  onPageChange
}) => {

  const pages = [];

  for (
    let i = 1;
    i <= totalPages;
    i++
  ) {
    pages.push(i);
  }

  return (
    <div className="pagination-container">

      {pages.map((page) => (

        <button
          key={page}
          onClick={() =>
            onPageChange(page)
          }
         className={ currentPage === page ? "pagination-btn active-page" : "pagination-btn" }
        >
          {page}
        </button>

      ))}

    </div>
  );
};

export default Pagination;