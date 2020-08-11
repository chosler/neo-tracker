import React from 'react';

class Login extends React.Component{

    state = {
        user_name: "",
        password: ""
      }
    
      handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }
    
      handleSubmit = (e) => {
        e.preventDefault()
        
    
        fetch("http://localhost:3000/api/v1/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json" 
          },
          body: JSON.stringify({
              user_name: this.state.user_name, 
              password: this.state.password})
        })
        .then(res => res.json())
        .then(response => {
          if (response.errors){
            alert(response.errors)
          } else {
            this.props.setUser(response)
          }
        })
      }

    render(){
    return(
        <div className="login-container">
                <h2 className="sign-in-title">SIGN IN</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="signin-form" >
                        <input className="signin-input" name="user_name" value={this.state.user_name} onChange={this.handleChange}placeholder="username"/>
                        <input className="signin-input" name="password" value={this.state.password} type="password"  onChange={this.handleChange}placeholder="password"/>
                    </div>
                    <button className="login-submit" type="submit">Log In</button>
                </form>
            </div>
    )}
}

export default Login;