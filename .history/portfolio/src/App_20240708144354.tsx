import { useEffect, useState } from 'react';
import './App.css'
import Welcome from "./Components/welcome/Welcome"
import Home from './pages/home/Home';
function App() {
  const [startSlideUp, setStartSlideUp] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartSlideUp(true);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  const handleExitComplete = () => {
    setShowWelcome(false);
  };

  return (
    <div className="App marcellus-regular">
      {showWelcome ?  <Welcome onExitComplete={handleExitComplete} startSlideUp={startSlideUp} /> :<Home/>}
    </div>
  )
}

export default App
