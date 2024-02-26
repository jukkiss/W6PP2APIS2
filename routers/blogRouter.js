const express = require('express');
const router = express.Router();
const { getBlogs, addBlog, getBlog, deleteBlog, updateBlog } = require('../controllers/blogsController');
const requireAuth = require('../middleware/requireAuth')

// require auth for all workout routes
router.use(requireAuth);
// get all
router.get('/', getBlogs);

//post new
router.post('/', addBlog);

// get blog by id
router.get('/:id', getBlog);

// delete blog
router.delete('/:id', deleteBlog);

//put into blog
router.put('/:id', updateBlog);

module.exports = router;