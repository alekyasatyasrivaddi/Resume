import React from 'react';
import './App.css';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Skills from './Components/Skills';
import resumeData from './Components/resume-data.json';

function App() {
  const { contact, education, skills } = resumeData;

  return (
    <div className="App">
      <h1>{resumeData.name}</h1>
      <h2>{resumeData.title}</h2>
      <Contact {...contact} />
      <Education education={education} />
      <Skills skills={skills} />
    </div>
  );
}

export default App;
