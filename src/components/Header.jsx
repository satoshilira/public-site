import React from 'react'
import logo from "../img/topmenulogo.png";
import Eth from "../img/eth.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className='leftH'>
        <a href={`${window.location.protocol}//${window.location.hostname}${window.location.port !== 80 && ":3000"}`}>
          <img src={logo} width={120} alt="Homepage Satoshi LIRA Project" />
        </a>
        <Link to="/swap" className="link">
          <div className="headerItem">Swap</div>
        </Link>
        <Link to="/tokens" className="link">
          <div className="headerItem">Tokens</div>
        </Link>
      </div>
      <div className="rightH">
        <div className="headerItem">
          <img src={Eth} alt="eth" className="eth" />
          Ethereum
        </div>
        <div className="connectButton">Connect</div>
      </div>
    </header>
  )
}

export default Header