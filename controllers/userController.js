const { Thought, User } = require("../models");

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
      const user = await User.findOne({
        _id: req.params.userId,
      });
      if (!user) {
        res
          .status(404)
          .json({ message: `No user found with id ${_id} found!` });
        return;
      }

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

  // GET a single user by its `_id` and populated thought and friend data
  async updateUser(req, res) {
    try {
      const { userId } = req.params;
      const user = await User.findOneAndUpdate({ _id: userId }, req.body, {
        new: true,
      });

      if (!user) {
        res.status(404).json({ message: "No user found with this id!" });
        return;
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // `DELETE` a user by its `_id` and any associated thoughts
  async deleteUser(req, res) {
    try {
      const { userId } = req.params;

      // find the username given userId
      const user = await User.findOne({ _id: userId });

      if (!user) {
        res.status(404).json({ message: "No user found with this id!" });
        return;
      }

      // update all User's to remove the deleted user from their friends array
      await User.updateMany(
        { _id: { $in: user.friends } },
        { $pull: { friends: userId } }
      );

      // remove any comments from this user
      await Thought.deleteMany({ username: user.username });

      await User.findOneAndDelete({ _id: userId });

      // Return a message that the user has been deleted
      res.json({ message: "User deleted!" });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // `POST` to add a new friend to a user's friend list
  async addFriend(req, res) {
    try {
      const { userId, friendId } = req.params;
      const user = await User.findOneAndUpdate(
        { _id: userId },
        { $addToSet: { friends: friendId } },
        { new: true }
      );

      if (!user) {
        res.status(404).json({ message: "No user found with this id!" });
        return;
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // `DELETE` to remove a friend from a user's friend list
  async removeFriend(req, res) {
    try {
      const { userId, friendId } = req.params;
      const user = await User.findOneAndUpdate(
        { _id: userId },
        { $pull: { friends: friendId } },
        { new: true }
      );

      if (!user) {
        res.status(404).json({ message: "No user found with this id!" });
        return;
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
