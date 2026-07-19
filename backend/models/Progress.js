import mongoose from "mongoose";

const progressSchema = new mongoose.Schema(
  {
    userId: String,
    course: String,
    completedLessons: Number,
    totalLessons: Number,
    progressPercent: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Progress", progressSchema);