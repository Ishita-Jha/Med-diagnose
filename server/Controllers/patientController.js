const patients = require("../data/patients");

const getRandomPatient = (req, res) => {
  const random =
    patients[Math.floor(Math.random() * patients.length)];

  res.json({
    success: true,
    patient: random,
  });
};

module.exports = {
  getRandomPatient,
  
};