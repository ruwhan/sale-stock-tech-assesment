import PropTypes from "prop-types";
import React from "react";
import "./SimpleThemeChanger.css";

class SimpleThemeChanger extends React.Component {
  handleChangeTheme = (e) => {
    const { onChangeTheme } = this.props;

    onChangeTheme(e.target.value);
  }

  render = () => {

    return (
      <form>
        <div>
          <select onChange={ this.handleChangeTheme }>
            <option value="default">Default Theme</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </form>
    );
  }
}

SimpleThemeChanger.propTypes = {
  onChangeTheme: PropTypes.func.isRequired
}

export default SimpleThemeChanger;
