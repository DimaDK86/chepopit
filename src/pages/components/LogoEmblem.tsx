import React from 'react';
import { Link } from 'react-router-dom';
import './logo.scss';

import logoImage from '../../assets/logo.png';

const LogoEmblem = () => {
    return (
        <Link to='/'>
            <div className="logo-container">
                <div className="logo-container_logo_txt">
                    <img className='logo' src={logoImage} alt="Логотип"/>
                </div>
            </div>
        </Link>
    );
};

export default LogoEmblem; // Исправлено: Log -> Logo