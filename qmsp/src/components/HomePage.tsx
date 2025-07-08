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
                            <span>
                                <p><mark>Attention: The Philips Management System (OneMS Portal, MS-0001) will be decommissioned by June 30, 2025.</mark></p>
                               <p><mark>This change aligns with our new operating model and replaces the OneMS by new Fit4Purpose Management System portals tailored for Business Units, Regions, and Functions. For questions, please contact mary.feeney@philips.com or bas.verest@philips.com</mark></p>
                            </span>
                        </div>
                        <div className="gen-links-box">
                            <span>Gen. Links</span>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="bottom-section">
                        <div className="feature-box">
                            <span>Op. Model</span>
                        </div>
                        <div className="feature-box">
                            <span>BPM</span>
                        </div>
                        <div className="feature-box">
                            <span>Framework Insights</span>
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
