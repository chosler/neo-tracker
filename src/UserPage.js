import React from 'react';
import UserCard from './UserCard';


const UserPage =props => {

    console.log(props)

    const editUser = () => {

    }
    
    return(
        <>
            <div className='profile-card'>
                <h1>Welcome, {props.user.name}</h1>
                <img className='profile-pic' src={props.user.profile_pic_url} alt='Nothing'/>
                <button>Edit User</button>
            </div>
            
                <div>
                    <UserCard tracked={props.tracked} removeTracked={props.removeTracked}/>
            </div>
        </>
    )
    
}

export default UserPage;