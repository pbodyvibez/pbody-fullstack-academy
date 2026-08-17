const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },

    course: {
      type: String,
      required: true,
    },

    completedLessons: {
      type: Number,
      default: 0,
    },

    totalLessons: {
      type: Number,
      required: true,
    },

    progressPercent: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Progress",
  progressSchema
);