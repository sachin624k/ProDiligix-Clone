import React, { useEffect } from "react";
import "./ServiceModal.css";

export default function ServiceModal({ service, isOpen, onClose }) {
  // Close modal on ESC key press
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        {/* Modal header */}
        <div className="modal-header">
          <img src={service.image} alt={service.title} className="modal-image" />
          <h2 className="modal-title">{service.title}</h2>
        </div>

        {/* Modal body */}
        <div className="modal-body">
          <p className="modal-description">{service.detailedDescription}</p>

          {/* Features list */}
          <div className="modal-features">
            {service.features.map((feature, index) => (
              <div key={index} className="feature-section">
                <h3 className="feature-title">{feature.title}</h3>
                <ul className="feature-list">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="feature-item">{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Modal footer */}
        <div className="modal-footer">
          <button className="modal-cta-btn" onClick={() => window.location.href = "/contact"}>
            Conatct Us
          </button>
        </div>
      </div>
    </div>
  );
}
