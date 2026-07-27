
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/EvaluationPage.css";

function EvaluationPage() {
    const navigate = useNavigate();
    const [evaluation, setEvaluation] = useState(null);


    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("evaluation"));
        setEvaluation(data);
    }, []);

    if (!evaluation) {
        return <h2>Loading Evaluation...</h2>;
    }

    return (
        <div className="evaluation-page">
            <div className="evaluation-container">

                <h1>🏆 AI Performance Evaluation</h1>

                <div className="evaluation-card">
                    <h2>Overall Score</h2>
                    <h1>{evaluation.score}/100</h1>
                </div>

                <div className="evaluation-card">
                    <h2>Diagnosis Correct</h2>
                    <p>
                        {evaluation.diagnosisCorrect ? "✅ Correct" : "❌ Incorrect"}
                    </p>
                </div>

                <div className="evaluation-card">
                    <h2>Feedback</h2>
                    <p>{evaluation.feedback}</p>
                </div>

                <div className="evaluation-card">
                    <h2>Strengths</h2>
                    <p>{evaluation.strengths}</p>
                </div>

                <div className="evaluation-card">
                    <h2>Mistakes</h2>
                    <p>{evaluation.mistakes}</p>
                </div>

                <div className="evaluation-card">
                    <h2>Ideal Diagnosis</h2>
                    <p>{evaluation.idealDiagnosis}</p>
                </div>

                <div className="evaluation-card">
                    <h2>Ideal Treatment</h2>
                    <p>{evaluation.idealTreatment}</p>
                </div>
                <button
                    className="dashboard-btn"
                    onClick={() => {
                        localStorage.removeItem("currentPatient");
                        localStorage.removeItem("reports");
                        localStorage.removeItem("selectedTests");
                        localStorage.removeItem("evaluation");
                        localStorage.removeItem("caseStartTime");

                        navigate("/dashboard");
                    }}
                >
                    🏠 Back to Dashboard
                </button>

            </div>
        </div>
    );
}

export default EvaluationPage;