import React from 'react';

import Saldens from '../../assets/brands/saldens.png'
import Atmosphere from '../../assets/brands/atmosphere.png'
import Jaws from '../../assets/brands/jaws.png'
import Alaska from '../../assets/brands/alaska.png'
import FourBrew from '../../assets/brands/4brewers.png'
import Brewlok from '../../assets/brands/brewlok.png'
import Glatcher from '../../assets/brands/gletcher.png'
import PlanB from '../../assets/brands/planb.png'
import Sergacore from '../../assets/brands/sergacore.png'
import Stamm from '../../assets/brands/stamm.png'
import Tradichii from '../../assets/brands/tradichii.png'
import WhiteStoun from '../../assets/brands/whitestone.png'
import Zagovor from '../../assets/brands/zagovor.png'


import './Brands.scss'

const Brands = () => {
    return (
        <div className='brands-items'>
            <div className="brands-item">
                <img src={Saldens} alt="Saldens"/>
            </div>
            <div className="brands-item">
                <img src={Jaws} alt="Jaws"/>
            </div>
            <div className="brands-item">
                <img src={Atmosphere} alt="Atmosphere"/>
            </div>
            <div className="brands-item">
                <img src={Alaska} alt="Atmosphere"/>
            </div>
            <div className="brands-item">
                <img src={FourBrew} alt="4 brewers"/>
            </div>
            <div className="brands-item">
                <img src={Brewlok} alt="Brewlok"/>
            </div>
            <div className="brands-item">
                <img src={Tradichii} alt="Tradichii"/>
            </div>
            <div className="brands-item">
                <img src={Zagovor} alt="Zagovor"/>
            </div>
            <div className="brands-item">
                <img src={WhiteStoun} alt="WhiteStoun"/>
            </div>
            <div className="brands-item">
                <img src={Stamm} alt="Stamm"/>
            </div>
            <div className="brands-item">
                <img src={Sergacore} alt="Sergacore"/>
            </div>
            <div className="brands-item">
                <img src={PlanB} alt="PlanB"/>
            </div>
            <div className="brands-item">
                <img src={Glatcher} alt="Glatcher"/>
            </div>

        </div>
    );
};

export default Brands;