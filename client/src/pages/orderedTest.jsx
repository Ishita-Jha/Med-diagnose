import React, { useState } from 'react'
import "../styles/orderedTest.css"

const OrderedTest = () => {
    const selectedTests = [
        "Complete Blood Count",
        "ECG",
        "Blood Sugar"
    ];
    const [status,SetStatus]=useState("Pending")
    return (
        <div className="Test-Summary">
            <div className="Header">
                <h2>Ordered Tests</h2>
                <p> These tests have been orderd for this patient.</p>
            </div>
            <div className="selectedTests-list">
                {
                    selectedTests.map((selectedTests) => {
                        return (
                            <div className="selected">
                                {selectedTests}
                                <p>Status: {status}</p>
                            </div>
                        )
                    }
                )
                }
            </div>
            <button className="Result">
                Generate Results
            </button>
            


        </div>
    )
}

export default OrderedTest

