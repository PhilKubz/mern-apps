import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Cards from './Components/Cards/Cards';
import SwipeButtons from './Components/SwipeButtons/SwipeButtons';

function App() {
  return (
    //BEM naming convention
    <div className="App">

      <Header />
      <Cards />
      <SwipeButtons />
      {/* SwipeButtons */}  
    </div>
  );
}

export default App;
