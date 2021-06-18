const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    {id: 1, message: 'How are you?', like: 5},
    {id: 2, message: 'It\'s my first post', like: 20},
    {id: 3, message: 'Hi', like: 20}
  ],
  newPostText: '***'
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {

    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      };
    }
    
    case ADD_POST: {
      let newPostText = state.newPostText;
      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, {id: 4, message: newPostText, like: 0}]
      };
    }

    default: 
      return state;
  } 
}

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};

export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

export default profileReducer;
