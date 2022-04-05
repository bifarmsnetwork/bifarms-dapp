import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../../images/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';


const Navbar = () => {
    const [isMobile , setIsMobile]  = useState(true);
  return (
    <div className="header">
        <div className="header-container">
            <div className="header-left">
            <img src={Logo} alt="Logo" className='header-left-logo' />
            
                <div className={isMobile ? "nav-mobile" : "nav"}
                    onClick={() => setIsMobile(false)}
                >
                    <div className="n-item"> Launchpad </div>
                    <div className="n-item"> Farm </div>
                    <div className="n-item"> Pool </div>
                </div>

            </div>
            <div className="header-right">
                <div className="connect">
                    <span> Connect </span>
                </div>
                
            </div>
            <button className="mobile-menu-icon">
                {isMobile ? <GiHamburgerMenu/> : <GrClose/>}
            </button>
            
        </div>
    </div>
  )
}

export default Navbar