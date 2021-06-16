import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/messages-reducer';
import StoreContext from '../../StoreContext';
import Messages from './Messages';

const MessagesContainer = () => {

  return (
    <StoreContext.Consumer> 
      { (store) => {
        let state = store.getState().messagesPage;

        let addMessage = () => {
          store.dispatch(addMessageActionCreator());
        }

        let onMessageChange = (text) => {
          store.dispatch(updateNewMessageActionCreator(text));
        }
      

      return (
        <Messages updateNewMessage={onMessageChange} addMessage={addMessage}
                  messagesPage={state} />
      )
      }
    }
    </StoreContext.Consumer>
  );
}

export default MessagesContainer;