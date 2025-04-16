import { Link } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./SignUp.css"; // Import your CSS file for styling
function Signup() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="main-container">
      <h1>Welcome</h1>
      <p>Create an account</p>
      <form className="sign-up-form">
          <input required type="text" placeholder="Full Name" className="details"/>
          <input required type="email" placeholder="Email" className="details"/>
        
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

        <button className="submit-btn" type="submit">Sign Up</button>
      </form>

      <div className="signup">
        <p>Already have an account?</p>
        <Link to="/Signin">Sign in</Link>
      </div>
    </div>
  );
}

export default Signup;
