import React from 'react';
import logo from '../img/logo.gif';
import headerBell from '../img/bell.png';
import '../css/App.css';
import cuenta from '../img/cuenta.png';
import lupa from '../img/lupa.png';
import españa from '../img/españa.png';
import options from '../img/options.png';
import carrito from '../img/carrito.png';


function App() {
  return (
    <div className="App">
      <div id='header'>
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
          <div className='header-sub-bottom'>
            <div className="sub"style={{marginLeft: '16.6666%'}}>Chats</div>
            <div className="sub">Directos</div>
            <div className="sub">Mundo</div>
            <div className="sub">Amigos</div>
            <div className="sub">Noticias</div>
          </div>
          <img className='cuenta' src={cuenta} alt="cuenta"/>
          <div>
            <img className='carrito' src={carrito} alt="carrito"/>
          </div>
        </div>
      </div>
      <div id='home'>
        <h1> basura humana</h1>
        <p className='puton'> Mario es un cáncer para la sociedad. Se recomienda castración a martillazos</p>
        <span> Aaaaaaaa!!!!!</span>
        <br />
        <span> Mario se resiste</span>
        <br />
        <input type="checkbox"/>
        <img src={lupa} alt="Internet Ugandés" />
        <button className='header-button'><img src={lupa} alt="Llora" /></button>
      </div>
    </div>
    
  );
}

export default App;
