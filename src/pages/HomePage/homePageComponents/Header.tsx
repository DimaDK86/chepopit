import React from 'react';
import Logo from "../../components/Logo";
import Navigation from "../../components/Navigation";
import LogoShop from "../../components/LogoShop";
import './Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <Logo/>
            <Navigation/>
            <LogoShop/>
        </header>
    );
};

export default Header;