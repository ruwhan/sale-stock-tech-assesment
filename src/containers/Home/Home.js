import React from "react";
import { connect } from "react-redux";
import { loadItems } from "../../actions/itemDispatcher";
import { themeChange } from "../../actions/themeDispatcher";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import ItemCard from "../../components/ItemCard";
import Container from "../../components/Container";
import SimpleThemeChanger from "../../components/SimpleThemeChanger";
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

  onChangeTheme = (value) => {
    console.log(`onChangeTheme(${value})`);
    const { themeChange } = this.props;
    themeChange(value);
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
    const { items, themes } = this.props;
    const { isLoading } = items;

    return (
      <Container givenId="home" additionalClasses={ `themes-${themes.selectedTheme}` }>
        <div className="theme-changer-container">
          <SimpleThemeChanger onChangeTheme={ this.onChangeTheme } />
        </div>
        { this.renderItems() }
        { isLoading && <div><FontAwesomeIcon icon={ faSpinner } spin /> Loading...</div> }
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.itemsReducer,
  themes: state.themesReducer
});

const mapDispatchToProps = {
  loadItems,
  themeChange,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
