import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles ={
  display: "inline-block",
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "green",
  textDecoration: "none",
  color: "white",
}

function NavBar() {
  return (
   <div className="navbar">
     <NavLink to="/" exact="true" style={linkStyles} activestyle={{background:"darkblue"}}>Home</NavLink>
     <NavLink to="/actors" style={linkStyles}>Actors</NavLink>
     <NavLink to="/directors" style={linkStyles}>Directors</NavLink>
     <NavLink to="/movies" style={linkStyles}>Movies</NavLink>
   </div>
  );
}

export default NavBar;
