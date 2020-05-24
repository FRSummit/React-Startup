import React from 'react';
import './App.css';
import Greet from './components/Greet'
import { Greet2 } from './components/Greet2'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Props from './components/Props'
import Message from './components/Message'
import Networking from './components/Networking'
import Basic from './components/Basic'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Shop from './components/Shop'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        {/* <Greet />
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
        <Networking /> */}
        {/* <Basic /> */}
      </div>
      
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </Router>
  );
}

export default App;
