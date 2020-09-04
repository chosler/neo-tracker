import React from 'react';
import ObjCard from './ObjCard';


class NeoIndex extends React.Component{
    
    state = {
        allComments: [],
        toggleFiltered: false,
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/v1/comments')
        .then(resp => resp.json())
        .then(data => this.setState({allComments: data}))
    }

    handleToggle(){
        this.setState({
            toggleFiltered: !this.state.toggleFiltered
        })
    }

    showAll(){
        return(
            <>
            {this.props.neos.map(neo =>
                <ObjCard key={neo.id} neo={neo} push={this.props.history.push} setCurrentObj={this.props.setCurrentObj} user={this.props.user} updateTracked={this.props.updateTracked} tracked={this.props.tracked} allComments={this.state.allComments}handleLike={this.handleLike} handleDislike={this.handleDislike}/>
                )}
                </>
        )
    }

    showHaz(){
        let hazObjs = this.props.neos.filter(neo => neo.hazardous === true)
        return(
            <>
            {hazObjs.map(neo =>
                <ObjCard key={neo.id} neo={neo} push={this.props.history.push} setCurrentObj={this.props.setCurrentObj} user={this.props.user} updateTracked={this.props.updateTracked} tracked={this.props.tracked} allComments={this.state.allComments} handleLike={this.handleLike} handleDislike={this.handleDislike}/>
                )}
            </>
        )
    }

    handleLike = (id, likes) => {
        if (this.props.user !== null){
        fetch(`http://localhost:3000/api/v1/comments/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                likes: likes + 1
            })
            })
            .then(resp => resp.json())
            .then(updatedCom => {
                    let updatedComArr = this.state.allComments.map(comment => {
                        if(comment.id === updatedCom.id){
                        return {...comment, likes: updatedCom.likes}
                        }
                        return comment
                    })
                    this.setState({allComments: updatedComArr})
        
            })
        }
        else{
            alert('You must log in first')
        }
    }

    handleDislike = (id, likes) => {
        if (this.props.user !== null){
        fetch(`http://localhost:3000/api/v1/comments/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                likes: likes - 1
            })
            })
            .then(resp => resp.json())
            .then(updatedCom => {
                    let updatedComArr = this.state.allComments.map(comment => {
                        if(comment.id === updatedCom.id){
                        return {...comment, likes: updatedCom.likes}
                        }
                        return comment
                    })
                    this.setState({allComments: updatedComArr})
        
            })    
        }
        else{
            alert('You must log in first')
        }
    }
    
    render(){
    return(
        <div className="neo-index">
            {this.state.toggleFiltered ?
            <label className="switch"><input type="checkbox" id="togBtn" onClick={() => this.handleToggle()}/><div className="slider round"></div></label>
            :
            <label className="switch"><input type="checkbox" id="togBtn" onClick={() => this.handleToggle()}/><div className="slider round"></div></label>
            }
            <br/>
            <h4>Select Asteroids below to Track or Details for more information:</h4>
            {this.state.toggleFiltered ? this.showHaz() : this.showAll()}
        </div>
    )}
}

export default NeoIndex;