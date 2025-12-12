import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Wrench, FileCheck, Phone } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import '../styles/Home.css';

const Home = () => {
  // Get first 3 projects for featured section
  const featuredProjects = projects.slice(0, 3);

  // Using specific keywords for better relevance
  const heroImg = "https://loremflickr.com/1920/1080/technology,server,control,panel?lock=hero";

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="container">
          <div className="hero-content">
            <h1>Advanced Fire Safety <br /><span>Solutions & Engineering</span></h1>
            <p>From custom pipe fabrication to intelligent control systems. Ignis provides end-to-end fire protection for the UK's most demanding infrastructures.</p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">
                Get a Quote <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </Link>
              <Link to="/projects" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Services Preview Cards (Floating) */}
        <div className="services-preview">
          <div className="service-item">
            <div className="service-icon"><Wrench size={28} /></div>
            <h3>Installation</h3>
            <p>Professional installation of tanks, pipes, and control units.</p>
          </div>
          <div className="service-item">
            <div className="service-icon"><ShieldCheck size={28} /></div>
            <h3>Maintenance</h3>
            <p>24/7 support and regular maintenance checks for safety.</p>
          </div>
          <div className="service-item">
            <div className="service-icon"><FileCheck size={28} /></div>
            <h3>Compliance</h3>
            <p>Ensuring your systems meet all UK fire safety regulations.</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-bar">
          <div className="stat-item">
            <span className="stat-number">22+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Safety Record</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Emergency Support</span>
          </div>
        </div>

        {/* Featured Projects */}
        <section className="section featured-projects">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <p>A glimpse into our portfolio of industrial and commercial safety installations.</p>
          </div>
          <div className="project-grid">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link to="/projects" className="btn btn-outline" style={{ color: 'var(--color-primary)', borderColor: 'var(--color-primary)' }}>
              View All 22 Projects
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2>Ready to secure your premises?</h2>
          <p>Contact our expert team today for a free consultation and site audit.</p>
          <Link to="/contact" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>
            <Phone size={18} style={{ marginRight: '8px' }} />
            Contact Us Now
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Home;
