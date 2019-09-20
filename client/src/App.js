import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateForm from './Movies/UpdateForm';
import DeleteForm from './Movies/DeleteForm'
import AddMovie from './Movies/AddMovie';
const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  

  

  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/AddMovie/" component={AddMovie} />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
        
      />
      
      <Route 
        exact path='/UpdateForm/:id'
        component={UpdateForm}
        render={props => {return <Movie {...props} />  }}
        />
        <Route 
        exact path='/DeleteForm/:id'
        component={DeleteForm}/>
      
    </>
  );
};

export default App;
