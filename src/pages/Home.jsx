import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Wrench, FileCheck, Phone, ChevronDown } from 'lucide-react';
import ProjectCard from '../components/ProjectCard'; // Import ProjectCard
import Testimonials from '../components/Testimonials';
import { projects } from '../data/projects';
import '../styles/Home.css';

const Home = () => {
  const featuredProjects = projects.slice(0, 3);

  // Professional Fire Hydrant Action Background
  const heroBg = "https://image.pollinations.ai/prompt/red%20fire%20hydrant%20spraying%20water%20to%20stop%20fire%20dynamic%20action%20professional%20realistic%20photography?width=1920&height=1080&nologo=true";

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="home-page">
      {/* Modern Hero Section */}
      <section className="hero-modern" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <motion.div
            className="hero-content"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="badge-glass">
              <span className="badge-dot"></span> Premier Fire Safety Engineering
            </motion.div>

            <motion.h1 variants={fadeIn} className="hero-title">
              Protecting Tomorrow's <br />
              <span className="brand-gradient">Infrastructure Today.</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="hero-subtitle">
              Intelligent fire suppression systems for the UK's most critical assets.
              We fuse Heritage craftsmanship with AI-driven detection technology.
            </motion.p>

            <motion.div variants={fadeIn} className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Start Consultation <ArrowRight size={20} style={{ marginLeft: '10px' }} />
              </Link>
              <Link to="/projects" className="btn btn-outline glass-btn">
                View Portfolio
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={32} color="rgba(255,255,255,0.5)" />
        </motion.div>
      </section>

      {/* Bento Grid Services */}
      <section className="section services-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>End-to-End <span className="text-gradient">Capabilities</span></h2>
            <p>A full spectrum of life safety services verified by BAFE & FIA standards.</p>
          </motion.div>

          <div className="bento-grid">
            <motion.div
              className="bento-card card-large"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bento-icon"><Wrench size={32} /></div>
              <h3>Installation & Commissioning</h3>
              <p>From commercial high-rises to industrial warehouses, we deploy fully compliant EN54 systems with zero downtime.</p>
            </motion.div>

            <motion.div
              className="bento-card"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="bento-icon"><ShieldCheck size={32} /></div>
              <h3>Smart Maintenance</h3>
              <p>24/7 Remote monitoring and predictive fault analysis.</p>
            </motion.div>

            <motion.div
              className="bento-card"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="bento-icon"><FileCheck size={32} /></div>
              <h3>Audit & Compliance</h3>
              <p>Detailed rigor to meet insurance and legal obligations.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Carousel (Horizontal Scroll vibe) */}
      <section className="section bg-alt projects-section">
        <div className="container">
          <div className="section-header-row">
            <div>
              <h2>Featured <span className="brand-gradient">Case Studies</span></h2>
              <p>Excellence delivered across 22+ major sites.</p>
            </div>
            <Link to="/projects" className="btn btn-outline show-all-btn">View All Projects</Link>
          </div>

          <div className="project-grid-modern">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section Modern */}
      <section className="stats-modern section">
        <div className="container stats-grid">
          <div className="stat-block">
            <span className="stat-val branch-gradient">100%</span>
            <span className="stat-label">Compliance</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-block">
            <span className="stat-val text-white">22+</span>
            <span className="stat-label">Deployments</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-block">
            <span className="stat-val text-gradient">24/7</span>
            <span className="stat-label">Support</span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Modern CTA */}
      <section className="section cta-modern">
        <div className="container p-relative">
          <div className="glass-card cta-card">
            <h2>Secure Your Premises with <span className="brand-gradient">Industry Leaders</span></h2>
            <p>Direct line to our engineering team. No sales scripts, just technical solutions.</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              <Phone size={20} style={{ marginRight: '10px' }} />
              Get Protected Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
