import React from 'react';
import Header from './../Header/Header';
import Cards from './../Cards/Cards';
import Swipebuttons from './../SwipeButtons/SwipeButtons';

const MainApplication = () => {
    return (
        <div className="main-app">
            <Header />
            <Cards />
            <Swipebuttons />
        </div>
    );
}

export default MainApplication;