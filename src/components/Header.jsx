import React from 'react'
import logo from '../img/topmenulogo.png';
import { Link } from 'react-router-dom';
import Flex from './Flex';
import Typography from './Typography';
import Button from './Button';
import logoArbitrum from '../img/arbitrum-shield.png'

function Header() {
  return (
    <Flex flexDirection={['column', 'column', 'row']} height={80} margin="0 20px" justifyContent="center" borderBottom="1px solid white">
      <Flex flexDirection='column' allignItems="center" justifyContent="center" width="30%">
        <Link to="/" className="link">
          <img src={logo} width={120} alt="Homepage Satoshi LIRA Project" />
        </Link>
      </Flex>
      <Flex flex={1} flexDirection="row" justifyContent="center" alignItems="center">
        {/* <Flex padding="0 10px">
          <Link to="/swap" className="headerItem link">
            <Typography fontSize={16} color='white' margin={0}>Pre-sale</Typography>
          </Link>
        </Flex> */}
        {/* <Flex borderLeft="1px solid white" height={20} ></Flex> */}
        {/* <Flex padding="0 10px">
          <Link to="/tokens" className="headerItem link">
            <Typography fontSize={16} color='white' margin={0}>Token Economics</Typography>
          </Link>
        </Flex> */}
        {/* <Flex borderLeft="1px solid white" height={20} ></Flex> */}
        <Flex>
          <Flex padding="0 10px">
            <a href="https://whitepaper.satoshilira.io" target="_blank" rel="noreferrer">
              <Typography fontSize={16} color='white' margin={0} lineHeight="1.5em">White Paper</Typography>
            </a>
          </Flex>
          <Flex border="1px solid white" margin="0 5px" padding="10px 0" />
          <Flex padding="0 10px">
            <Link to="/tokens" className="headerItem link">
              <Typography fontSize={16} color='white' margin={0} lineHeight="1.5em">Tokens</Typography>
            </Link>
          </Flex>
          <Flex border="1px solid white" margin="0 5px" padding="10px 0" />
          <Flex padding="0 10px">
            <Link to="/sacrifice" className="headerItem link">
              <Typography fontSize={16} color='white' margin={0} lineHeight="1.5em">Sacrifice</Typography>
            </Link>
          </Flex>
        </Flex>
        {/* <Flex borderLeft="1px solid white" height={20} ></Flex> */}
        {/* <Flex padding="0 10px">
          <Link to="/swap" className="headerItem link">
            <Typography fontSize={16} color='white' margin={0}>Governance</Typography>
          </Link>
        </Flex> */}
      </Flex>
      <Flex alignItems="center" justifyContent="flex-end" width="30%">

        <img src={logoArbitrum} alt="arb" className="arb" width={30} />

        <Typography color='white'>
          Arbitrum
        </Typography>

        <Flex marginLeft={20} />

        {/* <div className="button"><Typography color="#3c3c3c" margin={0}>Enter Dapp</Typography></div> */}

        <Button>
          <Typography color="#3c3c3c" margin={0}>Enter Dap</Typography>
        </Button>
      </Flex>
      <Flex borderBottom="1px solid white" />
    </Flex>

  )
}


export default Header
