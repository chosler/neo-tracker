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
            startDate: Date.now(),
          });
          
          viz.createSkybox(window.Spacekit.SkyboxPresets.NASA_TYCHO);
          

// Create our first object - the sun - using a preset space object.
viz.createObject('sun', window.Spacekit.SpaceObjectPresets.SUN);
// Then add some planets
viz.createObject('mercury', window.Spacekit.SpaceObjectPresets.MERCURY);
viz.createObject('venus', window.Spacekit.SpaceObjectPresets.VENUS);
viz.createObject('earth', Object.assign(window.Spacekit.SpaceObjectPresets.EARTH, { labelText: 'Earth' }));
viz.createObject('mars', window.Spacekit.SpaceObjectPresets.MARS);
viz.createObject('jupiter', window.Spacekit.SpaceObjectPresets.JUPITER);
viz.createObject('saturn', window.Spacekit.SpaceObjectPresets.SATURN);
viz.createObject('uranus', window.Spacekit.SpaceObjectPresets.URANUS);
viz.createObject('neptune', window.Spacekit.SpaceObjectPresets.NEPTUNE);
const ephem = new window.Spacekit.Ephem({
    epoch: 2459000.5,
    a: 3.613831998448611,
    e: 0.5205881328788736,
    i: 20.9522649964117,
    om: 167.3841289832412,
    w: 250.1729632865032,
    ma: 136.6468581379752,
  }, 'deg');
  
  viz.createObject('Asteroid Aci', {
    ephem,
    labelText: "21277 (1996 TO5)"
  });
document.querySelectorAll('.vis-controls__slower').forEach(function(elt) {
    elt.onclick = function() {
      viz.setJdPerSecond(viz.getJdPerSecond() * 0.1);
    };
  });
  document.querySelectorAll('.vis-controls__faster').forEach(function(elt) {
    elt.onclick = function() {
      viz.start();
      viz.setJdPerSecond(viz.getJdPerSecond() * 10.0);
    };
  });
  document.querySelectorAll('.vis-controls__set-date').forEach(function(elt) {
    elt.onclick = function() {
      viz.setDate(new Date(prompt('Enter a date in the format YYYY-mm-dd.', '2000-01-01')));
    };
  });
viz.onTick = function() {
    document.querySelectorAll('.vis-status').forEach(function(elt) {
      elt.innerHTML = viz.getDate().toLocaleString() + '';
    });
  };

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
                <>
                    <div className='sticky vis-container vis-container__home' ref={el => this.starContainer = el}>
                    <button className="vis-controls__slower">Slower</button>
                    <button className="vis-controls__faster">Faster</button>
                    <button className="vis-controls__set-date">Set Date</button>
                        <span className='vis-status' ref={el => this.dateStatus = el}/>
                    </div>
                </>
            </>
        )
    }
}

export default ObjPage;