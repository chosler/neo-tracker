import React from 'react';
import StarMap from './StarMap';

// import Spacekit from './js/spacekit';


class ObjPage extends React.Component{

    state = {
        obj: null,
    }

    componentDidMount(){
        // console.log(this.state.id);
        fetch(`http://localhost:3000/api/v1/near_earth_objects/${this.props.match.params.id}`)
        .then(resp => resp.json())
        .then(obj => this.setState({
            obj: obj
        }))
        
  }
  

    render(){
        console.log(this.state);
        return (
            <>
                {this.state.obj ?
                    <div className='obj-page'>
                        <img src='https://i.gadgets360cdn.com/large/asteroid_nasa_1595068349067.jpg' alt='asteroid'/>
                        
                        <h2>Name: {this.state.obj.name}</h2>
                        <h4>Hazardous: {this.state.obj.hazardous ? 'True' : 'False'}</h4>
                        <h4>Distance from Earth: {this.state.obj.dist_from_earth} AU</h4>
                        <h4>Diameter(max): {this.state.obj.diameter_max} Km</h4>
                        <h4>Diameter(min): {this.state.obj.diameter_min} Km</h4>
                        <br/>
                        <h4>Orbital Diagram</h4>
                        <StarMap obj={this.state.obj}/>
                    </div> 
                : <div>Loading...</div>
                }
            </>
        )
    }
}

export default ObjPage;