import React from 'react';

class Signup extends React.Component{

    state = {
        userName: "",
        password: "",
        passwordConfirm: "",
        name: "",
        profilePic: ""
      }

    handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if(this.state.password === this.state.passwordConfirm){
          fetch("http://localhost:3000/api/v1/signup", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
              },
              body: JSON.stringify({
                  user_name: this.state.userName, 
                  name: this.state.name,
                  profile_pic_url: this.state.profilePic,
                  password: this.state.password
              })
            })
            .then(res => res.json())
            .then(response => {
              if(response.errors){
                alert(response.errors)
              } else { 
                this.props.setUser(response)
              }
          })
          } else {
        alert("Passwords don't match!")
      }
  }

    render(){
        console.log(this.state);
    return(
        <div className="signup-container">
                <h2 className="sign-up-title">SIGN UP</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="signup-form">
                        <input className="signup-input" name="userName" value={this.state.userName} onChange={this.handleChange} placeholder="Username"/>
                        <input className="signup-input" name="password" value={this.state.password} type="password" onChange={this.handleChange} placeholder="Password"/>
                        <input className="signup-input" name="passwordConfirm" value={this.state.passwordConfirm} type="password"  onChange={this.handleChange} placeholder="Confirm Password"/>
                        <input className="signup-input" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Your Name"/>
                        <input className="signup-input" name="profilePic" value={this.state.profilePic} onChange={this.handleChange} placeholder="Profile Picture Url"/>
                    </div>
                    <button className="signup-submit" type="submit">Sign Up</button>
                </form>
            </div>
    )
    }
}

export default Signup;