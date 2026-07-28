

import React, { useState, useEffect } from "react";
import "../styles/dashboard.css";
import Navbar from "../components/navbar";

import { FaUserCircle, FaUserMd } from "react-icons/fa"; 
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
    
    const navigate = useNavigate();

    const startNewCase = () => {
        localStorage.removeItem("currentPatient");
        localStorage.removeItem("caseStartTime");
        navigate("/patient-chat");
    };

    return (
        <div className="Dashboard-container">
            <Navbar />

            <div className="Dashboard">
                <div className="hero-section">
                    <h1 className="dashboard-title">
                        🩺 MedAI Clinical Simulator
                    </h1>
                    <h2 className="welcome-text">
                        Welcome Back <span className="wave">👋</span>
                    </h2>
                    <p className="dashboard-subtitle">
                        Every patient is a new challenge. Diagnose, learn, and improve your
                        clinical reasoning with AI-powered emergency cases.
                    </p>
                </div>

                <div className="features">
                    <div className="feature-card" onClick={startNewCase}>
                        <div className="icon-wrapper">
                            <FaUserMd className="feature-icon" />
                        </div>
                        <h2>Start New Case</h2>
                        <p>
                            Generate an AI patient and begin your diagnostic journey.
                        </p>
                        <button className="card-btn">
                            Start Case →
                        </button>
                    </div>

                    <div className="feature-card" onClick={() => navigate("/profile")}>
                        <div className="icon-wrapper">
                            <FaUserCircle className="feature-icon" />
                        </div>
                        <h2>My Profile</h2>
                        <p>
                            View and update your profile information and achievements.
                        </p>
                        <button className="card-btn">
                            Open Profile →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;

