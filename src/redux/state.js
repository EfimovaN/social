const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'How are you?', like: 5},
        {id: 2, message: 'It\'s my first post', like: 20},
        {id: 3, message: 'Hi', like: 20}
      ],
      newPostText: ''
    },
  
    messagesPage: {
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
    },
  
    sidebar: [
      {id: 1, name: 'Andrey', img: 'https://avatars.mds.yandex.net/get-zen_doc/1641332/pub_5d0764b7e75e750e0c9f8c86_5d076537789be40d64bb3e55/scale_1200'},
      {id: 2, name: 'Anna', img: 'https://proprikol.ru/wp-content/uploads/2019/07/prikolnye-kartinki-na-avu-21.jpg'}
    ],
  },

  _callSubscriber() {
    console.log('State changed')
  },

  getState() {
    return this._state;
  },
   
  // addPost() {
  //   let newPost = {
  //     id: 4,
  //     message: this._state.profilePage.newPostText,
  //     like: 0
  //   }
  
  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText = '';
  //   this._callSubscriber(this._state);
  // },

  // updateNewPostText(newText) {
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state);
  // },

  // addMessage() {
  //   let newMessage = {
  //     id: 4,
  //     message: this._state.messagesPage.newMessageText
  //   };
  
  //   this._state.messagesPage.messages.push(newMessage);
  //   this._state.messagesPage.newMessageText = '';
  //   this._callSubscriber(this._state);
  // },

  // updateNewMessage(newMessage) {
  //   this._state.messagesPage.newMessageText = newMessage;
  //   this._callSubscriber(this._state);
  // },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 4,
        message: this._state.profilePage.newPostText,
        like: 0
      }
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);

    } else if (action.type === 'ADD-MESSAGE') {
        let newMessage = {
          id: 4,
          message: this._state.messagesPage.newMessageText
        };
      
        this._state.messagesPage.messages.push(newMessage);
        this._state.messagesPage.newMessageText = '';
        this._callSubscriber(this._state);

    } else if (action.type === 'UPDATE-NEW-MESSAGE') {
        this._state.messagesPage.newMessageText = action.newMessage;
        this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};

export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

export const addMessageActionCreator = () => {
  return { type: ADD_MESSAGE };
};

export const updateNewMessageActionCreator = (text) => {
  return { type: UPDATE_NEW_MESSAGE, newMessage: text };
};

export default store;

window.store = store;