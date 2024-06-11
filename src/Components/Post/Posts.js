import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  const posts = props.posts.map(post => {
    return (
      <Post
        id={post.id}
        title={post.title}
        author={post.author}
        key={post.id}
        onClick={() => props.onPostClick(post)}
        onTitleUpdate={props.onTitleUpdate} // Pass the function to update the title
      />
    );
  });
  return <div className="posts-container">{posts}</div>; // Apply styling to this container
};

export default Posts;
