import React from 'react';
import classes from './Post.module.css';
import avatar from './../../../../img/user-icons.png'

const Post = (props) => {

    return (
        <div className={classes.post}>
            <img src={avatar} alt='avatar' width='100' height='100'/>
            <div className={classes.message}>{props.message}</div>
            <div className={classes.like}>like {props.like}</div>
        </div>
    );
}

export default Post;