import React from "react";
import '../css/Perfil.css'
import cuenta from '../img/cuenta.jpg';

export default class Perfil extends React.Component {
	render() {
		return (
		<div>
			<img className='image' src={cuenta} alt="cuenta" />
			<h1 className='header'>nickname_name</h1>
		</div>
		);
	}
}