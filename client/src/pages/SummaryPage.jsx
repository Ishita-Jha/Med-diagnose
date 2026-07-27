import { useState, useEffect } from "react";
import "../styles/SummaryPage.css";
import { useNavigate } from "react-router-dom";
import Timer from "../components/Timer.jsx";

function SummaryPage() {
  const navigate = useNavigate();
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const loadSummary = async () => {

      try {

        const patient =
          JSON.parse(localStorage.getItem("currentPatient"));

        const reports =
          JSON.parse(localStorage.getItem("reports")) || [];

        const tests =
          JSON.parse(localStorage.getItem("selectedTests")) || [];

        const response = await fetch(
          "http://localhost:3000/api/ai/generate-summary",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              patient,
              reports,
              tests,
            }),
          }
        );

        const data = await response.json();

        console.log(data);

        setSummary(data);

      } catch (err) {

        console.log(err);

      } finally {

        setLoading(false);

      }

    };

    loadSummary();

  }, []);

  if (loading) {
    return <h2>Generating AI Summary...</h2>;
  }
  return (
    <div className="summary-page">
      <Timer />
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