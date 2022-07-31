import logo from '../img/logo.png';
import headerBell from '../img/bell.png';
import '../css/App.css';

function App() {
  return (
    <div className="App">
      <div className='header-top'>
        <div className='header-business'>
            <img className='header-logo' src={logo} alt="logo"/>
            <span className='header-title'>BunWe</span>
        </div>
        <img className='header-bell' src={headerBell} alt='Notifications'/>
        <div>
          <input className='header-search' placeholder='Buscar...'></input>
        </div>
      </div>
      <div className='header-bottom'>

      </div>
    </div>
  );
}

export default App;
