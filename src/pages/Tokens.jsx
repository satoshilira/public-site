import React from "react";
import styled from "styled-components";
import Flex from "../components/Flex";
import Typography from "../components/Typography";
import { addLiraToken } from "../lira/addToMetamask";
import logoArbitrum from "../img/arbitrum-shield.png";
import logoMetamask from "../img/metamask-fox.svg";

const StyledMetamaskLogo = styled.img`
  cursor: pointer;
`;

export default function Tokens() {
  return (
    <Typography>Coming Soon!</Typography>
  )
  // return (
  //   <Flex flexDirection="column" alignItems="center" marginTop={50}>
  //     <Flex flexDirection="column" alignItems="center">
  //       <Flex alignItems="center">
  //         <Typography fontSize={32} color="white">
  //           Satoshi LIRA
  //         </Typography>
  //         <Flex marginLeft={10} />
  //         <a
  //           href="https://arbiscan.io/address/0xd5f5aed271e23ba993cbf2494fbf20ebfc1a5597#code"
  //           target="_blank"
  //           rel="noreferrer"
  //         >
  //           <img
  //             src={logoArbitrum}
  //             alt="arb"
  //             className="arb"
  //             width={40}
  //             height={40}
  //           />
  //         </a>

  //         <Flex marginLeft={10} />

  //         <StyledMetamaskLogo
  //           src={logoMetamask}
  //           alt="metamask"
  //           width={40}
  //           onClick={addLiraToken}
  //         />
  //       </Flex>
  //       <Typography fontSize={24} color="white" marginTop={0}>
  //         0xd5F5Aed271E23bA993cBf2494FBF20ebfc1A5597
  //       </Typography>
  //     </Flex>

  //     <Flex flexDirection="column" alignItems="center">
  //       <Flex alignItems="center">
  //         <Typography fontSize={32} color="white">
  //           Treasury Bond Gold
  //         </Typography>
  //         <Flex marginLeft={10} />
  //         <a
  //           href="https://arbiscan.io/address/0xd5f5aed271e23ba993cbf2494fbf20ebfc1a5597#code"
  //           target="_blank"
  //           rel="noreferrer"
  //         >
  //           <img
  //             src={logoArbitrum}
  //             alt="arb"
  //             className="arb"
  //             width={40}
  //             height={40}
  //           />
  //         </a>
  //       </Flex>
  //       <Typography fontSize={24} color="white" marginTop={0}>
  //         0x157aeaA76DCd69Ac1afa53c1F5A32568AE7B707a
  //       </Typography>
  //     </Flex>

  //     <Flex flexDirection="column" alignItems="center">
  //       <Flex alignItems="center">
  //         <Typography fontSize={32} color="white">
  //           Treasury Bond Silver
  //         </Typography>
  //         <Flex marginLeft={10} />
  //         <a
  //           href="https://arbiscan.io/address/0xd5f5aed271e23ba993cbf2494fbf20ebfc1a5597#code"
  //           target="_blank"
  //           rel="noreferrer"
  //         >
  //           <img
  //             src={logoArbitrum}
  //             alt="arb"
  //             className="arb"
  //             width={40}
  //             height={40}
  //           />
  //         </a>
  //       </Flex>
  //       <Typography fontSize={24} color="white" marginTop={0}>
  //         0xBca8bBA8722A28Cae40Cd42f77531AA780744f89
  //       </Typography>
  //     </Flex>

  //     <Flex flexDirection="column" alignItems="center">
  //       <Flex alignItems="center">
  //         <Typography fontSize={32} color="white">
  //           Treasury Bond Bronze
  //         </Typography>
  //         <Flex marginLeft={10} />
  //         <a
  //           href="https://arbiscan.io/address/0xd5f5aed271e23ba993cbf2494fbf20ebfc1a5597#code"
  //           target="_blank"
  //           rel="noreferrer"
  //         >
  //           <img
  //             src={logoArbitrum}
  //             alt="arb"
  //             className="arb"
  //             width={40}
  //             height={40}
  //           />
  //         </a>
  //       </Flex>
  //       <Typography fontSize={24} color="white" marginTop={0}>
  //         0x61011033Ebf4c7575c4e99CB9DBe20555ea866F4
  //       </Typography>
  //     </Flex>
  //   </Flex>
  // );
}
