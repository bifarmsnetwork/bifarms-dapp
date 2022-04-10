import React from 'react';
import { FaMediumM , FaTelegramPlane } from 'react-icons/fa';
import { FiTwitter , FiGithub } from 'react-icons/fi';
import { SiGitbook } from "react-icons/si";
// import { SiDiscord } from 'react-icons/si';
import Logo from '../../images/logo.svg';

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
                        <li> <a href="https://bifarmsnetwork-1.gitbook.io/bifarms/guide/how-to-participate" target="_blank" className="href">How to participate</a> </li>
                    </ul>
                    
                </div>
                <div className='footerDiv'>
                    <p className="title2"> Social <span></span></p>
                    <div className="community pc-community">
                        <div className="community-line">
                            <div className="community-item">
                            <a href="https://twitter.com/bifarmsnetwork" className="href" target="_blank"><FiTwitter/>
                                <span> Twitter </span></a>
                            </div>
                            <div className="community-item">
                            <a href="https://t.me/bifarmsnetwork" className="href" target="_blank"><FaTelegramPlane/>
                                <span> Telegram </span></a>
                            </div>
                            
                        </div>
                        <div className="community-line">
                            <div className="community-item">
                            <a href="https://medium.com/@bifarmsnetwork" className="href" target="_blank"><FaMediumM/>
                                <span> Medium </span></a>
                            </div>
                            <div className="community-item">
                            <a href="https://bifarmsnetwork-1.gitbook.io/bifarms/" className="href" target="_blank"><SiGitbook/>
                                <span> Docs </span></a>
                            </div>
                            <div className="community-item">
                            <a href="https://github.com/bifarmsnetwork" className="href" target="_blank"><FiGithub/>
                                <span> Github </span></a>
                            </div>
                            
                            
                        </div>
                    </div>
                    
                    
                    <div className="community h5-community">
                        
                            <div className="community-item">
                                <a href="https://twitter.com/bifarmsnetwork" className="href" target="_blank"><img src="https://bifarms.network/img/twitter.png" alt="" className="src" /></a>
                                
                            </div>
                            <div className="community-item">
                            <a href="https://t.me/bifarmsnetwork" className="href" target="_blank"><img src="https://bifarms.network/img/telegram.png" alt="" className="src" /></a>
                                
                            </div>
                            <div className="community-item">
                            <a href="https://medium.com/@bifarmsnetwork" className="href" target="_blank"><img src="https://bifarms.network/img/medium.png" alt="" className="src" /></a>
                               
                            </div>
                            <div className="community-item">
                            <a href="https://bifarmsnetwork-1.gitbook.io/bifarms/" className="href" target="_blank"><img src="https://bifarms.network/img/docs.png" alt="" className="src" /></a>
                                
                            </div>
                            <div className="community-item">
                            <a href="https://github.com/bifarmsnetwork" className="href" target="_blank"><img src="https://bifarms.network/img/github.png" alt="" className="src" /></a>
                               
                            </div>
                    </div>

                    
                       
                </div>
                <div className="footerDiv contact-us">
                            <img src={Logo} alt="" />
                            <div className="contact"> Contact us: <a href="mailto:contact@bifarms.network" className="href">contact@bifarms.network</a></div>
                        

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