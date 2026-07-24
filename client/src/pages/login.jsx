import "../styles/login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (data.success) {
        setMessage("Login Successful!");

        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);

      } else {
        setMessage(data.message);
      }

    } catch (error) {
      console.error(error);
      setMessage("Unable to connect to server");
    }
  };


return (
  <div className="login-container">
    <div className="login-box">

      <h1>Med Diagnose</h1>
      <p>Welcome Back</p>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Enter Email"
          value={loginData.email}
          onChange={(e) =>
            setLoginData({
              ...loginData,
              email: e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={loginData.password}
          onChange={(e) =>
            setLoginData({
              ...loginData,
              password: e.target.value,
            })
          }
        />

        <button type="submit">
          Login
        </button>

      </form>

      {message && (
        <p
          style={{
            color: message === "Login Successful!" ? "green" : "red",
            marginTop: "10px",
            textAlign: "center",
          }}
        >
          {message}
        </p>
      )}

      <p className="register-text">
        Don't have an account?
        <span
          onClick={() => navigate("/register")}
          style={{
            color: "#4a6cf7",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Register
        </span>
      </p>

    </div>
  </div>
);
}



export default Login;