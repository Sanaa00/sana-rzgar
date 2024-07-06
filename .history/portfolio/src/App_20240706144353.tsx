import { useEffect, useState } from 'react';
import './App.css'
import Welcome from "./Components/welcome/Welcome"
function App() {
 const [startSlideUp, setStartSlideUp] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  const handleExitComplete = () => {
    setShowWelcome(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleExitComplete();
    }, 5000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {showWelcome ?  <Welcome onExitComplete={handleExitComplete} startSlideUp={startSlideUp} /> : ""}
    </div>
  )
}

export default App
