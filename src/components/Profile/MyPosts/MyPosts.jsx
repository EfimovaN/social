import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElement = 
  props.posts.map(post => <Post message={post.message} like={post.like}/>);

  let newPostElement = React.createRef();
  
  let addPost = () => {
    debugger
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value='';
  };

  return (
    <div className={classes.myPosts}>
      <h2>My posts</h2>
      <textarea ref={newPostElement}>Введите текст</textarea>
      <button onClick={ addPost }>Send</button>
      { postsElement }
    </div>
  );
}

export default MyPosts;