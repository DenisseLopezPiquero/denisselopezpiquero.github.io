import react from 'react';
import '../css/Auth.css';
import logo from  '../img/logo.gif';
import solologo from "../img/solologo.svg";
import {Link} from "react-router-dom"

export default class Auth extends react.Component {
	constructor(props) {
        super(props);
		this.componentDidMount = this.componentDidMount.bind(this);
    }
	componentDidMount() {
		this.props.setisLogged();
	}
    render() {
        return (
        <div className='auth-fondo'>
        <img src={logo} width="100" className='auth-logo' />
        <div  className='auth-centro'>
            <div className='auth-cuadrado'>
                <img src={solologo} alt="logo" className='auth-solologo' />
                <div className='auth-inputcontainer'>
                <label className='auth-letras'>
                    Email or username: 
                </label>  
                <br />
                <input className='auth-input' type="text" name="email" id="input_email" /> 
                <br />
                <br />
                <br />
                <label className='auth-letras'>
                    Password:
                </label>
                <br />
                <input className='auth-input' type="password" name='password'id='input-password'/>
                <br />
                <span className='auth-forgot' >
        
                     Forgot your password? 
                </span>
                <br />
                <a href="https://www.google.com">
                       Click here
                </a>
                <div className='auth-botoncontainer'>
                    <Link to="home"><button className='auth-boton'>Log in</button></Link>
                </div>
                </div>  
                <span className='auth-signuptext'>
                    Still haven't an account? <a href=''> Sign up here
                    </a>
                </span>
           </div>
        </div> 

        </div>
        );
        async function prueba() {
            const data = {
                name : 'Juan',
                username : 'juan',
                password : '123',
                email : 'juan@test.com',
                age : '23',
                location : 'Madrid'
            }
            const response = await fetch('http://localhost:5432/api/users/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
        }
    }
}