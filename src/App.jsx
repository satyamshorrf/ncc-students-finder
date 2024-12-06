import './index.css';
import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col pb-[52px]">
      <Navbar />
      <div className="flex-grow">
        <Header />
      </div>
      <Footer />
    </div>
  );
};

export default App;