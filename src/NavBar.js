import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return(
        <div className="navbar">
            <Link to="/" className='nav-menu'>Home</Link>
            <Link to="/neos" className='nav-menu'>Near Earth Objects</Link>
            <Link to={`/users/${props.userId}`} className='nav-menu'>My Tracked Objects</Link>
            
        </div>
    )
}

export default NavBar;