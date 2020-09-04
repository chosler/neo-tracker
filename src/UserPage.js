import React from 'react';
import UserCard from './UserCard';
import { Link } from 'react-router-dom';


class UserPage extends React.Component{

    state ={
        comment: '',
        allComments: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/v1/comments')
        .then(resp => resp.json())
        .then(data => this.setState({allComments: data}))
    }

    editUser = () => {

    }

    handleCommChange = (e) => {
        this.setState({comment: e.target.value})
    }

    handleCommSubmit = (e, neoId, userId) => {
        e.preventDefault()
        fetch('http://localhost:3000/api/v1/comments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                user_id: userId,
                near_earth_object_id: neoId,
                comm_content: this.state.comment
            })
        })
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                comment: '',
                allComments: [...this.state.allComments, data]
            })
        })
    }

    render(){
    return(
        <>
        {this.props.user ?
            <div className='profile-card'>
                <h1>{this.props.user.name}</h1>
                <img className='profile-pic' src={this.props.user.profile_pic_url} alt='Not Found'/>
                <button className='edit-user' >Edit User</button>
            </div>
                    : 
                    <div className='not-logged'>
                    <h3>{'You are not logged in!'}</h3>
                    <Link to='/login'>Login</Link>
                    <br/><br/>
                    <Link to='/signup'>Signup</Link>
                    </div>
                }
            
                <div>
                    <UserCard tracked={this.props.tracked} removeTracked={this.props.removeTracked} handleCommChange={this.handleCommChange} handleCommSubmit={this.handleCommSubmit} comment={this.state.comment} allComments={this.state.allComments}/>
            </div>
        </>
    )
    }
}

export default UserPage;