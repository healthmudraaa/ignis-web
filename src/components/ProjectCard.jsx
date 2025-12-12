import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import '../styles/ProjectCard.css';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <div className="project-image">
                <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.excerpt}</p>
                <Link to={`/projects/${project.id}`} className="read-more">
                    View Project <ArrowRight size={16} />
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;
