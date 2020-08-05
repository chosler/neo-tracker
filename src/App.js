import React from 'react';
import './App.css';
import './navbar.css';
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import NeoIndex from './NeoIndex';
import NavBar from './NavBar';
import ObjPage from './ObjPage';
import UserPage from './UserPage';

class App extends React.Component{

  state = {
    neos: [],
    currentUser: [],
    tracked: [],
  }

  componentDidMount(){
    Promise.all([fetch('http://localhost:3000/api/v1/near_earth_objects'), fetch('http://localhost:3000/api/v1/users/6'), fetch('http://localhost:3000/api/v1/user_tracked_objects')])
    .then(([res1, res2, res3]) => {
      return Promise.all([res1.json(), res2.json(), res3.json()])
    })
    .then(([data1, data2, data3]) => {this.setState({
      neos: data1,
      currentUser: data2
    })
    {let matched = data3.filter(data3 => data3.user_id === this.state.currentUser.id)
      this.setState({tracked: matched})}
    })
  }


  render(){
    console.log(this.state.tracked);
    return (
      <div className="App">
        <NavBar />
        <Switch>
        <Route path='/users/:userId' render={(routerProps)=> <UserPage user={this.state.currentUser} tracked={this.state.tracked} {...routerProps}/>} />
        <Route path='/neos/:id' render={(routerProps)=><ObjPage {...routerProps} obj={this.state.currentObj}/>}/>
        <Route path='/neos' render={(routerProps)=><NeoIndex {...routerProps} neos={this.state.neos} />}/>
        <Route exact path='/' render={()=> <Home />} />
        </Switch>
      </div>
    );
  }
}

export default App;
