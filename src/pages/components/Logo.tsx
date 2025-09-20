import React from 'react';
import './logo.scss';

import logoImage from '../../assets/logo.png';
import logoText from '../../assets/chp2.png';

const Logo = () => {
    return (
        <div className="logo-container">
            <div className="logo-container_logo_txt">
                <img className='logo' src={logoImage} alt="Логотип"/>
                <img className='logo-text' src={logoText} alt="Логотип"/>
            </div>
            {/*<div className="logo-container_logo_txtShop">*/}
            {/*    <img className='logo-text-shop' src={logoShop} alt="Логотип"/>*/}
            {/*</div>*/}
        </div>
    );
};

export default Logo; // Исправлено: Log -> Logo