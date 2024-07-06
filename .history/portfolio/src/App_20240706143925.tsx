import { useEffect, useState } from 'react';
import './App.css'
import Welcome from "./Components/welcome/Welcome"
function App() {
 const [showWelcome, setShowWelcome] = useState(true);

  const handleExitComplete = () => {
    setShowWelcome(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleExitComplete();
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
     <Welcome/>
    </>
  )
}

export default App
