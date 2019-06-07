import React, {useContext} from 'react';

//styles
import './Technologies.scss';

//assets
import Techs from '../../assets/Ic_Tecnologys.svg';

//context
import {AppContext} from '../../appContext';

const Technologies = ({id}) => {
    const {
        state: {isContenedor}
    } = useContext(AppContext);
    return (
        <div className="tech-container" id={id}>
            <div className="tech-main__text">
                <h1>
                    Estamos buscando para incorporar gente increíble para estas tecnologías:
                </h1>
            </div>
            <div className="tech-main__image">
                <img
                    src={Techs}
                    height={!isContenedor ? 550 : 250}
                    width={!isContenedor ? 400 : 300}
                    className="tech-image-box"
                    alt="technologies"
                />
            </div>
        </div>
    );
}

export default Technologies;