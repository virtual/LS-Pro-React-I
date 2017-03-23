import React, { Component } from 'react';
import NavBar from './NavBar';
import Content from './Content';

class Body extends Component {
    render() {
        return (
            <div>
                <NavBar title='Profile: Jeanine'/>
                <Content name='Jeanine' />
            </div>
        )
    }
}

export default Body;