import React from 'react';

class AsterShape extends React.Component{

    componentDidMount(){
        console.log('creating');
        const viz = new window.Spacekit.Simulation(document.querySelector('.shape-container'), {
            basePath: 'https://typpo.github.io/spacekit/src',
            camera: {
                enableDrift: false,
            },
            startPaused: false,
          });
          
          
          viz.createSkybox(window.Spacekit.SkyboxPresets.NASA_TYCHO);
          
          viz.createLight();
          viz.createAmbientLight();
          
          
          const obj = viz.createShape('Bennu', {
            shape: {
              shapeUrl: process.env.PUBLIC_URL + 'Bennu/bennu.obj',
            },
            textureUrl: 'https://www.classe.cornell.edu/~seb/celestia/hutchison/phobosmirror.jpg',
            rotation: {
                enable: true,
                lambdaDeg: 85.65,
                betaDeg: -60.17,
                period: 4.296057,
                yorp: 1.9e-8,
                phi0: 0,
                speed: 0.5,
              },
          });

          
          
          viz.zoomToFit(obj, 1);  
    }
    render(){
    return(
        <div className="shape-page">
            <h2>Example of an asteroid's shape</h2>
                <h3>101955 Bennu (1999 RQ)</h3>
                <h4>Below is a depiction of the asteroid Bennu, based upon data from the OSIRIS-REx spacecraft, which will attempt a Touch-And-Go (TAG) sample collection, scheduled for October 20, 2020. </h4>
                <p className='inst'>Scroll to zoom in/out, click and move to rotate.</p>
        <div className='sticky vis-container vis-container__home shape-container' >
        </div>
        </div>
    )}
}

export default AsterShape;