import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Messages from './components/Messages';
import Footer from './components/Footer';
import Isolated_Footing from './components/Isolated_Footing';
import Calculator from './components/Calculator';


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <div className="App-main">  {/* Wrap the main and footer sections */}
        <main>
          <Routes>
            <Route path="/" element={<Messages />} />
            <Route path="/isolated_footing" element={<Isolated_Footing />} />
            <Route path="/calculator" element={<Calculator />} />
                        
            {/* Add more Route components here for other pages */}
          </Routes>
          {/* <Calculator /> */}
        </main>
        <footer>

          <Footer />
          
        </footer>
      </div>
      </div>
    </Router>
  );
}

export default App;
