const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  medicalCollege: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
  specialtyInterest: {
    type: String,
    required: true,
  },
  
  accuracyScore: {
    type: Number,
    default: 100,
  },
  casesSolved: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model("User", userSchema);