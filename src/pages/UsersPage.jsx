import { useMemo, useState } from 'react';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import UserList from '../components/UserList';
import useDebounce from '../hooks/useDebounce';
import useUsers from '../hooks/useUsers';

const PAGE_SIZE = 4;

export default function UsersPage() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const debouncedSearch = useDebounce(search, 500);
  const { users, total, loading, error, refetch } = useUsers({
    page,
    limit: PAGE_SIZE,
    search: debouncedSearch
  });

  const totalPages = useMemo(() => Math.max(1, Math.ceil(total / PAGE_SIZE)), [total]);

  const handleSearchChange = (value) => {
    setSearch(value);
    setPage(1);
  };

  return (
    <main className="app-shell">
      <header className="hero panel">
        <div>
          <p className="eyebrow">React user explorer</p>
          <h1>User Directory</h1>
          <p className="hero-copy">
            Fetch and browse users from JSONPlaceholder with debounced search, paginated results, route-based detail pages, and testable API abstractions.
          </p>
        </div>
      </header>

      <section className="toolbar">
        <SearchBar value={search} onChange={handleSearchChange} delay={500} />
        <div className="panel stat-panel">
          <span className="field-label">Results</span>
          <strong>{total}</strong>
          <span className="muted">Page {page} of {totalPages}</span>
        </div>
      </section>

      {loading && <p className="status-panel panel">Loading users...</p>}
      {error && (
        <div className="status-panel panel error-panel">
          <p>{error}</p>
          <button onClick={refetch}>Retry</button>
        </div>
      )}
      {!loading && !error && <UserList users={users} />}

      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </main>
  );
}