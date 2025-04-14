import "./Footer.css";
import insta from "./assets/instagram.png";
import FB from "./assets/facebook.png";
import Gmail from "./assets/gmail.png";


const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Phone: +213 675 50 68 89</p>
          <p>Gmail: chabanimohamedsamy@gmail.com</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/?locale=fr_FR">
              <img src={FB} alt="" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={insta} alt="" />
            </a>
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
              <img src={Gmail} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-of-service">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>

      
      <div className="footer-divider"></div>

      
      <div className="footer-bottom">
        <p>&copy; 2025 ElectroWorld. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;