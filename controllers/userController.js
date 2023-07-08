const User = require('../models/User');

module.exports = {
  // `GET` all users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //  `GET` a single user by its `_id` and populated thought and friend data
  async getSingleUser(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findById(id).populate('friends').populate('thoughts');
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // `POST` a new user:
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
}