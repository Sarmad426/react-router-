import React from "react";
import { Link, Outlet } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/about" className="nav-item">
          About
        </Link>
        <Outlet />
      </div>
    );
  }
}
export default Navbar;
