import {Row} from 'antd';
import React from 'react'
import logo from "../img/topmenulogo.png";
import Eth from "../img/eth.svg";
import { Link } from "react-router-dom";
import { Layout } from 'antd';
import { Col, Divider, Row } from 'antd';
import Column from 'antd/es/table/Column';
import { flexbox } from 'styled-system';
import Flex from './Flex';
import Typography from './Typography';

const { Header: AntdHeader } = Layout;

function Header() {
  return (
    <Flex flexDirection='row' height={80} margin="0 20px" justifyContent="center" borderBottom="1px solid white">
      <Flex flexDirection='column' allignItems="center" justifyContent="center" >
        <Link to="/" className="link">
          <img src={logo} width={120} alt="Homepage Satoshi LIRA Project" />
        </Link>
      </Flex>
      <Flex flex={1} flexDirection="row" justifyContent="center" alignItems="center">
        <Flex padding="0 10px">
          <Link to="/swap" className="headerItem link">
            <Typography fontSize={16} color='white' margin={0}>Pre-sale</Typography>
          </Link>
        </Flex>
        <Flex borderLeft="1px solid white" height={20} ></Flex>
        <Flex padding="0 10px">
          <Link to="/tokens" className="headerItem link">
            <Typography fontSize={16} color='white' margin={0}>Token Economics</Typography>
          </Link>
        </Flex>
        <Flex borderLeft="1px solid white" height={20} ></Flex>
        <Flex padding="0 10px">
          <Link to="/swap" className="headerItem link">
            <Typography fontSize={16} color='white' margin={0}>White Paper</Typography>
          </Link>
        </Flex>
        <Flex borderLeft="1px solid white" height={20} ></Flex>
        <Flex padding="0 10px">
          <Link to="/swap" className="headerItem link">
            <Typography fontSize={16} color='white' margin={0}>Governance</Typography>
          </Link>
        </Flex>
      </Flex>
      <Flex justifyContent="center" alignItems="center">
        <div className="headerItem link">
          <img src={Eth} alt="eth" className="eth" />
          Ethereum
        </div>
        <div className="button">Connect Wallet</div>
      </Flex>
      <Flex borderBottom="1px solid white"></Flex>
    </Flex>
  
  )
}


export default Header
