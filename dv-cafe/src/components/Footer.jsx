import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { BsFillCupHotFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#FDFAEF]">
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
             <div className="logo ">
          <p className="text-[18px]">DVicious</p>
          <BsFillCupHotFill  size={20}/>
          <p className="text-[18px]">Brew</p>
        </div>
          <h2 className="footer-title ">Brewed to perfection.</h2>

          <div className="footer-section">
            <h4>Opening hours:</h4>
            <p>Mon - Thu: 11:00 AM - 9:00 PM</p>
            <p>Fri - Sat: 11:00 AM - 10:00 PM</p>
            <p>Sun: 12:00 PM - 8:00 PM</p>
          </div>

          <div className="footer-section">
            <h4>Phone:</h4>
            <p>(555) 987-6543</p>
          </div>

          <div className="footer-section">
            <h4>Location:</h4>
            <p>Coffee Heaven</p>
            <p>123 Brew Lane</p>
            <p>Brew City, BC 12345</p>
          </div>

          <div className="social-icons">
            <FaInstagram />
            <FaFacebook />
            <FaTwitter />
          </div>
        </div>

        <div className="footer-divider"></div>

     
        <div className="footer-map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.9966984785413!2d4.88891647692836!3d52.37367847978352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c1d78df1eb%3A0x74f9a55efc5b1c1!2sAmsterdam%2C%20Netherlands!5e0!3m2!1sen!2sus!4v1707165123456!5m2!1sen!2sus"
            width="100%"
            height="490"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 — DViciousBrew@divya</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
