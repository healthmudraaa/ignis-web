import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Flame } from 'lucide-react';
import '../styles/Navbar.css';
import logo from '../assets/images/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src={logo} alt="Ignis Logo" className="logo-img" />
                    <span>Ignis Control System</span>
                </Link>

                <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </div>

                <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/about" onClick={() => setIsOpen(false)}>Services</Link>
                    <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)} className="btn btn-primary">Contact Us</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
