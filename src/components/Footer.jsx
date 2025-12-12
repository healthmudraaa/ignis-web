import React from 'react';
import { Flame, Phone, Mail, MapPin } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-col">
                    <div className="footer-logo">
                        <Flame className="logo-icon" />
                        <span>Ignis Control System</span>
                    </div>
                    <p>Complete fire safety solutions from installation to maintenance. Ensuring safety across the UK.</p>
                </div>

                <div className="footer-col">
                    <h3>Contact</h3>
                    <div className="contact-item">
                        <MapPin size={18} />
                        <span>123 Safety Lane, London, UK</span>
                    </div>
                    <div className="contact-item">
                        <Phone size={18} />
                        <span>+44 20 1234 5678</span>
                    </div>
                    <div className="contact-item">
                        <Mail size={18} />
                        <span>info@igniscontrol.com</span>
                    </div>
                </div>

                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/about">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Ignis Control System. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
