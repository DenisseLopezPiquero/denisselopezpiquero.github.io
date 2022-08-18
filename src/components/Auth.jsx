import react from 'react';
import '../css/Auth.css';
import logo from  '../img/logo.gif';

export default class Auth extends react.Component {
    render() {
        return (
        <div className='auth-fondo'>
        <img src={logo} width="100" /> 
        </div>
        );
    }
}