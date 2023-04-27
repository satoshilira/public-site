// import logo from './img/topmenulogo.png';
import topimage from './img/Group15.png';
import './App.css';
import { Layout } from 'antd';

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
  return(
    <img src={topimage} className="img-fluid" alt="Satoshi LIRA Cryptocurrecy Revolution" />
  )
}

function PageContent() {
  return (
    <div id='about-page'>
      <h1>Building Satoshi LIRA Ecosystem...</h1>
      <br />
      <br />
      <h3 style={{ margin: '0 5%' }}>Satoshi Lira is a revolutionary project which protocol allows to generate profit from decentralized finance apps, acting as engine 
        for the creation of a democratic ecosystem oriented towards political and economical freedom of its community.</h3>
    </div>
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
