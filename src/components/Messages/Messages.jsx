import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/messages-reducer';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classes from './Messages.module.css';

const Messages = (props) => {
  
  let dialogs = 
    props.messagesPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img}/>);

  let messages =
    props.messagesPage.messages.map(message => <Message message={message.message} />);
    

  let newMessageElement = React.createRef(); 

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  let onMessageChange = () => {
    
    let text = newMessageElement.current.value;
    props.dispatch(updateNewMessageActionCreator(text));
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItem}>
        { dialogs }
      </div>
      <div className={classes.messages}>
        { messages }
        <textarea onChange={ onMessageChange } ref={newMessageElement} value={props.messagesPage.newMessageText} />
        <button onClick={ addMessage }>Send</button>
      </div>
    </div>
  );
}

export default Messages;