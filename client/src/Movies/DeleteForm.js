import React  from 'react';
import axios from 'axios';

class DeleteForm extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
       
    this.state = {
      editMovie: {
         id: props.movie.id, 
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
          .delete(`http://localhost:5000/api/movies/${this.props.movie.id}`, this.state.editMovie)
          .then(res => {
               console.log(res)
               this.props.history.push('/');
               })
         
          .catch(err => console.log(err));
      };



    render() 
             {
        return (
          <div>
            <form onSubmit={this.EditMovie}>
              <button>Delete This Movie!</button>
            </form>
          </div>
        );
      }

  };

  export default  DeleteForm;
