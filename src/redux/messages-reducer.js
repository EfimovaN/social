const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
  dialogs: [
    {id: 1, name: 'Dmitriy', img: 'https://i11.fotocdn.net/s122/d061c2f149c4cd54/user_l/2799648252.jpg'},
    {id: 2, name: 'Andrey', img: 'https://avatars.mds.yandex.net/get-zen_doc/1641332/pub_5d0764b7e75e750e0c9f8c86_5d076537789be40d64bb3e55/scale_1200'},
    {id: 3, name: 'Sveta', img: 'https://proprikol.ru/wp-content/uploads/2020/04/kartinki-dlya-vajbera-na-avu-2.jpg'},
    {id: 4, name: 'Sasha', img: 'https://sun9-67.userapi.com/c851420/v851420113/17b609/2xTFgEyYQcM.jpg'},
    {id: 5, name: 'Anna', img: 'https://proprikol.ru/wp-content/uploads/2019/07/prikolnye-kartinki-na-avu-21.jpg'}
  ],
  messages: [
    {id: 1, message: 'Do you like pizza?'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Hello my friend'}
  ],
  newMessageText: ''
}


const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 4,
        message: state.newMessageText
      };
      
      state.messages.push(newMessage);
      state.newMessageText = '';
      return state;
    
    case UPDATE_NEW_MESSAGE:
      state.newMessageText = action.newMessage;
      return state;
    
    default: 
      return state;
  }
}

export const addMessageActionCreator = () => {
  return { type: ADD_MESSAGE };
};

export const updateNewMessageActionCreator = (text) => {
  return { type: UPDATE_NEW_MESSAGE, newMessage: text };
};


export default messagesReducer;

