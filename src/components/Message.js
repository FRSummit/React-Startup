import React, { Component } from 'react'

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Welcome to message, this is for state'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thank you for subscribing'
        })
    }

    render() {
        return (
            <div>
                <h3>Message</h3>
                <h3>State: {this.state.message}</h3>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        );
    }
}

export default Message;