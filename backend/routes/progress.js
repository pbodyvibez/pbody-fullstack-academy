const express = require("express");
const Progress = require("../models/Progress");
const auth = require("../middleware/auth");

const router = express.Router();

// ========================================
// SAVE OR UPDATE PROGRESS
// ========================================

router.post("/update", auth, async (req, res) => {
  try {
    const {
      course,
      completedLessons,
      totalLessons,
    } = req.body;

    if (!course || totalLessons === undefined) {
      return res.status(400).json({
        success: false,
        message: "Course and totalLessons are required",
      });
    }

    const completed = Number(completedLessons) || 0;
    const total = Number(totalLessons);

    if (total <= 0) {
      return res.status(400).json({
        success: false,
        message: "totalLessons must be greater than 0",
      });
    }

    const progressPercent = Math.min(
      100,
      Math.max(
        0,
        Math.round((completed / total) * 100)
      )
    );

    const updated = await Progress.findOneAndUpdate(
      {
        userId: req.user.id,
        course,
      },
      {
        userId: req.user.id,
        course,
        completedLessons: completed,
        totalLessons: total,
        progressPercent,
      },
      {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true,
      }
    );

    return res.json({
      success: true,
      progress: updated,
    });
  } catch (error) {
    console.log(
      "PROGRESS UPDATE ERROR:",
      error.message
    );

    return res.status(500).json({
      success: false,
      message: "Failed to update progress",
    });
  }
});

// ========================================
// GET USER PROGRESS
// ========================================

router.get("/my", auth, async (req, res) => {
  try {
    const data = await Progress.find({
      userId: req.user.id,
    }).sort({
      updatedAt: -1,
    });

    return res.json({
      success: true,
      progress: data,
    });
  } catch (error) {
    console.log(
      "PROGRESS FETCH ERROR:",
      error.message
    );

    return res.status(500).json({
      success: false,
      message: "Failed to fetch progress",
    });
  }
});

module.exports = router;