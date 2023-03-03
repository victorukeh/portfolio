import About from './sections/About';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Header from './sections/Header';
import './styles/css/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
