import React from 'react';
import './Navbar.css';
import Logo from '../../images/logo.png';


const Navbar = () => {
  return (
    <div className="header">
        <div className="header-container">
            <div className="header-left">
            <img src={Logo} alt="Logo" className='header-left-logo' />
                <div className="nav">
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
        </div>
    </div>
  )
}

export default Navbar