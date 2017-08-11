import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './app/reducers/index';
import './App.css';
import { transactions } from './app/constants/index';
import TransactionList from './app/components/transactionList.jsx';
import FixedHeader from './app/components/fixedHeader.jsx';

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

    const initialState = { searchString: '', transactions };

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
          <FixedHeader>Header</FixedHeader>
          <TransactionList />
        </div>
      </Provider>
    );
  }
}

export default App;
