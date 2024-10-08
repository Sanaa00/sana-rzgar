import './contact.scss';
import { PiLinkedinLogoLight } from 'react-icons/pi';
import { PiGithubLogoLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';
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
          <Link to={con.url} key={con.id} className="contact">
            <div>{con.icon}</div>
            <p className="name">{con.name}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default Contact;
