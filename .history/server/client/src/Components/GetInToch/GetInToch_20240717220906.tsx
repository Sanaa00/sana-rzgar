import { useState } from 'react';
import './getintoch.scss';
import { contactSubmit } from '../../apiCall/api';
import { FormDatas } from '../../types';

function GetInToch() {
  const [formData, setFormData] = useState<FormDatas>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form data submitted 1:', formData);
    await contactSubmit(formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    // Handle form submission logic here
    console.log('Form data submitted 2:', formData);
  };

  return (
    <div className="container">
      <div className="img-container">
        <img
          alt="bg"
          src="https://images.unsplash.com/photo-1615852152758-7a2b2a16f9ac?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div className="form-container">
        <p className="p-title">Get In Toch</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default GetInToch;

// import { useState } from 'react';
// import './getintoch.scss';
// import { contactSubmit } from '../../apiCall/api';
// import { FormDatas } from '../../types';
// // type FormData = {
// //   name: string;
// //   email: string;
// //   phone: string;
// //   message: string;
// // };
// function GetInToch() {
//   const [formData, setFormData] = useState<FormDatas>({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     contactSubmit(formData);
//     // Handle form submission logic here
//     console.log('Form data submitted:', formData);
//   };
//   return (
//     <div className="container">
//       <div className="img-container">
//         <img
//           alt="bg"
//           src="https://images.unsplash.com/photo-1615852152758-7a2b2a16f9ac?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         />
//       </div>
//       <div className="form-container">
//         {' '}
//         <p className="p-title">Get In Toch</p>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="name">Name:</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="phone">Phone:</label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="message">Message:</label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default GetInToch;
