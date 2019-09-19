import React, { useState, useEffect } from 'react';
import axios from 'axios';

class UpdateMovie extends React.Component {
    constructor(props) {
        super(props);
    state = {
      editMovie: {
         id: this.props.id, 
         title: '',
         director: '',
         metascore: [],
         stars: [],


      }
    }
}
    
    
      
handleChange = e => 
    this.setState({
      editMovie: {
        ...this.state.editMovie,
        [e.target.name]: e.target.value
     
      }  
     
    });
   
    EditMovie = e => {
        e.preventDefault();
        axiosWithAuth()
          .put(`/friends/${this.state.editFriend.id}`, this.state.editFriend)
          .then(res => {
               console.log(res);
               const inputs = document.querySelectorAll('input');
               inputs.forEach(i =>{
                   i.value = ' '
               })
          })
          .catch(err => console.log(err));
      };



    render() 
             {
        return (
          <div>
            <form onSubmit={this.EditFriend}>
            <input
                type="name"
                name="id"
                value={this.state.editFriend.id}
                onChange={this.handleChange}
              />
              <input
                type="name"
                name="name"
                value={this.state.editFriend.name}
                onChange={this.handleChange}
              />
              <input
                type="age"
                name="age"
                value={this.state.editFriend.age}
                onChange={this.handleChange}
              />
              <input
                type="email"
                name="email"
                value={this.state.editFriend.email}
                onChange={this.handleChange}
              />
              <button>Edit Friend!</button>
            </form>
          </div>
        );
      }

  };

  export default  UpdateMovie;


  