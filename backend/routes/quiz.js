const express = require("express");
const QuizResult = require("../models/Quizresult");
const auth = require("../middleware/auth");

const router = express.Router();

// ========================================
// SAVE QUIZ RESULT
// ========================================

router.post("/save", auth, async (req, res) => {
  try {
    const { score, total } = req.body;

    if (
      score === undefined ||
      total === undefined
    ) {
      return res.status(400).json({
        success: false,
        message: "Score and total are required",
      });
    }

    const numericScore = Number(score);
    const numericTotal = Number(total);

    if (
      Number.isNaN(numericScore) ||
      Number.isNaN(numericTotal) ||
      numericTotal <= 0
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid quiz score or total",
      });
    }

    const passed =
      numericScore >= Math.ceil(numericTotal * 0.7);

    const result = await QuizResult.create({
      userId: req.user.id,
      score: numericScore,
      total: numericTotal,
      passed,
    });

    return res.json({
      success: true,
      result,
    });
  } catch (error) {
    console.log(
      "QUIZ SAVE ERROR:",
      error.message
    );

    return res.status(500).json({
      success: false,
      message: "Failed to save quiz result",
    });
  }
});

// ========================================
// GET USER QUIZ RESULTS
// ========================================

router.get("/my-results", auth, async (req, res) => {
  try {
    const results = await QuizResult.find({
      userId: req.user.id,
    }).sort({
      createdAt: -1,
    });

    return res.json({
      success: true,
      results,
    });
  } catch (error) {
    console.log(
      "QUIZ RESULTS ERROR:",
      error.message
    );

    return res.status(500).json({
      success: false,
      message: "Failed to fetch quiz results",
    });
  }
});

module.exports = router;
