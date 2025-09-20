import React from 'react';
import './About.scss'
import kvm from '../../assets/kvm.png'
const About = () => {
    return (
        <div className='about'>
            <div className='about__container'>пока мы только наливаем пенное)</div>
            <img className='social-icon' src={kvm} alt="phone"/>
        </div>
    );
};

export default About;