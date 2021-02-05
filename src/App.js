import logo from './logo.svg';
import './App.css';
import React from "react"
import Header from './components/Header';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from  './components/Education';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
