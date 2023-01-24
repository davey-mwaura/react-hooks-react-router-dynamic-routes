import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({currentRoute}) {
  return (
    <div
      style={{
        borderBottom: "2px solid black",
        paddingBottom: "10px",
        marginBottom: "12px",
      }}
    >
      <NavLink style={{ marginRight: "10px" }} to="/" activeClassName={currentRoute === 'home' ? 'active' : ''}>
        Home
      </NavLink>
      <NavLink style={{ marginRight: "10px" }} to="/movies" activeClassName={currentRoute === 'movies' ? 'active' : ''}>
        Movies
      </NavLink>
    </div>
  );
}

export default NavBar;
