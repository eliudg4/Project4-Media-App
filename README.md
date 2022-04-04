### Project Idea
A social media app where users can register, login, and logout as they please. The app is mostly based off of Facebook. User can create posts and see all of the posts they have posted in the past.

### List of Models and Their Properties

**Post Model**

- userId: {type: boolean, default: false},
- image: {type: String},
- description: {type: String},
- likes: {type: array, default: [] },
- comments:{type: String}

**User Model**

- admin: {type: String, required: true},
- email: {type: String, required: true},
- username: {type: String, required: true},
- password: {type: string, required: true },
- profilePic:{type: String, default: ''},
- friends:{type: array, default: []}

### Tech Stack 
Bootstrap
React
HTML
CSS
MongoDB
Express
Node.JS

### User Stories
As a user I want to be able to post pictures
As a user I want to be to message friends
As a user I want to be to like and comment on other posts

### Stretch Goals
As a user I want to be able to login
As a user I want to be able to register
As a user I want to be able to be-friend and unfriend people
