import React from 'react';

//style
import './Footer.scss';

//components
import Button from '../Button/Button';

//assets
import brand from '../../assets/Ic_Wolox_Footer.svg';

function Footer(){
    return (
        <div className='footer-container'>
            <div className='footer-text'>
                <h1 className='footer-primary'>Gracias por <span className='primary'> completar el ejercicio</span></h1>
                <h2 className='footer-secondary'>Te invitamos a ver mas información</h2>
                <Button type='button' clase='footer-button'><a href='https://www.wolox.com.ar/' rel="noopener noreferrer" target='_blank'>Conocer más</a></Button>
            </div>
            <div className='footer-brand'><img src={brand} alt='logo' /></div>
        </div>
    )
}

export default Footer;
