import express from "express";
import Progress from "../models/Progress.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// SAVE OR UPDATE PROGRESS
router.post("/update", auth, async (req, res) => {
  try {
    const { course, completedLessons, totalLessons } = req.body;

    const progressPercent = Math.round(
      (completedLessons / totalLessons) * 100
    );

    const updated = await Progress.findOneAndUpdate(
      { userId: req.user.id, course },
      {
        userId: req.user.id,
        course,
        completedLessons,
        totalLessons,
        progressPercent,
      },
      { upsert: true, new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET USER PROGRESS
router.get("/my", auth, async (req, res) => {
  try {
    const data = await Progress.find({ userId: req.user.id });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;