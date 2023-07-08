const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: 'You need to provide a username!',
      trim: true,
    },

    email: {
      type: String,
      required: 'You need to provide an email address!',
      unique: true,
      // match a valid email address
      match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
    },

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      },
    ],

    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false,
  }
);

// get total count of friends on retrieval
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});


// Initialize our User model
const User = model('User', userSchema);

module.exports = User;
