import { redirect } from 'react-router-dom';
export const projectLoader = async ({ request, params }) => {
  const skill = await fetch(`http://localhost:8090/api/skill`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const project = await fetch(`http://localhost:8090/api/project`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!skill.ok || !project.ok) {
    throw new Response('Failed to fetch data', {
      skill: skill.status,
      project: project.status,
    });
  }

  const skills = await skill.json();
  const projects = await project.json();
  const data = { skill: skills, project: projects };
  console.log('data', data);
  return data;
};

export async function contactSubmit({ formData }) {
  try {
    const response = await fetch('http://localhost:8090/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error('networkresponse was not ok');
    }
    const result = await response.json();
    console.log('form data submitted :', result);
  } catch (error) {
    console.log('error');
  }
}

// export async function getInTochAction({ request }) {
//   const formData = await request.formData();

//   const data = {
//     name: formData.get('name'),
//     email: formData.get('email'),
//     phone: formData.get('phone'),
//     message: formData.get('message'),
//   };

//   console.log('submitted data:', data);

//   // return redirect('/');
// }
