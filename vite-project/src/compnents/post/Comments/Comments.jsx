import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";



const comments = () => {
  const [comments, setComments] = useState([]);
  const  {postId}  =  useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?id=${postId}`);
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app-container">
      <h1 className="heading">Email</h1>
      {comments.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div>
          {comments.map((comment) => (
            <div key={comment.id} className="user-card">
              <Link to={`/posts/${comment.id}`} >
                <p className="user-name">{comment.email}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default comments;
