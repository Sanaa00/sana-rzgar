import { useEffect, useState } from 'react';
import './App.css';
import Welcome from './Components/welcome/Welcome';
import Home from './pages/home/Home';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { useLoaderData } from 'react-router-dom';
function App() {
  const [startSlideUp, setStartSlideUp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartSlideUp(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App arimo">
      <Welcome startSlideUp={startSlideUp} />
      <Home show={startSlideUp} />
    </div>
  );
}

export default App;
