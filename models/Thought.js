const { Schema, model } = require("mongoose");

// Custom function to format the timestamp
const formatTimestamp = (createdAt) => {
  // Example: Format the date as 'YYYY-MM-DD HH:mm:ss'
  return createdAt.toISOString(); // Adjust the formatting as needed
};

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: formatTimestamp, // Use the custom function to format the timestamp
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: { virtuals: true },
    id: false
  }
);

// Create a virtual property `reactionCount` that gets and sets the amount of reactions
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Initialize the Thought model
const Thought = model("thought", thoughtSchema);

module.exports = Thought;