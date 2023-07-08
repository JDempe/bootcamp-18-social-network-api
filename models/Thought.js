const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: 'You need to provide a thought!',
      minlength: 1,
      maxlength: 280,
    },

    createdAt: {
      type: Date,
      default: Date.now,
      // use getter method to format timestamp
      get: (createdAtVal) => dateFormat(createdAtVal),
    },

    username: {
      type: String,
      required: 'You need to provide a username!',
    },

    // use ReactionSchema to validate data for a reply
    reactions: [Reaction],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// get total count of reactions on retrieval
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Initialize our Thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;