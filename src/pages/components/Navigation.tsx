import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import './Navigation.scss'

const Navigation = () => {
    const location = useLocation();

    return (
        <nav className='nav'>
            <ul className='nav-items'>
                <li className='nav-item'>
                    <Link
                        to="/about"
                        className={location.pathname === '/about' ? 'active' : ''}
                    >
                        О нас
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        to="/assortment"
                        className={location.pathname === '/assortment' ? 'active' : ''}
                    >
                        Ассортимент
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        to="/contacts"
                        className={location.pathname === '/contacts' ? 'active' : ''}
                    >
                        Контакты
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;