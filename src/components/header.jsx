import logo from '../img/logo.png';
import '../css/App.css';
import cuenta from '../img/cuenta.png';


function App() {
  return (
    <div className="App">
      <div className='header-top'>
        <div className='header-business'>
            <img className='header-logo' src={logo} alt="logo"/>
            <img className='cuenta' src={cuenta} alt="cuenta"/>

            <span className='header-title'>BunWe</span>
        </div>
      </div>
      <div className='header-bottom'>
      <a className="sub" href="" style={{marginLeft: '25%'}}>Chats</a>
      <a className="sub" href="">Mundo</a>
      <a className="sub" href="">Noticias</a>
      </div>
    </div>
  );
}

export default App;
