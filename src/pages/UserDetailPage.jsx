import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getUserById } from '../services/api';

export default function UserDetailPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let ignore = false;

    async function loadUser() {
      setLoading(true);
      setError('');
      try {
        const data = await getUserById(id);
        if (!ignore) setUser(data);
      } catch (err) {
        if (!ignore) setError(err.message || 'Failed to load user');
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    loadUser();
    return () => {
      ignore = true;
    };
  }, [id]);

  return (
    <main className="app-shell detail-shell">
      <Link className="back-link" to="/">← Back to directory</Link>
      {loading && <p className="status-panel panel">Loading user details...</p>}
      {error && <p className="status-panel panel error-panel">{error}</p>}
      {user && (
        <article className="panel detail-card">
          <div className="user-card-top">
            <div>
              <p className="eyebrow">User profile</p>
              <h1>{user.name}</h1>
            </div>
            <span className="badge">#{user.id}</span>
          </div>
          <div className="detail-grid">
            <section>
              <h2>Contact</h2>
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Website:</strong> {user.website}</p>
            </section>
            <section>
              <h2>Company</h2>
              <p><strong>Name:</strong> {user.company?.name}</p>
              <p><strong>Catchphrase:</strong> {user.company?.catchPhrase}</p>
              <p><strong>Business:</strong> {user.company?.bs}</p>
            </section>
            <section>
              <h2>Address</h2>
              <p><strong>Street:</strong> {user.address?.street}</p>
              <p><strong>Suite:</strong> {user.address?.suite}</p>
              <p><strong>City:</strong> {user.address?.city}</p>
              <p><strong>Zipcode:</strong> {user.address?.zipcode}</p>
            </section>
          </div>
        </article>
      )}
    </main>
  );
}