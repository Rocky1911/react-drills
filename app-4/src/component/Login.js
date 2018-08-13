import React, { Component } from 'react'


class Login extends Component {
    constructor() {
        super();
        this.state = {
            userName: " ",
            passWord: " "
        }
        this.handleName = this.handleName.bind(this)
        this.handlePass = this.handlePass.bind(this)
        this.alertMe = this.alertMe.bind(this)
    }
    handleName(value) {
        this.setState({ userName: value })
    }
    handlePass(value) {
        this.setState({ passWord: value })
    }
    alertMe() {
        alert(`Name:${this.state.userName} Pass:${this.state.passWord}`)
    }
    render() {
        return (
            <div className="App">
                <input onChange={(e) => this.handleName(e.target.value)} type="text" />
                <input onChange={(e) => this.handlePass(e.target.value)} type="text" />
                <button onClick={this.alertMe}>Click Me</button>
            </div>
        );
    }
}
export default Login