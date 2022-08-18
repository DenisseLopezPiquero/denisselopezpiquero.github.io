import react from 'react';
import '../css/Auth.css';
import logo from  '../img/logo.gif';

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
        <img src={logo} width="100" /> 
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