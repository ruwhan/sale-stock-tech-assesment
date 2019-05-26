import { createBrowserHistory } from "history";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import configureStore from "./configureStore";
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();
const store = configureStore({ history });

const main = (
  <Provider store={store}>
    <App history={history} />
  </Provider>
);

ReactDOM.render(main, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
