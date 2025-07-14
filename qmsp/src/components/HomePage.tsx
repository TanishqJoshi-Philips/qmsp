import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import '../css/HomePage.css';
import CreateChangePlanModal from '../components/CreateChangePlanModal';

const HomePage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="home-container">
            {/* Header */}
            <header className="header">
                <div className="logo-section">
                    <span className="logo">
                        <img src="logo.jpg" alt="logo" className="logo-img" />
                    </span>
                </div>
            </header>

            {/* Top Navigation Bar */}
            <nav className="top-nav">
                <div className="navbar-section">
                    <Link to="/" className="nav-link active">Home</Link>
                    <Link to="/processes" className="nav-link">Processes</Link>
                    <Link to="/documents" className="nav-link">Documents</Link>
                </div>
                <div className="dropdown-section">
                    <button className="create-plan-btn" onClick={openModal}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Create Change Plan
                    </button>
                    <button className="dropdown-btn">
                        MS-QMS Publication
                    </button>
                </div>
            </nav>

            <div className="main-layout">
                {/* Sidebar */}
                <aside className="sidebar">
                    <nav className="sidebar-nav">
                        <Link to="/" className="nav-item active">home</Link>
                        <Link to="/favorites" className="nav-item">My Favorites</Link>
                        <Link to="/tasks" className="nav-item">My tasks</Link>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="main-content">
                    {/* Top Section */}
                    <div className="top-section">
                        <div className="welcome-box">
                            <span><h2>Welcome</h2> <br />
                                <p><mark>Attention: The Philips Management System (OneMS Portal, MS-0001) will be decommissioned by June 30, 2025.</mark></p>
                                <p><mark>This change aligns with our new operating model and replaces the OneMS by new Fit4Purpose Management System portals tailored for Business Units, Regions, and Functions. For questions, please contact mary.feeney@philips.com or bas.verest@philips.com</mark></p>
                            </span>
                        </div>
                        <div className="gen-links-box">
                            <span><h2>Gen. Links</h2><br/>
                                ●<a>Release planning </a><br/>
                                ●<a>BPM Modelling Notation (BPMN)</a><br/>
                                ●<a>Design conventions</a><br/>
                                ●<a>FAQ Process Designers</a><br/>
                                ●<a>Philips Operating Model</a><br/>
                                ●<a>Process Framework Viva Engage</a></span><br/>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="bottom-section">
                        <div className="feature-box">
                            <span><h2>Op. Model</h2><br/>
                                The Philips Operating Model is intended to create a shared understanding of Philips’ ways of working so we can deliver on our purpose: improving people’s health and well-being through innovation. And do so responsibly and sustainable, ensuring patient safety, quality, compliance, and integrity in everything we do. Our operating model is designed to drive accountability and agility, based on the following fundamentals:

                                We serve our customers and consumers with patient safety and quality at the core of everything we do
                                Our Business Units are in the lead and accountable for value creation through their value streams
                                Our Regions and Functions enable value stream execution
                                Our leaders and teams are empowered to prioritize and allocate their resources for impact
                                As we can only successfully serve our customers, patients and consumers by working ​ as a team across the company, accountability comes with responsibility to collaborate
                                The operating model integrates five organizational elements. We ensure alignment of the elements ​ to deliver on our strategic objectives, with clear accountability to drive flawless execution.</span>
                        </div>
                        <div className="feature-box">
                            <span><h2>BPM</h2><br/>Business Process Management (BPM) is a management approach used for describing, controlling, modeling, and optimizing business processes. Business Process Management builds a bridge between various business processes and forms the basis for organizational and information-technological initiatives aiming at improving the value-added chain within Philips and between Philips and its suppliers.

                                Steps in Business Process Management (BPM):
                                Design and Model: Identification of to-be and existing processes and preparation of the theoretical design of those process based on the "Process Framework design convention guideline", using the "Business Process Management Policy". Modeling of designed processes, using the "Philips Business Process Modelling Notation (BPMN)"
                                Execute: Actual execution of a process with a combination of automated activities and human intervention performed by the roles identified in the processes
                                Monitor: Definition and monitoring of control parameters; tracking of processes; identification and verification of improvements
                                Optimize: Optimization of processes based on process performance, e.g., through process mining, or process analysis and information that was retrieved from prior BPM phases​</span>
                        </div>
                        <div className="feature-box">
                            <span><h2>Framework Insights</h2><br />
                                <a>●Process Framework hierarchy</a><br />
                                <a>●BPM Completeness dashboard</a> <br />
                                <a>●Change impact release</a><br />
                                <a>●RFC and Change overview</a><br />
                                <a>●Document status dashboard</a><br />
                                <a>●Process and Job catalog alignment</a><br />
                                <a>●Philips Policies dashboard</a><br />
                                <a>●Processes deployment in (Q)MS</a><br />
                                <a>●Processes relevancy for MS types</a><br />
                                <a>●Process level of design</a><br />
                                <a>●Level of process automation</a><br />
                                <a>●Process quality</a><br />
                                <a>●Group-wide policy review</a><br />
                                <a>●Compliance mgnt framework dashboard</a></span>
                        </div>
                    </div>
                </main>
            </div>

            {/* Modal */}
            <CreateChangePlanModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default HomePage;
