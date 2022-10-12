import React from "react";
import { Link } from "react-router-dom";
class About extends React.Component {
  render() {
    return (
      <div className="about">
        <h3>About</h3>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </div>
    );
  }
}
export default About;
