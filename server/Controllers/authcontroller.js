const User = require("../Models/User");

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

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    const user = new User({
      fullName,
      medicalCollege,
      specialtyInterest,
      email,
      password,
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