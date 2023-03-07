import About from './sections/About';
import Contact from './sections/Contact';
import Education from './sections/Education';
import Experience from './sections/Experience';
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
    </div>
  );
}

export default App;
