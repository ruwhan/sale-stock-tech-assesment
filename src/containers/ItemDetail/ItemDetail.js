import React from "react";
import { connect } from "react-redux";
import { faSpinner, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ItemDetail.css";

class ItemDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
    }
  }

  componentDidMount = () => {
    this.getIdFromUrl();
  }

  getIdFromUrl = () => {
    const { pathname } = window.location;
    const index = pathname.lastIndexOf('/');
    const id = pathname.substring(index + 1, pathname.length);
    
    this.setState({ id });
  }

  renderImages = (item) => {
    const { images } = item;
    const { id } = this.state;
    return images.map((imgUrl, index) => (
      <div key={`item_detail_img_slider_${id}_0${index}`}>
        <img src={ imgUrl } alt={ item.title } />
      </div>
    ));
  }

  render = () => {
    const { id } = this.state;
    const { items } = this.props;
    const { byId } = items.entities;

    const selectedItem = byId[id];

    return (
      <div className="item-detail-container" id="item_detail">
        <div>
          <Link to="/">
            <FontAwesomeIcon icon={ faArrowLeft } size="lg" /> Back
          </Link>
        </div>
        {selectedItem
          ? <div className="item-container">
            <div className="main-image">
              <Carousel>
                { this.renderImages(selectedItem) }
              </Carousel>
            </div>
            <div className="details">
              <div>{ selectedItem.title }</div>
              <div>{ selectedItem.material }</div>
              <div>{ selectedItem.price }</div>
            </div>
          </div>
        
          : <div><FontAwesomeIcon icon={ faSpinner } spin /> Loading...</div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.itemsReducer
})

export default connect(mapStateToProps)(ItemDetail);
