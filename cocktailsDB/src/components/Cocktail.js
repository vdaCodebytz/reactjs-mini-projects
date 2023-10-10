import React from "react";
import { Link, NavLink } from "react-router-dom";

const Cocktail = ({ dets }) => {
  let { id, name, alcoholic, glass, img } = dets;
  return (
    <div className="cocktail">
      <img src={img} alt={name} />
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{alcoholic}</p>
        <NavLink to={`cocktail/${id}`}>
          <button type="button" className="btn-primary">
            Details
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Cocktail;
