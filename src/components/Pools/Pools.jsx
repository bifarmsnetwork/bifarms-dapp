import React, { useState } from "react";
import { data } from "../../data/pools";
import "./Pool.css";
import BFS from "../../images/BFS.svg";

import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const Pools = () => {

  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      {data.map(({token,apy,daily,tvl,network}) => {
        return (
        // Write html below
        <div>
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
                      <div className="jssp189">
                        <div className="jssp310 jssp190">
                          <img
                            src={BFS}
                            alt=""
                            role="presentation"
                            className="jcssp311"
                            width="100"
                            height="100"
                          />
                          
                        </div>
                        <div className="jssp202">
                          <div style={{ paddingTop: "15px" }}>BFS-BUSD LP</div>
                          <div style={{ fontSize: "10px", color: "grey" }}>
                            Uses: PancakeSwap
                          </div>
                          <div>Buy token Add Liquidity</div>
                        </div>
                      </div>
                    </div>
                    <div className="wallet_info jssp213">
                      <div className="jssp204">
                        <div>0</div>
                        <div>Wallet</div>
                      </div>

                      <div className="jssp204">
                        <div>0</div>
                        <div>Deposited</div>
                      </div>

                      <div className="jssp204">
                        <div>24.03%</div>
                        <div>APY</div>
                      </div>

                      <div className="jssp204">
                        <div>0.0590%</div>
                        <div>Daily</div>
                      </div>

                      <div className="jssp204">
                        <div>$22.73k</div>
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
                      <div className="jssp205">
                        <div className="ct1-input">
                          <input type="text" placeholder="0.0" value="" />
                          <span className="ct1-max"> MAX</span>
                        </div>
                        <div className="approve">Approve</div>
                        
                      </div>

                      <div className="jssp205">
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


           
        </div>
        
        
        
        );
      })}
    </div>
  );
};

export default Pools;
