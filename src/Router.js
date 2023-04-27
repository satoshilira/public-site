import "./Router.css";
import App from"./App";
import Header from "./components/Header";
import Swap from "./components/Swap";
import Swap2 from "./components/Swap2";
import Tokens from "./components/Tokens";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";

const { Footer, Content } = Layout;

function Router() {
  return (

    // header

    <Layout>
      <Header/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/swap" element={<Swap />} />
        <Route path="/swap2" element={<Swap2 />} />
        <Route path="/tokens" element={<Tokens />} />
      </Routes> 
      <Footer>Footer</Footer>
    </Layout>

    // aggiungere footer
  )
}

export default Router;
