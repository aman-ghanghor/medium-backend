import mongoose from "mongoose";

const StorySchema = mongoose.Schema({
  topic: { type: String, required: false },
  title: { type: String, required: true },
  thumbnail: { type: String, required: false },
  text: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
  author: { type: String, required: true },

  claps: [
    {
      date: { type: Date },
      userId: { type: String },
      count: { type: String },
    },
  ],

});

const StoryModel = mongoose.model("story", StorySchema);

export default StoryModel;
