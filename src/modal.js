import Web3Modal from "web3modal";
import { ethers } from "ethers";

const providerOptions = {
  /* See Provider Options Section */
  metamask: {
    id: "injected",
    name: "Metamask",
    type: "injected",
    check: "isMetaMask",
  },
  //   walletconnect: {
  //     package: WalletConnect, // required
  //     options: {
  //       infuraId: '0x1E6b54f079157E58CC9b116F924B384509b63F82' // required
  //     }
  //   }
};

export const web3Modal = () =>
  new Web3Modal({
    cacheProvider: true, // optional
    providerOptions, // required
  });

let modal = async () => {
  const instance = await web3Modal().connect();
  const provider = new ethers.providers.Web3Provider(instance);

  return provider;
};

export default modal;
