import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/messages-reducer';
import Messages from './Messages';

const MessagesContainer = (props) => {
  
  let state = props.store.getState().messagesPage;
  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (text) => {
    
    props.store.dispatch(updateNewMessageActionCreator(text));
  }

  return <Messages updateNewMessage={onMessageChange} addMessage={addMessage}
                   messagesPage={state} />
}

export default MessagesContainer;