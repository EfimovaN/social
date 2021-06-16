import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
  let postsElement = 
      props.posts.map(post => <Post message={post.message} like={post.like}/>);

  let newPostElement = React.createRef();
  
  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={classes.myPosts}>
      <h2>My posts</h2>
      <textarea onChange={ onPostChange } ref={newPostElement} value={props.newPostText} />
      <button onClick={ onAddPost }>Send</button>
      { postsElement }
    </div>
  );
}

export default MyPosts;