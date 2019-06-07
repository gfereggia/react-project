import React from 'react';

//style
import './Modal.scss';

//assets
import Icon from 'react-icons-kit';
import {ic_close} from 'react-icons-kit/md/ic_close'

function Modal ({ handleClose, show, children }){
    const showHideClassname = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassname} onClick={handleClose}>
            <section className="modal-main">
                <Icon icon={ic_close} className='close-modal' onClick={handleClose}/>
                {children}
            </section>
        </div>
    )
}

export default Modal;