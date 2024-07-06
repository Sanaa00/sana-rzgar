import { useEffect, useState } from 'react';
import './App.css'
import Welcome from "./Components/welcome/Welcome"
function App() {
  const [startSlideUp, setStartSlideUp] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartSlideUp(true);
    }, 5000); // Wait for 2 seconds before starting the slide-up animation

    return () => clearTimeout(timer);
  }, []);

  const handleExitComplete = () => {
    setShowWelcome(false);
  };

  return (
    <div className="App">
      {showWelcome ?  <Welcome onExitComplete={handleExitComplete} startSlideUp={startSlideUp} /> : ""}
    </div>
  )
}

export default App
