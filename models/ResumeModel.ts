import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "users",
  },
  resumeData: [Object]
});
