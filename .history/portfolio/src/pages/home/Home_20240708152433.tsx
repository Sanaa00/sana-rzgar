
import './home.scss';
import About from '../../Components/about/About';
import Project from '../../Components/project/Project';

function Home({ show }) {

  return (
   <div className="home-container">
      <About />
      <Project/>
    </div>
  )
}

export default Home
