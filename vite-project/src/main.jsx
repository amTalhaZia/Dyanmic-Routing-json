import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Post from './compnents/post/post.jsx';
import Comments from './compnents/post/Comments/Comments.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/posts/:userId" element={<Post />} />
        <Route path='/posts/:postId/comments' element={<Comments/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
