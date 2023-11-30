const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const PostController = require('../controllers/PostController');
const authMiddleware = require('../../middlewares/authMiddleware');

// User routes
router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);

// Post routes
router.post('/', authMiddleware, PostController.createPost);
router.get('/', PostController.getAllPosts);
router.get('/posts/:id', PostController.getPostById);
router.put('/posts/:id', authMiddleware, PostController.updatePostById);
router.delete('/posts/:id', authMiddleware, PostController.deletePostById);

module.exports = router;