import React from 'react';

class StarMap extends React.Component{


    componentDidMount(){
        const viz = new window.Spacekit.Simulation(this.starContainer, {
            basePath: 'https://typpo.github.io/spacekit/src',
            startDate: Date.now(),
            unitsPerAu: 10.0,
            jdPerSecond: 0.5,
            camera: {
                enableDrift: false,
            },
            startPaused: true,
          });
          
          viz.createSkybox(window.Spacekit.SkyboxPresets.NASA_TYCHO);
          


viz.createObject('sun', window.Spacekit.SpaceObjectPresets.SUN);

viz.createObject('mercury', window.Spacekit.SpaceObjectPresets.MERCURY);
viz.createObject('venus', window.Spacekit.SpaceObjectPresets.VENUS);
viz.createObject('earth', Object.assign(window.Spacekit.SpaceObjectPresets.EARTH, { labelText: 'Earth' }));
viz.createObject('mars', window.Spacekit.SpaceObjectPresets.MARS);
viz.createObject('jupiter', window.Spacekit.SpaceObjectPresets.JUPITER);
viz.createObject('saturn', window.Spacekit.SpaceObjectPresets.SATURN);
viz.createObject('uranus', window.Spacekit.SpaceObjectPresets.URANUS);
viz.createObject('neptune', window.Spacekit.SpaceObjectPresets.NEPTUNE);

const ephem = new window.Spacekit.Ephem({
    epoch: this.props.obj.epo,
    a: this.props.obj.sma,
    e: this.props.obj.ecc,
    i: this.props.obj.inc,
    om: this.props.obj.anl,
    w: this.props.obj.pa,
    ma: this.props.obj.ma,
  }, 'deg');
  
  const obj = viz.createShape('asteroid', {
    ephem,
    labelText: this.props.obj.name,
    ecliptic: {
        displayLines: true,
        lineColor: 0xff0000,
      },
      shape: {
        shapeUrl:
          'https://raw.githubusercontent.com/typpo/spacekit/master/examples/asteroid_shape_from_earth/A1046.M1863.obj',
      },
  });

  viz.createLight([0, 0, 0]);
  viz.createAmbientLight();

  viz.getViewer().followObject(obj, [-0.01, -0.01, 0.01]);

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
console.log(viz.getDate().toLocaleString());
// debugger
    }

    render(){
    return(
            <div className='sticky vis-container vis-container__home' ref={el => this.starContainer = el}>
            <button className="vis-controls__slower">Slower</button>
            <button className="vis-controls__faster">Faster</button>
            <button className="vis-controls__set-date">Set Date</button>
            <span className='vis-status' ref={el => this.dateStatus = el}/>
                    </div>
    )}
}

export default StarMap;