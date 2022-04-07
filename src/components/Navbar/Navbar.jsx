import React, { useState } from 'react';
import Logo from '../../images/logo.png';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	return (
		<nav className="navbar">
			<Link to="/" className="nav-logo">
            <img src={Logo} alt="Logo"/>
			</Link>
			<div onClick={handleClick} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>
			<ul className={open ? 'nav-links active' : 'nav-links'}>
				<li className="nav-item">
					<Link to="/" className="nav-link" onClick={closeMenu}>
						Launchpad
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/about" className="nav-link" onClick={closeMenu}>
						Farms
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/shop" className="nav-link" onClick={closeMenu}>
						Pool
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/contact" className="connect" onClick={closeMenu}>
						Connect
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;