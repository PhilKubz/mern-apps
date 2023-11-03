import React from 'react';
import './LandingPage.css';
import fireLogo from '../../Assets/firelogo.png';

const LandingPage = () => {
    return (
        <div className="landingPageContainer">
            <div className="landingPageHeader">
                <img src={fireLogo} className="headerLogo" alt="Fire Logo"/>
            </div>
            <div className="landingPageBody">
                <h1>Find a match with the tinder-alike</h1>
                <p>An application to browse potential connections</p>
                <button className="landingPageButton" onClick={() => window.location.href = '/main'}>Proceed</button>
            </div>
            <div className="landingPageFooter">
                <h3>Created by Philip Kubisz</h3>
                <p>This is an example/demo project and not intended for revenue/copyright infringement</p>
            </div>
        </div>
    );
}

export default LandingPage;