import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import Launchpad from './components/Launchpad/Launchpad';
import Navbar from './components/Navbar/Navbar';
import Airdrop from './components/Airdrop/Airdrop.jsx';
import Farms from './components/Farms/Farms';
import Pools from './components/Pools/Pools';
import { NetworkProvider } from './context/NetworkContext';


const App = () => {
  
  return (
    <BrowserRouter>
    <NetworkProvider>
    <Navbar/>
    <Routes>
      <Route path="/" element = {<Launchpad/>}/>
      <Route path="/details" element = {<Details/>}/>
      <Route path="/Farms" element = {<Farms/>}/>
      <Route path="/Pools" element = {<Pools/>}/>
      <Route path="/Airdrop" element = {<Airdrop/>}/>
    </Routes>
    <Footer/>
    </NetworkProvider>
    </BrowserRouter>

  )
}

export default App