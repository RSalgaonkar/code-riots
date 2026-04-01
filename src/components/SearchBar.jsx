export default function SearchBar({
  searchTerm,
  onSearchChange,
  onClearSearch,
  sortBy,
  onSortChange,
  itemsPerPage,
  onItemsPerPageChange,
}) {
  return (
    <div className="toolbar">
      <div className="field-group field-grow">
        <label htmlFor="search">Search users</label>
        <div className="search-row">
          <input
            id="search"
            type="text"
            placeholder="Search by name, email, company, city..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <button type="button" className="ghost-btn" onClick={onClearSearch}>
            Clear
          </button>
        </div>
      </div>

      <div className="field-group">
        <label htmlFor="sortBy">Sort by</label>
        <select id="sortBy" value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
          <option value="email-asc">Email (A-Z)</option>
          <option value="email-desc">Email (Z-A)</option>
          <option value="company-asc">Company (A-Z)</option>
          <option value="company-desc">Company (Z-A)</option>
        </select>
      </div>

      <div className="field-group">
        <label htmlFor="itemsPerPage">Users per page</label>
        <select
          id="itemsPerPage"
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
        >
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
        </select>
      </div>
    </div>
  );
}



// export default function SearchBar({ value, onChange, delay = 400 }) {
//   return (
//     <div className="panel search-panel">
//       <label className="field-label" htmlFor="search-users">Search users</label>
//       <input
//         id="search-users"
//         className="search-input"
//         type="text"
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         placeholder={`Search by name, email, company, city... (${delay}ms debounce)`}
//       />
//     </div>
//   );
// }