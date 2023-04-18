import logo from './img/topmenulogo.png';
import topimage from './img/Group15.png';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div class="container">
  <div class="row p-4">
    <div class="col-2">
      <Logo />
    </div>
    <div class="col-8">
      <TopMenu />
    </div>
    <div class="col-2">
      <MyButton />
    </div>
  </div>
  <div class="row p-5">
    <div class="col">
      <TopImage />
    </div>
  </div>
</div>
        
        
        <AboutPage />
        
      </header>
    </div>
  );
}
function MyButton() {
  return (
    <button type="button">Click Me!</button> 
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
      <img src={logo} class="img-fluid" alt="Homepage Satoshi LIRA Project" />
    </a>
  )
}

function TopImage() {
  return(
    <img src={topimage} class="img-fluid" alt="Satoshi LIRA Cryptocurrecy Revolution" />
  )
}



export default App;
