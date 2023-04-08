import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
      </section>
      <div className="w-full justify-center">
        <div class="footer-links">
          <div className="footer-link-wrapper">
            <div class="footer-link-items">
              <h2>About Us</h2>
            </div>
            <div class="footer-link-items">
              <h2>Contact Us</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full justify-center">
        <section class="social-media">
          <div class="social-media-wrap">
            <div class="social-icons">
              <Link
                class="social-icon-link facebook"
                to="/"
                target="_blank"
                aria-label="Facebook"
              >
                <i class="fab fa-facebook-f" />
              </Link>
              <Link
                class="social-icon-link instagram"
                to="/"
                target="_blank"
                aria-label="Instagram"
              >
                <i class="fab fa-instagram" />
              </Link>
              <Link
                class="social-icon-link youtube"
                to="/"
                target="_blank"
                aria-label="Youtube"
              >
                <i class="fab fa-youtube" />
              </Link>
              <Link
                class="social-icon-link twitter"
                to="/"
                target="_blank"
                aria-label="Twitter"
              >
                <i class="fab fa-twitter" />
              </Link>
              <Link
                class="social-icon-link twitter"
                to="/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <i class="fab fa-linkedin" />
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div
            className="w-full justify-center text-secondary"
            style={{ marginTop: 4 }}
          >
            Copyright © Your Website 2023.
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
