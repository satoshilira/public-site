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

const StyledTokenLink = styled.a`
  &:hover {
    text-decoration: underline;
    text-underline-offset: 6px;
    text-decoration-thickness: 1px;
    color: white;
  }
`
const StyledCopyButton = styled(Typography)`
  color: #888888;

  &:active {
    color: #aaaaaa;
  }

  &::selection {
    color: inherit;
    background: inherit;
  }
`

export default function Tokens() {
  return (
    <Flex flexDirection="column" alignItems="center" marginTop={50}>
      <Flex flexDirection="column" alignItems="center">
        <Flex alignItems="center">
          <Typography fontSize={32} color="white">
            Satoshi LIRA
          </Typography>
          <Flex marginLeft={10} />
          <a
            href="https://arbiscan.io/address/0xA07ac236fEBc390c798504E927DC8D6a4e1FfcA3#code"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={logoArbitrum}
              alt="arb"
              className="arb"
              width={40}
              height={40}
            />
          </a>

          <Flex marginLeft={10} />

          <StyledMetamaskLogo
            src={logoMetamask}
            alt="metamask"
            width={40}
            onClick={addLiraToken}
          />
        </Flex>
        <Flex alignItems="center">
        <StyledTokenLink
          href="https://arbiscan.io/address/0xA07ac236fEBc390c798504E927DC8D6a4e1FfcA3#code"
          target="_blank"
          rel="noreferrer"
        >
          <Typography fontSize={24} margin={0} color="white" marginTop={0}>
            0xA07ac236fEBc390c798504E927DC8D6a4e1FfcA3
          </Typography>
        </StyledTokenLink>
        <StyledCopyButton onClick={() => navigator.clipboard.writeText('0xA07ac236fEBc390c798504E927DC8D6a4e1FfcA3')} marginLeft={3} cursor="pointer">
          Copy
        </StyledCopyButton>
        </Flex>
      </Flex>

      {/* <Flex flexDirection="column" alignItems="center">
        <Flex alignItems="center">
          <Typography fontSize={32} color="white">
            Treasury Bond Gold
          </Typography>
          <Flex marginLeft={10} />
          <a
            href="https://arbiscan.io/address/{address}#code"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={logoArbitrum}
              alt="arb"
              className="arb"
              width={40}
              height={40}
            />
          </a>
        </Flex>
        <Typography fontSize={24} color="white" marginTop={0}>
          address
        </Typography>
      </Flex> */}

      {/* <Flex flexDirection="column" alignItems="center">
        <Flex alignItems="center">
          <Typography fontSize={32} color="white">
            Treasury Bond Silver
          </Typography>
          <Flex marginLeft={10} />
          <a
            href="https://arbiscan.io/address/{address}#code"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={logoArbitrum}
              alt="arb"
              className="arb"
              width={40}
              height={40}
            />
          </a>
        </Flex>
        <Typography fontSize={24} color="white" marginTop={0}>
          address
        </Typography>
      </Flex> */}

      {/* <Flex flexDirection="column" alignItems="center">
        <Flex alignItems="center">
          <Typography fontSize={32} color="white">
            Treasury Bond Bronze
          </Typography>
          <Flex marginLeft={10} />
          <a
            href="https://arbiscan.io/address/{address}#code"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={logoArbitrum}
              alt="arb"
              className="arb"
              width={40}
              height={40}
            />
          </a>
        </Flex>
        <Typography fontSize={24} color="white" marginTop={0}>
          address
        </Typography>
      </Flex> */}
    </Flex>
  );
}
