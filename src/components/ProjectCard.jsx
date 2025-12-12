import React from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/ProjectCard.css';

const ProjectCard = ({ project }) => {
    return (
        <Link to={`/projects/${project.id}`} className="project-card-modern">
            <div className="card-image-wrapper">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="card-overlay">
                    <span className="view-project-btn">
                        View Case Study <ArrowUpRight size={18} />
                    </span>
                </div>
            </div>

            <div className="card-content">
                <div className="card-meta">
                    <span className={`category-tag ${project.category.toLowerCase()}`}>
                        {project.category}
                    </span>
                    <span className="location-tag">
                        <MapPin size={14} /> {project.location}
                    </span>
                </div>

                <h3>{project.title}</h3>
                <p className="card-desc">{project.description.substring(0, 100)}...</p>
            </div>
        </Link>
    );
};

export default ProjectCard;
