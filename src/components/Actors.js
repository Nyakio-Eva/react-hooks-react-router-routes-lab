import React from "react";
import { actors } from "../data";
import { act } from "@testing-library/react";

function Actors() {
  return (
  <>
    <h1>Actors Page</h1>
    {actors.map((actor)=>(
      <div key={actor.name}>
         {actor.name}
        <ul>
          {actor.movies.map((movie)=>(
            <li key={movie}>{movie}</li>
          ))}
        </ul>
      </div>
    ))}
  </>
  );
}

export default Actors;
