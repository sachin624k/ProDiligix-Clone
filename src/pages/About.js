import React, { useRef, useEffect } from "react";
import './Services.css'; // reuse Services.css for consistent styles/animations
import logo from "../assets/Pro2.png";

export default function About() {
  const challengesRef = useRef(null);

  useEffect(() => {
    const chalEl = challengesRef.current;
    const onScrollChal = () => {
      if (!chalEl) return;
      const rect = chalEl.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60 && rect.bottom > 60) {
        chalEl.classList.add("services-animate");
      } else {
        chalEl.classList.remove("services-animate");
      }
    };
    window.addEventListener("scroll", onScrollChal, { passive: true });
    setTimeout(onScrollChal, 100);
    return () => window.removeEventListener("scroll", onScrollChal);
  }, []);

  return (
    <div className="services-root">
      {/* Header Section same as Services */}
      <header className="services-header-hero">
        <div className="services-hero-text-side">
          <span className="services-headline-wrapper">
            <span className="services-animated-line services-delay1">
              About Us
            </span>
          </span>
          <span className="services-animated-line services-delay2">
            At ProDiligix, we go beyond being just a vendor — we become your trusted procurement partner, managing the entire Source-to-Pay cycle with precision and ease.
          </span>
          <span className="services-animated-line services-delay3">
            We simplify how businesses acquire non-core services and products, from onboarding the right suppliers to ensuring smooth and timely delivery. By centralizing procurement, we help organizations unlock competitive pricing, cost savings, and operational efficiency — without the hassle of managing multiple vendors.
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

      {/* How We Address These Challenges (from Home.js) */}
      <section ref={challengesRef} className="challenges-section services-section">
        <div className="services-title">How We Address These Challenges</div>
        <div className="challenges-subtitle">
          At ProDiligix, we don't just solve problems—we build sustainable systems that empower businesses to <br />
          grow smarter, faster, and more cost-effectively. Our approach is designed to eliminate inefficiencies, centralize <br />
          processes, and unlock measurable value across procurement, logistics, IT, and corporate services.
        </div>
        <div className="services-grid grid-three">
          <div className="service-col">
            <img src={require("../assets/cent.png")} className="service-img" alt="Centralized Vendor Management" />
            <div className="service-title">Centralized Vendor Management</div>
            <div className="service-desc">
              One platform, multiple services. We unify your procurement, logistics, IT, and corporate needs under a single dashboard.
            </div>
          </div>
          <div className="service-col">
            <img src={require("../assets/cos.png")} className="service-img" alt="Cost Optimization" />
            <div className="service-title">Cost Optimization & Transparency</div>
            <div className="service-desc">
              Leverage competitive pricing and clear reporting to ensure every rupee spent delivers maximum impact.
            </div>
          </div>
          <div className="service-col">
            <img src={require("../assets/real.png")} className="service-img" alt="Real-Time Visibility" />
            <div className="service-title">Real-Time Visibility & Control</div>
            <div className="service-desc">
              End-to-end tracking, smart dashboards, and performance insights that empower decision-making.
            </div>
          </div>
        </div>
        <div className="services-grid grid-two">
          <div className="service-col">
            <img src={require("../assets/tech.png")} className="service-img" alt="Technology-Driven Automation" />
            <div className="service-title">Technology-Driven Automation</div>
            <div className="service-desc">
              Streamlined processes with AI, automation, and digital tools to save time, reduce errors, and enhance efficiency.
            </div>
          </div>
          <div className="service-col">
            <img src={require("../assets/seam.png")} className="service-img" alt="Seamless Execution" />
            <div className="service-title">Seamless Execution & Reliability</div>
            <div className="service-desc">
              From planning to delivery, we ensure smooth operations, on-time commitments, and measurable outcomes.
            </div>
          </div>
        </div>
      </section>

      {/* Footer same as Services */}
      <footer className="footer-prodigilix">
        <div className="footer-mainline">ProDiligix – The Ultimate Platform for Indirect Procurement</div>
        <div className="footer-tagline">
          Enhancing business efficiency with innovative, seamless, and cost-optimized solutions
        </div>
        <div className="footer-social-icons">
          <a href="#" aria-label="Facebook" className="footer-icon-link"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#" aria-label="Instagram" className="footer-icon-link"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://x.com/sachin624k" aria-label="Twitter" className="footer-icon-link"><i className="fa-brands fa-x-twitter"></i></a>
          <a href="https://www.linkedin.com/company/prodiligix-technologies-pvt-ltd/posts/?feedView=all" aria-label="Linkedin" className="footer-icon-link"><i className="fa-brands fa-linkedin-in"></i></a>
        </div>
        <div className="footer-copyright">&copy; 2025 ProDiligix. All rights reserved.</div>
      </footer>
    </div>
  );
}
