import React, { Component } from 'react'

class Networking extends Component {

    btnClick() {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
            // ,
            // body: JSON.stringify({
            //     firstParam: 'yourValue',
            //     secondParam: 'yourOtherValue'
            // })
        })
        .then(res => {
            console.log(res)
        })
    }

    render() {
        return (
            <div>
                <h3>Message</h3>
                <button onClick={() => this.btnClick()}>Click to get</button>
            </div>
        );
    }
}

export default Networking;