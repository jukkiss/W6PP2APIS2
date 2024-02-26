const mongoose = require('mongoose');
const Blog = require('../models/blogsModel');

// Get all blogs
const getBlogs = async (req, res) => {
  const user_id = req.user._id

  try {
    const blogs = await Blog.find({user_id}).sort({createdAt: -1})
    res.status(200).json(blogs)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
}
    
    // Add one TodoTask
    const addBlog = async (req, res) => {
      const {title, content, publishedDate, published} = req.body;

      try {
        const user_id = req.user._id;
        const newBlog = new Blog({title, content, publishedDate, published});
        await newBlog.save();
        res.status(201).json(newBlog);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
      }
    }
    
    // Get TodoTask by ID
    const getBlog = async (req, res) => {
      const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such blog'});
  }

  try {
    const user_id = req.user._id;
    const blog = await TodoTask.findById(id).where('user_id').equals(user_id);
    if (!blog) {
      return res.status(404).json({ message: 'blog not found' });
    }
    res.status(200).json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
}
    
    // Delete TodoTask by ID
    const deleteBlog = async (req, res) => {
      const { id } = req.params;
      try {
        const user_id = req.user._id;
        const blog = await Blog.findByIdAndDelete({ _id: id, user_id: user_id });
        if (!blog) {
          return res.status(404).json({ message: 'blog not found' });
        }
        res.status(200).json({ message: 'blog deleted successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
      }
    }
    
    // Update TodoTask by ID
    const updateBlog = async (req, res) => {
      const { id } = req.params;
  try {
    const user_id = req.user._id;
    const blog = await Blog.findOneAndUpdate(
      { _id: id, user_id: user_id },
      { ...req.body },
      { new: true }
    );
    if (!blog) {
      return res.status(404).json({ message: 'blog not found' });
    }
    res.status(200).json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
}
    
    module.exports = {
      getBlogs,
      addBlog,
      getBlog,
      deleteBlog,
      updateBlog,
    };