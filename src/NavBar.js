import React from 'react';
import { Link } from 'react-router-dom';
import UserRoutes from './UserRoutes';
import logo2 from './logo2.png'

const NavBar = (props) => {
    return(
        <div className="navbar">
            <Link to="/" className='nav-home'> {<img className='logo' src={logo2} alt='Telescope'/>}</Link>
            <Link to="/neos" className='nav-menu'>Near Earth Objects</Link>
            <Link to={`/users/${props.userId}`} className='nav-menu'>My Tracked Objects</Link>
            <Link to={`/shape`} className='nav-menu'>Asteroid Shape</Link>
            <UserRoutes logout={props.logout} currentUser={props.currentUser}/>
        </div>
    )
}

export default NavBar;