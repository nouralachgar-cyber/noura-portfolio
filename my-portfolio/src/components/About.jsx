import React, { useEffect, useRef, useState } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // كيتفعل الأنيميشن غير فاش كتوصلي لهاد البارت
        }
      },
      { threshold: 0.2 } // كيبدا التحراك فاش كيبان 20% من السكشن
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
      className={`about-container ${isVisible ? 'animate-in' : ''}`}
      id="about"
    >
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <div className="about-text-card">
          <p className="about-paragraph">
            I am a dedicated and curious Web Development student who enjoys learning new technologies and applying them through practical projects.
          </p>
          <p className="about-paragraph">
            My current focus is on developing clean, responsive and interactive websites while strengthening my understanding of programming fundamentals and web development principles.
          </p>
          <p className="about-paragraph">
            I believe that continuous learning, practice and real-world projects are essential for becoming a successful developer.
          </p>
          <p className="about-paragraph">
            I am currently working toward becoming a professional Full-Stack Developer and gaining experience through real-world projects and freelance opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;