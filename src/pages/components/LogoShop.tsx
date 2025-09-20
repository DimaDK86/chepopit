import React from 'react';
import logoShop from '../../assets/shop2.png';
import './LogoShop.scss'

const LogoShop = () => {
    return (
        <div>
            <img className='logo-shop' src={logoShop} alt="Логотип"/>
        </div>
    );
};

export default LogoShop;