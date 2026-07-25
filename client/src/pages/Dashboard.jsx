import React, { useState, useEffect } from "react"
import "../styles/dashboard.css"
import Navbar from "../components/navbar"
import { FaUserMd } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import { FaChartBar } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Dashboard() {
    useEffect(() => {
        console.log("Dashboard Loaded");

        API.get("/api/test")
            .then((res) => {
                console.log("Backend Response:", res.data);
            })
            .catch((err) => {
                console.error("Backend Error:", err);
            });
    }, []);
    const [s_cases, setS_cases] = useState(12)
    const [A_score, setA_score] = useState(88)
    const [b_score, setb_score] = useState(97)
    const [c_level, setc_level] = useState("Beginner")
    const navigate = useNavigate();
    const startNewCase = async () => {
        try {
            const response = await API.post("/api/ai/generate-patient");

            console.log(response.data);

            localStorage.setItem(
                "currentPatient",
                JSON.stringify(response.data.patient)
            );

            console.log(localStorage.getItem("currentPatient"));

            localStorage.setItem("caseStartTime", Date.now());

            navigate("/patient-chat");

        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="Dashboard">
            <Navbar />
            <div className="cards">
                <div className="card_1">

                    <h3>Cases solved</h3>
                    <h1>{s_cases}</h1>
                    <p>Total cases</p>
                </div>
                <div className="card_2">
                    <h3>Average Score</h3>
                    <h1>{A_score}%</h1>
                    <p>Across All Cases</p>
                </div>
                <div className="card_3">
                    <h3> Best Score</h3>
                    <h1>{b_score}%</h1>
                    <p>In Migraine Cases</p>
                </div>
                <div className="card_4">
                    <h3>Current Level</h3>
                    <h1>{c_level}</h1>
                    <p>Keep Practicing!</p>
                </div>
            </div>
            <div className="features">
                {/* <div className="feature-card">
                    <FaUserMd className="feature-icon" />
                    <h2>Start New Case</h2>
                    <p>Generate a new AI patient and begin your daignosis.</p>
                </div> */}
                <div
                    className="feature-card"
                    onClick={() => startNewCase()}
                    style={{ cursor: "pointer" }}
                >
                    <FaUserMd className="feature-icon" />
                    <h2>Start New Case</h2>
                    <p>Generate a new AI patient and begin your diagnosis.</p>
                </div>

                {/* <div className="feature-card">
                    <MdHistory className="feature-icon" />
                    <h2>Case History</h2>
                    <p>View your past cases and performance.</p>
                </div> */}
                <div className="feature-card">
                    <FaChartBar className="feature-icon" />
                    <h2>Performance</h2>
                    <p>Analyze your strengths and improve more.</p>
                </div>
                <div onClick={() => navigate("/profile")}
                    style={{ cursor: "pointer" }} className="feature-card">
                    <FaUserCircle className="feature-icon" />
                    <h2>My Profile</h2>
                    <p>Manage your profile and preferences.</p>
                </div>
            </div>
            <div className="bottom-section">


                <div className="recent-cases">

                    <div className="recent-header">
                        <h2>Recent Case Attempts</h2>
                        <button className="view-btn">View All</button>
                    </div>

                    <table>

                        <thead>
                            <tr>
                                <th>Case Title</th>
                                <th>Diagnosis</th>
                                <th>Score</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr>
                                <td>Chest Pain Case</td>
                                <td>Myocardial Infarction</td>
                                <td>90%</td>
                                <td>15 May 2024</td>
                                <td className="completed">Completed</td>
                            </tr>

                            <tr>
                                <td>Diabetes Case</td>
                                <td>Type 2 Diabetes</td>
                                <td>75%</td>
                                <td>14 May 2024</td>
                                <td className="completed">Completed</td>
                            </tr>

                            <tr>
                                <td>Migraine Case</td>
                                <td>Migraine</td>
                                <td>96%</td>
                                <td>12 May 2024</td>
                                <td className="completed">Completed</td>
                            </tr>

                        </tbody>

                    </table>

                </div>
                <div className="progress-card">
                    <h2>Your Progress</h2>
                    <div className="progress-circle">
                        <h1>{A_score}%</h1>
                        <p>Average Score</p>
                    </div>
                    <div className="progress-details">
                        <p>✅ Correct Diagnosis <span>68%</span></p>
                        <p>🧪 Tests Ordered <span>20%</span></p>
                        <p>❓ Questions Asked <span>12%</span></p>
                    </div>

                    <div className="progress-message">
                        💡 Consistency is the key to becoming a great diagnostician.
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Dashboard