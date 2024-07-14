import './contact.scss';
import { PiLinkedinLogoLight } from 'react-icons/pi';
import { PiGithubLogoLight } from 'react-icons/pi';
function Contact() {
  const contact = [
    {
      id: 1,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sana-rizgar/',
      icon: <PiLinkedinLogoLight className="icon" />,
    },
    {
      id: 2,
      name: 'GitHub',
      url: 'https://github.com/Sanaa00',
      icon: <PiGithubLogoLight className="icon" />,
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
