import UserCard from './UserCard';

function UserSkeleton() {
  return (
    <div className="user-card skeleton-card" aria-hidden="true">
      <div className="skeleton skeleton-avatar"></div>
      <div className="skeleton skeleton-line skeleton-line-lg"></div>
      <div className="skeleton skeleton-line"></div>
      <div className="skeleton skeleton-line"></div>
      <div className="skeleton skeleton-line skeleton-line-sm"></div>
    </div>
  );
}

export default function UserList({ users, loading, error, onRetry, searchTerm }) {
  if (loading) {
    return (
      <div className="user-grid">
        {Array.from({ length: 6 }).map((_, index) => (
          <UserSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="status-box error-box" role="alert">
        <h2>Unable to load users</h2>
        <p>{error}</p>
        <button type="button" className="primary-btn" onClick={onRetry}>
          Retry
        </button>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="status-box empty-box">
        <h2>No users found</h2>
        <p>
          No results matched <strong>{searchTerm}</strong>. Try another name, city, company,
          or email.
        </p>
      </div>
    );
  }

  return (
    <div className="user-grid">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}