import React from 'react';

//style
import './ToggleElement.scss';

const ToggleElement = ({click}) => {
    return (
        <button className="toggle-button" onClick={click}>
            <div className="toggle-button__line"></div>
            <div className="toggle-button__line"></div>
            <div className="toggle-button__line"></div>
        </button>
    )
}

export default ToggleElement;