import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Coin from "../../images/coin.svg";
import noItem from "../../images/no_item.png";
import "./Airdrop.css";
import modal,{web3Modal} from "../../modal";
import { seedABI } from "../../abi";
import {ethers} from 'ethers'
import {address} from '../../address'

const Airdrop = () => {
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
      <div className="aido">
      
        <div className="alist">
          {/* Item 1 */}
          <div className={toggleState === 1 ? "aitem" : "no-item"}>
            <div className="item-container">
              
              <div className="right">
                <div className="atop-div">
                  <div className="aleft_side">
                      <div><img
                        src={Coin}
                        alt="logo"
                        className="alogo"
                      /></div>
                    <div className="aname_div">
                    <p className="aido-name">BiFarms Airdrop</p>
                    <p className="aido-name"><span className="color_grey">Check:</span> Whitelist</p>
                    <p className="aido-name"><span className="color_grey">Token Address:</span> Oxbbf8c8f9b79808be0bc8d24f2c7a5111b47e230b</p>
                  </div>
                  </div>
                  
                  
                  
                  
                  <div className="abutton-div">
                    <div className="ido-with-whitelist">
                      <div className="aido-btn-detail linear-btn">
                        <Link to="/details" style={{ textDecoration: 'none' }}>
                        <div className="ido-btn-white-list"> Claim Airdrop </div>
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

export default Airdrop;
