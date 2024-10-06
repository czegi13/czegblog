// src/BlogList.js
import React, { useState } from 'react';
import { initialData } from './Data';

const BlogList = () => {
  const [blogs, setBlogs] = useState(initialData);

  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;