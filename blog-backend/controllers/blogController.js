const Blog = require("../model/blog");

// Create a new blog post
// const createBlog = async (req, res) => {
//   const { title, content, author } = req.body;
//   try {
//     const newBlog = new Blog({ title, content, author });
//     await newBlog.save();
//     res.status(201).json(newBlog);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
// Create multiple blog posts
const createBlogs = async (req, res) => {
  const blogs = req.body;
  try {
    const newBlogs = await Blog.insertMany(blogs);
    res.status(201).json(newBlogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all blog posts
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a blog post
const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, content, author } = req.body;
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, content, author },
      { new: true }
    );
    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json(updatedBlog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a blog post
const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json({ message: "Blog deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createBlog, getBlogs, updateBlog, deleteBlog };
