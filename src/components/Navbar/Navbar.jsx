// import React, { useState } from 'react';
// import './Navbar.css';
// import Logo from '../../images/logo.png';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { GrClose } from 'react-icons/gr';


// const Navbar = () => {
//     const [isMobile , setIsMobile]  = useState(true);
//   return (
//     <div className="header">
//         <div className="header-container">
//             <div className="header-left">
//             <img src={Logo} alt="Logo" className='header-left-logo' />
            
//                 <div className={isMobile ? "nav-mobile" : "nav"}
//                     onClick={() => setIsMobile(false)}
//                 >
//                     <div className="n-item"> Launchpad </div>
//                     <div className="n-item"> Farm </div>
//                     <div className="n-item"> Pool </div>
//                 </div>

//             </div>
//             <div className="header-right">
//                 <div className="connect">
//                     <span> Connect </span>
//                 </div>
                
//             </div>
//             <button className="mobile-menu-icon">
//                 {isMobile ? <GiHamburgerMenu/> : <GrClose/>}
//             </button>
            
//         </div>
//     </div>
//   )
// }

// export default Navbar

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