import About from './sections/About';
import Contact from './sections/Contact';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Footer from './sections/Footer';
import Header from './sections/Header';
import Project from './sections/Project';
import './styles/css/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Education />
      <Experience />
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
