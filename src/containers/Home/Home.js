import React from "react";
import { connect } from "react-redux";
import { loadItems } from "../../actions/itemDispatcher";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.containerEl = {};
  }

  componentDidMount = () => {
    const { loadItems } = this.props;
    this.containerEl = document.getElementById('home');

    document.addEventListener('scroll', this.onScrollContainer);

    loadItems();
  }

  componentWillUnmount = () => {
    document.removeEventListener('scroll', this.onScrollContainer);
  }

  onScrollContainer = (e) => {
    setTimeout(() => {
      const { loadItems } = this.props;
      // console.log('handleScroll()');
      // const el = document.getElementById('home');
      // console.log(`${this.containerEl.scrollHeight}, ${window.innerHeight}, ${window.scrollY}`);
      if (this.containerEl.scrollHeight <= (window.innerHeight + window.scrollY)) {
        loadItems();
      }
    }, 0);
  }
  
  renderImages = (item) => {
    const { images } = item;
    // console.log(images);

    return (
      <div className="images-container">
          {images.map((imgUrl, index) => (
            <div key={`img-${item.id}-0${index}`} className="image-item"><img src={ imgUrl } alt={ item.title } /></div>
          ))}
      </div>
    );
  }

  renderItems = () => {
    const { items } = this.props;
    const { byId, ids } = items.entities;

    return ids.map((id) => {
      const item = byId[id];
      
      return (
        <div key={ item.id } className="item-container">
          <div className="main-image"><img src={ item.images[0] } alt={ item.title } /></div>
          <div className="item-detail-row-1">
            <div className="item-detail-title">{ item.title }</div>
            <div className="item-detail-price">{ item.price }</div>
          </div>
          <div className="item-detail-material">{ item.material }</div>
          {/* { this.renderImages(item) } */}
          {  }
        </div>
      )
    });
  }

  render = () => {
    const { items } = this.props;
    const { isLoading } = items;

    return (
      <div className="home-container" id="home">
        { this.renderItems() }
        { isLoading && <FontAwesomeIcon icon="spinner" spin /> }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.itemsReducer
});

const mapDispatchToProps = {
  loadItems
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
