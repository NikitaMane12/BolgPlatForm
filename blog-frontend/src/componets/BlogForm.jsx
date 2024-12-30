import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BlogForm.css";
import { useNavigate, useParams } from "react-router-dom";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchBlog = async () => {
        const res = await axios.get(`http://localhost:5000/api/blogs/${id}`);
        setTitle(res.data.title);
        setContent(res.data.content);
        setAuthor(res.data.author);
      };
      fetchBlog();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blogData = { title, content, author };
    if (id) {
      await axios.put(`http://localhost:5000/api/blogs/${id}`, blogData);
    } else {
      await axios.post("http://localhost:5000/api/blogs", blogData);
    }
    navigate("/");
  };

  return (
    <div className="Form-container">
      <form onSubmit={handleSubmit} className="Form-input">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <br />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <br />
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default BlogForm;
