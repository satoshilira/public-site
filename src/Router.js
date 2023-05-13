import "./Router.css";
import App from"./App";
import Header from "./components/Header";
import Swap from "./components/Swap";
import Tokens from "./components/Tokens";
import { Routes, Route } from "react-router-dom";
import { useConnect, useAccount } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import Footer from "./components/Footer"
import Flex from "./components/Flex";

// const { Content } = Layout;

function Router() {
  const { address, isConnected } = useAccount()

  return (
    <Flex flexDirection="column" minHeight="calc(100vh - 155px)" justifyContent="space-between">
      <Header/>
      <Flex>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/swap" element={<Swap />} />
          <Route path="/tokens" element={<Tokens />} />
        </Routes>
      </Flex>
      <Footer/>
    </Flex>
  )
}

export default Router;
