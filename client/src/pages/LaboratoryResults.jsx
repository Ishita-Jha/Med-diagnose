import "../styles/LaboratoryResults.css";

export default function LaboratoryResults() {
  return (
    <div className="lab-page">
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

        {/* CBC */}
        <div className="result-card">
          <h2>🩸 Complete Blood Count</h2>

          <div className="row">
            <span>Hemoglobin</span>
            <span>13.2 g/dL</span>
            <span className="normal">Normal</span>
          </div>

          <div className="row">
            <span>WBC</span>
            <span>7500 /µL</span>
            <span className="normal">Normal</span>
          </div>

          <div className="row">
            <span>Platelets</span>
            <span>2.6 Lakh</span>
            <span className="normal">Normal</span>
          </div>
        </div>

        {/* ECG */}

        <div className="result-card">
          <h2>❤️ ECG</h2>

          <div className="row">
            <span>Heart Rate</span>
            <span>92 bpm</span>
          </div>

          <div className="row">
            <span>Rhythm</span>
            <span>Normal Sinus Rhythm</span>
          </div>

          <div className="row">
            <span>Interpretation</span>
            <span>Normal ECG</span>
          </div>
        </div>

        {/* Blood Sugar */}

        <div className="result-card">
          <h2>🧪 Blood Sugar</h2>

          <div className="row">
            <span>Fasting Blood Sugar</span>
            <span>95 mg/dL</span>
            <span className="normal">Normal</span>
          </div>
        </div>

        <button className="continue-btn">
          View Summary
        </button>

      </div>
    </div>
  );
}