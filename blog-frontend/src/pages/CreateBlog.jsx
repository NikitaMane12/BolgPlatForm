import React from "react";
import { BlogForm } from "../componets/BlogForm";

const CreateBlog = ({ blogs, setBlogs }) => {
  return (
    <div>
      <BlogForm blogs={blogs} setBlogs={setBlogs} isEdit={false} />
    </div>
  );
};

export default CreateBlog;
