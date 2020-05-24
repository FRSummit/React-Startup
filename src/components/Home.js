import React, { Component } from 'react'

const data = null;
var val = 10;

class Home extends Component {
    componentWillMount() {
        console.log('componentWillMount')
        this.data = 20;
    }
    componentDidMount() {
        console.log('componentDidMount')
    }

    render() {
        return (
            <div className="home">
                <h3>THis is Home page</h3>
                <p>Data : {this.data}</p>
                <p>Value : {val}</p>
            </div>
        );
    }
}

export default Home;