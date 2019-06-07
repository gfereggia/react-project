import React, {useContext} from 'react';

//context
import {AppContext} from "../../appContext";

//style
import './Main.scss';

//assets
import Hero from '../../assets/Img Hero/Ic_ilustra_Hero@3x.png';

const Main = ({id}) => {
    const {
        state: {isContenedor}
    } = useContext(AppContext);
    return (
        <div className="main-container" id={id}>
            <div className="main__text-box">
                <h1>
                    Bienvenido a tu
                    <p><span className="text-box__strong">Entrevista Técnica</span> <span className='extra'> en</span></p>
                    <p className="text-box__colored"> Wolox</p>
                </h1>
            </div>
            <div className="main__image-box">
                <img
                    src={Hero}
                    height={!isContenedor ? 450 : 250}
                    width={!isContenedor ? 400 : 300}
                    className="image-box__hero"
                    alt="hero-bg"
                />
            </div>
        </div>
    );
}

export default Main;