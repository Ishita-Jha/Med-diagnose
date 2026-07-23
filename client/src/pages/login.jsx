import "../styles/login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  return (
    <div className="login-container">
      <div className="login-box">

        <h1>Med Diagnose</h1>
        <p>Welcome Back</p>

        <form onSubmit = {handleLogin}>

          <input
            type="email"
            placeholder="Enter Email"
          />

          <input
            type="password"
            placeholder="Enter Password"
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p className="register-text">
          Don't have an account?
          {/* <a href="#"> Register</a> */}
          <span
            onClick={() => navigate("/register")}
            style={{
              color: "#4a6cf7",
              cursor: "pointer",
              fontWeight: "bold"
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