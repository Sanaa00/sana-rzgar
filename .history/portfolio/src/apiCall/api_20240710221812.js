export const projectLoader = async ({ request, params }) => {
     const res = await fetch(``);
       if (!response.ok) {
    throw new Response('Failed to fetch data', { status: response.status });
  }
  const data = await response.json();
  return data;
}