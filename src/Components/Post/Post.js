import React from 'react';
import './Post.css';

const Post = (props) => {
  return (
    <div className="post-container" onClick={props.onClick}>
      <h4>Id: {props.id}</h4>
      <h4>Title: {props.title}</h4>
      <p>Author: {props.author}</p>
    </div>
  );
};

export default Post;
