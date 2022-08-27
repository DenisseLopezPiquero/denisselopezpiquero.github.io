import React from "react";
import '../css/Profile.css';
import fotoprofile from '../img/cuenta.jpg';

export default class Perfil extends React.Component {
	render() {
		return (
		<div>
			<div>
			   <span className="profile1">
				FGRG
			   </span>
			</div>
			<div>
			<center>
			<img className='fotoprofile' src={fotoprofile} alt='picture'/>
			</center>
			<div className='Username'>
				<span>
					Username
				</span>
				</div>
				</div>
			<h1>Perfil</h1>
			<div className='level'>
			<span>
			 Level
			</span>
			</div>
		</div>
		);
	}
}