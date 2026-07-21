const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const protect = require("../middleware/authMiddleware");

// ======================
// REGISTER
// ======================

router.post("/register", async (req, res) => {

  try {

    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {

      return res.status(400).json({
        message: "User already exists"
      });

    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({

      name,

      email,

      password: hashedPassword

    });

    res.status(201).json({

      success: true,

      message: "Registration successful",

      user: {

        id: user._id,

        name: user.name,

        email: user.email

      }

    });

  }

  catch (err) {

    res.status(500).json({

      success: false,

      message: err.message

    });

  }

});

// ======================
// LOGIN
// ======================

router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {

      return res.status(400).json({

        message: "User not found"

      });

    }

    const validPassword = await bcrypt.compare(

      password,

      user.password

    );

    if (!validPassword) {

      return res.status(400).json({

        message: "Invalid password"

      });

    }

    const token = jwt.sign(

      {

        id: user._id,

        email: user.email

      },

      process.env.JWT_SECRET,

      {

        expiresIn: "1d"

      }

    );

    res.json({

      success: true,

      message: "Login successful",

      token,

      user: {

        id: user._id,

        name: user.name,

        email: user.email

      }

    });

  }

  catch (err) {

    res.status(500).json({

      success: false,

      message: err.message

    });

  }

});

// ======================
// PROFILE
// ======================

router.get("/profile", protect, async (req, res) => {

  try {

    const user = await User.findById(req.user.id).select("-password");

    res.json({

      success: true,

      user

    });

  }

  catch (err) {

    res.status(500).json({

      success: false,

      message: err.message

    });

  }

});

module.exports = router;