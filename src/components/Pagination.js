const Pagination = ({ countriesPerPage, totalPages, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPages / countriesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <li key={number} className="page-item">
          <a onClick={() => paginate(number)} href="!#" className="page-link">
            {number}
          </a>
        </li>
      ))}
    </div>
  );
};

export default Pagination;
