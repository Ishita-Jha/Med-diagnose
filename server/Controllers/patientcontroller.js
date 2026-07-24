const generatePatient = (req, res) => {
  const patient = {
    name: "Rahul Sharma",
    age: 52,
    gender: "Male",
    chiefComplaint: "Chest pain for 2 hours",
    history: "Known diabetic and smoker",
    vitals: {
      bloodPressure: "150/90 mmHg",
      pulse: "108 bpm",
      temperature: "98.6°F",
    },
  };

  res.status(200).json({
    success: true,
    patient,
  });
};

module.exports = {
  generatePatient,
};