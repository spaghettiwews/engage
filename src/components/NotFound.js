import React from "react";
import circuit from "../images/incomplete-circuit.svg";

const NotFound = () => (
  <React.Fragment>
    <img className="fourohfour" src={circuit} alt="incomplete circuit" />
    <h2 className="page__heading">The circuit you are on appears broken.</h2>
    <p className="align--center">Sorry, that page does not exist.</p>
  </React.Fragment>
);

export default NotFound;
