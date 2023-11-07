import React from 'react';
import Header from './../Header/Header';
import Cards from './../Cards/Cards';
import Swipebuttons from './../SwipeButtons/SwipeButtons';
import './MainApplication.css';

const MainApplication = () => {
    return (
        <div className="mainAppStyler">
            <div className="mainApp">
                <Header />
                <Cards />
                <Swipebuttons />
            </div>
        </div>
    );
}

export default MainApplication;