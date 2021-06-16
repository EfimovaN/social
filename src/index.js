import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';

let renderEntireTree = (state) => {
  ReactDOM.render(
      <BrowserRouter>
        <App store={store} dispatch={store.dispatch.bind(store)} />
      </BrowserRouter>, document.getElementById('root'));
}

renderEntireTree(store.getState());

store.subscribe( () => {
  let state = store.getState();
  renderEntireTree(state);
});