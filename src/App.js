import React,{useState,useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import Launchpad from './components/Launchpad/Launchpad';
import Navbar from './components/Navbar/Navbar';
import { NetworkProvider } from './context/NetworkContext';


const App = () => {
  
  return (
    <BrowserRouter>
    <NetworkProvider>
    <Navbar/>
    <Routes>
      <Route path="/" element = {<Launchpad/>}/>
      <Route path="/details" element = {<Details/>}/>
    </Routes>
    <Footer/>
    </NetworkProvider>
    </BrowserRouter>

  )
}

export default App