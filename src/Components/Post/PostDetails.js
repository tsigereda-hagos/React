import React from 'react';
import './PostDetails.css';


const PostDetails = ({ post }) => {
  if (!post) return <div>Select a post to see details</div>;

  return (
    <div className="post-details-container">
      <h2>{post.title}</h2>
      <h3>{post.author}</h3>
      <p>This is the content in the post...</p>
      <div className="button-container">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default PostDetails;
