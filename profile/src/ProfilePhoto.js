import React, { Component } from 'react';  
import SocialLinks from './SocialLinks';

class ProfilePhoto extends Component {
    render() {
        return (
            <div className='photoBox'>
                <img src={this.props.link} alt={this.props.name} />
                <SocialLinks github='https://github.com/virtual' website='http://satinflame.com' />  
            </div>
        )
    }
}

export default ProfilePhoto;