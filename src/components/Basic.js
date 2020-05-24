import React, { Component } from 'react';
import Greet from './Greet'
import { Greet2 } from './Greet2'
import Welcome from './Welcome'
import Hello from './Hello'
import Props from './Props'
import Message from './Message'
import Networking from './Networking'

class Basic extends Component {
    render() {
        return (
            <div className="basic">
                <Greet />
                <Greet2 />
                <Welcome />
                <Hello />
                <Props name="Props1" secondName="P1" />
                <Props name="Props2" secondName="P2">
                <p>This is Props2 paragraph</p>
                </Props>
                <Props name="Props3" secondName="P3" />
                
                <Welcome name="WelcomeProperty" secondName="Property" />
                <Message />
                <Networking />
            </div>
        );
    }
}

export default Basic;
