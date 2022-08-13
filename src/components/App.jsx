import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../css/App.css';
import Home from './Home.jsx';
import Auth from './Auth.jsx';
import Perfil from './Perfil.jsx';
import logo from '../img/logo.gif';
import headerBell from '../img/bell.png';
import lupa from '../img/lupa.png';
import españa from '../img/españa.png';
import options from '../img/options.png';
import cuenta from '../img/cuenta.jpg';
import carrito from '../img/carrito.png';


function App() {
	var [logged, setLogged] = useState(true);
	var mainLogged = event => {setLogged(current => false);};
	return (
		<Router>
			<div className="App">
				{logged ? <div id='header'>
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
          				  	<div className="header-sub"style={{marginLeft: '16.6666%'}}>Chats</div>
          				  	<div className="header-sub">Directos</div>
          				  	<div className="header-sub">Mundo</div>
          				  	<div className="header-sub">Amigos</div>
          				  	<div className="header-sub">Noticias</div>
          				</div>
          				<img className='header-cuenta' src={cuenta} alt="cuenta"/>
          				<div>
          				  <img className='header-carrito' src={carrito} alt="carrito"/>
          				</div>
        			</div>
				</div>
				: <div></div>}
				<Routes>
					<Route exact path="/" element={<Auth setisLogged={mainLogged} isLogged={logged} />} />
					<Route path="/home" element={<Home />} />
					<Route path="/profile" element={<Perfil />} />
				</Routes>
			</div>
		</Router>

	);
}

export default App;
