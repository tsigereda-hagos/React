import React, { useState } from 'react';
import Posts from './Post/Posts'
import PostDetails from './Post/PostDetails';

const Dashboard = () => {
  const [posts, setPosts] = useState([
    { id: 111, title: 'Happiness', author: 'John' },
    { id: 112, title: 'MIU', author: 'Dean' },
    { id: 113, title: 'Enjoy Life', author: 'Jasmine' }
  ]);

  const [selectedPost, setSelectedPost] = useState(null);
  const [title, setTitle] = useState('Happiness');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTitleUpdate = (postId, newTitle) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return { ...post, title: newTitle };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  return (
    <div>
      <div className="posts-section">
        <Posts posts={posts} onPostClick={handlePostClick} onTitleUpdate={handleTitleUpdate} />
      </div>
      <div>
        <input 
          type="text" 
          value={title} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <button onClick={() => handleTitleUpdate(posts[0].id, title)}>Change Name</button>
      </div>
      <div className="post-details-section">
        <PostDetails post={selectedPost} />
      </div>
    </div>
  );
};

export default Dashboard;
