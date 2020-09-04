import React from 'react';

const {useState} = React

const UserCard = props => {

    const [detailsShown, setDetailsShown] = useState('')
    const [commFormShown, setCommFormShow] = useState('')

    const showHideDetails = (id) => {
        setDetailsShown(prev => ({...prev, [id]: !prev[id]}))
    }

    const showHideCommForm = (id) => {
        setCommFormShow(prev => ({...prev, [id]: !prev[id]}))
    }
    
    
    return(
        <>
        {props.tracked.map(obj =>
            
            <div className="obj-card" key={obj.id} >
            <img className="obj-image" src='https://i.gadgets360cdn.com/large/asteroid_nasa_1595068349067.jpg' alt='Asteroid'/>
            <h2>Name: {obj.near_earth_object.name}</h2>
            { detailsShown[obj.id] ?
            <>
            <h4>Hazardous: {obj.near_earth_object.hazardous ? 'True' : 'False'}</h4>
             <h4>Distance from Earth: {obj.near_earth_object.dist_from_earth} AU</h4>
             <h4>Diameter(max): {obj.near_earth_object.diameter_max} Km</h4>
            <h4>Diameter(min): {obj.near_earth_object.diameter_min} Km</h4>
            </>
            : null }
            <button className='index-detail' onClick={() => showHideDetails(obj.id)}>{detailsShown[obj.id] ? 'Hide Details' : 'Show Details'}</button>
            <button className='index-track' id={obj.id} onClick={e => props.removeTracked(e.target.id)}>UnTrack</button>
            <br></br>
            <h3>Comments</h3>
            <div className='comment-container'>
            {props.allComments.filter(comment => comment.near_earth_object.id === obj.near_earth_object.id).map(comment => 
                    <div className='comment-card' key={comment.id}>
                        
                            <h4> {comment.user.user_name}</h4>
                            <img className='show-profile-image' src={comment.user.profile_pic_url} alt="None"/>
                        
                        <p>{comment.comm_content}</p>
                    </div>
                )
            }
            </div>
            { commFormShown[obj.id] ?
                <form onSubmit={e => props.handleCommSubmit(e, obj.near_earth_object.id, obj.user.id)}>
                    <label className='comm-label'>
                    New Comment:
                    <input className='comm-input' type="text" value={props.comment} onChange={e => props.handleCommChange(e)} />
                    </label>
                    <input className='login-submit' type="submit" value="Submit" />
                </form>
            : null
            }
            <button className='user-comm-btn' onClick={() => showHideCommForm(obj.id)}>{commFormShown[obj.id] ? 'Hide Form' : 'Comment'}</button>
        </div>
            )}
        </>
    )
}

export default UserCard;