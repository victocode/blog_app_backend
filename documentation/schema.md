
## user
```
{
  _id: ObjectId,
  username: String,
  email: String,
  password: String,
  created_at: Date,
  updated_at: Date,
  role: String,
  profile: {
    bio: String,
    avatar: String,
    social_links: {
      website: String,
      twitter: String,
      facebook: String,
      instagram: String
    }
  },
  followers: [ObjectId], // References to User
  following: [ObjectId], // References to User
  followers_count: Number, // Count of followers
  following_count: Number // Count of followings
}
```

## posts

```
{
  _id: ObjectId,
  title: String,
  content: String,
  author: ObjectId, // Reference to User
  created_at: Date,
  updated_at: Date,
  categories: [ObjectId], // References to Category
  tags: [ObjectId], // References to Tag
  comments: [
    {
      _id: ObjectId,
      content: String,
      author: ObjectId, // Reference to User
      created_at: Date,
      updated_at: Date
    }
  ],
  featured_image: String,
  is_published: Boolean,
  published_at: Date,
  views: Number,
  likes: Number
}
```

## catagories

```
{
  _id: ObjectId,
  name: String,
  posts: [ObjectId], // References to Post
}
```

## tag

```
{
  _id: ObjectId,
  name: String,
  posts: [ObjectId], // References to Post
}
```

## media files

```
{
  _id: ObjectId,
  filename: String,
  path: String,
  uploaded_by: ObjectId, // Reference to User
  uploaded_at: Date,
  size: Number,
  type: String
}
```

## Social Sharing Collection:

```
{
  _id: ObjectId,
  post_id: ObjectId, // Reference to Post
  shared_by: ObjectId, // Reference to User
  shared_at: Date,
  platform: String
}
```
##  Like/Upvote Collection:

```
{
  _id: ObjectId,
  post_id: ObjectId, // Reference to Post
  liked_by: ObjectId, // Reference to User
  liked_at: Date
}
```
## Notification Collection:

```
{
  _id: ObjectId,
  recipient_id: ObjectId, // Reference to User
  sender_id: ObjectId, // Reference to User
  notification_type: String,
  content: String,
  created_at: Date,
  read: Boolean
}

```
### Follow collection

```
{
  _id: ObjectId,
  follower_id: ObjectId, // Reference to User
  following_id: ObjectId, // Reference to User
  followed_at: Date
}
```

### Analytics/Statistics Collection:

```
{
  _id: ObjectId,
  post_id: ObjectId, // Reference to Post
  views_count: Number,
  likes_count: Number,
  comments_count: Number,
  shares_count: Number
}
```