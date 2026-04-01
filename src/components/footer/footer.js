import { Row, Col } from "antd";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaShippingFast,
  FaFacebook,
  FaInstagram,
  FaPaperPlane,
  FaPhone,
  FaPinterest,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer1() {
  return (
    <div className="footersire-footer">
      <Row gutter={16}>
        <Col xs={24} sm={12} md={8} lg={6} className="footersire-column">
          <img src="../images/sire2.png" alt="Logo" />
          <div className="footer-input-container">
            <input
              type="email"
              placeholder="E-mail here"
              className="footer-input"
            />
            <button type="submit" className="submit-button">
              <FaPaperPlane />
            </button>
          </div>
          <p className="sirefooter-p-txt1">
            Subscribe to our newsletter and stay updated with our new products,
            policies, and terms.
          </p>
          {/* <img
            src="../images/googleplay.png"
            alt="Google Play"
            style={{ marginTop: "1rem" }}
          /> */}
        </Col>

        <Col xs={24} sm={12} md={8} lg={6} className="footersire-column">
          <p className="get-txt">Get In Touch</p>
          <a href="tel:+447745807425" className="sirefooter-p-txt">
            <FaPhone /> 074 46124339
          </a>
          <a
            href="mailto:support@sireprinting.com"
            className="sirefooter-p-txt"
          >
            <FaEnvelope /> support@sireprinting.co.uk
          </a>
          {/* <p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=5 South Charlotte Street Edinburgh EH2 4AN"
              target="_blank"
              className="sirefooter-p-txt1"
            >
              <FaMapMarkerAlt /> 5 South Charlotte Street Edinburgh EH2 4AN
            </a>
          </p> */}
          <p className="sirefooter-p-txt1">
            <FaShippingFast /> 100% Free shipping all across UK
          </p>
          <div className="footersire-social-icons">
            <a
              href="https://www.facebook.com/sireprinting"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://x.com/sireprintingco"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.instagram.com/sireprinting/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.pinterest.com/sireprinting/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPinterest />
            </a>
          </div>
          <img
            src="../images/payment-cards.png"
            alt="Payment Methods"
            className="footer-visaimg"
          />
        </Col>

        <Col xs={24} sm={12} md={8} lg={6} className="footersire-column">
          <p className="get-txt">Hot Selling Categories</p>
          <p className="sirefooter-p-txt">Corrugated Boxes</p>
          <p className="sirefooter-p-txt">Soap Packaging Boxes</p>
          <p className="sirefooter-p-txt">Woven Embroidered Patches</p>
          <p className="sirefooter-p-txt">CBD Packaging</p>
          <p className="sirefooter-p-txt">Custom Pillow Packaging Boxes</p>
          <p className="sirefooter-p-txt">Rigid Boxes</p>
        </Col>

        <Col xs={24} sm={12} md={8} lg={6} className="footersire-column">
          <p className="get-txt">Useful Links</p>

          <Link to="/about-us" className="sirefooter-p-txt">
            About Us
          </Link>

          <Link to="/contact-us" className="sirefooter-p-txt">
            Contact Us
          </Link>

          <Link to="/portfolio" className="sirefooter-p-txt">
            Portfolio
          </Link>

          <Link to="/blog" className="sirefooter-p-txt">
            Blogs
          </Link>

          <Link to="/privacy" className="sirefooter-p-txt">
            Privacy Policy
          </Link>

          <Link to="/Terms_and_conditions" className="sirefooter-p-txt">
            Terms And Conditions
          </Link>
          <Link to="/return-policy" className="sirefooter-p-txt">
            Return & Refund Policy
          </Link>

          {/* <div className="flag-gap">
            <img
              src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/us.svg"
              alt="USA Flag"
              className="flag"
              title="United States"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/gb.svg"
              alt="UK Flag"
              className="flag"
              title="United Kingdom"
            />
          </div> */}
        </Col>
      </Row>

      <div className="footer-copyright">
        <p className="footer-p">
          Copyright ©2020 - {new Date().getFullYear()} Sire Printing | The
          Custom Websites
        </p>
      </div>
    </div>
  );
}

export default Footer1;
