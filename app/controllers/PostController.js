const Post = require('../models/Post');

// Create a new post
const createPost = async (req, res) => {
  try {
    const author = req.userId;
    console.log(author);
    const { title, content, categories, tags, featured_image } = req.body;
    // TODO ADD VALIDATION
    const newPost = new Post({
      title,
      content,
      author,
      categories,
      tags,
      featured_image,
    });

    await newPost.save();

    res.status(201).json({ message: 'Post created successfully', post: newPost });
  } catch (err) {
    console.error('Error in creating post: ', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'username');
    res.json(posts);
  } catch (err) {
    console.error('Error in getting posts: ', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get a single post by ID
const getPostById = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId).populate('author', 'username');
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (err) {
    console.error('Error in getting post by ID: ', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update a post by ID
const updatePostById = async (req, res) => {
  try {
    const postId = req.params.id;
    const { title, content, categories, tags, featured_image } = req.body;

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      {
        title,
        content,
        categories,
        tags,
        featured_image,
        updated_at: Date.now(),
      },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.json({ message: 'Post updated successfully', post: updatedPost });
  } catch (err) {
    console.error('Error in updating post by ID: ', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete a post by ID
const deletePostById = async (req, res) => {
  try {
    const postId = req.params.id;

    const deletedPost = await Post.findByIdAndDelete(postId);

    if (!deletedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.json({ message: 'Post deleted successfully' });
  } catch (err) {
    console.error('Error in deleting post by ID: ', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById,
};