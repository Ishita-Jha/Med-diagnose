import React from "react";
import "../styles/Profile.css";

function Profile() {
  const profile =
    JSON.parse(localStorage.getItem("studentDoctorProfile")) || {};

  return (
    <div className="profile-container">
      <div className="profile-card">

        <h1>👨‍⚕️ My Profile</h1>
        <p className="subtitle">
          Student Doctor Practice Profile
        </p>

        <div className="profile-image">
          👨‍⚕️
        </div>

        <div className="profile-info">

          <div className="info-row">
            <span className="label">Full Name</span>
            <span>{profile.fullName || "Not Available"}</span>
          </div>

          <div className="info-row">
            <span className="label">Medical College</span>
            <span>{profile.medicalCollege || "Not Available"}</span>
          </div>

          <div className="info-row">
            <span className="label">Year of Study</span>
            <span>{profile.yearOfStudy || "Not Available"}</span>
          </div>

          <div className="info-row">
            <span className="label">Specialty Focus</span>
            <span>{profile.specialtyInterest || "Not Available"}</span>
          </div>

          <div className="info-row">
            <span className="label">Cases Solved</span>
            <span>{profile.casesSolved}</span>
          </div>

          <div className="info-row">
            <span className="label">Accuracy Score</span>
            <span>{profile.accuracyScore}%</span>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Profile;