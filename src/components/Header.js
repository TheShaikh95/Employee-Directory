import React from 'react';

function Header() {
    return(
        <div id="Header" className="uk-inline uk-height-large uk-background-cover uk-light uk-flex" uk-parallax="bgy: -200" style={{backgroundImage: `url('assets/header-image.jpg')`}}>
            <div className="uk-position-center uk-overlay uk-overlay-default-a">
                <h1>Manage Your Employees</h1>
            </div>
        </div>
    );
}

export default Header;