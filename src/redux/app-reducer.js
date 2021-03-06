import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}

export const initializedSuccess = () => {
    return ({type: INITIALIZED_SUCCESS});
};

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthUserData());
        promise.then(() => {
            dispatch(initializedSuccess());
        });
        //Promise.all([promise1, promise2, promise3]).then(()=>{ do something ...})
    }
}

export default appReducer;
