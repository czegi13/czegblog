// src/BlogDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { initialData } from './Data';

const BlogDetails = () => {
  const { id } = useParams();
  const blog = initialData.find(blog => blog.id === parseInt(id));

  return (
    <div className="blog-details">
      {blog ? (
        <>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </>
      ) : (
        <p>Blog not found</p>
      )}
    </div>
  );
};

export default BlogDetails;