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
                    <ArrowLeft size={16} /> Back to Projects
                </Link>

                <div className="project-header">
                    <h1>{project.title}</h1>
                    <div className="project-meta">
                        <span className="meta-item"><MapPin size={16} /> {project.location}</span>
                        <span className="meta-item"><Calendar size={16} /> {project.date}</span>
                        <span className="meta-item"><User size={16} /> {project.client}</span>
                    </div>
                </div>

                <div className="project-hero-image">
                    <img src={project.image} alt={project.title} />
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
                            <h3>Detailed Case Study</h3>
                            {project.longContent.split('\n').map((paragraph, idx) => (
                                <p key={idx} className="case-study-text">{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    <div className="sidebar">
                        <div className="sidebar-card">
                            <h4>Project Spec</h4>
                            <ul>
                                <li><strong>Category:</strong> {project.category}</li>
                                <li><strong>Status:</strong> Completed</li>
                                <li><strong>Team Size:</strong> 12 Engineers</li>
                                <li><strong>Duration:</strong> 3 Months</li>
                            </ul>
                            <Link to="/contact" className="btn btn-primary full-width">Discussion Similar Project</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
