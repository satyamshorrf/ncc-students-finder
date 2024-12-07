import './index.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';

// Import all pages
import AboutNCC from './pages/AboutNCC';
import DgNccCorner from './pages/DgNccCorner';
import Aim from './pages/Aim';
import Genesis from './pages/Genesis';
import Motto from './pages/Motto';
import CoreValues from './pages/CoreValues';
import Pledge from './pages/Pledge';
import NccFlag from './pages/NccFlag';
import NccSong from './pages/NccSong';
import Downloads from './pages/Downloads';
import Training from './pages/Training';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col pb-[52px]">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/about-ncc" element={<AboutNCC />} />
            <Route path="/dg-ncc" element={<DgNccCorner />} />
            <Route path="/aim" element={<Aim />} />
            <Route path="/genesis" element={<Genesis />} />
            <Route path="/motto" element={<Motto />} />
            <Route path="/core-values" element={<CoreValues />} />
            <Route path="/pledge" element={<Pledge />} />
            <Route path="/ncc-flag" element={<NccFlag />} />
            <Route path="/ncc-song" element={<NccSong />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/training" element={<Training />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;