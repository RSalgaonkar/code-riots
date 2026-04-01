function createPageNumbers(currentPage, totalPages) {
  const pages = [];
  const start = Math.max(1, currentPage - 1);
  const end = Math.min(totalPages, currentPage + 1);

  if (start > 1) pages.push(1);
  if (start > 2) pages.push('dots-left');

  for (let page = start; page <= end; page += 1) {
    pages.push(page);
  }

  if (end < totalPages - 1) pages.push('dots-right');
  if (end < totalPages) pages.push(totalPages);

  return pages;
}

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = createPageNumbers(currentPage, totalPages);

  return (
    <nav className="pagination" aria-label="Pagination">
      <button
        type="button"
        className="ghost-btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      <div className="page-list">
        {pages.map((page, index) =>
          typeof page === 'number' ? (
            <button
              key={page}
              type="button"
              className={`page-btn ${page === currentPage ? 'active' : ''}`}
              onClick={() => onPageChange(page)}
              aria-current={page === currentPage ? 'page' : undefined}
            >
              {page}
            </button>
          ) : (
            <span key={`${page}-${index}`} className="page-dots" aria-hidden="true">
              ...
            </span>
          )
        )}
      </div>

      <button
        type="button"
        className="ghost-btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </nav>
  );
}

// export default function Pagination({ currentPage, totalPages, onPageChange }) {
//   if (totalPages <= 1) return null;

//   const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

//   return (
//     <nav className="pagination" aria-label="Pagination Navigation">
//       <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
//         Previous
//       </button>
//       {pages.map((page) => (
//         <button
//           key={page}
//           className={page === currentPage ? 'active' : ''}
//           onClick={() => onPageChange(page)}
//           aria-current={page === currentPage ? 'page' : undefined}
//         >
//           {page}
//         </button>
//       ))}
//       <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
//         Next
//       </button>
//     </nav>
//   );
// }