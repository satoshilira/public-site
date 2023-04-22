import logo from './img/topmenulogo.png';
import topimage from './img/Group15.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="container h-100">

          <TopNavbar />

          <div class="row p-5">
            <TopImage />
          </div>
          
          <PageContent />

        </div>
      </header>
    </div>
  );
}

function TopNavbar() {
  return (
    <div class="row p-4">
      <div class="col-2">
        <Logo />
      </div>
      <div class="col-8">
        <TopMenu />
      </div>
      <div class="col-2">
        
      </div>
    </div>
  );
}

function Logo() {
  return (
    <a href={`${window.location.protocol}//${window.location.hostname}${window.location.port !== 80 && ":3000"}`}>
      <img src={logo} class="img-fluid" alt="Homepage Satoshi LIRA Project" />
    </a>
  )
}

function TopMenu() {
  return (
    <>
      <ul>
        <li>Ecosystem</li>
        <li className='menuline'>Token Economics</li>
        <li className='menuline'>Dashboard</li>
        <li className='menuline'>White Paper</li>
        <li className='menuline'>Faq</li>
      </ul>
    </>
  )
}

function MyButton() {
  return (
    <button type="button" className='bordered-button'>Click Me!</button> 
  );
}

function TopImage() {
  return(
    <img src={topimage} className="img-fluid" alt="Satoshi LIRA Cryptocurrecy Revolution" />
  )
}

function PageContent() {
  return (
    <div id='about-page'>
      
      <h1>Work in Progress</h1>
    </div>
  )
}

const project = { 
  name: 'Satoshi LIRA'
}

function BuyButton() {
  return (
    <button type="button" className='buy-button'>Buy LIRA!</button> 
  );
}

export default App;
