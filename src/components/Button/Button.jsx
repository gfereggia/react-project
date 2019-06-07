import React from 'react';

//style
import './Button.scss';

function Button({type, clase, text, disabled, onClick, children}){
    return(
        <button type={type} disabled={disabled} className={clase ? clase : 'button'} onClick={onClick}>{text ? text : children}</button>
    )
}

export default Button;
