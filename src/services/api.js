const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function request(path, options = {}) {
  const response = await fetch(`${BASE_URL}${path}`, options);
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  return response.json();
}

export async function getUsers({ page = 1, limit = 4, search = '' } = {}) {
  const params = new URLSearchParams({ _page: String(page), _limit: String(limit) });
  const data = await request(`/users?${params.toString()}`);

  if (!search.trim()) {
    return { data, total: 10 };
  }

  const allUsers = await request('/users');
  const normalized = search.trim().toLowerCase();
  const filtered = allUsers.filter((user) => {
    const haystack = [
      user.name,
      user.username,
      user.email,
      user.phone,
      user.website,
      user.company?.name,
      user.address?.city
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();

    return haystack.includes(normalized);
  });

  const start = (page - 1) * limit;
  const paginated = filtered.slice(start, start + limit);

  return {
    data: paginated,
    total: filtered.length
  };
}

export async function getUserById(id) {
  return request(`/users/${id}`);
}