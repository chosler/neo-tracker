import React from 'react';
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
        const viz = new window.Spacekit.Simulation(this.starContainer, {
            basePath: 'https://typpo.github.io/spacekit/src',
          });
          
          viz.createSkybox(window.Spacekit.SkyboxPresets.NASA_TYCHO);

// Create our first object - the sun - using a preset space object.
viz.createObject('sun', window.Spacekit.SpaceObjectPresets.SUN);

// Then add some planets
viz.createObject('mercury', window.Spacekit.SpaceObjectPresets.MERCURY);
viz.createObject('venus', window.Spacekit.SpaceObjectPresets.VENUS);
viz.createObject('earth', window.Spacekit.SpaceObjectPresets.EARTH);
viz.createObject('mars', window.Spacekit.SpaceObjectPresets.MARS);
viz.createObject('jupiter', window.Spacekit.SpaceObjectPresets.JUPITER);
viz.createObject('saturn', window.Spacekit.SpaceObjectPresets.SATURN);
viz.createObject('uranus', window.Spacekit.SpaceObjectPresets.URANUS);
viz.createObject('neptune', window.Spacekit.SpaceObjectPresets.NEPTUNE);
          };
    

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
                    </div> 
                : <div>Loading...</div>
                }
                <div>
                    <div className='starBox' ref={el => this.starContainer = el} />
                </div>
            </>
        )
    }
}

export default ObjPage;