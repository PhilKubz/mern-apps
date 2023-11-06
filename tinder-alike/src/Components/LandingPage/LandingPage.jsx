import React from 'react';
import './LandingPage.css';
import fireLogo from '../../Assets/firelogo.png';

const LandingPage = () => {
    return (
        <div className="landingPageStyler">
            <div className="landingPageContainer">
                <div className="landingPageHeader">
                    <img src={fireLogo} className="headerLogo" alt="Fire Logo"/>
                </div>
                <div className="landingPageBody">
                    <h1>Tinder-alike</h1>
                    <p>Keep cozy and find a match</p>
                    <button className="landingPageButton" onClick={() => window.location.href = '/main'}>Start Swiping!</button>
                </div>
                <div className="landingPageFooter">
                    <h3>Created by Philip Kubisz</h3>
                    <p>This is an example/demo project and not intended for revenue/copyright infringement</p>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;