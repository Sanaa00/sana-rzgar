export const projectLoader = async ({ request, params }) => {
  const res = await fetch(`http://localhost:8090/api/skill`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Response('Failed to fetch data', { status: res.status });
  }

  const data = await res.json();
  console.log('data', data);
  return data;
};
