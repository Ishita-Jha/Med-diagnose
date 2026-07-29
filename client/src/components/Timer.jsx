import React, { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState("00:00");

  useEffect(() => {
    // If the case has finished, show the saved final time.
    const savedTime = localStorage.getItem("caseTime");

    if (savedTime) {
      const elapsed = Number(savedTime);

      const minutes = String(Math.floor(elapsed / 60)).padStart(2, "0");
      const seconds = String(elapsed % 60).padStart(2, "0");

      setTime(`${minutes}:${seconds}`);
      return;
    }

    // Otherwise keep updating the running timer.
    const interval = setInterval(() => {
      const startTime = Number(localStorage.getItem("caseStartTime"));

      if (!startTime) return;

      const elapsed = Math.floor((Date.now() - startTime) / 1000);

      const minutes = String(Math.floor(elapsed / 60)).padStart(2, "0");
      const seconds = String(elapsed % 60).padStart(2, "0");

      setTime(`${minutes}:${seconds}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        background: "#0d6efd",
        color: "white",
        padding: "10px 18px",
        borderRadius: "8px",
        fontWeight: "bold",
        display: "inline-block",
      }}
    >
      ⏱ Time: {time}
    </div>
  );
}

export default Timer;