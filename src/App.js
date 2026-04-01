import React from 'react';
import { useEffect, useMemo, useState } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';

import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import Pagination from './components/Pagination';
import SummaryBar from './components/SummaryBar';

const USERS_API = 'https://jsonplaceholder.typicode.com/users';

// import UsersPage from './pages/UsersPage';
// import UserDetailPage from './pages/UserDetailPage';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name-asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [theme, setTheme] = useState(() =>
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await fetch(USERS_API);
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message || 'Unable to fetch users. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredAndSortedUsers = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    const filtered = users.filter((user) => {
      const searchableValues = [
        user.name,
        user.username,
        user.email,
        user.phone,
        user.website,
        user.company?.name,
        user.address?.city,
      ];

      return searchableValues.some((value) =>
        String(value || '').toLowerCase().includes(normalizedSearch)
      );
    });

    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'email-asc':
          return a.email.localeCompare(b.email);
        case 'email-desc':
          return b.email.localeCompare(a.email);
        case 'company-asc':
          return (a.company?.name || '').localeCompare(b.company?.name || '');
        case 'company-desc':
          return (b.company?.name || '').localeCompare(a.company?.name || '');
        case 'name-asc':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return sorted;
  }, [users, searchTerm, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filteredAndSortedUsers.length / itemsPerPage));

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, sortBy, itemsPerPage]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredAndSortedUsers.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredAndSortedUsers, currentPage, itemsPerPage]);

  const handleClearSearch = () => setSearchTerm('');
  const handleRetry = () => fetchUsers();
  const handleThemeToggle = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <>
      {/* <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact /> */}
      {/* <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserDetailPage />} />
      </Routes> */}

      <div className="app-shell">
        <header className="hero">
          <div>
            <p className="eyebrow">React + JSONPlaceholder</p>
            <h1>User Directory</h1>
            <p className="hero-copy">
              Fetch and display public user data with search, sorting, pagination, loading states,
              error handling, and a responsive UI.
            </p>
          </div>

          <button
            type="button"
            className="theme-toggle"
            onClick={handleThemeToggle}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? 'Dark mode' : 'Light mode'}
          </button>
        </header>

        <main className="main-content">
          <section className="panel controls-panel">
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              onClearSearch={handleClearSearch}
              sortBy={sortBy}
              onSortChange={setSortBy}
              itemsPerPage={itemsPerPage}
              onItemsPerPageChange={setItemsPerPage}
            />
          </section>

          <SummaryBar
            totalUsers={users.length}
            filteredUsers={filteredAndSortedUsers.length}
            currentPage={currentPage}
            totalPages={totalPages}
            itemsPerPage={itemsPerPage}
          />

          <section className="panel results-panel">
            <UserList
              users={paginatedUsers}
              loading={loading}
              error={error}
              onRetry={handleRetry}
              searchTerm={searchTerm}
            />
          </section>

          {!loading && !error && filteredAndSortedUsers.length > 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </main>
      </div>

    </>
  );
}

export default App;