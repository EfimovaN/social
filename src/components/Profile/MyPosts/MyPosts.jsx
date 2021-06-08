import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
  let postsElement = 
  props.posts.map(post => <Post message={post.message} like={post.like}/>);

  let newPostElement = React.createRef();
  
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);

  }

  return (
    <div className={classes.myPosts}>
      <h2>My posts</h2>
      <textarea onChange={ onPostChange } ref={newPostElement} value={props.newPostText} />
      <button onClick={ addPost }>Send</button>
      { postsElement }
    </div>
  );
}

export default MyPosts;