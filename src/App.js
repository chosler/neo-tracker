import React from 'react';
import './App.css';
import './navbar.css';
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import NeoIndex from './NeoIndex';
import NavBar from './NavBar';
import ObjPage from './ObjPage';
import UserPage from './UserPage';
import Login from './Login';
import Signup from './Signup';

class App extends React.Component{

  state = {
    neos: [],
    currentUser: null,
    userId: null,
    tracked: [],
  }

  componentDidMount(){
    Promise.all([fetch('http://localhost:3000/api/v1/near_earth_objects'), fetch('http://localhost:3000/api/v1/user_tracked_objects')])
    .then(([res1, res2]) => {
      return Promise.all([res1.json(), res2.json()])
    })
    .then(([data1, data2]) => {this.setState({
      neos: data1
    })
    // {let matched = data2.filter(data3 => data2.user_id === this.state.currentUser.id)
    //   this.setState({tracked: matched})
    // }
    }
    )
  }

  updateTracked = (newTracked) => {
    console.log(newTracked);
    this.setState({
      tracked: [...this.state.tracked, newTracked]
    })
  }

  removeTracked = (id) => {
    fetch(`http://localhost:3000/api/v1/user_tracked_objects/${id}`, {
            method: 'DELETE',
        })
    
    let newTracked = this.state.tracked.filter(obj=> obj.id !== parseInt(id))
      this.setState({tracked: newTracked})
  }

  setUser = (response) => {
    this.setState({
      currentUser: response.user,
      userId: response.user.id
    },
     () => {
      localStorage.setItem("token", response.token )
      this.props.history.push("/neos")
    })
    fetch(`http://localhost:3000/api/v1/user_tracked_objects`)
    .then(resp => resp.json())
    .then(data => 
      {let matched = data.filter(re => re.user.id === this.state.userId)
        this.setState({tracked: matched})
      })
  }

  logout = () => {
    this.setState({
      currentUser: null
    }, () => {
      localStorage.removeItem("token")
      this.props.history.push("/login")
    })
  
}


  render(){
    console.log(this.state);
    // let trackedIds = this.state.tracked.map(neo => neo.neo_id)
    // let trackedObjs = this.state.neos.filter(neo => neo.id === trackedIds)
    
    return (
      <div className="App">
        <NavBar userId={this.state.userId} currentUser={this.state.currentUser} logout={this.logout}/>
        <Switch>
        <Route path='/users/:id' render={(routerProps)=> <UserPage user={this.state.currentUser} tracked={this.state.tracked} removeTracked={this.removeTracked} {...routerProps}/>} />
        <Route path='/neos/:id' render={(routerProps)=><ObjPage {...routerProps} obj={this.state.currentObj}/>}/>
        <Route path='/neos' render={(routerProps)=><NeoIndex {...routerProps} neos={this.state.neos} user={this.state.currentUser} updateTracked={this.updateTracked} tracked={this.state.tracked}/>}/>
        <Route path='/login' render={(routerProps)=> <Login setUser={this.setUser} {...routerProps}/>}/>
        <Route path='/signup' render={(routerProps)=> <Signup setUser={this.setUser} {...routerProps}/>}/>
        <Route exact path='/' render={()=> <Home />} />
        </Switch>
      </div>
    );
  }
}

export default App;
