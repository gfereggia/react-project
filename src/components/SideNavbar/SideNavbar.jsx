import React from 'react';
import { Link } from "react-scroll";

//style
import './SideNavbar.scss';

const SideNavbar = ({show}) => {

    return (
        <nav className={show ? 'side-navbar open' : 'side-navbar'}>
            <ul>
                <ul>
                    <li><Link to="main" spy={true} smooth={true} offset={-70} duration= {500}>Inicio</Link></li>
                    <li><Link to="technologies" spy={true} smooth={true} offset={-70} duration= {500}>Tecnologías</Link></li>
                    <li><Link to="benefits" spy={true} smooth={true} offset={-70} duration= {500}>Beneficios</Link></li>
                    <li><Link to="requirements" spy={true} smooth={true} offset={-70} duration= {500}>Requerimientos</Link></li>
                    <li>
                        <button><a href="/login">Login</a></button>
                    </li>
                </ul>
            </ul>
        </nav>
    )
}

export default SideNavbar;