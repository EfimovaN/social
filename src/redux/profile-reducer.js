const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';

let initialState = {
  posts: [
    {id: 1, message: 'How are you?', like: 5},
    {id: 2, message: 'It\'s my first post', like: 20},
    {id: 3, message: 'Hi', like: 20}
  ],
  newPostText: '***',
  profile: null
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

    case SET_USERS_PROFILE: {
      return {
        ...state,
        profile: action.profile
      };
    }

    default: 
      return state;
  } 
}

export const addPost = () => {
  return { type: ADD_POST };
};

export const updateNewPostText = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

export const setUsersProfile = (profile) => {
  return { type: SET_USERS_PROFILE, profile: profile };
};


export default profileReducer;
