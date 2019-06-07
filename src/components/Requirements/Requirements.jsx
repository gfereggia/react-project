import React from 'react';

//style
import './Requirements.scss';

//assets
import bullet1 from '../../assets/Ic_Bullet_1.svg';
import bullet2 from '../../assets/Ic_Bullet_2.svg';
import bullet3 from '../../assets/Ic_Bullet_3.svg';

const Requirements = ({id}) => {
    return (
        <div className="req-container" id={id}>
            <div className="req-main__text">
                <h1>
                    Requerimientos
                </h1>
            </div>
            <div className="req-main-images">
                <div className='bullet'>
                    <img src={bullet1} className='bullet-img' alt='bullet' />
                    <div className='bullet-text'>Estudiantes avanzados o recibidos de carreras del rubro informático, sistemas o electrónicos</div>
                </div>
                <div className='bullet'>
                    <img src={bullet2} className='bullet-img' alt='bullet' />
                    <div className='bullet-text'>Inglés intermedio/avanzado</div>
                </div>
                <div className='bullet'>
                    <img src={bullet3} className='bullet-img' alt='bullet' />
                    <div className='bullet-text'>Conocimiento de metodologias ágiles</div>
                </div>
            </div>
        </div>
    );
}

export default Requirements;