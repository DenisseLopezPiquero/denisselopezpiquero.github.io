import React from "react";

export default class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = { logged: false };
  }
  componentDidMount() {
    console.log(this.props.logged);
  }
  render() {
    return (
      <div>
        <h1>Authorization</h1>
      </div>
    );
  } 
}