import React from 'react';
import ObjCard from './ObjCard';

const NeoIndex = props => {
    console.log(props);
    
    return(
        <div className="neo-index">
            {props.neos.map(neo =>
            <ObjCard key={neo.id} neo={neo} push={props.history.push} setCurrentObj={props.setCurrentObj}/>
            )}
        </div>
    )
}

export default NeoIndex;