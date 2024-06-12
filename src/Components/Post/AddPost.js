import React, { useState } from 'react';
import axios from 'axios';

const AddPost = ({ fetchPosts }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, author, content };
    try {
      await axios.post('http://localhost:8080/posts', newPost);
      fetchPosts(); // Refresh the posts list
      setTitle('');
      setAuthor('');
      setContent('');
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        required
      />
      <input 
        type="text" 
        placeholder="Author" 
        value={author} 
        onChange={(e) => setAuthor(e.target.value)} 
        required
      />
      <textarea 
        placeholder="Content" 
        value={content} 
        onChange={(e) => setContent(e.target.value)} 
        required
      />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddPost;
