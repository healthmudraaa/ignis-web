import React from 'react';
import { Wrench, ShieldCheck, FileCheck, Truck, BarChart, Users } from 'lucide-react';
import '../styles/Services.css';

const Services = () => {
    const services = [
        {
            icon: <Wrench size={40} />,
            title: "Installation & Commissioning",
            description: "Complete installation of fire suppression systems, including pipes, sprinklers, pumps, and control panels. We ensure seamless integration with your building's infrastructure."
        },
        {
            icon: <ShieldCheck size={40} />,
            title: "Maintenance & Servicing",
            description: "Regular preventative maintenance to ensure 100% reliability. We offer 24/7 emergency support and rapid response times for any system faults."
        },
        {
            icon: <FileCheck size={40} />,
            title: "Audit & Compliance",
            description: "Detailed safety audits to ensure your premises meet all UK Fire Safety Standards and insurance requirements. We provide comprehensive reports and certifications."
        },
        {
            icon: <Truck size={40} />,
            title: "Supply Chain",
            description: "We supply high-quality tanks, controllers, valves, and pipes directly from leading manufacturers, ensuring durability and performance."
        },
        {
            icon: <BarChart size={40} />,
            title: "System Design",
            description: "Bespoke system design using CAD technology to optimize coverage and efficiency while minimizing costs and aesthetic impact."
        },
        {
            icon: <Users size={40} />,
            title: "Training",
            description: "Staff training on how to operate control panels and basic fire safety protocols to ensure your team is prepared."
        }
    ];

    return (
        <div className="page-services">
            <div className="services-hero">
                <div className="container text-center">
                    <h1>Our Expert Services</h1>
                    <p>End-to-end fire protection solutions for modern businesses.</p>
                </div>
            </div>

            <div className="container section">
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon-lg">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
