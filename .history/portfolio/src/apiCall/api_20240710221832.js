export const projectLoader = async ({ request, params }) => {
     const res = await fetch(``);
       if (!res.ok) {
    throw new Response('Failed to fetch data', { status: res.status });
  }
  const data = await res.json();
  return data;
}