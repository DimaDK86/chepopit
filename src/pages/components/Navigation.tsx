import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss'

const Navigation = () => {
    return (
        <nav className='nav'>
            <ul className='nav-items'>
                <Link to="/about">О НАС</Link>
                <Link to="/assortment">АССОРТИМЕНТ</Link>
                <Link to="/contacts">КОНТАКТЫ</Link>
            </ul>
        </nav>
    );
};

export default Navigation;