import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/DiagnosisPage.css";
import Timer from "../components/Timer.jsx";
function DiagnosisPage() {
  const navigate = useNavigate();

  const [diagnosis, setDiagnosis] = useState("");
  const [treatment, setTreatment] = useState("");
  const [confidence, setConfidence] = useState("High");
  const [notes, setNotes] = useState("");
  const handleSubmit = async () => {
    try {
      const patient = JSON.parse(localStorage.getItem("currentPatient"));
      const reports = JSON.parse(localStorage.getItem("reports")) || [];

      const response = await fetch(
        "http://localhost:3000/api/ai/evaluate-case",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            patient,
            reports,
            diagnosis,
            treatment,
            confidence,
          }),
        }
      );

      const data = await response.json();

      console.log(data);

      // Save evaluation so the next page can read it
      localStorage.setItem("evaluation", JSON.stringify(data));

      localStorage.removeItem("caseStartTime");

      navigate("/evaluation");

    } catch (error) {
      console.log(error);
      alert("Failed to evaluate case.");
    }
  };

  return (
    <div className="diagnosis-page">
      <Timer />
      <div className="diagnosis-container">

        <h1>Final Diagnosis</h1>
        <p className="subtitle">
          Review the case and submit your diagnosis.
        </p>

        {/* Final Diagnosis */}
        <div className="diagnosis-card">
          <h2>✅ Final Diagnosis</h2>

          {/* <textarea
            rows="4"
            placeholder="Enter the final diagnosis..."
          ></textarea> */}
          <textarea
            rows="4"
            placeholder="Enter the final diagnosis..."
            value={diagnosis}
            onChange={(e) => setDiagnosis(e.target.value)}
          ></textarea>
        </div>

        {/* Treatment Plan */}
        <div className="diagnosis-card">
          <h2>💊 Treatment Plan</h2>

          {/* <textarea
            rows="5"
            placeholder="Describe the treatment plan..."
          ></textarea> */}
          <textarea
            rows="5"
            placeholder="Describe the treatment plan..."
            value={treatment}
            onChange={(e) => setTreatment(e.target.value)}
          ></textarea>
        </div>

        {/* Confidence Level */}
        <div className="diagnosis-card">
          <h2>📊 Confidence Level</h2>

          <div className="radio-group">
            <label>
              {/* <input type="radio" name="confidence" /> */}
              <input
                type="radio"
                name="confidence"
                value="Low"
                checked={confidence === "Low"}
                onChange={(e) => setConfidence(e.target.value)}
              />
              Low
            </label>

            <label>
              {/* <input type="radio" name="confidence" /> */}
              <input
                type="radio"
                name="confidence"
                value="Medium"
                checked={confidence === "Medium"}
                onChange={(e) => setConfidence(e.target.value)}
              />
              Medium
            </label>

            <label>
              {/* <input type="radio" name="confidence" defaultChecked /> */}
              <input
                type="radio"
                name="confidence"
                value="High"
                checked={confidence === "High"}
                onChange={(e) => setConfidence(e.target.value)}
              />
              High
            </label>
          </div>
        </div>

        {/* Notes */}
        <div className="diagnosis-card">
          <h2>📝 Additional Notes</h2>

          {/* <textarea
            rows="4"
            placeholder="Any additional observations..."
          ></textarea> */}
          <textarea
            rows="4"
            placeholder="Any additional observations..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
        </div>

        {/* <button onClick={() => {
          localStorage.removeItem("caseStartTime");

          navigate("/evaluation");
        }} className="submit-btn">
          Submit Case
        </button> */}
        <button
          onClick={handleSubmit}
          className="submit-btn"
        >
          Submit Case
        </button>

      </div>
    </div>
  );
}

export default DiagnosisPage;