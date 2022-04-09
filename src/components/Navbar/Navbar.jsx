import React, { useState, useEffect } from "react";
import Logo from "../../images/logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Navbar.css";
import modal, { web3Modal } from "../../modal";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [instance, setInstance] = useState();
  const [provider, setProvider] = useState();
  const [error, setError] = useState();
  const [account, setAccount] = useState();

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const connectWallet = async () => {
    try {
      console.log("Wallet connect called");
      const instance = await web3Modal().connect();
      setInstance(instance);
      let provider = await modal();
      setProvider(provider);
      const accounts = await provider.listAccounts();
      if (accounts) setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };
  const refreshState = () => {
    setAccount();
  };

  const disconnectWallet = async () => {
    try {
      console.log("Wallet disconnect called");
      await web3Modal().clearCachedProvider();
      refreshState();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (web3Modal().cachedProvider) {
      connectWallet();
    }
  }, []);

  useEffect(() => {
    if (instance?.on) {
      const handleAccountsChanged = (accounts) => {
        console.log("accountsChanged", accounts);
        if (accounts) setAccount(accounts[0]);
      };

      const handleDisconnect = () => {
        console.log("disconnect", error);
        disconnectWallet();
      };

      instance.on("accountsChanged", handleAccountsChanged);
      instance.on("disconnect", handleDisconnect);

      return () => {
        if (instance.removeListener) {
          instance.removeListener("accountsChanged", handleAccountsChanged);
          instance.removeListener("disconnect", handleDisconnect);
        }
      };
    }
  }, [instance]);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <img src={Logo} alt="Logo" />
      </Link>
      <div onClick={handleClick} className="nav-icon">
        {open ? <FiX /> : <FiMenu />}
      </div>
      <ul className={open ? "nav-links active" : "nav-links"}>
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={closeMenu}>
            Launchpad
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link" onClick={closeMenu}>
            Farms
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/shop" className="nav-link" onClick={closeMenu}>
            Pool
          </Link>
        </li>
        <li className="nav-item">
          {account ? (
            <button href="" className="connect" onClick={disconnectWallet}>
              Disconnect
            </button>
          ) : (
            <button href="" className="connect" onClick={connectWallet}>
              Connect
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
