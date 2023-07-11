const { Thought, User } = require("../models");

module.exports = {
  // `GET` all thoughts
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //  `GET` a single thought by its `_id`
  async getThoughtById(req, res) {
    try {
      const { thoughtId } = req.params;
      const thought = await Thought.findOne({ _id: thoughtId });

      if (!thought) {
        res
          .status(404)
          .json({ message: `No thought found with id ${id} found!` });
        return;
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // `POST` a new thought:
  async createThought(req, res) {
    try {

      const thought = await Thought.create(req.body);

      // await User.findOneAndUpdate(
      //   { username: req.body.username },
      //   { $push: { thoughts: thought._id } },
      //   { new: true }
      // );

      res.json("Success");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // `PUT` to update a thought by its `_id`
  async updateThought(req, res) {
    try {
      const { id } = req.params;
      const thought = Thought.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      });

      if (!thought) {
        res.status(404).json({ message: "No thought found with this id!" });
        return;
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // `DELETE` to remove a thought by its `_id`
  async deleteThought(req, res) {
    try {
      const { id } = req.params;
      const thought = await Thought.findOneAndDelete({ _id: id });

      if (!thought) {
        res.status(404).json({ message: "No thought found with this id!" });
        return;
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // // `POST` to create a reaction stored in a single thought's `reactions` array field
  // async addReaction(req, res) {
  //   try {
  //     const { id } = req.params;
  //     const reaction = await Reaction.create(req.body);

  //     await Thought.findOneAndUpdate(
  //       { _id: id },
  //       { $push: { reactions: reaction._id } },
  //       { new: true }
  //     );

  //     res.json(reaction);
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // },

  // // `DELETE` to pull and remove a reaction by the reaction's `reactionId` value
  // async deleteReaction(req, res) {
  //   try {
  //     const { id, reactionId } = req.params;
  //     const reaction = await Reaction.findOneAndDelete({ _id: reactionId });

  //     if (!reaction) {
  //       res.status(404).json({ message: "No reaction found with this id!" });
  //       return;
  //     }

  //     await Thought.findOneAndUpdate(
  //       { _id: id },
  //       { $pull: { reactions: reactionId } },
  //       { new: true }
  //     );

  //     res.json(reaction);
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // },
};
