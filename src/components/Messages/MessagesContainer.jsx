import React from 'react';
import { connect } from 'react-redux';
import { addMessage, updateNewMessage } from '../../redux/messages-reducer';
import Messages from './Messages';

let mapStateToProps = (state) => {
    return {
      messagesPage: state.messagesPage
    }
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//       updateNewMessage: (text) => {
//         dispatch(updateNewMessageActionCreator(text));
//       },
//       addMessage: () => {
//         dispatch(addMessageActionCreator());
//       }
//     }
// }

const MessagesContainer = connect(mapStateToProps, {updateNewMessage, addMessage}) (Messages);

export default MessagesContainer;