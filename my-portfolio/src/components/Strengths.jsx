import React, { useEffect, useRef, useState } from 'react';
import './Strengths.css';

const Strengths = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const strengthsList = [
    {
      title: 'Problem Solving',
      description: 'Analytical mindset focused on breaking down complex problems and finding efficient code solutions.'
    },
    {
      title: 'Attention to Detail',
      description: 'Meticulous approach to writing clean code, precision in layout design, and creating seamless user experiences.'
    },
    {
      title: 'Continuous Learning',
      description: 'Passionate about discovering new technologies, practices, and constantly evolving as a web developer.'
    },
    {
      title: 'Persistence',
      description: 'Determined attitude toward debugging, troubleshooting, and overcoming development challenges.'
    }
  ];

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
    <section 
      ref={sectionRef} 
      className={`strengths-container ${isVisible ? 'animate-in' : ''}`}
      id="strengths"
    >
      <div className="strengths-content">
        <h2 className="strengths-title">Professional Strengths</h2>
        
        <div className="strengths-grid">
          {strengthsList.map((item, index) => (
            <div key={index} className="strength-card">
              <h3 className="strength-card-title">{item.title}</h3>
              <p className="strength-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;