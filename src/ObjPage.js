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

//    imgArr = ['https://i.gadgets360cdn.com/large/asteroid_nasa_1595068349067.jpg', 'https://media4.s-nbcnews.com/j/newscms/2017_16/1968396/170418-asteroid-mn-0730_b2c1f54812269d7ea29e5890b0c2b173.fit-760w.jpg', 'https://www.snopes.com/tachyon/2017/01/NASA_asteroid_tw.jpg?resize=865,452']

//    image = this.imgArr[Math.floor(Math.random()*this.imgArr.length)]
  

    render(){
        console.log(this.image);
        return (
            <>
                {this.state.obj ?
                    <div className='obj-page'>
                        <img className='aster-pic' src='https://media4.s-nbcnews.com/j/newscms/2017_16/1968396/170418-asteroid-mn-0730_b2c1f54812269d7ea29e5890b0c2b173.fit-760w.jpg' alt='asteroid'/>
                        
                        <h2>Name: {this.state.obj.name}</h2>
                        <h4>Hazardous: {this.state.obj.hazardous ? 'True' : 'False'}</h4>
                        <h4>Distance from Earth: {this.state.obj.dist_from_earth} AU</h4>
                        <h4>Diameter(max): {this.state.obj.diameter_max} Km</h4>
                        <h4>Diameter(min): {this.state.obj.diameter_min} Km</h4>
                        <br/>
                        <h4>Orbital Diagram</h4>
                        <p className='inst'>Scroll to zoom in/out, click and move to rotate. Click Faster to move time forward and increase speed, Slower to slow increase of time. Use Set Date to approximate the object location at that date.</p>
                        <StarMap obj={this.state.obj}/>
                    </div> 
                : <div>Loading...</div>
                }
            </>
        )
    }
}

export default ObjPage;