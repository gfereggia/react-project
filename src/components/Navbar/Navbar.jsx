import React from 'react';
import { Link } from "react-scroll";

//style
import './Navbar.scss';

//assets
import Logo from '../../assets/logo_full_color.svg';

//components
import Button from '../Button/Button';
import ToggleElement from '../SideNavbar/ToggleElement';

const Navbar = ({navbarHandler}) => {

    return (
        <header className="toolbar">
            <nav className="toolbar__navigation">
                <div className="toolbar__logo">
                    <a href="/">
                        <img
                            src={Logo}
                            height={30}
                            alt="WOLOX"
                        />
                    </a>
                </div>
                <div className="spacer"/>
                <div className="toolbar__navigation-items">
                    <ul>
                        <li><Link to="main" spy={true} smooth={true} offset={-70} duration= {500}>Inicio</Link></li>
                        <li><Link to="technologies" spy={true} smooth={true} offset={-70} duration= {500}>Tecnologías</Link></li>
                        <li><Link to="benefits" spy={true} smooth={true} offset={-70} duration= {500}>Beneficios</Link></li>
                        <li><Link to="requirements" spy={true} smooth={true} offset={-70} duration= {500}>Requerimientos</Link></li>
                    </ul>
                  <a href="/login">
                    <Button
                        type='button'
                        clase='toolbar__button'
                        text='Login'
                    />
                  </a>
                </div>
                <div className="toolbar__toggle-button">
                    <ToggleElement click={navbarHandler}/>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
