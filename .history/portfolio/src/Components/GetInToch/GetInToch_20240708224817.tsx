import "./getintoch.scss"
function GetInToch() {
       const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };
  return (
    <div className="container">
     <p className="p-title">Get In Toch</p> 
    </div>
  )
}

export default GetInToch
