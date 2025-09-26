import React from 'react';
import { Link } from 'react-router-dom';
// import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Доступ запрещен</h2>
        <p>Вы не можете просматривать этот контент без согласия.</p>
        <button 
          onClick={() => window.location.href = '/'}
          className="home-link"
        >
          Попробовать снова
        </button>
      </div>
    </div>
  );
};

export default NotFound;