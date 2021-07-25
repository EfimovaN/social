import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addMessage, updateNewMessage } from '../../redux/messages-reducer';
import Messages from './Messages';

let mapStateToProps = (state) => {
    return {
      messagesPage: state.messagesPage,
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

let AuthRedirectComponent = withAuthRedirect(Messages);

const MessagesContainer = connect(mapStateToProps, {updateNewMessage, addMessage}) (AuthRedirectComponent);

export default MessagesContainer;