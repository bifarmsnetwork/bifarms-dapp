import React from 'react';
import { FaMediumM , FaTelegramPlane } from 'react-icons/fa';
import { FiTwitter , FiGithub } from 'react-icons/fi';
import { SiGitbook } from "react-icons/si";
// import { SiDiscord } from 'react-icons/si';
import Logo from '../../images/logo.png';

import './Footer.css';

const Footer = () => {
  return (
    <div className="el-footer">
        <div className="footer">
            <div className="footer-container">
                <div className='footerDiv'>
                    <p className="title1"> Help <span></span> </p>
                    <ul>
                        <li style={{display: 'none'}}> FAQ </li>
                        <li> How to participate </li>
                    </ul>
                    
                </div>
                <div className='footerDiv'>
                    <p className="title2"> Social <span></span></p>
                    <div className="community pc-community">
                        <div className="community-line">
                            <div className="community-item">
                                <FiTwitter/>
                                <span> Twitter </span>
                            </div>
                            <div className="community-item">
                                <FaTelegramPlane/>
                                <span> Telegram </span>
                            </div>
                            
                        </div>
                        <div className="community-line">
                            <div className="community-item">
                                <FaMediumM/>
                                <span> Medium </span>
                            </div>
                            <div className="community-item">
                                 <SiGitbook/>
                                <span> Docs </span>
                            </div>
                            <div className="community-item">
                                <FiGithub/>
                                <span> Github </span>
                            </div>
                            
                            
                        </div>
                    </div>
                    
                    
                    <div className="community h5-community">
                        
                            <div className="community-item">
                                <img src="https://bifarms.network/img/twitter.png" alt="" className="src" />
                                
                            </div>
                            <div className="community-item">
                                <img src="https://bifarms.network/img/telegram.png" alt="" className="src" />
                                
                            </div>
                            <div className="community-item">
                                <img src="https://bifarms.network/img/medium.png" alt="" className="src" />
                               
                            </div>
                            <div className="community-item">
                                 <img src="https://bifarms.network/img/docs.png" alt="" className="src" />
                                
                            </div>
                            <div className="community-item">
                                <img src="https://bifarms.network/img/github.png" alt="" className="src" />
                               
                            </div>
                    </div>

                    
                       
                </div>
                <div className="footerDiv contact-us">
                            <img src={Logo} alt="" />
                            <div className="contact"> Contact us: contact@bifarms.network</div>
                        

                    </div>
                
                
            </div>
            <div className="downDiv">
                <div>
                    <span> Copyright @ 2022 . BiFarms Network All rights reserved</span>
                </div>
                <div>
                    <span>
                        <a href="" className="link-class">Terms of Service </a>
                        <a href="" className="link-class"> Privacy Policy </a>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer