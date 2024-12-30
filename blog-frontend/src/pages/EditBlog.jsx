import React from "react";
import { BlogForm } from "../componets/BlogForm";

const EditBlog = ({ blogs, setBlogs }) => {
  return (
    <div>
      <h1>Edit Blog</h1>
      <BlogForm blogs={blogs} setBlogs={setBlogs} isEdit={true} />
    </div>
  );
};

export default EditBlog;
