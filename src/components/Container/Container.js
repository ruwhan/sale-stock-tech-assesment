import PropTypes from "prop-types";
import React from "react";
import "./Container.css";

const Container = ({ children, givenId = '' }) => (
  givenId 
  ? (
    <div className="container" id={ givenId } >
      { children }
    </div>)
  : (
    <div className="container">
      { children }
    </div>
  )
)

Container.propTypes = {
  children: PropTypes.node,
  givenId: PropTypes.string,
}

export default Container;
