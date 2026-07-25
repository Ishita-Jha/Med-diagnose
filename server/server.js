const patientRoutes = require("./Routes/patientRoutes");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
connectDB();
const authRoutes = require("./Routes/authroutes");
const aiRoutes = require("./Routes/aiRoutes");

const app = express();


app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/patient", patientRoutes);
app.use("/api/ai" , aiRoutes);


// app.get("/", (req, res) => {
//   res.json({
//     message: "Med-Diagnose Backend Running 🚀"
//   });
// });
app.get("/api/test", (req, res) => {
    res.json({
        message: "Med-Diagnose Backend Running 🚀"
    });
});

// 1. ADD THIS NEW ROUTE HANDLER HERE:
app.get("/api/test", (req, res) => {
    res.json({ message: "Hello from the backend test endpoint!" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});