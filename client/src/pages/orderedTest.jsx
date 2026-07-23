import React, { useState } from 'react'
import "../styles/orderedTest.css"
import { useNavigate } from "react-router-dom";

const OrderedTest = () => {
    const navigate = useNavigate();
    // const selectedTests = [
    //     "Complete Blood Count",
    //     "ECG",
    //     "Blood Sugar"
    // ];
    const selectedTests =
    JSON.parse(localStorage.getItem("selectedTests")) || [];
    const [status, SetStatus] = useState("Pending")
    return (
        <div className="Test-Summary">
            <div className="Header">
                <h2>Ordered Tests</h2>
                <p> These tests have been orderd for this patient.</p>
            </div>
            <div className="selectedTests-list">
                {
                    selectedTests.map((test, index) => {
                        return (
                            <div className="selected" key={index}>
                                <h3>{test}</h3>
                                {/* {selectedTests} */}
                                <p>Status: {status}</p>
                            </div>
                        )
                    }
                    )
                }
            </div>
            <button
                className="Result"
                onClick={() => navigate("/loading-results")}
            >
                Generate Results
            </button>
        </div>
    )
}

export default OrderedTest

