import './contact.scss';
function Contact() {
  const contact = [
    {
      id: 1,
      name: 'LinkedIn',
      url: '',
      icon: '',
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
        return <div key={contact.id}></div>;
      })}
    </div>
  );
}

export default Contact;
