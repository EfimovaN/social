import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from './redux/state';
import {updateNewPostText} from './redux/state';
import {updateNewMessage} from './redux/state';
import {addMessage} from './redux/state';
import { BrowserRouter } from 'react-router-dom';

export let renderEntireTree = (state) => {
  ReactDOM.render(
      <BrowserRouter>
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessage={updateNewMessage}/>
      </BrowserRouter>, document.getElementById('root'));
}

