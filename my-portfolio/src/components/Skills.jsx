import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // قائمة المهارات مع روابط الأيقونات الرسمية
  const skillsList = [
    { name: 'HTML', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
    { name: 'CSS', icon: 'https://cdn.simpleicons.org/css/1572B6' },
    { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
    { name: 'VS Code', icon: 'https://cdn.simpleicons.org/visualstudiocode/007ACC' },
    { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/FFFFFF' },
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
      className={`skills-container ${isVisible ? 'animate-in' : ''}`}
      id="skills"
    >
      <div className="skills-content">
        <h2 className="skills-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillsList.map((skill, index) => (
            <div key={index} className="skill-card">
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;