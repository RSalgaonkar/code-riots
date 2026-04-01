import { useCallback, useEffect, useState } from 'react';
import { getUsers } from '../services/api';

export default function useUsers({ page, limit, search }) {
  const [users, setUsers] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const response = await getUsers({ page, limit, search });
      setUsers(response.data);
      setTotal(response.total);
    } catch (err) {
      setError(err.message || 'Failed to fetch users');
    } finally {
      setLoading(false);
    }
  }, [page, limit, search]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return {
    users,
    total,
    loading,
    error,
    refetch: fetchUsers
  };
}