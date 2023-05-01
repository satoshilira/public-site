import "./Router.css";
import App from"./App";
import Header from "./components/Header";
import Swap from "./components/Swap";
import Tokens from "./components/Tokens";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import { useConnect, useAccount } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

const { Footer, Content } = Layout;

function Router() {
  const { address, isConnected } = useAccount()

  return (
    <Layout>
      <Header/>
      <Content>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/swap" element={<Swap />} />
          <Route path="/tokens" element={<Tokens />} />
        </Routes>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  )
}

export default Router;
