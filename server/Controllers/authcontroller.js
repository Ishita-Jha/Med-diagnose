const User = require("../Models/User");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
  try {
    const {
      fullName,
      medicalCollege,
      specialtyInterest,
      email,
      password,
      confirmPassword,
    } = req.body;
        // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already registered",
      });
    }

    
    
    if (password !== confirmPassword) {
        return res.status(400).json({
            success: false,
            message: "Passwords do not match",
        });
    }
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      fullName,
      medicalCollege,
      specialtyInterest,
      email,
      password: hashedPassword,
    });

    
    await user.save();

    res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      user,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  registerUser,
};