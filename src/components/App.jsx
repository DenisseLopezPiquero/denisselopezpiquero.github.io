import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
import OutsideAlerter from "./OutsideAlerter";
import World from './World';
import Direct from './Direct';
import Friends from './Friends';
import News from './News';
import Chat from './Chat';
import DamePasta from './Dame_pasta';

function App() {
	var [logged, setLogged] = useState(true);
	var [optionclick, setOptionClick] = useState(false);
	var mainLogged = (bool) => {setLogged(current => bool);};
	var clickOptions = event => {setOptionClick(current => !current);};
	return (
		<Router>
			<div className="App">
				{logged ? <div id='header'>
					<div className='header-top'>
            			<div className='header-divisor'>
            			  <Link to='home'><div className='header-business'>
            			      <img className='header-logo' src={logo} alt="logo"/>
            			  </div></Link>
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
						  <div className='header-options-container'>
            			  	<img id='options_button' onClick={clickOptions} className='header-options' src={options} alt='option'/>
							{optionclick ? <OutsideAlerter setisActive={clickOptions} isActive={optionclick} parameterid='options_button'>
								<div className='header-options-div'>
								<Link className='link-options-hover' to="/">
									<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-logout" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
									  <path stroke="none" d="M0 0h24v24H0z"/>
									  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
									  <path d="M7 12h14l-3 -3m0 6l3 -3" />
									</svg><span className='header-logout-button'>Cerrar sesión</span></Link>
							</div></OutsideAlerter>: null}
						  </div>
            			</div>
						
          			</div>
		  			<div className='header-bottom'>
          				<div className='header-sub-bottom'>
						    <Link to="chat" className='header-linkes'style={{marginLeft: '16.6666%'}}><div className="header-sub">Chats</div></Link>
          				  	<Link to="direct"className='header-linkes'><div className="header-sub">Directos</div></Link>
          				  	<Link to="world"className='header-linkes'> <div className="header-sub">Mundo</div></Link>
          				  	<Link to="friends"className='header-linkes'><div className="header-sub">Amigos</div></Link>
          				  	<Link to="news"className='header-linkes'><div className="header-sub">Noticias</div></Link>
          				</div>
          				<Link className='header-cuenta' to="profile"><img className='header-cuenta-img' src={cuenta} alt="cuenta"/></Link>
          				<div>
          				 <Link to="dame_pasta" className='header-link'><img className='header-carrito' src={carrito} alt="carrito"/></Link> 
          				</div>
        			</div>
				</div>
				: null}
				<Routes>
					<Route exact path="/" element={<Auth setisLogged={mainLogged} isLogged={logged} />} />
					<Route path="/home" element={<Home />} />
					<Route path="/profile" element={<Perfil />} />
					<Route path="/chat" element={<Chat />} />
					<Route path="/direct" element={<Direct />} />
					<Route path="/world" element={<World />} />
					<Route path="/friends" element={<Friends />} />
					<Route path="/news" element={<News />} />
					<Route path="/dame_pasta" element={<DamePasta />} />
				</Routes>
			</div>
		</Router>

	);
}

export default App;
