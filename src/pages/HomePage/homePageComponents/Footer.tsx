import React from 'react';
import './Footer.scss'

import whatsapp from '../../../assets/whatsapp.png';
import telegram from "../../../assets/tg.png";
import phone from "../../../assets/phone.png";

const Footer = () => {
    const phoneNumber = '+79013544854';
    const whatsappNumber = '+79013544854';
    const telegramUsername = 'ChePopit';

    return (
        <footer className='footer'>
            <div className="empty"></div>
            <div className='est'>
                est. 2021y
            </div>
            <div className="social">
                {/* Телефон */}
                <a href={`tel:${phoneNumber}`} className="social-link">
                    <img className='social-icon' src={phone} alt="phone"/>
                </a>

                {/* WhatsApp */}
                <a
                    href={`https://wa.me/${whatsappNumber.replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <img className='social-icon' src={whatsapp} alt="whatsapp"/>
                </a>

                {/* Telegram */}
                <a
                    href={`https://t.me/${telegramUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <img className='social-icon' src={telegram} alt="telegram"/>
                </a>
            </div>
        </footer>
    );
};

export default Footer;