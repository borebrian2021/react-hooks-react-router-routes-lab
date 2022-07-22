import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div className="navbar">
    <NavLink activeStyle={{color:"blue"}} to="/" exact>
      Home
    </NavLink>
    <NavLink activeStyle={{color:"blue"}} to="/Actors" >
      Actors
    </NavLink> 
     <NavLink activeStyle={{color:"blue"}} to="/Movies" >
      Movies
    </NavLink>
    <NavLink activeStyle={{color:"blue"}} to="/Directors" >
      Directors
    </NavLink>
  
  </div>;
}

export default NavBar;
