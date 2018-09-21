import React, { Component } from 'react';
import {Provider} from 'react-redux'
import {Route} from 'react-router'
import store from './store'
import './App.css';
import AdsListContainer from './components/AdsListContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
       <Route path="/" exact component={AdsListContainer} />
      </div>
      </Provider>
    );
  }
}

export default App;
