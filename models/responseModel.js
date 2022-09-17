import mongoose from "mongoose";

const ResponseSchema = mongoose.Schema({
  storyId: { type: String, required: true},
  replyOfResponseId: { type: String, default: null }, // It is reply of a response, null if it's not reply of any response
  userId: { type: String, required: true},
  text: { type: String, required: true },
  date: { type: Date, required: true },
  claps: [
    {
      userId: { type: String },
      count: { type: String },
      date: { type: Date },
    },
  ],
});


const ResponseModel = mongoose.model("response", ResponseSchema);

export default ResponseModel;
