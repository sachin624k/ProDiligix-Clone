import React, { useRef, useEffect, useState } from "react";
import './Home.css';
import ServiceModal from "../components/ServiceModal";
import servicesData from "../data/servicesData";

// Import all images
import logo from "../assets/Pro2.png";
import onestop from "../assets/onestop.png";
import cost from "../assets/cost.png";
import zero from "../assets/zero.png";
import time from "../assets/time.png";
import cust from "../assets/cust.png";
import deli from "../assets/deli.png";
import cent from "../assets/cent.png";
import cos from "../assets/cos.png";
import real from "../assets/real.png";
import tech from "../assets/tech.png";
import seam from "../assets/seam.png";

export default function Home() {
  const aboutUsRef = useRef();
  const servicesRef = useRef();
  const challengesRef = useRef();
  const benefitsRef = useRef();
  const cardAnimationRef = useRef();

  // Modal state management
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
    // Animation effects (leave as is)
    const el = aboutUsRef.current;
    const onScroll = () => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80 && rect.bottom > 80) {
        el.classList.add("aboutus-animate");
      } else {
        el.classList.remove("aboutus-animate");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    setTimeout(onScroll, 100);

    const servEl = servicesRef.current;
    const onScrollServ = () => {
      if (!servEl) return;
      const rect = servEl.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60 && rect.bottom > 60) {
        servEl.classList.add("services-animate");
      } else {
        servEl.classList.remove("services-animate");
      }
    };
    window.addEventListener("scroll", onScrollServ, { passive: true });
    setTimeout(onScrollServ, 100);

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

    const benEl = benefitsRef.current;
    const onScrollBenefit = () => {
      if (!benEl) return;
      const rect = benEl.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60 && rect.bottom > 60) {
        benEl.classList.add("services-animate");
      } else {
        benEl.classList.remove("services-animate");
      }
    };
    window.addEventListener("scroll", onScrollBenefit, { passive: true });
    setTimeout(onScrollBenefit, 100);

    const cardEl = cardAnimationRef.current;
    let hasAnimated = false;
    const onScrollCard = () => {
      if (!cardEl || hasAnimated) return;
      const rect = cardEl.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.7 && rect.bottom > 0) {
        cardEl.classList.add("card-animate");
        hasAnimated = true;
        window.removeEventListener("scroll", onScrollCard);
      }
    };
    window.addEventListener("scroll", onScrollCard, { passive: true });
    setTimeout(onScrollCard, 100);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onScrollServ);
      window.removeEventListener("scroll", onScrollChal);
      window.removeEventListener("scroll", onScrollBenefit);
      window.removeEventListener("scroll", onScrollCard);
    };
  }, []);

  return (
    <div className="home-root">

      {/* ========== HERO SECTION ========== */}
      <header className="header-hero">
        <div className="hero-text-side">
          <span className="animated-line delay1">Seamless Procurement,</span>
          <span className="animated-line delay2">Simplified Procurement</span>
          <span className="animated-line delay3">
            ProDiligix unifies all your outsourcing needs on one intelligent platform, 
            empowering your business to grow without limits.
          </span>
        </div>
        <div className="image-side">
          <div className="image-container">
            <div className="shiny-logo-wrapper">
              <img src={logo} alt="ProDiligix Logo" className="shiny-logo" />
              <div className="shine-overlay"></div>
            </div>
          </div>
        </div>
      </header>

      {/* ========== ACTION BUTTONS: ALIGNED AND SAME WIDTH ========== */}
      <div className="hero-main-action-row">
        <button className="hero-main-btn">Get Quote</button>
        <div className="hero-track-stack">
          <div className="hero-track-label">Track Your Shipment</div>
          <form className="hero-track-form" onSubmit={e => e.preventDefault()}>
            <input
              className="hero-track-input"
              type="text"
              placeholder="Enter AWB Number"
            />
            <button type="submit" className="hero-main-btn">
              Track Now!
            </button>
          </form>
        </div>
      </div>

      {/* ========== ABOUT US SECTION ========== */}
      <section ref={aboutUsRef} className="aboutus-main">
        <div className="aboutus-title">About Us</div>
        <div className="aboutus-sub">
          At ProDiligix, we go beyond being just a vendor — we become your trusted 
          procurement partner, managing the entire Source-to-Pay cycle with precision and ease.
        </div>
        <div className="aboutus-desc">
          We simplify how businesses acquire non-core services and products, from onboarding 
          the right suppliers to ensuring smooth and timely delivery. By centralizing procurement, 
          we help organizations unlock competitive pricing, cost savings, and operational 
          efficiency — without the hassle of managing multiple vendors.
        </div>
        <div className="aboutus-desc">
          With ProDiligix, companies gain the freedom to focus on growth while we take care of 
          the complexities behind the scenes. Our platform ensures transparency, reliability, 
          and value at every step — making procurement simpler, smarter, and more impactful.
        </div>
      </section>

      {/* ========== SERVICES SECTION ========== */}
      <section ref={servicesRef} className="services-section">
        <div className="services-title">Explore Our Range of Services</div>
        <div className="services-grid">
          {servicesData.map((service) => (
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
          <button
            className="contact-middle-btn"
            onClick={() => window.location.href = "/contact"}
          >
            Need more? Tell us!
          </button>
        </div>
      </section>

      {/* ========== CHALLENGES SECTION (PYRAMID LAYOUT) ========== */}
      <section ref={challengesRef} className="challenges-section services-section">
        <div className="services-title">How We Address These Challenges</div>
        <div className="challenges-subtitle">
          At ProDiligix, we don't just solve problems—we build sustainable systems that 
          empower businesses to <br/>grow smarter, faster, and more cost-effectively. Our approach 
          is designed to eliminate inefficiencies, centralize <br/>processes, and unlock measurable 
          value across procurement, logistics, IT, and corporate services.
        </div>
        {/* 3 cards in the first row */}
        <div className="services-grid grid-three">
          <div className="service-col">
            <img src={cent} className="service-img" alt="Centralized Vendor Management" />
            <div className="service-title">Centralized Vendor Management</div>
            <div className="service-desc">
              One platform, multiple services. We unify your procurement, logistics, IT, and corporate needs under a single dashboard.
            </div>
          </div>
          <div className="service-col">
            <img src={cos} className="service-img" alt="Cost Optimization" />
            <div className="service-title">Cost Optimization & Transparency</div>
            <div className="service-desc">
              Leverage competitive pricing and clear reporting to ensure every rupee spent delivers maximum impact.
            </div>
          </div>
          <div className="service-col">
            <img src={real} className="service-img" alt="Real-Time Visibility" />
            <div className="service-title">Real-Time Visibility & Control</div>
            <div className="service-desc">
              End-to-end tracking, smart dashboards, and performance insights that empower decision-making.
            </div>
          </div>
        </div>
        {/* 2 cards in the second, centered row */}
        <div className="services-grid grid-two">
          <div className="service-col">
            <img src={tech} className="service-img" alt="Technology-Driven Automation" />
            <div className="service-title">Technology-Driven Automation</div>
            <div className="service-desc">
              Streamlined processes with AI, automation, and digital tools to save time, reduce errors, and enhance efficiency.
            </div>
          </div>
          <div className="service-col">
            <img src={seam} className="service-img" alt="Seamless Execution" />
            <div className="service-title">Seamless Execution & Reliability</div>
            <div className="service-desc">
              From planning to delivery, we ensure smooth operations, on-time commitments, and measurable outcomes.
            </div>
          </div>
        </div>
      </section>

      {/* ========== PRODILIGIX ANIMATED CARD ========== */}
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
        </aside>
      </section>

      {/* ========== BENEFITS SECTION ========== */}
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
              All your non-core business needs — logistics, gifting, events, legal docs, and 
              IT solutions — managed seamlessly on one intelligent platform.
            </div>
          </div>
          <div className="service-col">
            <img src={cost} className="service-img" alt="Cost Excellence" />
            <div className="service-title">Cost & Process Excellence</div>
            <div className="service-desc">
              Leverage process excellence and automation to optimize procurement, minimize costs, 
              and increase operational efficiency without compromising quality.
            </div>
          </div>
          <div className="service-col">
            <img src={zero} className="service-img" alt="Zero Chaos" />
            <div className="service-title">Zero Chaos, Full Control</div>
            <div className="service-desc">
              Enjoy real-time visibility, centralized vendor management, and simplified 
              processes — so you stay in control without the daily operational stress.
            </div>
          </div>
          <div className="service-col">
            <img src={time} className="service-img" alt="Time Efficiency" />
            <div className="service-title">Time Efficiency</div>
            <div className="service-desc">
              We handle end-to-end execution so your teams can focus on core business 
              priorities, while we take care of everything else.
            </div>
          </div>
          <div className="service-col">
            <img src={cust} className="service-img" alt="Customized Solutions" />
            <div className="service-title">Customized & Scalable Solutions</div>
            <div className="service-desc">
              From startups to large corporates, we tailor our services to fit your scale, 
              budget, and expectations — ensuring flexibility as you grow.
            </div>
          </div>
          <div className="service-col">
            <img src={deli} className="service-img" alt="Reliable Delivery" />
            <div className="service-title">Reliable & Professional Delivery</div>
            <div className="service-desc">
              With transparent processes and dedicated support, we ensure timely execution 
              and hassle-free outcomes, every single time.
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
          <a
            href="https://www.linkedin.com/company/prodiligix-technologies-pvt-ltd/posts/?feedView=all"
            aria-label="Linkedin"
            className="footer-icon-link"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
        <div className="footer-copyright">&copy; 2025 ProDiligix. All rights reserved.</div>
      </footer>

      <ServiceModal 
        service={selectedService}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}
