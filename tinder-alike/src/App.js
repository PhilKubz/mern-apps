import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage'; // Import your LandingPage component
import MainApplication from './Components/MainApplication/MainApplication'; // Import your MainApplication component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/main" element={<MainApplication />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
