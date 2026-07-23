import "../styles/DiagnosisPage.css";
import Timer from "../components/Timer.jsx";
function DiagnosisPage() {

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

          <textarea
            rows="4"
            placeholder="Enter the final diagnosis..."
          ></textarea>
        </div>

        {/* Treatment Plan */}
        <div className="diagnosis-card">
          <h2>💊 Treatment Plan</h2>

          <textarea
            rows="5"
            placeholder="Describe the treatment plan..."
          ></textarea>
        </div>

        {/* Confidence Level */}
        <div className="diagnosis-card">
          <h2>📊 Confidence Level</h2>

          <div className="radio-group">
            <label>
              <input type="radio" name="confidence" />
              Low
            </label>

            <label>
              <input type="radio" name="confidence" />
              Medium
            </label>

            <label>
              <input type="radio" name="confidence" defaultChecked />
              High
            </label>
          </div>
        </div>

        {/* Notes */}
        <div className="diagnosis-card">
          <h2>📝 Additional Notes</h2>

          <textarea
            rows="4"
            placeholder="Any additional observations..."
          ></textarea>
        </div>

        <button onClick={() => {
          localStorage.removeItem("caseStartTime");

          navigate("/evaluation");
        }} className="submit-btn">
          Submit Case
        </button>

      </div>
    </div>
  );
}

export default DiagnosisPage;