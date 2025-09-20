import React from 'react';
import {Link, useLocation} from 'react-router-dom';

const Navigation = () => {
    const location = useLocation();

    return (
        <nav>
            <Link
                to="/"
                className={location.pathname === '/' ? 'active' : ''}
            >
                Главная
            </Link>
            <Link
                to="/about"
                className={location.pathname === '/about' ? 'active' : ''}
            >
                О нас
            </Link>
            <Link
                to="/contacts"
                className={location.pathname === '/contacts' ? 'active' : ''}
            >
                Контакты
            </Link>
            <Link
                to="/assortment"
                className={location.pathname === '/assortment' ? 'active' : ''}
            >
                Ассортимент
            </Link>
        </nav>
    );
};

export default Navigation;