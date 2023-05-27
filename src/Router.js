import './Router.css'; // TODO: move router.css styles in better places
import HomePage from './pages/HomePage'; // TODO: move to src/pages/Homepage.tsx
import { Routes, Route } from 'react-router-dom';

import Flex from './components/Flex';
import Header from './components/Header';
import Footer from './components/Footer';

// pages
// TODO: import homepage
import Tokens from './pages/Tokens';

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
          <Route path="/" element={<HomePage />} /> {/* you know what to do ;) */}
          <Route path="/tokens" element={<Tokens />} />
        </Routes>
      </Flex>
      <Footer />
    </Flex>
  );
}

export default Router;
