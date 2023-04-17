import logo from './img/topmenulogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopMenu />
        <AboutPage />
        <MyButton />
      </header>
    </div>
  );
}
function MyButton() {
  return (
    <button>Enter App</button>
  );
}
function AboutPage() {
  return (
    <div id='about-page'>
      <h1 className="title">{project.name}</h1>
      <p>The revolution of Cryptocurrency <br /> Join the Satoshi LIRA Ecosystem</p>

    </div>


  )
}
const project = {
  name: 'Satoshi LIRA'
}

function TopMenu() {
  return (
    <>
      <Logo />
      <ul>
        <li>Ecosystem</li>
        <li>Token Economics</li>
        <li>Farm</li>
        <li>White Paper</li>
        <li>Faq</li>
      </ul>
    </>

  )
}

function Logo() {
  return (
    <a href={`${window.location.protocol}//${window.location.hostname}${window.location.port !== 80 && ":3000"}`}>
      <img src={logo} alt="Homepage Satoshi LIRA Project" />
    </a>
  )
}

export default App;
