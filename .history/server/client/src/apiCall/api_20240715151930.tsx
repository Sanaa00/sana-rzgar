import { FormDatas } from '../types';

export const projectLoader = async () => {
  const apiUrl = import.meta.env.VITE_URL;
  console.log('API URL:', apiUrl);

  try {
    const skillResponse = await fetch(`/api/skill`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const projectResponse = await fetch(`/api/project`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!skillResponse.ok || !projectResponse.ok) {
      const skillText = await skillResponse.text();
      const projectText = await projectResponse.text();
      console.error('Skill response:', skillText);
      console.error('Project response:', projectText);
      throw new Error(
        `Failed to fetch data. Skill status: ${skillResponse.status}, Project status: ${projectResponse.status}`
      );
    }

    const skills = await skillResponse.json();
    const projects = await projectResponse.json();
    const data = { skill: skills, project: projects };

    console.log('data', data);
    return data;
  } catch (err) {
    console.error('Error fetching data:', err);
    if (err instanceof Error) {
      throw new Response('Failed to fetch data', {
        status: 500,
        statusText: err.message,
      });
    } else {
      throw new Response('Failed to fetch data', {
        status: 500,
        statusText: 'Unknown error occurred',
      });
    }
  }
};

export async function contactSubmit(formData: FormDatas) {
  const apiUrl = import.meta.env.VITE_URL;
  console.log('API URL:', apiUrl);

  try {
    const response = await fetch(`/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Response error:', errorText);
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    console.log('Form data submitted:', result);
  } catch (err) {
    console.error('Error submitting form:', err);
    if (err instanceof Error) {
      console.error('Error message:', err.message);
    }
  }
}
// import { FormDatas } from '../types';

// export const projectLoader = async () => {
//   const apiUrl = import.meta.env.VITE_URL;
//   console.log('API URL:', apiUrl);

//   try {
//     const skillResponse = await fetch(`/api/skill`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     const projectResponse = await fetch(`/api/project`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!skillResponse.ok || !projectResponse.ok) {
//       const skillText = await skillResponse.text();
//       const projectText = await projectResponse.text();
//       console.error('Skill response:', skillText);
//       console.error('Project response:', projectText);
//       throw new Error(
//         `Failed to fetch data. Skill status: ${skillResponse.status}, Project status: ${projectResponse.status}`
//       );
//     }

//     const skills = await skillResponse.json();
//     const projects = await projectResponse.json();
//     const data = { skill: skills, project: projects };

//     console.log('data', data);
//     return data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw new Response('Failed to fetch data', {
//       status: 500,
//       statusText: error.message,
//     });
//   }
// };

// export async function contactSubmit(formData: FormDatas) {
//   const apiUrl = import.meta.env.VITE_URL;
//   console.log('API URL:', apiUrl);

//   try {
//     const response = await fetch(`/api/contact`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(Object.fromEntries(formData.entries())),
//     });

//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error('Response error:', errorText);
//       throw new Error('Network response was not ok');
//     }

//     const result = await response.json();
//     console.log('Form data submitted:', result);
//   } catch (error) {
//     console.error('Error submitting form:', error);
//   }
// }
