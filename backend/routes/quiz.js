import express from "express";
import QuizResult from "../models/QuizResult.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// SAVE QUIZ RESULT
router.post("/save", auth, async (req, res) => {
  try {
    const { score, total } = req.body;

    const passed = score >= Math.ceil(total * 0.7);

    const result = await QuizResult.create({
      userId: req.user.id,
      score,
      total,
      passed,
    });

    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET USER RESULTS
router.get("/my-results", auth, async (req, res) => {
  try {
    const results = await QuizResult.find({ userId: req.user.id });
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;