import React from "react";
import { Link } from "react-router-dom";
class Error extends React.Component {
  render() {
    return (
      <div className="about">
        <h1>404</h1>
        <h3>Page not Found for This Url:</h3>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </div>
    );
  }
}
export default Error;
