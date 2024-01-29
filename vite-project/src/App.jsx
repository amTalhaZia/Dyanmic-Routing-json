import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";



const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app-container">
      <h1 className="heading">Users</h1>
      {users.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div>
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <Link to={`/posts/${user.id}`}>
                <p className="user-name">{user.name}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
