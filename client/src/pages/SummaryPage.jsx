import { useState, useEffect } from "react";
import "../styles/SummaryPage.css";
import { useNavigate } from "react-router-dom";
// import Timer from "../components/Timer.jsx";

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
          "https://med-diagnose-backend.onrender.com/api/ai/generate-summary",
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
  const ai = summary.summary;
  return (
    <div className="summary-page">
      {/* <Timer /> */}
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
            <span>{ai.patientInfo}</span>
          </div>

         
        </div> 

          {/* Symptoms */}
          <div className="summary-card">
            <h2>📋 Symptoms Collected</h2>

            
            <p>{ai.symptoms}</p>
          </div>

          {/* Tests Ordered */}
          <div className="summary-card">
            <h2>🧪 Tests Ordered</h2>

            <p>{ai.testsOrdered}</p>
          </div>

          {/* Lab Findings */}
          <div className="summary-card">
            <h2>📄 Laboratory Findings</h2>

            
            <p>{ai.labFindings}</p>
          </div>


          {/* Notes */}
          {/* <div className="summary-card">
            <h2>📝 Clinical Notes</h2>

            
            <p>{ai.clinicalImpression}</p>
          </div> */}

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