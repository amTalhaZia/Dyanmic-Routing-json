import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Post = () => {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error.message);
      }
    };

    fetchPosts();
  }, [userId]);

  return (
    <div className="app-container">
      <h1 className="heading">Posts by User {userId}</h1>
      {posts.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div>
          {posts.map((post) => (
            <div key={post.id} className="user-card">
              <Link to={`/posts/${post.id}/comments`} >
                <p className="user-name">{post.title}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Post;
