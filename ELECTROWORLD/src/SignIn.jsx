import { Link } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./SignIn.css"; 

function Signin() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="main-container">
      <h2>Glad to see you again</h2>
      <p>Sign in to access your account</p>
      <form>
          <input type="email" placeholder="Email" className="details" required/>
        

          <div className="password-wrapper">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
            className="details"
            required
          />
          <span
            className="icon"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button className="submit-btn">Sign In</button>
      </form>

      <div className="signup">
        <p>Don't have an account?</p>
        <Link to="/Signup">Sign up</Link>
      </div>
    </div>
  );
}

export default Signin;
