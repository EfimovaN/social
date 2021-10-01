import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../utils/validators/validators';
import {Textarea} from '../common/FormsControls/FormsControls';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classes from './Messages.module.css';

const maxLength200 = maxLengthCreator(200);
const MessagesForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.messagesForm}>
            <Field placeholder='Enter you message' name='newMessageBody' component={Textarea}
                   validate={[required, maxLength200]} type='text'/>
            <button>Send</button>
        </form>
    );
}

const MessagesReduxForm = reduxForm({form: 'addMessage'})(MessagesForm);

const Messages = (props) => {
    const addNewMessage = (values) => {
        props.addMessage(values.newMessageBody)
    };
    let state = props.messagesPage;
    let dialogs =
        state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img}/>);
    let messages =
        state.messages.map(message => <Message message={message.message}/>);

    return (
        <div className={classes.messagesContainer}>
            <div className={classes.messagesPage}>
                <div className={classes.dialogsList}>
                    {dialogs}
                </div>

                <div className={classes.messagesList}>
                    <div className={classes.messageItem}>
                        {messages}
                    </div>
                    <MessagesReduxForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>


    );
}

export default Messages;