import React from "react";
import BlogList from "../componets/BlogList";

const Home = ({ blogs, setBlogs }) => {
  return (
    <div>
      <h1>Blog Platform</h1>
      <BlogList blogs={blogs} setBlogs={setBlogs} />
    </div>
  );
};

export default Home;
