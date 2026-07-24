import React, { useState, useEffect, useRef } from 'react';
import '../styles/PatientChatRoom.css'; // Importing our plain CSS file
import { useNavigate } from "react-router-dom";
import Timer from "../components/Timer.jsx";

export default function PatientChatRoom() {
  const [patientProfile, setPatientProfile] = useState(null);

  const [messages, setMessages] = useState([
    { id: 1, sender: 'patient', text: "Hello doctor. I really don't feel well. My chest hurts so much when I try to take a deep breath." }
  ]);

  const [inputValue, setInputValue] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const storedPatient = localStorage.getItem("currentPatient");

    if (storedPatient) {
      setPatientProfile(JSON.parse(storedPatient));
    }
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { id: Date.now(), sender: 'doctor', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    setTimeout(() => {
      let patientReplyText = "I'm not quite sure about that, doctor.";
      const cleanInput = inputValue.toLowerCase();

      if (cleanInput.includes('start') || cleanInput.includes('when')) {
        patientReplyText = "About two hours ago, right after I got off a long-haul flight from London.";
      } else if (cleanInput.includes('hurt') || cleanInput.includes('where')) {
        patientReplyText = "It's mostly on the right side of my chest, and it shoots up when I breathe in deeply.";
      }

      const patientMessage = { id: Date.now() + 1, sender: 'patient', text: patientReplyText };
      setMessages(prev => [...prev, patientMessage]);
    }, 800);
  };
  const navigate = useNavigate();

  return (
    <div className="chatContainer">

      {/* TOP SECTION */}
      <div className="topSection">
        <Timer />

        {/* PROFILE */}
        <div className="profileCard">
          <div className="profileHeader">
            <div className="avatar">
              {patientProfile?.name?.charAt(0)}
            </div>
            <div className="profileText">
              <h3 className="patientName">{patientProfile?.name}</h3>
              <p className="patientMeta">
                Age: {patientProfile?.age} • {patientProfile?.gender}
              </p>
            </div>
          </div>

          <div className="complaintBox">
            <span className="complaintLabel">Patient Complaint</span>
            <p className="complaintText">
              "{patientProfile?.chiefComplaint}"
            </p>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="topButtons">
          <button
            className="actionButton orderButton"
            onClick={() => navigate("/order-test")}
          >
            🧪 Order Test
          </button>

          <button
            className="actionButton summaryButton"
            onClick={() => navigate("/summary")}
          >
            📋 View Summary
          </button>
        </div>

      </div>

      {/* CHAT WINDOW */}
      <div className="chatWindow">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`messageRow ${msg.sender === "doctor" ? "rowDoctor" : "rowPatient"
              }`}
          >
            <div
              className={`bubble ${msg.sender === "doctor"
                ? "bubbleDoctor"
                : "bubblePatient"
                }`}
            >
              <span className="bubbleSender">
                {msg.sender === "doctor"
                  ? "👨‍⚕️ You (Doctor)"
                  : "🤒 Patient"}
              </span>

              <p>{msg.text}</p>
            </div>
          </div>
        ))}

        <div ref={chatEndRef}></div>
      </div>

      {/* INPUT */}
      <form onSubmit={handleSendMessage} className="inputForm">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask the patient a clinical question..."
          className="inputField"
        />

        <button type="submit" className="sendButton">
          Send
        </button>
      </form>

    </div>
  );

}