const { Schema, model } = require("mongoose");

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdArt: {
      type: Date,
      // Set default value to the current timestamp
      default: Date.now,
      // Use a getter method to format the timestamp on query
      get: (createdAt) => dateFormat(createdAt),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema]
  },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `reactionCount` that gets and sets the amount of reactions
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Initialize the Thought model
const Thought = model("thought", thoughtSchema);

module.exports = Thought;
