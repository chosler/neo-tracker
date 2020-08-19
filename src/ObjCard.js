import React from 'react';
import OrbitalDiagram from './OrbitalDiagram'

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
           
            <h2>Name: {props.neo.name}</h2>
            <OrbitalDiagram name={props.neo.name}/>
            <br/>
            <button className='index-detail' onClick={() => props.push(`/neos/${props.neo.id}`)}>Details</button>
            <button className='index-track' onClick={handleClick}>Track</button>
            <br></br>
            <h3>Comments</h3>
            <div>
            {props.allComments.filter(comment => comment.near_earth_object.id === props.neo.id).map(comment => 
                    <div className='comment-card' key={comment.id}>
                            <h4 className='user-name'> {comment.user.user_name}</h4>
                            <img className='user-profile-image' src={comment.user.profile_pic_url} alt="None"/>
                        <p className='comm-con' >{comment.comm_content}</p>
                        <button className='like-btn' onClick={()=>props.handleLike(comment.id, comment.likes)}>Like</button>
                        <button className='dislike-btn' onClick={()=>props.handleDislike(comment.id, comment.likes)}>Dislike</button>
                        <p className='likes'>Likes: {comment.likes}</p>
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default ObjCard;