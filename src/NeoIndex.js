import React from 'react';
import ObjCard from './ObjCard';


class NeoIndex extends React.Component{
    
    state = {
        allComments: [],
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/v1/comments')
        .then(resp => resp.json())
        .then(data => this.setState({allComments: data}))
    }
    
    render(){
    return(
        <div className="neo-index">
            {this.props.neos.map(neo =>
            <ObjCard key={neo.id} neo={neo} push={this.props.history.push} setCurrentObj={this.props.setCurrentObj} user={this.props.user} updateTracked={this.props.updateTracked} tracked={this.props.tracked} allComments={this.state.allComments}/>
            )}
        </div>
    )}
}

export default NeoIndex;