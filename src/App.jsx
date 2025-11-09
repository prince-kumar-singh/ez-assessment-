import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProjectsSection from "./pages/AboutUsPage";
import ContactSection from "./pages/ContactForm"
import Navbar from './components/Navbar'
import StoryboardSection from "./pages/Services";
import Branding from "./pages/Branding";
import ArtCuration from "./pages/Articuration";
import FilmProduction from "./pages/FilmProduction";
// import StoryboardSection from "./pages/Services"

function App() {
  return (
   
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<ProjectsSection />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/services" element={<StoryboardSection />} />
        <Route path='/branding' element={<Branding/>}/>
        <Route path='/art-curation' element={<ArtCuration/>}/>
        <Route path='/film-production' element={<FilmProduction/>}/>
      </Routes>
    </Router>
  );
}

export default App;
