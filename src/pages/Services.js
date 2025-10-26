// src/pages/Services.js

import React, { useRef, useEffect, useState } from "react";
import './Services.css';  // Your styling (can include all from Home)
import ServiceModal from "../components/ServiceModal";
import servicesData from "../data/servicesData";

import logo from "../assets/Pro2.png";
import onestop from "../assets/onestop.png";
import cost from "../assets/cost.png";
import zero from "../assets/zero.png";
import time from "../assets/time.png";
import cust from "../assets/cust.png";
import deli from "../assets/deli.png";

export default function Services() {
  const servicesRef = useRef(null);
  const benefitsRef = useRef(null);
  const cardAnimationRef = useRef();

  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  useEffect(() => {
    const servEl = servicesRef.current;
    const benEl = benefitsRef.current;
    const cardEl = cardAnimationRef.current;
    let hasAnimated = false;

    const onScroll = () => {
      if (servEl) {
        const rect = servEl.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60 && rect.bottom > 60) {
          servEl.classList.add("services-animate");
        } else {
          servEl.classList.remove("services-animate");
        }
      }
      if (benEl) {
        const rect = benEl.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60 && rect.bottom > 60) {
          benEl.classList.add("services-animate");
        } else {
          benEl.classList.remove("services-animate");
        }
      }
      if (cardEl && !hasAnimated) {
        const rect = cardEl.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.7 && rect.bottom > 0) {
          cardEl.classList.add("card-animate");
          hasAnimated = true;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    setTimeout(onScroll, 100);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="services-root">

      {/* ========== HEADER (ANIMATED) ========== */}
      <header className="services-header-hero">
        <div className="services-hero-text-side">
          <span className="services-headline-wrapper">
            <span className="services-animated-line services-delay1">
              Services
            </span>
          </span>
          <span className="services-animated-line services-delay2">
            Let ProDiligix be your trusted procurement partner — seamlessly managing the entire Source-to-Pay cycle for you.
          </span>
          <span className="services-animated-line services-delay3">
            We simplify how businesses acquire non-core products and services by taking care of everything from supplier onboarding to service delivery. 
            With ProDiligix, you gain the advantage of competitive pricing, streamlined operations, and zero management burden — so you can focus on what truly drives your business forward.
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

      {/* ========== SERVICES SECTION (From Home) ========== */}
      <section ref={servicesRef} className="services-section">
        <div className="services-title">Explore Our Range of Services</div>
        <div className="services-grid">
          {servicesData.map(service => (
            <div key={service.id} className="service-col">
              <img src={service.image} className="service-img" alt={service.title} />
              <div className="service-title">{service.title}</div>
              <div className="service-desc">{service.shortDescription}</div>
              <button 
                className="learn-more-btn"
                onClick={() => openModal(service)}
              >
                Learn More →
              </button>
            </div>
          ))}
        </div>
        <div className="contact-middle-btn-wrapper">
          <button className="contact-middle-btn" onClick={() => window.location.href = "/contact"}>
            Need more? Tell us!
          </button>
        </div>
      </section>

      {/* ========== PRODILIGIX ANIMATED CARD (From Home) ========== */}
      <section ref={cardAnimationRef} className="card-animation-wrapper">
        <aside className="profile-card">
          <header>
            <a href="#">
              <img src={logo} alt="ProDiligix" />
            </a>
            <h1>ProDiligix</h1>
          </header>
          <div className="profile-bio">
            <p>
              ProDiligix – Leading the industry with Sustainable Efficiency & Maximized Value.
            </p>
          </div>
          <ul className="profile-social-links">
            <li><a href="https://www.facebook.com"><i className="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="https://www.instagram.com"><i className="fa-brands fa-instagram"></i></a></li>
            <li><a href="https://x.com/sachin624k"><i className="fa-brands fa-x-twitter"></i></a></li>
            <li>
              <a href="https://www.linkedin.com/company/prodiligix-technologies-pvt-ltd/posts/?feedView=all">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </aside>
      </section>

      {/* ========== BENEFITS SECTION (From Home) ========== */}
      <section ref={benefitsRef} className="benefits-section services-section">
        <div className="services-title">Benefits For You</div>
        <div className="aboutus-sub">
          At ProDiligix, we go beyond services — we deliver value, efficiency, and peace of mind.
          <br />
          Here's what you gain when you partner with us:
        </div>
        <div className="services-grid centered-cols">
          <div className="service-col">
            <img src={onestop} className="service-img" alt="One-Stop Procurement" />
            <div className="service-title">One-Stop Procurement Partner</div>
            <div className="service-desc">
              All your non-core business needs — logistics, gifting, events, legal docs, and IT solutions — managed seamlessly on one intelligent platform.
            </div>
          </div>
          <div className="service-col">
            <img src={cost} className="service-img" alt="Cost Excellence" />
            <div className="service-title">Cost & Process Excellence</div>
            <div className="service-desc">
              Leverage process excellence and automation to optimize procurement, minimize costs, and increase operational efficiency without compromising quality.
            </div>
          </div>
          <div className="service-col">
            <img src={zero} className="service-img" alt="Zero Chaos" />
            <div className="service-title">Zero Chaos, Full Control</div>
            <div className="service-desc">
              Enjoy real-time visibility, centralized vendor management, and simplified processes — so you stay in control without the daily operational stress.
            </div>
          </div>
          <div className="service-col">
            <img src={time} className="service-img" alt="Time Efficiency" />
            <div className="service-title">Time Efficiency</div>
            <div className="service-desc">
              We handle end-to-end execution so your teams can focus on core business priorities, while we take care of everything else.
            </div>
          </div>
          <div className="service-col">
            <img src={cust} className="service-img" alt="Customized Solutions" />
            <div className="service-title">Customized & Scalable Solutions</div>
            <div className="service-desc">
              From startups to large corporates, we tailor our services to fit your scale, budget, and expectations — ensuring flexibility as you grow.
            </div>
          </div>
          <div className="service-col">
            <img src={deli} className="service-img" alt="Reliable Delivery" />
            <div className="service-title">Reliable & Professional Delivery</div>
            <div className="service-desc">
              With transparent processes and dedicated support, we ensure timely execution and hassle-free outcomes, every single time.
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER SECTION ========== */}
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
          <a href="https://www.linkedin.com/company/prodiligix-technologies-pvt-ltd/posts/?feedView=all" aria-label="Linkedin" className="footer-icon-link">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
        <div className="footer-copyright">
          &copy; 2025 ProDiligix. All rights reserved.
        </div>
      </footer>

      {/* ========== SERVICE MODAL ========== */}
      <ServiceModal 
        service={selectedService}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}
