import "../styles/LaboratoryResults.css";
import { useNavigate } from "react-router-dom";
import Timer from "../components/Timer.jsx";

export default function LaboratoryResults() {
  const navigate = useNavigate();
  const reports = JSON.parse(localStorage.getItem("reports")) || [];
  return (
    <div className="lab-page">
      <Timer />
      <div className="lab-container">

        <h1>Laboratory Results</h1>
        <p className="subtitle">Results generated successfully</p>

        {/* Laboratory Image */}
        <div className="lab-image">
          <img
            src="https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=900"
            alt="Laboratory"
          />
        </div>

        {
          reports.map((report, index) => (

            <div className="result-card" key={index}>

              <h2>{report.test}</h2>

              <div className="row">
                <span>Result</span>
                <span>{report.result}</span>
              </div>

            </div>

          ))
        }

        <button
          className="continue-btn"
          onClick={() => navigate("/summary")}
        >
          View Summary
        </button>

      </div>
    </div>
  );
}