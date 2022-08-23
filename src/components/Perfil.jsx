import React from "react";
<<<<<<< HEAD
import '../css/Profile.css';
import fotoprofile from '../img/cuenta.jpg';


=======
import '../css/Perfil.css'
>>>>>>> 5f9c88577e4848f3c8d434548e3f9ec76d054a27

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