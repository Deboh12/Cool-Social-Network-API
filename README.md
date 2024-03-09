# Cool-Social-Network-API

## Description

This project is a social network API built using Node.js, Express.js, and MongoDB with Mongoose ODM. The motivation behind this project was to create a backend for a social networking platform that can handle large amounts of unstructured data, making it scalable and efficient.

The Cool-Social-Network-API allows users to share their thoughts, react to friends' thoughts, and create a friend list. It demonstrates the use of a NoSQL database to manage and query data effectively.

Through this project, I learned about setting up and using a MongoDB database, creating models and routes with Mongoose and Express.js, and handling CRUD operations in a RESTful API.


## Installation

1. Clone the repository:
git clone https://github.com/your-username/Cool-Social-Network-API.git

2. Navigate to the project directory:
cd Cool-Social-Network-API

3. Install dependencies:
npm install

4. Start the server:
npm start


## Usage

To use the API, you can make requests to the following endpoints:

- `GET /api/users`: Get all users
- `POST /api/users`: Create a new user
- `GET /api/users/:id`: Get a user by ID
- `PUT /api/users/:id`: Update a user by ID
- `DELETE /api/users/:id`: Delete a user by ID
- `POST /api/users/:userId/friends/:friendId`: Add a friend to a user's friend list
- `DELETE /api/users/:userId/friends/:friendId`: Remove a friend from a user's friend list
- `GET /api/thoughts`: Get all thoughts
- `POST /api/thoughts`: Create a new thought
- `GET /api/thoughts/:id`: Get a thought by ID
- `PUT /api/thoughts/:id`: Update a thought by ID
- `DELETE /api/thoughts/:id`: Delete a thought by ID
- `POST /api/thoughts/:thoughtId/reactions`: Add a reaction to a thought
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId`: Remove a reaction from a thought


## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).


## Features

- User management: Create, read, update, and delete users.
- Friend management: Add and remove friends for each user.
- Thought management: Create, read, update, and delete thoughts.
- Reaction management: Add and remove reactions to thoughts.

