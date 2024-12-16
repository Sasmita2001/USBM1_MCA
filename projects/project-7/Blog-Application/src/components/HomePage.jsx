/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
   
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Blog Posts</h1>
      <ul className="space-y-4">
        {posts.map(post => (
          <li key={post.id} className="bg-white p-4 rounded shadow-md hover:bg-gray-50">
            <Link to={`/post/${post.id}`} className="text-xl font-semibold text-blue-600 hover:text-blue-800">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
