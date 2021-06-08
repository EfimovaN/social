import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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
   
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}

export default store;

window.store = store;