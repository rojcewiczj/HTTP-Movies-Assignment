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
        axios
          .put(`http://localhost:5000/api/movies${this.state.editMovie.id}`, this.state.editMovie)
          .then(res => {
               console.log(res)
               })
         
          .catch(err => console.log(err));
      };



    render() 
             {
        return (
          <div>
            <form onSubmit={this.EditMovie}>
              <input
                type="title"
                name="title"
                placeholder="title"
                value={this.state.editMovie.title}
                onChange={this.handleChange}
              />
              <input
                type="director"
                name="director"
                placeholder="director"
                value={this.state.editMovie.director}
                onChange={this.handleChange}
              />
              <input
                type="metascore"
                name="metascore"
                placeholder="metascor"
                value={this.state.editMovie.metascore}
                onChange={this.handleChange}
              />
                 <input
                type="stars"
                name="stars"
                placeholder="stars"
                value={this.state.editMovie.metascore}
                onChange={this.handleChange}
              />
              <button>Update Movie!</button>
            </form>
          </div>
        );
      }

  };

  export default  UpdateMovie;


  