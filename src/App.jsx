import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Map } from 'immutable';
import rootReducer from './app/reducers/index';
import './App.css';

/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    actionsBlacklist: [],
  })
  : compose;
/* eslint-enable */

class App extends Component {
  constructor(props) {
    super(props);

    const initialState = new Map({});

    const store = createStore(
      rootReducer,
      initialState,
      composeEnhancers(
        applyMiddleware(thunk),
      ),
    );

    this.state = { store };
  }
  render() {
    const { store } = this.state;
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">Header</div>
          <p className="App-intro">Intro</p>
        </div>
      </Provider>
    );
  }
}

export default App;
