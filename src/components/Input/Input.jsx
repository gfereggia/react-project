import React from 'react';

//style
import './Input.scss';

function Input({type, clase, name, id, placeholder, disabled, onChange, autocomplete}) {
    return (
        <input type={type ? type : "text"} className={clase ? clase : 'input'} placeholder={placeholder} name={name}
               id={id ? id : ''} disabled={disabled ? disabled : false} onChange={onChange} autoComplete={autocomplete ? autocomplete : 'off'}/>
    );
}

export default Input;