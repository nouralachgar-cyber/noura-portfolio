import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        
        {/* الجهة اللي فيها المعطيات */}
        <div className="hero-text-side">
          <h1 className="hero-name">Noura Lachgar</h1>
          <p className="hero-title">Web Development Student</p>
          <p className="hero-description">
            Passionate about building clean, responsive, and interactive web experiences.
          </p>
          
          {/* أزرار التفاعل */}
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>

        {/* الجهة اللي فيها الصورة */}
        <div className="hero-image-side">
          <div className="hero-image-wrapper">
            <img 
              src="/profile.jpg" 
              alt="Noura Lachgar Profile" 
              className="hero-image"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;