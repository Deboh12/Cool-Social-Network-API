const { User, Thought } = require('../models');

const userController = {
  // Get all users
  getAllUsers(req, res) {
    User.find({})
      .populate({
        path: 'thoughts',
        select: '-__v'
      })
      .populate({
        path: 'friends',
        select: '-__v'
      })
      .select('-__v')
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },

  // Get a single user by ID
  getUserById(req, res) {
    User.findById(req.params.id)
      .populate({
        path: 'thoughts',
        select: '-__v'
      })
      .populate({
        path: 'friends',
        select: '-__v'
      })
      .select('-__v')
      .then((user) => {
        if (!user) {
          return res.status(404).json({ message: 'No user found with this ID!' });
        }
        res.json(user);
      })
      .catch((err) => res.status(500).json(err));
  },

  // Create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  // Update a user by ID
  updateUser(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
      .then((user) => {
        if (!user) {
          return res.status(404).json({ message: 'No user found with this ID!' });
        }
        res.json(user);
      })
      .catch((err) => res.status(500).json(err));
  },

  // Delete a user by ID
  deleteUser(req, res) {
    User.findByIdAndDelete(req.params.id)
      .then((user) => {
        if (!user) {
          return res.status(404).json({ message: 'No user found with this ID!' });
        }
        // Bonus: Delete the user's thoughts when the user is deleted
        return Thought.deleteMany({ _id: { $in: user.thoughts } });
      })
      .then(() => res.json({ message: 'User and their thoughts successfully deleted!' }))
      .catch((err) => res.status(500).json(err));
  },

  // Add a friend to a user's friend list
  addFriend(req, res) {
    User.findByIdAndUpdate(
      req.params.userId,
      { $push: { friends: req.params.friendId } },
      { new: true, runValidators: true }
    )
      .then((user) => {
        if (!user) {
          return res.status(404).json({ message: 'No user found with this ID!' });
        }
        res.json(user);
      })
      .catch((err) => res.status(500).json(err));
  },

  // Remove a friend from a user's friend list
  removeFriend(req, res) {
    User.findByIdAndUpdate(
      req.params.userId,
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .then((user) => {
        if (!user) {
          return res.status(404).json({ message: 'No user found with this ID!' });
        }
        res.json(user);
      })
      .catch((err) => res.status(500).json(err));
  },
};

module.exports = userController;