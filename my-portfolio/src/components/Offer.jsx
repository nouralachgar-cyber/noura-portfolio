import React, { useEffect, useRef, useState } from 'react';
import './Offer.css';

const Offer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const offerList = [
    {
      title: 'Clean and Organized Structure',
      description: 'Writing well-structured, semantic HTML code that is easy to maintain and scale.'
    },
    {
      title: 'Responsive Layouts',
      description: 'Designing websites that adapt seamlessly to laptops, tablets, and smartphones.'
    },
    {
      title: 'User-Friendly Interfaces',
      description: 'Building visually appealing and intuitive designs centered around user experience.'
    },
    {
      title: 'Interactive Elements',
      description: 'Adding dynamic animations and features using JavaScript and React.js.'
    },
    {
      title: 'Cross-Device Compatibility',
      description: 'Ensuring your website looks and functions perfectly across all modern browsers.'
    },
    {
      title: 'Simple & Effective UX',
      description: 'Delivering straightforward, fast-loading, and engaging digital experiences.'
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
      className={`offer-container ${isVisible ? 'animate-in' : ''}`}
      id="offer"
    >
      <div className="offer-content">
        <h2 className="offer-title">What I Offer</h2>
        <p className="offer-subtitle">
          I can create modern and responsive websites with a focus on:
        </p>
        
        <div className="offer-grid">
          {offerList.map((item, index) => (
            <div key={index} className="offer-card">
              <div className="offer-number">0{index + 1}</div>
              <h3 className="offer-card-title">{item.title}</h3>
              <p className="offer-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;