import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Authenticator from "./Authenticator/Authenticator"
import HomePage from './Components/HomePage';
import Projects from './Components/Projects';
import About from './Components/About';
import PriyanshiHome from './Priyanshi/PriyanshiHome';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
      <Route path="/"element={<Authenticator/>}/>
        <Route path="homepage" element={<HomePage />} />
        <Route path="project" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path= "PHome" element= {<PriyanshiHome/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;