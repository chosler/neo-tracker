import React from 'react';

const {useState} = React

const UserCard = props => {

    const [detailsShown, setDetailsShown] = useState('');

    const showHide = (id) => {
        setDetailsShown(prev => ({...prev, [id]: !prev[id]}))
    }
        
    return(
        <>
        {props.tracked.map(obj =>
            
            <div className="obj-card" key={obj.id} >
            <img className="obj-image" src='https://www.universetoday.com/wp-content/uploads/2017/08/twc_de_komet.jpg' alt='Asteroid'/>
            <h2>Name: {obj.near_earth_object.name}</h2>
            { detailsShown[obj.id] ?
            <>
            <h4>Hazardous: {obj.near_earth_object.hazardous ? 'True' : 'False'}</h4>
             <h4>Distance from Earth: {obj.near_earth_object.dist_from_earth} AU</h4>
             <h4>Diameter(max): {obj.near_earth_object.diameter_max} Km</h4>
            <h4>Diameter(min): {obj.near_earth_object.diameter_min} Km</h4>
            </>
            : null }
            <button onClick={() => showHide(obj.id)}>{detailsShown[obj.id] ? 'Hide Details' : 'Show Details'}</button>
            <button id={obj.id} onClick={e => this.props.removeTracked(e.target.id)}>UnTrack</button>
        </div>
            )}
        </>
    )
}

export default UserCard;