import { NavLink } from 'react-router-dom'
import React from 'react';


const Header = () => (
    <div>
      <h1>Expensify App</h1>
      <NavLink to="/" activeClassName={"is-active"} exact={true} > Dashboard </NavLink>/
      <NavLink to="/add" activeClassName={"is-active"}>Expense Add</NavLink>/
      <a href="https://www.youtube.com" target="_blank">Youtube </a>
  
    </div>
  );

export default Header;