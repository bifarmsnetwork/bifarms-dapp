import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Launchpad/Launchpad.css";
import "./Details.css";
import Logo from "../../images/coin.svg";
import { approve, checkApprove,claimInitialToken,claimToken,checkDeposit,checkBalance } from "../../busd";
import modal from "../../modal";

const Details = () => {
  const [status, setStatus] = useState(false);
  const [value,setValue]  = useState(0)
  const [deposit,setDeposit] = useState(0)
  const [balance,setBalance] = useState(0)

  const handleCheckApprove = async () => {
    let provider = await modal();
    const accounts = await provider.listAccounts();
    if (accounts) {
      let value = await checkApprove(accounts[0]);
      console.log(value.toString());
      if (parseInt(value.toString()) > 0) setStatus(true);
      else setStatus(false);
      return status;
    }
  };

  const handleApprove = async () => {
    let bool = await handleCheckApprove();
    console.log(bool);
    if (!bool) {
      approve();
    }
  };
  const handleDeposit = async () => {
    let bool = await handleCheckApprove();
    console.log(bool);
    if (bool && value>=500) {
      // if(handleCheckApprove()){
      deposit(value);
    }
  };

  const handleInitialClaim = async()=>{
    let provider = await modal();
    const accounts = await provider.listAccounts();
   if(accounts) {
     let result = await claimInitialToken(accounts[0])
     console.log(result)
  }
}
  const handleClaim = async()=>{
    let provider = await modal();
    const accounts = await provider.listAccounts();
   if(accounts) {
      claimToken(accounts[0])
    
  }
  }

  const handlecheckDeposit = async()=>{
    let provider = await modal();
    const accounts = await provider.listAccounts();
   if(accounts) {
    let sum = await checkDeposit(accounts[0])
    setDeposit(sum)
   }
  }

  const handleBalance = async()=>{
    let provider = await modal();
    const accounts = await provider.listAccounts();
   if(accounts) {
    let sum = await checkBalance(accounts[0])
    setBalance(sum)
   }
  }
  
  useEffect(() => {
    handleCheckApprove();
    handlecheckDeposit()
    handleBalance()
  });

  console.log(value)

  return (
    <>
      <div className="el-main">
        <div className="ido-content">
          <div className="ido-detail">
            <div className="back">
              <div className="back-container">
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "#9999b3" }}
                >
                  <span>&#32;&#60;&#32;Back</span>
                </Link>
              </div>
            </div>
            <div className="ido-container">
              <div className="ido-container-left">
                <div className="item1">
                  <div className="item-top">
                    <div className="idologo">
                      <img src={Logo} alt="logo" className="ido-logo" />
                      <span className="ido-name"> BiFarms </span>
                    </div>
                  </div>
                  <div className="ido-desc line4hidden">
                    BiFarms is a Decentralized, Multi-Chain Yield Optimizer that
                    focuses high yield on crypto assets & All In One Tierless
                    Launchpad. BiFarms is a DeFi platform that allows its users
                    to earn compound interest on their crypto holdings. Through
                    a set of investment strategies secured and enforced by smart
                    contracts, BiFARMS network automatically maximizes the user
                    rewards from various liquidity pools (LPs),‌ ‌automated
                    market making (AMM) projects,‌ ‌and‌ ‌other yield‌ farming
                    ‌opportunities in the DeFi ecosystem.
                  </div>
                </div>
                <div className="ido-links">
                  <div className="ido-link-item">
                    <img
                      src="https://cdn.erax.io/user/20210926/7c8df6a048393cb2cbaf3b35dc134291.png"
                      alt=""
                    />
                  </div>
                  <div className="ido-link-item">
                    <img
                      src="https://cdn.erax.io/user/20210926/dabe6ff390ffaa42ede19ec479b98e1f.png"
                      alt=""
                    />
                  </div>
                  <div className="ido-link-item">
                    <img
                      src="https://cdn.erax.io/user/20210926/a45efe3c3a229639d9b638eb2a2241d8.png"
                      alt=""
                    />
                  </div>
                  <div className="ido-link-item">
                    <img
                      src="https://cdn.erax.io/user/20210926/c1ebe8df6a490299990f781d82632e3d.png"
                      alt=""
                    />
                  </div>
                  <div className="ido-link-item">
                    <img
                      src="	https://cdn.erax.io/user/20210926/9571e925dd6896cad7bcef52d336030e.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="cap">
                  <div className="soft-cap item-column">
                    <div className="cap-title column-title"> Soft Cap</div>
                    <div className="cap-value column-value"> 0 BFS </div>
                  </div>
                  <div className="hart-cap item-column">
                    <div className="cap-title column-title"> Hard Cap</div>
                    <div className="cap-value column-value"> 50,000 BFS </div>
                  </div>
                </div>
                <div className="supported-coin item-column">
                  <div className="coin-title column-title">
                    {" "}
                    Supported Coin{" "}
                  </div>
                  <div className="theme_color"> BUSD </div>
                  <div className="exchange-rate column-value">
                    <span> 1 BFS = 5.00 BUSD / 1 BUSD = 0.20 BFS</span>
                  </div>
                </div>

                <div className="supported-coin item-column">
                  <div className="coin-title column-title"> Token Address </div>
                  {/* <div className="unit"> BUSD </div> */}
                  <div className="exchange-rate column-value">
                    <span className="theme_color">
                      {" "}
                      <a href="https://bscscan.com/address/0xbbf8c8f9b79808be0bc8d24f2c7a5111b47e230b" style={{ textDecoration: "none", color: "#0c9fd4" }} target="_blank">0xbbf8c8f9b79808be0bc8d24f2c7a5111b47e230b</a>
                    </span>
                  </div>
                </div>
                <div className="item-column">
                  <div className="column-title" style={{marginBottom: '15px'}}> Allocation: <span className="amount_color">500-25,000 BUSD</span><br/> </div>
                  <div className="column-title"> Lock-up rules </div>
                  <div className="column-value">
                    <span style={{ lineHeight: "1.5px" }}>
                      
                      {/*Vesting time and rules:*/}
                      
                      Seed Round - 10% unlocked at TGE, cliff 2 months. The rest 90% will be unlocked monthly in the next 15
                      months.
                    </span>
                  </div>
                </div>

                <div className="supported-coin item-column">
                  <div className="coin-title column-title"> Team Brief: </div>
                  {/* <div className="unit"> BUSD </div> */}
                  <div className="exchange-rate column-value">
                    <span>
                      {" "}
                      <a href="https://bifarmsnetwork-1.gitbook.io/bifarms/team/team" style={{ textDecoration: "none", color: "#0c9fd4" }} target="_blank"> https://bifarmsnetwork-1.gitbook.io/bifarms/team/team</a>
                    </span>
                  </div>
                </div>

                <div className="item-column">
                  <div className="column-title"> Project Introduction </div>
                  <div className="column-value">
                    BiFARMS is a Decentralized Finance (DeFi) Yield Optimizer
                    project, that allows its users to make more crypto with
                    crypto. DeFi applications are unique in the sense that they
                    are permission less and trustless, meaning that anyone with
                    a supported wallet can interact with them without the need
                    for a trusted middlemen. BiFARMS caters its users by making
                    it easy to get a yield on their crypto capital in a safe and
                    decentralized manner. Through a set of smart contracts and
                    several investment strategies, BiFARMS automatically
                    maximizes the user rewards from various liquidity pools
                    (LPs), automated market making (AMM) projects, and other
                    yield farming opportunities in the DeFi ecosystem. This
                    provides a huge advantage over attempting to do this
                    manually yourself. BiFARMS up those yields!
                    <br />
                    <br />
                    Token information
                    <br />
                    Type: BEP20
                    <br />
                    Ticker: BFS
                    <br />
                    Total supply: 1,000,000(fixed)
                    <br />
                    Initial circulating supply: 52,000 BFS
                    <br />
                    Initial Circulating market cap: $520,000
                    <br />
                    Fully diluted market cap: $10,000,000
                    <br />
                    <br />
                    <span className="text_white">DEX Listing:</span> Pancakeswap
                    <br />
                    <span className="text_white">CEX Listing:</span> BitMart,
                    BKEX, BiBox, LBANK, gate.io, MEXC Global
                    <br />
                    <br />
                  </div>
                </div>
                <div className="harvestDesc"></div>
              </div>
              <div className="ido-container-right">
                <div className="left">
                  <img src={Logo} alt="" className="logo windmill" />
                  <div>
                    <p className="ido-name"> BiFarms </p>
                    <div className="ido-tags">
                      <div className="status">
                        <span>Live</span>
                      </div>
                      <div className="chain-info">
                        <img src="" alt="" />
                        <div className="chain-name"> BSC </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="top-div">
                    <div className="amount-container">
                      <div className="amount color3">
                        <div className="amount-title">Time</div>
                        <div className="amount-value">
                          <div className="start-time time">
                          <div class="perch"><div class="perch-center"></div></div>
                            2022.04.11 09:00 AM UTC
                          </div>
                          <div className="end-time time">
                            2022.04.11 09:00 AM UTC
                          </div>
                        </div>
                        <div className="amount-title">Progress</div>
                      <div className="amount-value">
                        <div className="progress-desc">
                          <span> {deposit} BFS</span>
                          <span> 50,000 BFS</span>
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
                          <p className="ido-time" style={{display: 'none'}}>
                            <span> 00 Days 20:34:25</span>
                          </p>
                        </div>
                      </div>
                      </div>
                      <div className="amount-title">My subscription amount
                        <div className="amount-value">{deposit}</div>
                      </div>
                      <div className="amount-title">Available
                        <div className="amount-value">{balance}</div>
                      </div>
                      {status ? (
                        <>
                        <input type="text" placeholder="Enter deposit amount" value={value} onChange={e=>setValue(e.target.value)} />
                        <div className="approve" onClick={handleDeposit}>
                          Deposit
                        </div>
                        <div className="approve" onClick={handleInitialClaim}>
                            Inital Claim
                          </div>
                        <div className="approve" onClick={handleClaim}>
                            Claim
                          </div></>
                      ) : (
                        <div className="approve" onClick={handleApprove}>
                          Approve
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
