import React, { useState } from "react";
import "./Farms.css";
import BUSD from "../../images/BUSD.svg";
import BFS from "../../images/BFS.svg";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const Farms = () => {
  const [isActive, setIsActive] = useState(false);

  const down = AiFillCaretDown;
  const up = AiFillCaretUp;

  return (
    <>
      <div className="el-main">
        <div className="aido">
          <div style={{ marginBottom: "20px" }}>
            <div className="accordion">
              <div className="accordion-item">
                <div
                  className="accordion-title"
                  onClick={() => setIsActive(!isActive)}
                >
                  <div className="main">
                    <div className="token_info">
                      <div className="jss189">
                        <div className="jss310 jss190">
                          <img
                            src={BFS}
                            alt=""
                            role="presentation"
                            className="jcss311"
                            width="100"
                            height="100"
                          />
                          <img
                            src={BUSD}
                            alt=""
                            role="presentation"
                            className="jcss311"
                            width="100"
                            height="100"
                          />
                        </div>
                        <div className="jss202">
                          <div style={{ paddingTop: "15px" }}>BFS</div>
                          <div style={{ fontSize: "10px", color: "grey" }}>
                            Uses: Bifarms Network
                          </div>
                          <div>Buy token</div>
                        </div>
                      </div>
                    </div>
                    <div className="wallet_info jss213">
                      <div className="jss204">
                        <div>0</div>
                        <div>Wallet</div>
                      </div>

                      <div className="jss204">
                        <div>0</div>
                        <div>Deposited</div>
                      </div>

                      <div className="jss204">
                        <div>24.03%</div>
                        <div>APY</div>
                      </div>

                      <div className="jss204">
                        <div>0.0590%</div>
                        <div>Daily</div>
                      </div>

                      <div className="jss204">
                        <div>$22.75k</div>
                        <div>TVL</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    {isActive ? <AiFillCaretUp /> : <AiFillCaretDown />}
                  </div>
                </div>
                {isActive && (
                  <div className="accordion-content">
                    <div className="main001">
                      <div className="jss205">
                        <div className="ct1-input">
                          <input type="text" placeholder="0.0" value="" />
                          <span className="ct1-max"> MAX</span>
                        </div>
                        <div className="approve">Approve</div>
                        
                      </div>

                      <div className="jss205">
                        <div className="ct1-input">
                          <input type="text" placeholder="0.0" value="" />
                          <span className="ct1-max"> MAX</span>
                        </div>
                        <div className="claim_box">
                          <div className="claim">Withdraw</div>
                          <div className="claim">Withdraw All</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Farms;
