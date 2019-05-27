import PropTypes from "prop-types";
import React from "react";
import "./Card.css";

const Card = ({ children }) => (
  <div className="card-container">
    { children }
  </div>
)

Card.propTypes = {
  children: PropTypes.node
}

export default Card
