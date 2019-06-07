import React, {useState} from 'react';

//style
import './App.scss';

//components
import Backdrop from '../Backdrop/Backdrop';
import Benefits from '../Benefits/Benefits';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Navbar from '../Navbar/Navbar';
import Requirements from '../Requirements/Requirements';
import SideNavbar from '../SideNavbar/SideNavbar';
import Section from '../Section/Section';
import Technologies from '../Technologies/Technologies';

function App() {

    const [openNavbar, setOpenNavbar] = useState(false)

    const handleNavbarClick = () => {
        setOpenNavbar(!openNavbar)
    }

    const handleBackdropClick = () => {
        setOpenNavbar(false)
    }

    let backdrop;

    if (openNavbar) {
        backdrop = <Backdrop click={handleBackdropClick}/>;

    }

    return (
        <div className="app">
            <Navbar navbarHandler={handleNavbarClick}/>
            <SideNavbar show={openNavbar}/>
            {backdrop}
            <Main id='main'/>
            <Technologies id='technologies'/>
            <Section/>
            <Benefits id='benefits'/>
            <Requirements id='requirements'/>
            <Footer/>
        </div>
    );
}

export default App;
