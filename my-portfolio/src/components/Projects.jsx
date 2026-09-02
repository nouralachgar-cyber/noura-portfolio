import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // قائمة المشاريع خاوية - هادو غير خانات تجريبية وتقدر تزيدي/تعدلي عليهم من بعد
  const emptyProjects = [
    {
      title: 'Project Name 1',
      description: 'Project description will go here. A brief explanation of what this project does and the technologies used.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Project Name 2',
      description: 'Project description will go here. A brief explanation of what this project does and the technologies used.',
      techStack: ['React.js', 'CSS'],
    },
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
      className={`projects-container ${isVisible ? 'animate-in' : ''}`}
      id="projects"
    >
      <div className="projects-content">
        <h2 className="projects-title">Projects</h2>
        
        <div className="projects-grid">
          {emptyProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-placeholder">
                <span>Project Image Placeholder</span>
              </div>
              <div className="project-info">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>
                <div className="project-tech-tags">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;