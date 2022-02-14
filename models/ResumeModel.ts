import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "users",
    },
    theme: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

const Resumes =
  mongoose.models.resumes || mongoose.model("resumes", ResumeSchema);

export default Resumes;
