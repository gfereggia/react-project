import React from 'react';

//style
import './Benefits.scss';

//assets
import homeOffice from '../../assets/Ic_HomeOffice.svg';
import snacks from '../../assets/Ic_DrinkSnacks.svg';
import hour from '../../assets/Ic_Hour.svg';
import workShops from '../../assets/Ic_Workshops.svg';
import brain from '../../assets/Ic_brain.svg';
import laptop from '../../assets/Ic_laptop.svg';

const Benefits = ({id}) => {
    return (
        <div className="benefits-container" id={id}>
            <div className="benefits__text">
                <h1>
                    Entre los beneficios que ofrecemos se encuentran
                    <span className="primary"> ;) </span>
                </h1>
            </div>
            <div className="benefits-images">
                <div className='benefits-image-box'>
                    <img
                        src={hour}
                        height={85}
                        width={85}
                        className='benefits-image'
                        alt="horario flexible"
                    />
                    <p className='benefits-image-text'>Flexibilidad Horaria</p>
                </div>
                <div className='benefits-image-box'>
                    <img
                        src={homeOffice}
                        height={85}
                        width={85}
                        className='benefits-image'
                        alt="home office"
                    />
                    <p className='benefits-image-text'>Home Office</p>
                </div>
                <div className='benefits-image-box'>
                    <img
                        src={workShops}
                        height={85}
                        width={85}
                        className='benefits-image'
                        alt="workshops"
                    />
                    <p className='benefits-image-text'>Capacitaciones y workshops</p>
                </div>
                <div className='benefits-image-box'>
                    <img
                        src={snacks}
                        height={85}
                        width={85}
                        className='benefits-image'
                        alt="snacks"
                    />
                    <p className='benefits-image-text'>Snacks, frutas y bebidas gratis</p>
                </div>
                <div className='benefits-image-box'>
                    <img
                        src={laptop}
                        height={85}
                        width={85}
                        className='benefits-image'
                        alt="semana remota"
                    />
                    <p className='benefits-image-text'>Semana Remota</p>
                </div>
                <div className='benefits-image-box'>
                    <img
                        src={brain}
                        height={85}
                        width={85}
                        className='benefits-image'
                        alt="ultimas tecnologias"
                    />
                    <p className='benefits-image-text'>Trabajar en últimas tecnologías</p>
                </div>
            </div>

        </div>
    );
};

export default Benefits;
