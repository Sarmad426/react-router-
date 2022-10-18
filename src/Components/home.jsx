import React from "react";
import { Link } from "react-router-dom";
class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <h3>Home Page</h3>
        <Link to="/products" className="btn">
          Products
        </Link>
        <Link to="/about" className="btn">
          About
        </Link>
      </div>
    );
  }
}
export default Home;
