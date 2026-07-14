import "../styles/login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">

        <h1>Med Diagnose</h1>
        <p>Welcome Back</p>

        <form>

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
          <a href="#"> Register</a>
        </p>

      </div>
    </div>
  );
}

export default Login;