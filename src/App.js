import {Col, Divider, Row} from 'antd';
import topImage from './img/Group15.png';
import './App.css';
import { Layout } from 'antd';
import Flex from './components/Flex';

const { Header, Footer, Sider, Content } = Layout;


function App() {
  return (
    <Content>
      <TopImage />

      <PageContent />

    </Content>
  );
}
// function TopMenu() {
//   return (
//     <>
//       <ul>
//         <li>Ecosystem</li>
//         <li className='menuline'>Token Economics</li>
//         <li className='menuline'>Dashboard</li>
//         <li className='menuline'>White Paper</li>
//         <li className='menuline'>Faq</li>
//       </ul>
//     </>
//   )
// }

// function MyButton() {
//   return (
//     <button type="button" className='bordered-button'>Click Me!</button> 
//   );
// }

function TopImage() {
  return (
    <Flex justifyContent="center" marginTop={150} >
      <img src={topImage} className="img-fluid" alt="Satoshi LIRA Cryptocurrecy Revolution" />
    </Flex>
  )
}

function PageContent() {
  return (
    <>
      <Flex margin="100px 10% 0 10%">
        <Flex width="30%">
          <div id='about-page'>
            <br />
            <h1>Building Satoshi LIRA Ecosystem...</h1>
            <br />
            <h3 >Satoshi Lira is a revolutionary project which protocol allows to generate profit from decentralized finance apps, acting as engine
              for the creation of a democratic ecosystem oriented towards political and economical freedom of its community.</h3>
          </div>
        </Flex>
        <Flex flex={1} justifyContent="center" alignItems="center">
          <Flex flexDirection="column" width="30%">
            <Flex>
              <h1>Presale Supply</h1>
            </Flex>
            <Flex borderTop="1px solid white">
              <h1 >Total 900M LIRA</h1>
            </Flex>
            <Flex borderBottom="1px solid white">
              <h1>Left 223,050M LIRA</h1>
            </Flex>
            <Flex justifyContent="center" flex={1} marginTop="30px">
              <div className="button">Join Presale</div>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

    </>
  )
}

// const project = { 
//   name: 'Satoshi LIRA'
// }

// function BuyButton() {
//   return (
//     <button type="button" className='buy-button'>Buy LIRA!</button> 
//   );
// }

export default App;
