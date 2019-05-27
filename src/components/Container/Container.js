import PropTypes from "prop-types";
import React from "react";
import "./Container.css";

const Container = ({ children, additionalClasses = '', givenId = '' }) => (
  givenId 
  ? (
    <div className={`container ${additionalClasses}`} id={ givenId } >
      { children }
    </div>)
  : (
    <div className={`container ${additionalClasses}`}>
      { children }
    </div>
  )
)

Container.propTypes = {
  children: PropTypes.node,
  givenId: PropTypes.string,
}

export default Container;
