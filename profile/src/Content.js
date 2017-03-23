import React, { Component } from 'react'; 
import Description from './Description';
import ProfilePhoto from './ProfilePhoto';
import './Content.css';

class Content extends Component {
    render() {
        return (
            <div className='content'>
                <ProfilePhoto name='Jeanine' link='https://avatars0.githubusercontent.com/u/93795?v=3&s=460'/>
                <Description name='Jeanine' />
                
            </div>
        )
    }
}

export default Content;