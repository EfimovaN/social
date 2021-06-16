import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classes from './Messages.module.css';

const Messages = (props) => {
  let state = props.messagesPage;
  
  let dialogs = 
    state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img}/>);

  let messages =
    state.messages.map(message => <Message message={message.message} />);
    

  let newMessageElement = React.createRef(); 

  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessage(text);
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItem}>
        { dialogs }
      </div>
      <div className={classes.messages}>
        { messages }
        <textarea onChange={ onMessageChange } ref={newMessageElement} value={state.newMessageText} />
        <button onClick={ addMessage }>Send</button>
      </div>
    </div>
  );
}

export default Messages;