// src/Home.js
import React, { useState } from 'react';
import { initialData } from './Data';

const Home = () => {
  const [blogs, setBlogs] = useState(initialData);

  return (
    <div className="home">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;