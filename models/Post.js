const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  caption: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },


  // Comments are saved in an array of [theComments, userId]
  addComments: {
    type: [{
      theComments : String,
      userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      }
       }],
    required: false,
  },

  addComments: {
    // type: new Schema({ id: String }),
    type: Array,
    required: false,
  }

});

module.exports = mongoose.model("Post", PostSchema);