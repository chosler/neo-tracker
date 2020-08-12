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
                <ObjCard key={neo.id} neo={neo} push={this.props.history.push} setCurrentObj={this.props.setCurrentObj} user={this.props.user} updateTracked={this.props.updateTracked} tracked={this.props.tracked} allComments={this.state.allComments}/>
                )}
                </>
        )
    }

    showHaz(){
        let hazObjs = this.props.neos.filter(neo => neo.hazardous === true)
        return(
            <>
            {hazObjs.map(neo =>
                <ObjCard key={neo.id} neo={neo} push={this.props.history.push} setCurrentObj={this.props.setCurrentObj} user={this.props.user} updateTracked={this.props.updateTracked} tracked={this.props.tracked} allComments={this.state.allComments}/>
                )}
            </>
        )
    }
    
    render(){
        console.log(this.props.neos);
    return(
        <div className="neo-index">
            {this.state.toggleFiltered ?
            <button onClick={() => this.handleToggle()}>Un-Filter</button>
            :
            <button onClick={() => this.handleToggle()}>Filter if Hazardous</button>
            }
            {this.state.toggleFiltered ? this.showHaz() : this.showAll()}
        </div>
    )}
}

export default NeoIndex;