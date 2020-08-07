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
        console.log(props);
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
            <button onClick={() => showHideDetails(obj.id)}>{detailsShown[obj.id] ? 'Hide Details' : 'Show Details'}</button>
            <button id={obj.id} onClick={e => props.removeTracked(e.target.id)}>UnTrack</button>
            <br></br>
            <h3>Comments</h3>
            <div className='comment-container'>
            {props.allComments.filter(comment => comment.near_earth_object.id === obj.near_earth_object.id).map(comment => 
                    <div className='comment-card' key={comment.id}>
                        <h4> </h4><p>{comment.comm_content}</p>
                    </div>
                )
            }
            </div>
            { commFormShown[obj.id] ?
                <form onSubmit={e => props.handleCommSubmit(e, obj.near_earth_object.id, obj.user.id)}>
                    <label>
                    New Comment:
                    <input type="text" value={props.comment} onChange={e => props.handleCommChange(e)} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            : null
            }
            <button onClick={() => showHideCommForm(obj.id)}>{commFormShown[obj.id] ? 'Hide Form' : 'Comment'}</button>
        </div>
            )}
        </>
    )
}

export default UserCard;