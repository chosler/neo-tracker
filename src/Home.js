import React from 'react';

const Home = props => {
    
    return(
        <div className='home'>
            <h1>Welcome to NEO-Tracker</h1>
            <h4>{'The place to track potentially hazardous Near Earth Objects (NEOs)'}</h4>
            <img className='home-image' src='https://images.indianexpress.com/2019/10/asteroid_getty-1200-1.jpg' alt='Asteroid Heading Towards Earth' />
        </div>
    )
}

export default Home;