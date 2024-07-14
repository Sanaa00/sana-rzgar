import './contact.scss';
import { PiLinkedinLogoLight } from 'react-icons/pi';
function Contact() {
  const contact = [
    {
      id: 1,
      name: 'LinkedIn',
      url: '',
      icon: <PiLinkedinLogoLight />,
    },
    {
      id: 2,
      name: 'Github',
      url: '',
      icon: '',
    },
  ];
  return (
    <div className="contact-container">
      {contact?.map((con) => {
        return (
          <div key={contact.id}>
            <div>{con.icon}</div>
            <p>{con.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Contact;
