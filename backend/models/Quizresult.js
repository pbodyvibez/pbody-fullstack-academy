import mongoose from "mongoose";

const quizResultSchema = new mongoose.Schema(
  {
    userId: String,
    score: Number,
    total: Number,
    passed: Boolean,
  },
  { timestamps: true }
);

export default mongoose.model("QuizResult", quizResultSchema);