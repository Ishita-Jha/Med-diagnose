const User = require("../Models/User");

const registerUser = async (req, res) => {
  try {
    const {
      fullName,
      medicalCollege,
      yearOfStudy,
      specialtyInterest,
    } = req.body;

    const user = new User({
      fullName,
      medicalCollege,
      yearOfStudy,
      specialtyInterest,
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