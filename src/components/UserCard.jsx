export default function UserCard({ user }) {
  return (
    <article className="user-card">
      <div className="user-card-top">
        <div className="avatar" aria-hidden="true">
          {user.name
            .split(' ')
            .map((part) => part[0])
            .join('')
            .slice(0, 2)}
        </div>
        <div>
          <h2>{user.name}</h2>
          <p className="muted">@{user.username}</p>
        </div>
      </div>

      <dl className="user-meta">
        <div>
          <dt>Email</dt>
          <dd>
            <a href={`mailto:${user.email}`}>{user.email}</a>
          </dd>
        </div>
        <div>
          <dt>Phone</dt>
          <dd>{user.phone}</dd>
        </div>
        <div>
          <dt>Website</dt>
          <dd>
            <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">
              {user.website}
            </a>
          </dd>
        </div>
        <div>
          <dt>Company</dt>
          <dd>{user.company?.name}</dd>
        </div>
        <div>
          <dt>City</dt>
          <dd>{user.address?.city}</dd>
        </div>
      </dl>
    </article>
  );
}

// import { Link } from 'react-router-dom';

// export default function UserCard({ user }) {
//   return (
//     <article className="user-card">
//       <div className="user-card-top">
//         <div>
//           <p className="eyebrow">@{user.username}</p>
//           <h2>{user.name}</h2>
//         </div>
//         <span className="badge">#{user.id}</span>
//       </div>
//       <ul className="user-meta">
//         <li><strong>Email:</strong> {user.email}</li>
//         <li><strong>Phone:</strong> {user.phone}</li>
//         <li><strong>City:</strong> {user.address?.city}</li>
//         <li><strong>Company:</strong> {user.company?.name}</li>
//       </ul>
//       <Link className="detail-link" to={`/users/${user.id}`}>View details</Link>
//     </article>
//   );
// }