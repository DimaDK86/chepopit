import React from 'react';
import { Link } from 'react-router-dom';
import './logo.scss';

import logoImage from '../../assets/logo.png';
import logoText from '../../assets/chp2.png';

const Logo = () => {
    return (
        <Link to='/'>
            <div className="logo-container">
                <div className="logo-container_logo_txt">
                    <img className='logo' src={logoImage} alt="Логотип"/>
                    <img className='logo-text' src={logoText} alt="Логотип"/>
                </div>
            </div>
        </Link>
    );
};

export default Logo; // Исправлено: Log -> Logo