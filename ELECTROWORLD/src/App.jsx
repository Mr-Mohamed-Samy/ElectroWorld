import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Footer.jsx";
import Signin from "./SignIn.jsx";
import Signup from "./SignUp.jsx";
import Home from "./Home.jsx";
import ProductsPage from "./ProductsPage.jsx";
import Header from "./Header.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PDpage from "./PDpage.jsx";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
    <Router>
    <ScrollToTop />
    <div className="main-page">
      <Header /> 
           
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/products/category/:category" element={<ProductsPage />} />
          <Route path="/products/details/:id" element={<PDpage />} />
        </Routes>      
        <Footer />
        
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Router>
    </>
  );
}

export default App;
