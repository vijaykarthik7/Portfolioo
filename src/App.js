

import Header from './component/Header';
import './App.css';
import Hero from './component/Hero';
import About from './component/About';
import Projects from './component/Project';
import Resume from './component/Resume';
import Contact from './component/Contact';
import Copyrights from './component/Copyrights';
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects/>
      <Resume />
      <Contact/>
      <Copyrights />
    </div>
  );
}

export default App;
