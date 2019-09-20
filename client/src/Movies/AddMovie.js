import React  from 'react';
import axios from 'axios';


class AddMovie extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    this.state = {
      editMovie: {

         title: '',
         director: '',
         metascore: '',
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
          .post(`http://localhost:5000/api/movies/`, this.state.editMovie)
          .then(res => {
               console.log(res)
             
               this.props.history.push('/')
               })
         
          .catch(err => console.log(err));
      };

createArray = (e) => {
    this.state.editMovie.stars.push(this.state.editMovie.holder);
}

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
                placeholder="metascore"
                value={this.state.editMovie.metascore}
                onChange={this.handleChange}
              />
               <input
                type="stars"
                name="stars"
                placeholder="stars"
                value={this.state.editMovie.stars}
                onChange={this.handleChange}
              />
              <button>Add Movie!</button>
            </form>
          </div>
        );
      }

  };

  export default  AddMovie;


  