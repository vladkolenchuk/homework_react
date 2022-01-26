import React from 'react';

const Post = ({post}) => {
    const {userId, title, body} = post;


    return (
        <div>
            <div>User ID: {userId}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export default Post;