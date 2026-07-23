import React, { useState } from 'react'
import "../styles/orderTest.css"
import { useNavigate } from "react-router-dom";

const OrderTest = () => {
    const navigate = useNavigate();
    const [category, setCategory] = useState("commonTests")
    let tests = [];

    const commonTests = [
        "Complete Blood Count (CBC)",
        "Electrocardiogram (ECG)",
        "Blood Sugar (Fasting)",
        "Liver Function Test",
        "Thyroid Profile",
        "Lipid Profile",
        "Urine Routine Examination"
    ];

    const imagingTests = [
        "Chest X-Ray",
        "CT Scan",
        "MRI Brain",
        "MRI Spine",
        "Ultrasound Abdomen",
        "Echocardiography"
    ];

    const advancedTests = [
        "Troponin-I",
        "D-Dimer",
        "Arterial Blood Gas",
        "Genetic Test",
        "Autoimmune Panel",
        "PCR Test"
    ];

    if (category === "commonTests") {
        tests = commonTests;
    } else if (category === "imagingTests") {
        tests = imagingTests;
    } else {
        tests = advancedTests;
    }
    return (
        <div className="orderTest-list">
            <div className="Header">
                <h2> Order Test</h2>
                <p>Select tests to order for this patient</p>
            </div>
            <div className="category">
                <button onClick={() => setCategory("commonTests")}>Common Test</button>
                <button onClick={() => setCategory("imagingTests")}>Imaging</button>
                <button onClick={() => setCategory("advancedTests")}>Advanced</button>
            </div>


            <div className="test-list">
                {
                    tests.map((tests) => {
                        return (
                            <label>
                                <input type="checkbox" />
                                {tests}
                            </label>
                        )
                    }
                    )
                }
            </div>
            {/* <button className="order-btn">
                Order Selected Tests
            </button> */}
            <button
                className="order-btn"
                onClick={() => navigate("/ordered-test")}
            >
                Order Selected Tests
            </button>


        </div>
    )
}

export default OrderTest
