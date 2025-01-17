import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route 
        exact
        path='/'
        render={props => <MovieList {...props} movie={savedList}/>}
      />
      <Route 
        path="/movies/:id"
        render={props => <Movie {...props} movie={savedList} />}
      />
    </div>
  );
};

export default App;
