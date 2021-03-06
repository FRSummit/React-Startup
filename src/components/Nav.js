import React, { Component } from 'react'
import {Link} from 'react-router-dom'

const navStyle = {
    color: 'White'
}

class Nav extends Component {

    render() {
        return (
            <nav>
                <h3>Welcome to React</h3>
                <ul className="nav-links">
                    <Link style={navStyle} to="/">
                        <li>Home</li>
                    </Link>
                    <Link style={navStyle} to="/about">
                        <li>About</li>
                    </Link>
                    <Link style={navStyle} to="/shop">
                        <li>Shop</li>
                    </Link>
                    <li>Greet</li>
                    <li>Greet 2</li>
                    <li>Hello</li>
                    <li>Message</li>
                    <li>Networking</li>
                    <li>Props</li>
                    <li>Welcome</li>
                </ul>
            </nav>
        );
    }
}

export default Nav;