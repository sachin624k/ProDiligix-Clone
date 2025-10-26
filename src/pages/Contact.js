import React, { useRef, useEffect, useState } from "react";
import './Services.css';
import logo from "../assets/Pro2.png";

export default function Contact() {
  const formRef = useRef(null);

  // Icon hover states
  const [hovered, setHovered] = useState("");

  useEffect(() => {
    const el = formRef.current;
    const onScrollForm = () => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60 && rect.bottom > 60) {
        el.classList.add("services-animate");
      } else {
        el.classList.remove("services-animate");
      }
    };
    window.addEventListener("scroll", onScrollForm, { passive: true });
    setTimeout(onScrollForm, 150);
    return () => window.removeEventListener("scroll", onScrollForm);
  }, []);

  return (
    <div className="services-root">
      {/* ========== HEADER ========== */}
      <header className="services-header-hero">
        <div className="services-hero-text-side">
          <span className="services-headline-wrapper">
            <span className="services-animated-line services-delay1">
              Contact Us
            </span>
          </span>
          <span className="services-animated-line services-delay2">
            Contact us today and let us take the hassle out of your indirect procurement needs.
          </span>
        </div>
        <div className="services-image-side">
  <div className="services-image-container">
    <div className="shiny-logo-wrapper">
      <img src={logo} alt="ProDiligix Logo" className="shiny-logo" />
      <div className="shine-overlay"></div>
    </div>
  </div>
</div>

      </header>

      {/* ========== CONTACT FORM AND DETAILS ========== */}
      <section
        ref={formRef}
        className="services-section"
        style={{
          padding: "18px 0 56px 0",
          background: "rgba(0,0,0,0)",
          marginTop: "-50px",
        }}
      >
        <div
          className="contact-main-flex"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            flexWrap: "wrap",
            maxWidth: 1400,
            margin: "0 auto 0 auto",
            gap: "36px"
          }}
        >
          {/* Left: Details */}
          <div
            className="contact-details-side"
            style={{
              flex: 1.1,
              minWidth: 340,
              maxWidth: 470,
              marginRight: 12,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              marginTop: "70px",
              gap: "38px",
            }}
          >
            {/* Contact Us */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px"
                }}
              >
                <i
                  className="fa-solid fa-phone contact-icon-fa"
                  style={{
                    color:
                      hovered === "phone"
                        ? "#00a6ffff"
                        : "#097ecc",
                    fontSize: "1.5rem",
                    minWidth: 30,
                    transition: "color 0.18s, transform 0.18s",
                    transform: hovered === "phone" ? "scale(1.18) rotate(-8deg)" : "none"
                  }}
                ></i>
                <span style={{ color: "#097ecc", fontWeight: 700, fontSize: "1.32rem" }}>
                  Contact Us
                </span>
              </div>
              <div
                style={{
                  color: "#000",
                  fontWeight: 600,
                  fontSize: "1.13rem",
                  marginTop: "0.69em",
                  paddingRight: 205
                }}
                onMouseEnter={() => setHovered("phone")}
                onMouseLeave={() => setHovered("")}
              >
                +91 89040 55757/3737
              </div>
            </div>

            {/* Email */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px"
                }}
              >
                <i
                  className="fa-solid fa-envelope contact-icon-fa"
                  style={{
                    color:
                      hovered === "email"
                        ? "#00a6ffff"
                        : "#097ecc",
                    fontSize: "1.5rem",
                    minWidth: 30,
                    transition: "color 0.18s, transform 0.18s",
                    transform: hovered === "email" ? "scale(1.18) rotate(-8deg)" : "none"
                  }}
                ></i>
                <span style={{ color: "#097ecc", fontWeight: 700, fontSize: "1.32rem" }}>
                  Email
                </span>
              </div>
              <a
                href="mailto:sales@prodiligix.com"
                style={{
                  color: "#000",
                  fontWeight: 600,
                  fontSize: "1.13rem",
                  marginTop: "0.69em",
                  paddingRight: 205,
                  display: "block",
                  textDecoration: "none",
                  transition: "color 0.22s",
                  cursor: "pointer"
                }}
                onMouseEnter={() => setHovered("email")}
                onMouseLeave={() => setHovered("")}
              >
                sales@prodiligix.com
              </a>
            </div>

            {/* Headquarters */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px"
                }}
              >
                <i
                  className="fa-solid fa-location-dot contact-icon-fa"
                  style={{
                    color:
                      hovered === "hq"
                        ? "#00a6ffff"
                        : "#097ecc",
                    fontSize: "1.5rem",
                    minWidth: 30,
                    transition: "color 0.18s, transform 0.18s",
                    transform: hovered === "hq" ? "scale(1.18) rotate(-8deg)" : "none"
                  }}
                ></i>
                <span style={{ color: "#097ecc", fontWeight: 700, fontSize: "1.32rem" }}>
                  Headquarters
                </span>
              </div>
              <div
                style={{
                  color: "#000",
                  fontWeight: 600,
                  fontSize: "1.13rem",
                  marginTop: "0.69em",
                  paddingRight: 60
                }}
                onMouseEnter={() => setHovered("hq")}
                onMouseLeave={() => setHovered("")}
              >
                Unit 101, Oxford Towers, 139, HAL Old <br/>
                <div style={{
                    paddingRight: 50,
                    marginTop: "0.49em"
                }} >Airport Rd, Kodihalli, Bengaluru,
                </div>
                <div style={{
                    paddingRight: 180,
                    marginTop: "0.49em"
                }} >Karnataka 560008
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <form
            className="contact-form-side"
            style={{
              background: "rgba(8,60,120, 0.50)",
              borderRadius: 18,
              padding: "38px 44px 32px 44px",
              boxShadow: "0 8px 40px 0 rgba(40,140,255,0.22)",
              flex: 2,
              minWidth: 320,
              maxWidth: 520,
              marginLeft: 12,
              display: "flex",
              flexDirection: "column",
              gap: "22px",
              backdropFilter: "blur(8px)",
              border: "1.5px solid #15aaff44",
            }}
            onSubmit={e => {
              e.preventDefault();
              alert("Submitted!");
            }}
          >
            <input
              className="contact-input animated-input"
              style={inputStyle}
              type="text"
              placeholder="Enter your full name*"
              required
            />
            <input
              className="contact-input animated-input"
              style={inputStyle}
              type="text"
              placeholder="Enter Your Company Name*"
              required
            />
            <input
              className="contact-input animated-input"
              style={inputStyle}
              type="email"
              placeholder="Enter your email address*"
              required
            />
            <input
              className="contact-input animated-input"
              style={inputStyle}
              type="text"
              placeholder="Enter Your Contact Number*"
              required
            />
            <button
              type="submit"
              className="contact-middle-btn animated-btn"
              style={{ marginTop: 12 }}
            >
              Submit your request now
            </button>
          </form>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="footer-prodigilix">
        <div className="footer-mainline">ProDiligix – The Ultimate Platform for Indirect Procurement</div>
        <div className="footer-tagline">
          Enhancing business efficiency with innovative, seamless, and cost-optimized solutions
        </div>
        <div className="footer-social-icons">
          <a href="#" aria-label="Facebook" className="footer-icon-link">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Instagram" className="footer-icon-link">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://x.com/sachin624k" aria-label="Twitter" className="footer-icon-link">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/prodiligix-technologies-pvt-ltd/posts/?feedView=all"
            aria-label="Linkedin"
            className="footer-icon-link"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
        <div className="footer-copyright">
          &copy; 2025 ProDiligix. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

const inputStyle = {
  border: "1.5px solid #d7e8ff",
  borderRadius: "7px",
  outline: "none",
  fontSize: "1.09rem",
  padding: "15px 18px",
  marginBottom: "0px",
  background: "rgba(248,252,255,0.97)",
  transition: "border 0.15s, box-shadow 0.15s",
};
