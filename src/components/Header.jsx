import React from 'react'
import logo from "../img/topmenulogo.png";
import Eth from "../img/eth.svg";
import { Link } from "react-router-dom";
import { Layout } from 'antd';

const { Header: AntdHeader } = Layout;

function Header() {
  return (
    <AntdHeader>
      <div className='leftH'>
        <Link to="/" className="link">
          <img src={logo} width={120} alt="Homepage Satoshi LIRA Project" />
        </Link>
        <Link to="/swap" className="link">
          <div>Swap</div>
        </Link>
        <Link to="/swap2" className="link">
          <div>Swap2</div>
        </Link>
        <Link to="/tokens" className="link">
          <div>Tokens</div>
        </Link>
      </div>
      <div className="rightH">
        <div className="headerItem">
          <img src={Eth} alt="eth" className="eth" />
          Ethereum
        </div>
        <div className="connectButton">Connect Wallet</div>
      </div>
    </AntdHeader>
  )
}

export default Header