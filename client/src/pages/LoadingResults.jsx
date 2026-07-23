import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/loadingResults.css";

const LoadingResults = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/lab-results");
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="loading-container">
      <div className="loading-card">
        <h2>Generating Laboratory Results</h2>

        <p>AI is analyzing the patient's samples...</p>

        <div className="loading-icon">🧪</div>

        <div className="spinner"></div>

        <p className="loading-text">
          Please wait while laboratory reports are being generated...
        </p>
      </div>
    </div>
  );
};

export default LoadingResults;