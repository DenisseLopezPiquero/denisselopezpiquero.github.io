import react from 'react';

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
        <div>
            <h1>Auth</h1> {/* <button onClick={prueba}>Click Me</button> */}
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