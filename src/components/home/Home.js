import Profile from './profile/Profile';
import Details from './details/Details';
import React from 'react';
import './Home.css';


function Home() {
    return (
        <div className='home-container'>
            <Profile />
            <Details />
        </div>
    )
}

export default Home