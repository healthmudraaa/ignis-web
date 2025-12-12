import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, User } from 'lucide-react';
import { projects } from '../data/projects';
import '../styles/ProjectDetail.css';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    if (!project) {
        return (
            <div className="container section text-center">
                <h2>Project not found</h2>
                <Link to="/projects" className="btn btn-primary">Back to Projects</Link>
            </div>
        );
    }

    return (
        <div className="page-project-detail">
            <div className="container section">
                <Link to="/projects" className="back-link">
                    <ArrowLeft size={16} /> Back to Portfolio
                </Link>

                <div className="project-header">
                    <span className="project-category-badge">{project.category}</span>
                    <h1>{project.title}</h1>
                    <div className="project-meta">
                        <span className="meta-item"><MapPin size={16} /> {project.location}</span>
                        <span className="meta-item"><Calendar size={16} /> {project.date}</span>
                        <span className="meta-item"><User size={16} /> {project.client}</span>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="project-hero-image">
                    <img src={project.image} alt="Project Finished State" />
                </div>

                <div className="project-content-grid">
                    <div className="main-content">
                        <h3>Project Overview</h3>
                        <p>{project.description}</p>

                        <h3>The Challenge</h3>
                        <p>{project.challenge}</p>

                        <h3>Our Solution</h3>
                        <p>{project.solution}</p>

                        <h3>Outcome</h3>
                        <p>{project.outcome}</p>

                        <div className="case-study-section">
                            <h3>Detailed Analysis</h3>
                            {project.longContent.split('\n').map((paragraph, idx) => (
                                <p key={idx} className="case-study-text">{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    <div className="sidebar">
                        <div className="sidebar-card">
                            <h4>Project Specifications</h4>
                            <ul>
                                <li><strong>Client:</strong> {project.client}</li>
                                <li><strong>Type:</strong> {project.category}</li>
                                <li><strong>Location:</strong> {project.location}</li>
                                <li><strong>Duration:</strong> 14 Weeks</li>
                                <li><strong>Team:</strong> 12 Engineers</li>
                            </ul>
                            <Link to="/contact" className="btn btn-primary full-width">Request Similar Proposal</Link>
                        </div>
                    </div>
                </div>

                {/* New Gallery Section (Before/During/After) */}
                <div className="project-gallery-section">
                    <h2>Project Process Gallery</h2>
                    <p className="gallery-subtitle">Visual documentation of the engineering lifecycle.</p>
                    <div className="gallery-grid">
                        <div className="gallery-item">
                            <img src={project.gallery[0] || project.image} alt="Site Inspection" />
                            <span className="gallery-caption">Initial Site Review</span>
                        </div>
                        <div className="gallery-item">
                            <img src={project.gallery[1] || project.image} alt="Installation Phase" />
                            <span className="gallery-caption">Installation Phase</span>
                        </div>
                        <div className="gallery-item">
                            <img src={project.gallery[2] || project.image} alt="Final Compliance" />
                            <span className="gallery-caption">Final Compliance Check</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

};

export default ProjectDetail;
