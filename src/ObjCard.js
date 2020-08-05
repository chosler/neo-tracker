import React from 'react';

const ObjCard = props => {
    // console.log(props);
    
    return(
        <div className="obj-card">
            <img className="obj-image" src='https://www.universetoday.com/wp-content/uploads/2017/08/twc_de_komet.jpg' alt='Asteroid'/>
            <h2 onClick={() => props.push(`/neos/${props.neo.id}`)}>Name: {props.neo.name}</h2>
            <button onClick={(e) => console.log(props.neo)}>Track</button>
        </div>
    )
}

export default ObjCard;