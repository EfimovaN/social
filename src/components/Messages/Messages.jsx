import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classes from './Messages.module.css';

const Messages = (props) => {
  
  let dialogs = 
    props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img}/>);

  let messages =
    props.state.messages.map(message => <Message message={message.message} />);
    debugger

  let newPostElement = React.createRef(); 

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItem}>
        { dialogs }
      </div>
      <div className={classes.messages}>
        { messages }
        <textarea ref={newPostElement}></textarea>
        <button onClick={ addPost }>Send</button>
      </div>
    </div>
  );
}

export default Messages;