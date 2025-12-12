import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer-modern">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h2>IGNIS</h2>
                        <p>Engineering safety for a complex world. BAFE SP203-1 Accredited.</p>
                        <div className="social-links">
                            <a href="#" className="social-icon"><Linkedin size={20} /></a>
                            <a href="#" className="social-icon"><Twitter size={20} /></a>
                            <a href="#" className="social-icon"><Facebook size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links-grid">
                        <div className="footer-col">
                            <h4>Company</h4>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/projects">Portfolio</Link></li>
                                <li><Link to="/careers">Careers</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Services</h4>
                            <ul>
                                <li><Link to="/services">Installation</Link></li>
                                <li><Link to="/services">Maintenance</Link></li>
                                <li><Link to="/services">Compliance Audits</Link></li>
                                <li><Link to="/services">Training</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Contact</h4>
                            <ul className="contact-list">
                                <li><Phone size={16} /> +44 (0) 20 7123 4567</li>
                                <li><Mail size={16} /> info@igniscontrol.uk</li>
                                <li><MapPin size={16} /> 12 Science Park, London</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Ignis Control System. All rights reserved.</p>
                    <div className="legal-links">
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
