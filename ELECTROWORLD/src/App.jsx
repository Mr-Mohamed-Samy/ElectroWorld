import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Signin from "./SignIn.jsx";
import Home from "./Home.jsx";


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<Signin />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
