import "./Router.css";
import App from "./App";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Flex from "./components/Flex";

// const { Content } = Layout;

function Router() {
  return (
    <Flex
      flexDirection="column"
      minHeight="100vh"
      justifyContent="space-between"
    >
      <Flex flexDirection="column">
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </Flex>
      <Footer />
    </Flex>
  );
}

export default Router;
