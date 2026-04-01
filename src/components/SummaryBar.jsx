export default function SummaryBar({
  totalUsers,
  filteredUsers,
  currentPage,
  totalPages,
  itemsPerPage,
}) {
  return (
    <section className="summary-grid" aria-label="Directory summary">
      <article className="summary-card">
        <span className="summary-label">Total users</span>
        <strong>{totalUsers}</strong>
      </article>
      <article className="summary-card">
        <span className="summary-label">Matching users</span>
        <strong>{filteredUsers}</strong>
      </article>
      <article className="summary-card">
        <span className="summary-label">Current page</span>
        <strong>
          {currentPage} / {totalPages}
        </strong>
      </article>
      <article className="summary-card">
        <span className="summary-label">Page size</span>
        <strong>{itemsPerPage}</strong>
      </article>
    </section>
  );
}