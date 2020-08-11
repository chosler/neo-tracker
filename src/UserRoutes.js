import React from 'react'
import { Link } from 'react-router-dom'

const UserRoutes = props => {
  return (
    <div className="user-controls">
        {props.currentUser ? 
        (<>
        <div>Welcome, {props.currentUser.name}</div>
        <button onClick={props.logout}>Log Out</button>
        </>) :
        (<>
        <Link to="/login" className='nav-menu'>Login</Link>
        <Link to="/signup" className='nav-menu'>Sign-Up</Link>
        </>) }
    </div>
  )
}

export default UserRoutes;