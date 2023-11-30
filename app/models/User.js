// user model

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  role: { type: String, default: 'user' },
  profile: {
    bio: { type: String, default: '' },
    avatar: { type: String, default: '' },
    social_links: {
      website: { type: String, default: '' },
      twitter: { type: String, default: '' },
      facebook: { type: String, default: '' },
      instagram: { type: String, default: '' },
    },
  },
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  followers_count: { type: Number, default: 0 },
  following_count: { type: Number, default: 0 },
});

module.exports = mongoose.model('User', userSchema);