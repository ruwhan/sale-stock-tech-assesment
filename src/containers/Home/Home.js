import React from "react";
import { connect } from "react-redux";
import { loadItems } from "../../actions/itemDispatcher";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import ItemCard from "../../components/ItemCard";
import Container from "../../components/Container";
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
      if (this.containerEl.scrollHeight <= (window.innerHeight + window.scrollY)) {
        loadItems();
      }
    }, 0);
  }
  
  renderImages = (item) => {
    const { images } = item;

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
      
      return (<ItemCard key={ id } item={ item } />);
    });
  }

  render = () => {
    const { items } = this.props;
    const { isLoading } = items;

    return (
      <Container givenId="home">
        { this.renderItems() }
        { isLoading && <div><FontAwesomeIcon icon={ faSpinner } spin /> Loading...</div> }
      </Container>
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
