import React, {Component, PureComponent} from 'react';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormsControls/FormsControls';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const maxLength200 = maxLengthCreator(200);

const MyPostsForm = (props) => {
    return (<form onSubmit={props.handleSubmit} className={classes.myPostsForm}>
            <Field name='newPostBody' component={Textarea} validate={[required, maxLength200]} type='text'
                   placeholder='Say what is on your mind...'/>
            <button>Add post</button>
        </form>
    );
}

const MyPostsReduxForm = reduxForm({form: 'addPost'})(MyPostsForm)

const MyPosts = React.memo((props) => {
    const addNewPost = (values) => {
        props.addPost(values.newPostBody);
    }
    let postsElement = props.posts.map(post => <Post key={post.id} message={post.message} like={post.like}/>);

    return (
        <div className={classes.myPosts}>
            {/*<h2>My posts</h2>*/}
            <MyPostsReduxForm onSubmit={addNewPost}/>
            <div className={classes.postList}>
                {postsElement}
            </div>
        </div>
    )
});

export default MyPosts;

// class MyPosts extends PureComponent {

//   // shouldComponentUpdate(nextProps, nextState) {
//   //   return nextProps != this.props || nextState != this.state;
//   // }

//   render(){
//     let postsElement = this.props.posts.map(post => <Post message={post.message} like={post.like}/>);
//     let newPostElement = React.createRef();
//     const addNewPost = (values) => {
//       this.props.addPost(values.newPostBody);
//     }

//     return (
//       <div className={classes.myPosts}>
//         <h2>My posts</h2>
//         <MyPostsReduxForm onSubmit={addNewPost} />
//         { postsElement }
//       </div>
//     )
//   }
// }

