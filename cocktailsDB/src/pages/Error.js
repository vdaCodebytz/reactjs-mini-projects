import React from "react";
import { Link, NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-page">
      <div className="error-container">
        <h2>Oops! You have hit a dead end</h2>
        <button className="btn-primary" type="button">
          <NavLink to="/">Take me back to home</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Error;
