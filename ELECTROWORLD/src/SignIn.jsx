import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import "./SignIn.css";
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5173";
function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/auth/signin", {
        email: formData.email,
        password: formData.password,
      });
      
      localStorage.setItem("token", response.data.token);
      navigate("/"); 
    } 
    catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-container">
      <h2>Glad to see you again</h2>
      <p>Sign in to access your account</p>

      <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="details email-input"
            value={formData.email}
            onChange={handleChange}
            required
          />

        <div className="password-wrapper">
          <input
            type={passwordVisible ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="details"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <span
            className="icon"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button
          className="submit-btn"
          type="submit"
          disabled={loading}
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>

      <div className="signup">
        <p>Don't have an account?</p>
        <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
}

export default SignIn;