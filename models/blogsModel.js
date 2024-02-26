const mongoose = require("mongoose");

const blogsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    publishedDate: { type: Date, required: true },
    published: { type: Boolean, default: false },
});

module.exports = mongoose.model('Blogs', blogsSchema);