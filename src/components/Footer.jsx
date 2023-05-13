import React from 'react'
import { Link } from "react-router-dom";
import { flexbox } from 'styled-system';
import Flex from './Flex';
import Typography from './Typography';
import logo from "../img/topmenulogo.png";

export default function Footer() {
  return (

    <Flex justifyContent="center" borderTop="1px solid white" marginTop="20px" flexDirection='column'>
      <Flex flexDirection="row" justifyContent="center">
        <Flex marginTop="20px" alignItems="center">
          <Flex>
            <Flex padding="0 10px">
              {/* <Link to="/swap" className="headerItem link"> */}
              <Typography fontSize={16} color='white' margin={0}>Terms of use</Typography>
              {/* </Link> */}
            </Flex>
            <Flex padding="0 10px">
              {/* <Link to="/tokens" className="headerItem link"> */}
              <Typography fontSize={16} color='white' margin={0}>Privacy policy</Typography>
              {/* </Link> */}
            </Flex>
            <Flex padding="0 10px">
              {/* <Link to="/swap" className="headerItem link"> */}
              <Typography fontSize={16} color='white' margin={0}>Cookies policy</Typography>
              {/* </Link> */}
            </Flex>
            <Flex padding="0 10px">
              {/* <Link to="/swap" className="headerItem link"> */}
              <Typography fontSize={16} color='white' margin={0}>© Satoshi LIRA 2022</Typography>
              {/* </Link> */}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
