import React from 'react';

//style
import './Backdrop.scss'

const Backdrop = ({click}) => {
    return (
        <div className="backdrop" onClick={click}></div>
    )
}

export default Backdrop;