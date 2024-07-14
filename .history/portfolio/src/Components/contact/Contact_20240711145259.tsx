import './contact.scss';
import { PiLinkedinLogoLight } from 'react-icons/pi';
import { PiGithubLogoLight } from 'react-icons/pi';
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
      icon: <PiGithubLogoLight />,
    },
  ];
  return (
    <div className="contact-container">
      {contact?.map((con) => {
        return (
          <div key={contact.id} className="contact">
            <div className="icon">{con.icon}</div>
            <p className="name">{con.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Contact;
