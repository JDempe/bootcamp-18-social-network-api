const { Thought, Reaction, User } = require("../models");

module.exports = {
  // `GET` all thoughts including the reactions which is an array of objects
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find({}).populate({
        path: "reactions"
      });

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

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // `PUT` to update a thought by its `_id`
  async updateThought(req, res) {
    try {
      const { thoughtId } = req.params;
      const thought = await Thought.findOneAndUpdate(
        { _id: thoughtId },
        {$set: req.body},
        {new: true, runValidators: true});

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
      const { thoughtId } = req.params;
      const thought = await Thought.findOneAndDelete({ _id: thoughtId });

      if (!thought) {
        res.status(404).json({ message: "No thought found with this id!" });
        return;
      }

      res.json("Deleted!");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // `POST` to create a reaction stored in a single thought's `reactions` array field
  async addReaction(req, res) {
    try {
      const { thoughtId } = req.params;


      await Thought.findOneAndUpdate(
        { _id: thoughtId },
        { $push: {reactions: req.body,} },
        { new: true }
      );

      res.json("Reaction added!");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // `DELETE` to pull and remove a reaction by the reaction's `reactionId` value
  async deleteReaction(req, res) {
    try {
      const { thoughtId, reactionId } = req.params;

      // look for a thought with thoughtId that has a reactionId in the reactions array that matches the reactionId value passed in the route
      const thought = await Thought.findOne({ _id: thoughtId });

      // if reaction isnt found in that thought, send 404
      if (!thought) {
        res.status(404).json({ message: "No reaction found with this id!" });
        return;
      }

      await Thought.findOneAndUpdate(
        { _id: thoughtId },
        { $pull: { reactions: { reactionId: reactionId } }},
        { new: true }
      );

      res.json("Deleted!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
