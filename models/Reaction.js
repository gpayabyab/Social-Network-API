const { Schema } = require('mongoose');

// Custom function to format the timestamp
const formatTimestamp = (createdAt) => {
  // Example: Format the date as 'YYYY-MM-DD HH:mm:ss'
  return createdAt.toISOString(); // Adjust the formatting as needed
};

// Schema to create Reaction model
const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Schema.Types.ObjectId()
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: formatTimestamp // Use the custom function to format the timestamp
  }
}, {
  toJSON: { virtuals: true },
  id: false
});

module.exports = reactionSchema;