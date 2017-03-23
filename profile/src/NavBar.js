import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
            <h1>{this.props.title}</h1>
            </div>
        );
    }
}

export default NavBar;