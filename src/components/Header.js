import React from 'react';
import Logo from '../images/logo.jpg';
import './style/Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header__hero">
                   <div className="header__container">
                     <img className="header_logo" src={Logo} alt="logo" />
                   </div>
                </div>
            </div>
        )
    }
};

export default Header;