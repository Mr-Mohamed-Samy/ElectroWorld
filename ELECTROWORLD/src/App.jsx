import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Footer.jsx";
import Signin from "./SignIn.jsx";
import Signup from "./SignUp.jsx";
import Home from "./Home.jsx";
import ProductsPage from "./ProductsPage.jsx";
import Header from "./Header.jsx";
function App() {
  return (
    <>
    <Router>
    <div className="main-page">
      <Header /> 
           
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/products/:category" element={<ProductsPage />} />

        </Routes>      
        <Footer />
        
      </div>
    </Router>
    </>
  );
}

export default App;
