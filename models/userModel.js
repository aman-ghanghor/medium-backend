import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  about: { type: String, required: false },
  shortBio: { type: String, required: false },
  photo: { type: String, required: false },
  deactivated: { type: Boolean, required: true, default: false },

  followers: [
    {
      userId: { type: String },
    },
  ],

  following: [
    {
      userId: { type: String },
    },
  ],

  lists: [
    {
      id: { type: String },
      name: { type: String },
      private: { type: String, default: false },
      total: { type: Number, default: 0 },
      list: [],
    },
  ],

  highlights: [
    {
      storyId: { type: String },
      title: { type: String },
      author: { type: String },
      text: { type: String },
    },
  ],
});

const UserModel = mongoose.model("user", UserSchema);

export default UserModel;
