import React, { useState, useEffect } from 'react'
import "../styles/orderedTest.css"
import { useNavigate } from "react-router-dom";
import Timer from "../components/Timer.jsx";

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
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(false);
    const generateResults = async () => {
        try {

            setLoading(true);

            const patient = JSON.parse(localStorage.getItem("currentPatient"));

            const response = await fetch(
                "http://localhost:3000/api/ai/generate-test",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        patient,
                        tests: selectedTests,
                    }),
                }
            );

            // const data = await response.json();

            // setReports(data.reports);

            // SetStatus("Completed");
            const data = await response.json();

            console.log("Backend Response:", data);

            if (response.ok && data.reports) {
                setReports(data.reports);
                SetStatus("Completed");
            } else {
                console.error("Backend Error:", data.message || data);
                alert(data.message || "Failed to generate reports");
            }

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }
    };
    return (
        <div className="Test-Summary">
            <Timer />
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
            {/* <button
                className="Result"
                onClick={() => navigate("/loading-results")}
            >
                Generate Results
            </button> */}
            <button
                className="Result"
                onClick={generateResults}
            >
                {loading ? "Generating..." : "Generate Results"}
            </button>
            <div className="reports">

                {
                    reports?.map((report, index) => (

                        <div className="report-card" key={index}>

                            <h3>{report.test}</h3>

                            <p>{report.result}</p>

                        </div>

                    ))
                }

            </div>
        </div>
    )
}

export default OrderedTest

