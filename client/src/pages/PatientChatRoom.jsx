import React, { useState, useEffect, useRef } from 'react';
import '../styles/PatientChatRoom.css'; // Importing our plain CSS file
import { useNavigate } from "react-router-dom";
import Timer from "../components/Timer.jsx";

export default function PatientChatRoom() {
  const [patientProfile, setPatientProfile] = useState(null);

  const [messages, setMessages] = useState([]);


  const [inputValue, setInputValue] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const loadConversation = async () => {
      const storedPatient = localStorage.getItem("currentPatient");

      if (!storedPatient) return;

      const patient = JSON.parse(storedPatient);

      setPatientProfile(patient);

      const response = await fetch("http://localhost:3000/api/ai/start", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ patient }),
      });

      const data = await response.json();

      setMessages([
        {
          id: Date.now(),
          sender: "patient",
          text: data.reply,
        },
      ]);
    };

    loadConversation();
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { id: Date.now(), sender: 'doctor', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    try {
      const patient = JSON.parse(localStorage.getItem("currentPatient"));
      console.log(patient);

      const response = await fetch("http://localhost:3000/api/ai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          patient,
          question: inputValue,
          history: [messages, userMessage],
        }),
      });

      const data = await response.json();

      const patientMessage = {
        id: Date.now(),
        sender: "patient",
        text: data.reply,
      };

      setMessages((prev) => [...prev, patientMessage]);

    } catch (error) {
      console.error(error);
    }
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