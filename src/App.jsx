import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Strengths from './components/Strengths';
import Projects from './components/Projects';
import Offer from './components/Offer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] antialiased selection:bg-[#58111A] selection:text-white overflow-x-hidden">
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Strengths />
        <Projects />
        <Offer />
      </main>
      <Contact />
    </div>
  );
}

export default App;
