import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/Testimonials.css';

const testimonials = [
    {
        name: "James Wilson",
        role: "Facility Manager, Apex Towers",
        text: "Ignis Control System transformed our safety infrastructure. The integration of the new VESDA system was seamless, and the ongoing maintenance dashboard gives us complete peace of mind.",
        rating: 5
    },
    {
        name: "Sarah Chen",
        role: "Director of Operations, MetroHub",
        text: "Professional, rigorous, and technically superior. Their team identified risks in our server rooms that previous auditors missed completely. Highly recommended.",
        rating: 5
    },
    {
        name: "Marcus Thorne",
        role: "Site Lead, Industrial Solutions Ltd",
        text: "The wireless detection system they installed in our heritage wing solved a 5-year compliance headache. Zero damage to the architecture, 100% reliable.",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section className="section testimonials-section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="badge-glass">Client Trust</span>
                    <h2>Trusted by <span className="text-gradient">Industry Leaders</span></h2>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((item, index) => (
                        <motion.div
                            className="testimonial-card"
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="quote-icon-bg">
                                <Quote size={24} />
                            </div>
                            <div className="stars">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="#fb923c" stroke="none" />
                                ))}
                            </div>
                            <p className="testimonial-text">"{item.text}"</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">{item.name[0]}</div>
                                <div>
                                    <h4>{item.name}</h4>
                                    <p>{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
