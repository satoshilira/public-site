import "./Router.css";
import App from"./App";
import Header from "./components/Header";
import Swap from "./components/Swap";
import Tokens from "./components/Tokens";
import { Routes, Route } from "react-router-dom";

function Router() {
  return (
    <div className="Router">
      <Header/>
      <div className="mainWindow">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/swap" element={<Swap />} />
          <Route path="/tokens" element={<Tokens />} />
        </Routes> 
      </div>
    </div>
  )
}

export default Router;
