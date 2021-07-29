import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.myPostsForm}>
      <Field name='newPostBody' component='textarea' type='text'/>
      <button>Add post</button>
    </form>
  );
}

const MyPostsReduxForm = reduxForm({ form: 'addPost' })(MyPostsForm)

const MyPosts = (props) => {
  const addNewPost = (values) => {
    props.addPost(values.newPostBody);
  }
  let postsElement = props.posts.map(post => <Post message={post.message} like={post.like}/>);

  return (
    <div className={classes.myPosts}>
      <h2>My posts</h2>
      <MyPostsReduxForm onSubmit={addNewPost} />
      { postsElement }
    </div>
  );
}

export default MyPosts;