import React, { useState } from "react";
import "./Launchpad.css";

const Launchpad = () => {
  const [toggleState , setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
     <>
      <div className="tabs-container">
        <div className="tabs">
          <div className={toggleState === 1 ? "tab-pan is-active" : "tab-pan"} onClick={() => toggleTab(1)}>Live[1]</div>
          <div className="line-perch"></div>
          <div className={toggleState === 2 ? "tab-pan is-active" : "tab-pan"} onClick={() => toggleTab(2)}>Upcoming[0]</div>
          <div className="line-perch"></div>
          <div className={toggleState === 3 ? "tab-pan is-active" : "tab-pan"} onClick={() => toggleTab(3)}>Ended[0]</div>
        </div>
        </div>
        <div className="list">
          {/* Item 1 */}
          <div className={toggleState === 1 ? "item" : "no-item"}>
            <div className="item-container">
              <div className="left">
                <img
                  src="https://static.cybertron.world/images/launchpad/80a6499f744749c4abf4fb7c4f12b74c"
                  alt="logo"
                  className="logo"
                />
                <div className="chain-info">
                  <img
                    src="https://static.erax.io/app/images/chain/BSC.png"
                    alt=""
                    className="chain-logo"
                  />
                  <div className="chain-name">BSC</div>
                </div>
              </div>
              <div className="right">
                <div className="top-div">
                  <p className="ido-name">Derify Public round</p>
                  <div className="amount-container">
                    <div className="amount color3">
                      <div className="amount-title">Price</div>
                      <div className="amount-value">
                        {" "}
                        1 DRF = 0.8 BUSD / 1 BUSD = 1.25 DRF
                      </div>
                    </div>
                  </div>
                  <div className="amount-container">
                    <div className="amount color3">
                      <div className="amount-title"> Soft/Hard Cap</div>
                      <div className="amount-value">
                        <span>0 DRF - </span>
                        <span>150000 DRF</span>
                      </div>
                    </div>
                  </div>
                  <div className="amount-container">
                    <div className="amount color3">
                      <div className="amount-title"> Time </div>
                      <div className="amount-value">
                        <div className="start-time time">
                          <div className="perch">
                            <div className="perch-center"></div>
                          </div>
                          " 03.26 08:00 2022 UTC"
                        </div>
                        <div className="end-time time">
                          <div className="perch">
                            <div className="perch-line"></div>
                            <div className="perch-center"></div>
                          </div>
                          "03.27 08.00 2022 UTC"
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="amount-container">
                    <div className="amount color3">
                      <div className="amount-title">Progress</div>
                      <div className="amount-value">
                        <div className="progress-desc">
                          <span> 0 DRF </span>
                          <span> 150000 DRF</span>
                        </div>
                        <div className="progress-plan progress-status2">
                          <div
                            role="progressbar"
                            aria-valuenow="100"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            className="el-progress el-progress--line is-success el-progress--without-text"
                          >
                            <div className="el-progress-bar">
                              <div
                                className="el-progress-bar__outer"
                                // style="height: 12px;"
                              >
                                <div
                                  className="el-progress-bar__inner"
                                  // style="width: 100%; background-color: rgb(51,51,75);"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <p className="ido-time">
                            <span> 00 Days 20:34:25</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="button-div">
                    <div className="ido-with-whitelist">
                      <div className="ido-btn-detail shake-shake linear-btn">
                        <div className="ido-btn-white-list"> WhiteLists </div>
                      </div>
                      <div className="ido-btn-detail shake-shake linear-btn">
                        Partcipate
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
         
          </div>
          {/* Item 1 End */}
          <div className={toggleState === 2 ? "empty-item" : "no-item"}>
            
              <img src="https://cdn.jsdelivr.net/gh/eraxio/websource@2.5.11/pcsource/static/img/nomal-empty.02f45c2.png" />
              <p>No data yet </p>
            
          </div>
          <div className={toggleState === 3 ? "empty-item" : "no-item"}>
            
            <img src="https://cdn.jsdelivr.net/gh/eraxio/websource@2.5.11/pcsource/static/img/nomal-empty.02f45c2.png" />
            <p>No data yet </p>
          
        </div>
        </div>
      
    </>
  );
};

export default Launchpad;
