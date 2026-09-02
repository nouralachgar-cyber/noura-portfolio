import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <footer 
      ref={sectionRef} 
      className={`contact-container ${isVisible ? 'animate-in' : ''}`}
      id="contact"
    >
      <div className="contact-content">
        <h2 className="contact-title">Let's Work Together</h2>
        <p className="contact-description">
          I am open to learning opportunities, internships, freelance projects and collaborations that allow me to develop my skills and gain practical experience.
        </p>

        <div className="contact-links">
          <a href="mailto:your.email@example.com" className="contact-card">
            <span className="contact-label">Email</span>
            <span className="contact-value">your.email@example.com</span>
          </a>

          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-card">
            <span className="contact-label">GitHub</span>
            <span className="contact-value">github.com/yourusername</span>
          </a>

          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-card">
            <span className="contact-label">LinkedIn</span>
            <span className="contact-value">linkedin.com/in/yourusername</span>
          </a>
        </div>

        <div className="footer-bottom">
          <p className="thank-you-text">Thank You for Visiting My Portfolio</p>
          <p className="tagline">Learning. Building. Improving.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;