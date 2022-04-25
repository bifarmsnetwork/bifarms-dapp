import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Coin from "../../images/coin.svg";
import noItem from "../../images/no_item.png";
import "../Details/Details.css";
import "./Launchpad.css";
import modal,{web3Modal} from "../../modal";
import { seedABI } from "../../abi";
import {ethers} from 'ethers'
import {address} from '../../address'

const Launchpad = () => {
  // let address = "0x1868819e052D2daA9a9e770AdB9e175188343971"
  const [toggleState , setToggleState] = useState(1);
  // const [contract,setContract] = useState()
  const [deposit,setDeposit] = useState(0)

  const toggleTab = (index) => {
    setToggleState(index);
  }

  useEffect(()=>{
    async function handleContract(){
      let provider = await modal()
      let contract = new ethers.Contract(address, seedABI,provider)
      console.log(contract)
      // setContract(contract)
      let deposit = await contract.totalDeposit()
      deposit = deposit.toString()
      // console.log(ethers.utils.formatUnits(deposit,18))
      setDeposit(parseInt(ethers.utils.formatUnits(deposit,18)))
    }
    handleContract()
  },[address])

  // console.log(deposit)
  
  // let contract = new ethers.contract(address,seedABI,provider)
  let innerWidth = ((deposit/250000) *100).toString()
  return (
     <>
     <div className="el-main">
      <div className="ido">
      <div className="tabs-container">
        <div className="tabs">
          <div className={toggleState === 1 ? "tab-pan is-active" : "tab-pan"} onClick={() => toggleTab(1)}>Live [1]</div>
          <div className="line-perch"></div>
          <div className={toggleState === 2 ? "tab-pan is-active" : "tab-pan"} onClick={() => toggleTab(2)}>Upcoming [0]</div>
          <div className="line-perch"></div>
          <div className={toggleState === 3 ? "tab-pan is-active" : "tab-pan"} onClick={() => toggleTab(3)}>Ended [0]</div>
        </div>
        </div>
        <div className="list">
          {/* Item 1 */}
          <div className={toggleState === 1 ? "item" : "no-item"}>
            <div className="item-container">
              <div className="left" style={{flexDirection: 'row'}}>
                <img
                  src={Coin}
                  alt="logo"
                  className="logo"
                />
                 <div className="chain-info">
                  <img
                    src="https://bifarms.network/img/BSC.png"
                    alt=""
                    className="chain-logo"
                  />
                  <div className="chain-name">BSC</div>
                </div> 
              </div>
              <div className="right">
                <div className="top-div">
                  <p className="ido-name">BiFarms Seed Round</p>
                  <div className="amount-container">
                    <div className="amount color3">
                      <div className="amount-title">Price</div>
                      <div className="amount-value">
                        {" "}
                        1 BFS = 5.00 BUSD / 1 BUSD = 0.2 BFS
                      </div>
                    </div>
                  </div>
                  <div className="amount-container">
                    <div className="amount color3">
                      <div className="amount-title"> Soft/Hard Cap</div>
                      <div className="amount-value">
                        <span>0 BFS - </span>
                        <span>50,000 BFS</span>
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
                          2022.04.12 09.00 AM UTC
                        </div>
                        <div className="end-time time">
                          {/* <div className="perch">
                            <div className="perch-line"></div>
                            <div className="perch-center"></div>
                          </div> */}
                          04.01 09.00 2022 UTC
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="amount-container">
                    <div className="amount color3">
                      <div className="amount-title">Progress</div>
                      <div className="amount-value">
                        <div className="progress-desc">
                          <span> {deposit} BUSD</span>
                          <span> 250,000 BUSD</span>
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
                                  className="el-progress-bar__inner" style= {{width:innerWidth+'%'}}
                                ></div>
                              </div>
                            </div>
                          </div>
                          <p className="ido-time" style={{display: 'none'}}>
                            <span> 00 Days 20:34:25</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="button-div">
                    <div className="ido-with-whitelist">
                      <div className="ido-btn-detail linear-btn">
                        <Link to="/details/#Live" style={{ textDecoration: 'none' }}>
                        <div className="ido-btn-white-list"> Details </div>
                        </Link>
                        
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
            
              <img src={noItem} style={{width: '85%'}} />
              <p>No data yet </p>
            
          </div>
          <div className={toggleState === 3 ? "empty-item" : "no-item"}>
            
            <img src={noItem} style={{width: '85%'}}/>
            <p>No data yet </p>
          
        </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Launchpad;
