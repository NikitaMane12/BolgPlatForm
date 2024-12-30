import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./blogList.css";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get("http://localhost:5000/api/blogs");
      setBlogs(res.data);
    };
    fetchBlogs();
  }, []);

  const deleteBlog = async (id) => {
    await axios.delete(`http://localhost:5000/api/blogs/${id}`);
    setBlogs(blogs.filter((blog) => blog._id !== id));
  };

  return (
    <>
      <Link to="/new" style={{ fontSize: "25px" }}>
        Create New Blog
      </Link>
      <div>
        <div className=" blog-list">
          {blogs.map((blog) => (
            <div key={blog._id} className="blog-card">
              <h3>{blog.title}</h3>
              <p style={{ fontSize: "20px" }}>{blog.content}</p>
              <Link to={`/edit/${blog._id}`} style={{ color: "red" }}>
                Edit
              </Link>
              <button onClick={() => deleteBlog(blog._id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogList;
