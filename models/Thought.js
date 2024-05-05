const { Schema, model } = require('mongoose');

// Schema to create Thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true, 
        // Must be between 1 and 280 characters
        },
        createdArt: {
        // Date
        // Set default value to the current timestamp
        // Use a getter method to format the timestamp on query
        },
        username: {
            type: String,
            required: true, 
        },
        reactions: {
            // Array of nested documents created with the reactionSchema

        }
        
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
userSchema
  .virtual('')
  // Getter
  .get(function () {
    return
  })
  

// Initialize our User model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
