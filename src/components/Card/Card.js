import React from "react";
import {  } from "./Card.css";

const card = ({ children }) => (
  <div className="card-container">
    <div className="card-content">
      { children }
    </div>
  </div>
)

export default Card
