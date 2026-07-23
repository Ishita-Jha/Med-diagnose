import "../styles/SummaryPage.css";
import { useNavigate } from "react-router-dom";
import Timer from "../components/Timer.jsx";

function SummaryPage() {
  const navigate = useNavigate();
  return (
    <div className="summary-page">
      <Timer/>
      <div className="summary-container">

        <h1>Case Summary</h1>
        <p className="subtitle">
          Review all findings before making your diagnosis.
        </p>

        {/* Patient Information */}
        <div className="summary-card">
          <h2>👤 Patient Information</h2>

          <div className="info-row">
            <span>Name</span>
            <span>Sarah Jenkins</span>
          </div>

          <div className="info-row">
            <span>Age</span>
            <span>29 Years</span>
          </div>

          <div className="info-row">
            <span>Gender</span>
            <span>Female</span>
          </div>

          <div className="info-row">
            <span>Chief Complaint</span>
            <span>Shortness of breath and chest pain</span>
          </div>
        </div>

        {/* Symptoms */}
        <div className="summary-card">
          <h2>📋 Symptoms Collected</h2>

          <ul>
            <li>✔ Chest Pain</li>
            <li>✔ Shortness of Breath</li>
            <li>✔ Pain started 2 hours ago</li>
            <li>✔ Recent Long-Haul Flight</li>
          </ul>
        </div>

        {/* Tests Ordered */}
        <div className="summary-card">
          <h2>🧪 Tests Ordered</h2>

          <ul>
            <li>✔ Complete Blood Count</li>
            <li>✔ ECG</li>
            <li>✔ Blood Sugar</li>
          </ul>
        </div>

        {/* Lab Findings */}
        <div className="summary-card">
          <h2>📄 Laboratory Findings</h2>

          <div className="info-row">
            <span>Hemoglobin</span>
            <span>13.2 g/dL (Normal)</span>
          </div>

          <div className="info-row">
            <span>WBC</span>
            <span>7500 /µL (Normal)</span>
          </div>

          <div className="info-row">
            <span>Heart Rate</span>
            <span>92 bpm</span>
          </div>

          <div className="info-row">
            <span>Blood Sugar</span>
            <span>95 mg/dL (Normal)</span>
          </div>
        </div>


        {/* Notes */}
        <div className="summary-card">
          <h2>📝 Clinical Notes</h2>

          <textarea
            placeholder="Write your observations here..."
            rows="5"
          ></textarea>
        </div>

        <button
          className="continue-btn"
          onClick={() => navigate("/diagnosis")}
        >
          Continue to Diagnosis
        </button>
      </div>
    </div>
  );
}

export default SummaryPage;