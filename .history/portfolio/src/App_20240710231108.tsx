import { useEffect, useState } from 'react';
import './App.css';
import Welcome from './Components/welcome/Welcome';
import Home from './pages/home/Home';
import { useLoaderData } from 'react-router-dom';
function App() {
  const [startSlideUp, setStartSlideUp] = useState(false);
  const data = useLoaderData();
  // const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartSlideUp(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // const handleExitComplete = () => {
  //   setShowWelcome(false);
  // };

  return (
    <div className="App arimo">
      <Welcome startSlideUp={startSlideUp} />
      <Home show={startSlideUp} project={project} />
    </div>
  );
}

export default App;
