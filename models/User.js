let { Schema, model } = require('mongoose');
let dateFormat = require("dateformat");


let UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
  },
  thoughts: [
      {
          type: Schema.Types.ObjectId,
          ref: 'Thought'
      }
    ],
  friends: [
      {
          type: Schema.Types.ObjectId,
          ref: 'User'
      }
  ]
  },
  { 
  toJSON: {
    virtuals: true,
    getters: true
  },
  id: false
}
);

// create the User Model using the Schema
let User = model('User', UserSchema);

// get total count of friends and replies on retrieval
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});


  // export the User model
module.exports = User;