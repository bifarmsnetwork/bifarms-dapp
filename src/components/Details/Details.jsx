import React from "react";
import "./Details.css";

const Details = () => {
  return (
    <>
      <div className="ido-detail">
        <div className="back">
          <div className="back-container">
            <span>
              <i className="icon el-icon-arrow-left"></i>
              Back
            </span>
          </div>
        </div>
        <div className="ido-container">
          <div className="ido-container-left">
            <div className="item">
              <div className="item-top">
                <div className="idologo">
                  <img
                    src="https://static.cybertron.world/images/launchpad/d282f5147e854a6098acf3862c6ed646"
                    alt="logo"
                    className="ido-logo"
                  />
                  <span className="ido-name"> Nerv Protocol </span>
                </div>
              </div>
              <div className="ido-desc">
                Nerv Protocol will be on every Game and App Developers Mind
                within 6 Months. With Nerv, Developers will be able to make
                every Transaction on their App or Game seemingly Gasless. Users
                will experience every Transaction on this App or Game as
                Gasless. This can be achieved by Developers filling up Caskets
                with NRV. This NRV can be allocated to Users of their App or
                Game to Pay for Gas. Another Use Case of Nerv is to make
                Transactions for Governance, like with the Incubator Protocol on
                0xPAD, Gasless.
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
                <div className="cap-value column-value"> 0 NRV </div>
              </div>
              <div className="hart-cap item-column">
                <div className="cap-title column-title"> Hard Cap</div>
                <div className="cap-value column-value"> 100,000,000 NRV </div>
              </div>
            </div>
            <div className="supported-coin item-column">
              <div className="coin-title column-title"> Supported Coin </div>
              <div className="unit"> BUSD </div>
              <div className="exchange-rate column-value">
                <span> 1 NRV = 0.001 BUSD / 1 BUSD = 1,000 NRV</span>
              </div>
            </div>
            <div className="item-column">
              <div className="column-title"> Lock-up rules </div>
              <div className="column-value">
                Allocation: 100-2000 BUSD
                <br />
                Vesting time and rules:
                <br />
                25% TGE, 25% monthly
                <br />
                The token contract address is awaiting official announcement.
              </div>
            </div>
            <div className="item-column">
              <div className="column-title"> Project Introduction </div>
              <div className="column-value">
                Nerv uses a Deflationary Token Economy. Nerv will have a Fixed
                Number of Tokens. Nerv will have a lower NFT Marketplace
                Commission then most other NFT Marketplaces. A Portion of
                Profits from the Marketplace will be used to buyback and burn
                Tokens. Buyback and burn Mechanism when Prices drop below a
                certain Threshold. The same NRV Token will be used across the
                entire Ecosystem of Apps, Staking, Validating, Trading and
                Governance. As Demand grows, the Price of NRV will rise
                Exponentially.
                <br />
                <br />
                Token information [Deflationary]
                <br />
                Type: BEP20, CW20
                <br />
                Ticker: NRV
                <br />
                Total supply: 10,000,000,000 NRV(fixed)
                <br />
                Initial circulating supply: 252,000,000 $NRV
                <br />
                Initial market cap: $********** USD (Public Sales + Airdrop)
                <br />
                Precise Emission Type: Burn & Mint Equilibrium, Programmatic
                Burn
                <br />
                Capped Supply: Yes
                <br />
                <br />
                One Feature of our chain will be payment of gas fee in different
                tokens like BTC, ETH, UST, LUNA or ATOM, we think giving user
                flexibility to pay gas fee is great way for user to explore a
                chain, unlike in Ethereum where user first have to transfer
                token like UST then to send it eth have to be sent in another
                transaction.
                <br />
                <br />
                Some important points to keep in mind about tokens.
                <br />
                1. Initially Token will be on different chains like solana, BSC,
                terra but eventually when we are ready for mainnet then tokens
                will be 1:1 swap-able with native NRV coin.
                <br />
                2. The sum of all tokens on all chains will always come out to
                be 10 Billion.
                <br />
                3. To mint a token on another chain the same amount of token on
                another chain will have to be burned.Token will be deflationary
                over the time, and will have regular buy and burn mechanism in 3
                cases:
                <br />
                --1.Profits from the marketplace will be used to buyback tokens
                and burn from initial supply.
                <br />
                --2.All the gas fee in case of any will be burned.
                <br />
                --3.Tokens from the Treasury will be burned in case of any
                market pressure or other event, till it has 10 % of supply.
                <br />
              </div>
            </div>
            <div className="harvestDesc"></div>

          </div>
          <div className="ido-container-right"></div>
        </div>
      </div>
    </>
  );
};

export default Details;
