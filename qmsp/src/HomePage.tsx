import { Link } from 'react-router-dom';
import React from 'react';
import './HomePage.css';

const HomePage: React.FC = () => {
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
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/processes" className="nav-link">Processes</Link>
                    <Link to="/documents" className="nav-link">Documents</Link>
                </div>
                <div className="dropdown-section">
                    <button className="dropdown-btn">
                        MS-QMS Publication
                    </button>
                </div>
            </nav>

            <div className="main-layout">
                {/* Sidebar */}
                <aside className="sidebar">
                    <nav className="sidebar-nav">
                        <Link to="/" className="nav-item active">Home</Link>
                        <Link to="/favorites" className="nav-item">My Favorites</Link>
                        <Link to="/tasks" className="nav-item">My tasks</Link>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="main-content">
                    {/* Top Section */}
                    <div className="top-section">
                        <div className="welcome-box">
                            <span>Welcome message</span>
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
        </div>
    );
};

export default HomePage;