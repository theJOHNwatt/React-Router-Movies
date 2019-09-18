import React from 'react';
import MovieList from './MovieList';
import { NavLink, Route } from "react-router-dom";

const SavedList = props => {
  const routeToHome = e => {
    e.preventDefault();
    props.history.push('/');
  }

  return(
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <NavLink className='home-button'to='/'>Home</NavLink>
      
    </div>

  );
}

export default SavedList;
