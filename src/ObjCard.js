import React from 'react';

const ObjCard = props => {
    console.log(props);
    
    const handleClick = () => {
        if(props.tracked.map(track=> track.near_earth_object.id).includes(props.neo.id)){
            alert('You are already tracking this object.')}
            else {
        fetch('http://localhost:3000/api/v1/user_tracked_objects', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                user_id: props.user.id,
                near_earth_object_id: props.neo.id
            })
        })
        .then(resp => resp.json())
        .then(data => props.updateTracked(data))
    }
    }

    return(
        <div className="obj-card">
            <img className="obj-image" src='https://www.universetoday.com/wp-content/uploads/2017/08/twc_de_komet.jpg' alt='Asteroid'/>
            <h2>Name: {props.neo.name}</h2>
            <button onClick={() => props.push(`/neos/${props.neo.id}`)}>Details</button>
            <button onClick={handleClick}>Track</button>
            <br></br>
            <h3>Comments</h3>
            <div className='comment-container'>
            {props.allComments.filter(comment => comment.near_earth_object.id === props.neo.id).map(comment => 
                    <div className='comment-card' key={comment.id}>
                        <h4> </h4><p>{comment.comm_content}</p>
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default ObjCard;