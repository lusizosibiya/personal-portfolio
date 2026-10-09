import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen w-full max-w-none overflow-x-clip ${darkMode ? "dark" : ""}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode}  />
    </div>
  );
}

export default App;