import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './ProcessesPage.css';

const ProcessesPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('all');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProcessClick = (processName: string) => {
    alert(`Navigating to ${processName} process details`);
    // You can replace this with actual navigation logic
    // Example: navigate(`/processes/${processName.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <div className="processes-container">
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
          <Link to="/processes" className="nav-link active">Processes</Link>
          <Link to="/documents" className="nav-link">Documents</Link>
        </div>
        <div className="dropdown-section">
          <button className="dropdown-btn">
            Drop down menu
          </button>
        </div>
      </nav>

      <div className="main-layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-title">List of Processes</div>
          <nav className="sidebar-nav">
            <button 
              className={`sidebar-item ${activeSection === 'all' ? 'active' : ''}`}
              onClick={() => scrollToSection('all')}
            >
              All Processes
            </button>
            <button 
              className={`sidebar-item ${activeSection === 'end-to-end' ? 'active' : ''}`}
              onClick={() => scrollToSection('end-to-end')}
            >
              End-to-end Operating
            </button>
            <button 
              className={`sidebar-item ${activeSection === 'management' ? 'active' : ''}`}
              onClick={() => scrollToSection('management')}
            >
              Management & Enabling
            </button>
            
            {/* Individual Process Links */}
            <div className="sidebar-divider"></div>
            <div className="sidebar-subtitle">Quick Access</div>
            
            <button 
              className="sidebar-item quick-access"
              onClick={() => handleProcessClick('Idea to Market')}
            >
              Idea to Market
            </button>
            <button 
              className="sidebar-item quick-access"
              onClick={() => handleProcessClick('Market to Order')}
            >
              Market to Order
            </button>
            <button 
              className="sidebar-item quick-access"
              onClick={() => handleProcessClick('Order to Cash')}
            >
              Order to Cash
            </button>
            <button 
              className="sidebar-item quick-access"
              onClick={() => handleProcessClick('Vision and Strategy')}
            >
              Vision & Strategy
            </button>
            <button 
              className="sidebar-item quick-access"
              onClick={() => handleProcessClick('Human Resources')}
            >
              Human Resources
            </button>
            <button 
              className="sidebar-item quick-access"
              onClick={() => handleProcessClick('Finance')}
            >
              Finance
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          {/* End-to-end Operating Processes */}
          <section id="end-to-end" className="process-section">
            <h2 className="section-title">End-to-end operating processes</h2>
            <div className="process-grid">
              <button 
                className="process-card"
                onClick={() => handleProcessClick('Idea to Market')}
              >
                <span>Idea to Market</span>
              </button>
              <button 
                className="process-card"
                onClick={() => handleProcessClick('Market to Order')}
              >
                <span>Market to Order</span>
              </button>
              <button 
                className="process-card"
                onClick={() => handleProcessClick('Order to Cash')}
              >
                <span>Order to Cash</span>
              </button>
            </div>
          </section>

          {/* Management and Enabling Processes */}
          <section id="management" className="process-section">
            <h2 className="section-title">Management and enabling processes</h2>
            <div className="process-grid management-grid">
              <button 
                className="process-card"
                onClick={() => handleProcessClick('Vision and Strategy')}
              >
                <span>Vision and Strategy</span>
              </button>
              <button 
                className="process-card"
                onClick={() => handleProcessClick('Brand and Communications')}
              >
                <span>Brand and Communications</span>
              </button>
              <button 
                className="process-card"
                onClick={() => handleProcessClick('Philips Excellence')}
              >
                <span>Philips Excellence</span>
              </button>
              <button 
                className="process-card"
                onClick={() => handleProcessClick('Finance')}
              >
                <span>Finance</span>
              </button>
              <button 
                className="process-card"
                onClick={() => handleProcessClick('Human Resources')}
              >
                <span>Human Resources</span>
              </button>
              <button 
                className="process-card"
                onClick={() => handleProcessClick('Procurement')}
              >
                <span>Procurement</span>
              </button>
              <button 
                className="process-card"
                onClick={() => handleProcessClick('Information Technology')}
              >
                <span>Information Technology</span>
              </button>
              <button 
                className="process-card"
                onClick={() => handleProcessClick('Real Estate')}
              >
                <span>Real Estate</span>
              </button>
              <button 
                className="process-card"
                onClick={() => handleProcessClick('Risk and Compliance')}
              >
                <span>Risk and Compliance</span>
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ProcessesPage;
