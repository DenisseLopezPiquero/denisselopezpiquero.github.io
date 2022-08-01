import logo from '../img/logo.gif';
import headerBell from '../img/bell.png';
import '../css/App.css';
import cuenta from '../img/cuenta.png';
import lupa from '../img/lupa.png';
import españa from '../img/españa.png';
import options from '../img/options.png';


function App() {
  return (
    <div className="App">
      <div className='header-top'> 
        <div className='header-divisor'>
          <div className='header-business'>
              <img className='header-logo' src={logo} alt="logo"/>
          </div>
          <img className='header-bell' src={headerBell} alt='Notifications'/>
        </div>
        <div className='header-divisor'>
          <div className='header-central'>
            <input className='header-search' placeholder='Buscar...'></input>
            <button className='header-button'><img className='header-button-img' src={lupa} alt="search"/></button>
          </div>
          <div className='header-new-post'><span className='header-text-np'>+</span></div>
        </div>
        <div className='header-divisor'>
          <div className='header-lang'><img className='header-lang-img' src={españa} alt='lang'/></div>
          <img className='header-options' src={options} alt='lang'/>
        </div>
      </div>
      <div className='header-bottom'>
        <a className="sub" href="www.google.com" style={{marginLeft: '25%'}}>Chats</a>
        <a className="sub" href="www.google.com">Mundo</a>
        <a className="sub" href="www.google.com">Noticias</a>
        <img className='cuenta' src={cuenta} alt="cuenta"/>
      </div>
    </div>
    
  );
}

export default App;
