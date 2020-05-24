import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return (
            <div>
                <h3>This is a class component</h3>
                <h3>Props: {this.props.name}, secondName: {this.props.secondName}</h3>
            </div>
        );
    }
}

export default Welcome;