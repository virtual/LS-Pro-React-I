import React, { Component } from 'react';  

class SocialLinks extends Component {
    render() {
        return (
            <div>
                <ul>
                <li><a href={this.props.github}>GitHub</a></li>
                <li><a href={this.props.website}>Website</a></li>
                </ul>
                
            </div>
        )
    }
}

export default SocialLinks;