import './Router.css'; // TODO: move router.css styles in better places
import Home from './pages/Home';
import Sacrifice from './pages/Sacrifice';
import Tokens from './pages/Tokens';

import { Routes, Route } from 'react-router-dom';

import Flex from './components/Flex';
import Header from './components/Header';
import Footer from './components/Footer';

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
          <Route path="/" element={<Home />} /> {/* you know what to do ;) */}
          <Route path="/tokens" element={<Tokens />} />
          <Route path="/sacrifice" element={<Sacrifice />} />
        </Routes>
      </Flex>
      <Footer />
    </Flex>
  );
}

export default Router;
