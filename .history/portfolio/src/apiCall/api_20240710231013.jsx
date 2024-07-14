export const projectLoader = async ({ request, params }) => {
  const skill = await fetch(`http://localhost:8090/api/skill`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const project = await fetch(`http://localhost:8090/api/skill`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!skill.ok || !project.ok) {
    throw new Response('Failed to fetch data', { status: res.status });
  }

  const data = await skill.json();
  const data1 = await project.json();

  console.log('data', data);
  return { ...data, data1 };
};
