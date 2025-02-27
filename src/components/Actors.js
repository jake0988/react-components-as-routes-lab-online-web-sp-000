import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div className="actors">
      <h1>Actors Page</h1>
      {actors.map((actor, index) =>
      <div key={index}>
        {actor.name}
        <ul>{actor.movies.map(movie => <li>{movie}</li>
        )}</ul>
        </div> 
    )}
    </div>    
  );
};

export default Actors;
