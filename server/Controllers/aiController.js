const chatWithPatient = async (req, res) => {
  const { question } = req.body;

  res.json({
    success: true,
    reply: `Patient heard: "${question}"`
  });
};

module.exports = { chatWithPatient };