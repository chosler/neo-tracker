import React from 'react';


const UserPage =props => {

    console.log(props)
    return(
        <>
            <div className='profile-card'>
                <h1>Welcome, {props.user.name}</h1>
                <img className='profile-pic' src={props.user.profile_pic_url} alt='Nothing'/>
            </div>
            
                <div>
                    {props.tracked.map(obj =>
                    <div className="obj-card">
                    <img className="obj-image" src='https://www.universetoday.com/wp-content/uploads/2017/08/twc_de_komet.jpg' alt='Asteroid'/>
                    <h2>Name: {obj.name}</h2>
                    
                </div>
                    )}
            </div>
        </>
    )
    
}

export default UserPage;