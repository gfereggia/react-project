import React from 'react';

//style
import './Section.scss';

//assets
import Icon from 'react-icons-kit';
import {twitter} from 'react-icons-kit/icomoon/twitter';

//components
import Button from '../Button/Button';

const Section = () => {
    return (
        <div className="section-container">
            <div className="section-main__image">
                <div className="section-image-box">
                    <h1 className='image-text'>
                        <span className='secondary'> 350 +</span>
                        <span className="primary"> Woloxers</span>
                    </h1>
                    <div className='text-box'>
                        <Icon icon={twitter} className='twitter' /> <span className='twitter-link'><a href='https://twitter.com/wolox'>@Wolox</a></span>
                    </div>
                    <Button type='button' clase='twitter-button'><a href='https://twitter.com/wolox' rel="noopener noreferrer" target='_blank'>Siguenos</a></Button>
                </div>
            </div>
            <div className="section-main__text">
                <h1>
                    Trabajamos para
                    <span className="primary"> convertir</span><span className='secondary'> ideas</span> en productos
                </h1>
            </div>
        </div>
    );
}

export default Section;
