import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../Card";
import "./ItemCard.css";

const ItemCard = ({ item }) => (
  <Card>
    <div className="main-image">
      <Link to={`/details/${item.id}`}>
        <img src={ item.images[0] } alt={ item.title } />
      </Link>
    </div>
    <div className="item-detail-row-1">
      <div className="item-detail-title">{ item.title }</div>
      <div className="item-detail-price">
        <FontAwesomeIcon icon={ faDollarSign } />&nbsp;{ item.price }
      </div>
    </div>
    <div className="item-detail-material">{ item.material }</div>
  </Card>
)

ItemCard.propTypes = {
  item: PropTypes.object.isRequired
}

export default ItemCard;
