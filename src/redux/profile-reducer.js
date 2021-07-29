import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  posts: [
    {id: 1, message: 'How are you?', like: 5},
    {id: 2, message: 'It\'s my first post', like: 20},
    {id: 3, message: 'Hi', like: 20}
  ],
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      };
    }
    
    case ADD_POST: {
      let newPostText = action.newPostBody;
      return {
        ...state,
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

export const addPost = (newPostBody) => {
  return { type: ADD_POST, newPostBody };
};

export const setUsersProfile = (profile) => {
  return { type: SET_USERS_PROFILE, profile: profile };
};

export const setStatus = (status) => {
  return { type: SET_STATUS, status };
};

export const getUserProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then(data => {
      dispatch(setUsersProfile(data));
    });
  }
}

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then(data => {
      dispatch(setStatus(data));
    });
  }
}

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then(data => {
      if(data.resultCode === 0) { 
        dispatch(setStatus(status));
      }
    });
  }
}

export default profileReducer;
