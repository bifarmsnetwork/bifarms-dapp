import React, { useEffect, useState,useContext } from "react";
import { Link } from "react-router-dom";
import Coin from "../../images/coin.svg";
import noItem from "../../images/no_item.png";
import "./Airdrop.css";
import { NetworkContext } from "../../context/NetworkContext";
import {claimAirdrop} from "../../busd"
import {truncateAddress} from '../../utils'


const Airdrop = () => {
  const [toggleState , setToggleState] = useState(1);
  const [account,setAccount] = useContext(NetworkContext)

  const toggleTab = (index) => {
    setToggleState(index);
  }

 const handleClaim = async()=>{
   console.log(account)
  claimAirdrop(account)
 }

  
  return (
    <>
      <div className="el-main">
        <div className="aido">
          <div className="alist">
            {/* Item 1 */}
            <div className={toggleState === 1 ? "aitem" : "no-item"}>
              <div className="aitem-container">
                <div className="right">
                  <div className="atop-div">
                    <div className="aleft_side">
                      <div>
                        <img src={Coin} alt="logo" className="alogo" />
                      </div>
                      <div className="aname_div margin_top_btn2">
                        <p className="aido-name">BiFarms Airdrop | FCFS</p>
                        <p className="aido-name">
                          <span className="color_grey">Check:</span>{" "}
                          <a className = "theme_color color_hover" href="https://bifarms.network/WinnersList.xlsx">
                            Whitelist
                          </a>
                        </p>
                        <p className="aido-name">
                          <span className="color_grey">
                              Token Address:
                          </span>{" "}
                            <a className = "theme_color color_hover" target="_blank" href="https://bscscan.com/address/0xbbf8c8f9b79808be0bc8d24f2c7a5111b47e230b#code">
                          {truncateAddress("0xbbf8c8f9b79808be0bc8d24f2c7a5111b47e230b")}
                            </a>
                        </p>
                      </div>
                    </div>

                    <div className="abutton-div margin_top_btn">
                      <div className="ido-with-whitelist">
                        <div className="aido-btn-detail linear-btn">
                          {/* <Link to="/" style={{ textDecoration: 'none' }}> */}
                          <div
                            className="ido-btn-white-list"
                            onClick={handleClaim}
                          >
                            {" "}
                            Claim Airdrop{" "}
                          </div>
                          {/* </Link> */}
                        </div>
                        {/* <div className="ido-btn-detail shake-shake linear-btn">
                        Details
                      </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Item 1 End */}
            <div className={toggleState === 2 ? "empty-item" : "no-item"}>
              <img src={noItem} style={{ width: "85%" }} />
              <p>No data yet </p>
            </div>
            <div className={toggleState === 3 ? "empty-item" : "no-item"}>
              <img src={noItem} style={{ width: "85%" }} />
              <p>No data yet </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Airdrop;
