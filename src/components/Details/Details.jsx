import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Launchpad/Launchpad.css";
import "./Details.css";
import coinLogo from "../../images/Untitled-1.svg";
import { approve, getDeposit, checkApprove,claimInitialToken,claimToken,checkDeposit,checkBalance,checkAmount,getAccountBalance} from "../../busd";
import modal from "../../modal";

const Details = () => {
  const [status, setStatus] = useState(false);
  const [value,setValue]  = useState(0)
  const [deposit,setDeposit] = useState(0)
  const [balance,setBalance] = useState(0)
  const [amount,setAmount] = useState(0)
  const [accountBalance,setAccountBalance] = useState(0)

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
      let res = await approve();
      let confirmation = res.wait();
      if (confirmation.blockNumber) setStatus(true);
    }
  };
  const handleDeposit = async () => {
    let bool = await handleCheckApprove();
    console.log(bool);
    if (bool && value>=500) {
      // if(handleCheckApprove()){
      getDeposit(value);
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
    // let provider = await modal();
    // const accounts = await provider.listAccounts();
  //  if(accounts) {
    let sum = await checkDeposit()
    setDeposit(sum)
  //  }
  }

  const handleBalance = async()=>{
    let provider = await modal();
    const accounts = await provider.listAccounts();
   if(accounts) {
    let sum = await checkBalance(accounts[0])
    setBalance(sum)
   }
  }

  const handleAmount = async()=>{
    let provider = await modal();
    const accounts = await provider.listAccounts();
   if(accounts) {
    let sum = await checkAmount(accounts[0])
    setAmount(sum)
   }
  }
  
  const handleAccountBalance = async()=>{
    let provider = await modal();
    const accounts = await provider.listAccounts();
   if(accounts) {
    let sum = await getAccountBalance(accounts[0])
    setValue(sum)
   }
  }

  useEffect(() => {
    handleCheckApprove();
    handlecheckDeposit()
    handleBalance()
    handleAmount()
  });

  console.log(value)
  let innerWidth = ((deposit/250000) *100).toString()

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
                      <img src={coinLogo} alt="logo" className="ido-logo" />
                      {/* <span className="ido-name"> BiFarms </span> */}
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
                  <a href="https://bifarms.network/" className="href" target="_blank"><img
                      src="https://bifarms.network/img/website.png"
                      alt=""
                    /></a>
                  </div>
                  <div className="ido-link-item">
                  <a href="https://bifarms.network/Whitepaper.pdf" className="href" target="_blank"><img
                      src="https://bifarms.network/img/whitepaper.png"
                      alt=""
                    /></a>
                  </div>
                  <div className="ido-link-item">
                  <a href="https://twitter.com/bifarmsnetwork" className="href" target="_blank"><img
                      src="https://bifarms.network/img/twitterb.png"
                      alt=""
                    /></a>
                  </div>
                  <div className="ido-link-item">
                  <a href="https://t.me/bifarmsnetwork" className="href" target="_blank"><img
                      src="https://bifarms.network/img/teleb.png"
                      alt=""
                    /></a>
                  </div>
                  <div className="ido-link-item">
                  <a href="https://medium.com/@bifarmsnetwork" className="href" target="_blank"><img
                      src="https://bifarms.network/img/mediumb.png"
                      alt=""
                    /></a>
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
                  <div className="theme_color column-value"> BUSD </div>
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
                      <a href="https://bscscan.com/address/0xbbf8c8f9b79808be0bc8d24f2c7a5111b47e230b" style={{ textDecoration: "none", color: "#0c9fd4" , lineBreak: 'anywhere'}} target="_blank">0xbbf8c8f9b79808be0bc8d24f2c7a5111b47e230b</a>
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
                  <img src={coinLogo} alt="" className="logo" />
                  <div>
                    {/*<p className="ido-name"> BiFarms </p>*/}
                    <div className="ido-tags">
                      <div className="status"><div className="perch_detail moving_image">
                            <div className="perch_center_detail"></div>
                          </div>
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
                            2022.04.12 09:00 AM UTC
                          </div>
                          <div className="end-time time">
                            2022.04.12 09:00 AM UTC
                          </div>
                        </div>
                        <div className="amount-title" style={{marginTop: '25px'}}>Progress</div>
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
                      <div className="amount-title"  style={{marginTop: '25px'}}>My subscription amount
                        <div className="amount-value">{amount}</div>
                      </div>
                      <div className="amount-title"  style={{marginTop: '25px'}}>Available BFS
                        <div className="amount-value">{balance}</div>
                      </div>
                      <div className="amount-title"  style={{marginTop: '25px'}}>BUSD</div>
                      {status ? (
                        <>
                        <div className="ct1-input">
                          <input type="text" placeholder="Enter deposit amount" value={value} onChange={e=>setValue(e.target.value)} />
                          <span onClick={handleAccountBalance} className="ct1-max"> MAX</span>
                        </div>
                        <div className="approve" onClick={handleDeposit}>
                          Deposit
                        </div>
                        <div className="claim_box"><div className="claim" onClick={handleInitialClaim}>
                            TGE Claim
                          </div>
                        <div className="claim" onClick={handleClaim}>
                            Claim
                          </div></div>
                          
                          
                          
                          </>
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
