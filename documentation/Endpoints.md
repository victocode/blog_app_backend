

#  user endpoints

- 'register user'
```
path /user/register  method post
body
{
   "username":"test",
   "email":"test@gmail.com",
   "password":"test"
}
```
- 'login user'
```
path /user/login method post
body
{
   "email":"test@gmail.com",
   "password":"test"
}
```
# blog post endpoints

```
path /post method post

body{
   "title":"blog title",
   "content":"this is blog content",
   "catagories":    "science",
   "tags":"software, application",
   "featured_image":"",
}
sample respons

------
{
  "message": "Post created successfully",
  "post": {
    "title": "blog title",
    "content": "this is blog content",
    "author": "656a939e9f66944351cdf936",
    "categories": [],
    "tags": [],
    "featured_image": "",
    "is_published": false,
    "views": 0,
    "likes": 0,
    "_id": "656a95bae17189cd0498bc7a",
    "created_at": "2023-12-02T02:26:02.748Z",
    "updated_at": "2023-12-02T02:26:02.748Z",
    "comments": [],
    "__v": 0
  }
}
--------
```


