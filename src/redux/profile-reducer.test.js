import profileReducer, {addPost, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'How are you?', like: 5},
        {id: 2, message: 'It\'s my first post', like: 20},
        {id: 3, message: 'Hi', like: 20}
    ]
};

it('length of posts should be incremented', () => {
    //1. test data
    let action = addPost('Hello');

    //2. action
    let newState = profileReducer(state, action);

    //3/ expectation
    expect(newState.posts.length).toBe(4);
})

it('add message of posts', () => {
    //1. test data
    let action = addPost('Hello');

    //2. action
    let newState = profileReducer(state, action);

    //3/ expectation
    expect(newState.posts[3].message).toBe('Hello');
})

it('after deleting length of messages should be decrement', () => {
    //1. test data
    let action = deletePost(1);

    //2. action
    let newState = profileReducer(state, action);

    //3/ expectation
    expect(newState.posts.length).toBe(2);
})

it(`after deleting length should't be decrement if id is incorrect`, () => {
    //1. test data
    let action = deletePost(100);

    //2. action
    let newState = profileReducer(state, action);

    //3/ expectation
    expect(newState.posts.length).toBe(3);
})
