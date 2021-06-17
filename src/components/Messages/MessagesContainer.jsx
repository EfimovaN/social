import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/messages-reducer';
import Messages from './Messages';

let mapStateToProps = (state) => {
    return {
      messagesPage: state.messagesPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
      updateNewMessage: () => {
        dispatch(addMessageActionCreator());
      },
      addMessage: (text) => {
        dispatch(updateNewMessageActionCreator(text));
      }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps) (Messages);

export default MessagesContainer;