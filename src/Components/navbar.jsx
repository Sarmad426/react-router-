import React from "react";
import { Outlet, NavLink } from "react-router-dom";

class Navbar extends React.Component {
  handleClasses = ({ isActive }) => {
    let classes = "nav-item ";
    classes += isActive ? " active" : " not-active";
    return classes;
  };

  render() {
    return (
      <div className="navbar">
        <NavLink to="/" className={this.handleClasses}>
          Home
        </NavLink>
        <NavLink to="/about" className={this.handleClasses}>
          About
        </NavLink>
        <NavLink to="/products" className={this.handleClasses}>
          Products
        </NavLink>
        <NavLink to="/login" className={this.handleClasses}>
          Login
        </NavLink>
        <Outlet />
      </div>
    );
  }
}
export default Navbar;
