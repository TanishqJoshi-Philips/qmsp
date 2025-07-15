// pages/ProcessesPage.tsx
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import '../css/ProcessesPage.css';
import { useFavorites } from '../contexts/FavoritesContext';

const ProcessesPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('all');
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProcessClick = (processName: string) => {
    alert(`Navigating to ${processName} process details`);
  };

  const handleFavoriteToggle = (e: React.MouseEvent, processId: string, processName: string, description: string, category: string) => {
    e.stopPropagation(); // Prevent process card click
    
    if (isFavorite(processId)) {
      removeFromFavorites(processId);
    } else {
      addToFavorites({
        id: processId,
        name: processName,
        description,
        category
      });
    }
  };

  const ProcessCard: React.FC<{
    id: string;
    name: string;
    description: string;
    category: string;
    onClick: () => void;
  }> = ({ id, name, description, category, onClick }) => (
    <div className="process-card" onClick={onClick}>
      <button
        className={`favorite-btn ${isFavorite(id) ? 'active' : ''}`}
        onClick={(e) => handleFavoriteToggle(e, id, name, description, category)}
        title={isFavorite(id) ? 'Remove from favorites' : 'Add to favorites'}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={isFavorite(id) ? 'currentColor' : 'none'}
          />
        </svg>
      </button>
      <span>
        <h2>{name}:</h2> <br /> <br />
        {description}
      </span>
    </div>
  );

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
            MS-QMS Publication
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
              <ProcessCard
                id="idea-to-market"
                name="Idea to Market"
                description="Idea to Market is about how Philips brings new ideas to the market, faster, with high quality at the right cost, therewith increasing the impact of innovation. I2M does this by improving and standardizing its processes, capabilities and tools Philips-wide, at world-class level."
                category="End-to-end Operating"
                onClick={() => handleProcessClick('Idea to Market')}
              />
              <ProcessCard
                id="market-to-order"
                name="Market to Order"
                description="One of three standard customer value chain processes. M2O focuses on reaching more customers and consumers faster and turning them into loyal Philips promoters. Activities include: customer/consumer insights."
                category="End-to-end Operating"
                onClick={() => handleProcessClick('Market to Order')}
              />
              <ProcessCard
                id="order-to-cash"
                name="Order to Cash"
                description="Order to cash (O2C) is a structured process focusing on lean execution of superior customer sales and service for customers and consumers at minimal cost and working capital. It provides the reference point for assessing future cash inflow and forecasting."
                category="End-to-end Operating"
                onClick={() => handleProcessClick('Order to Cash')}
              />
            </div>
          </section>

          {/* Management and Enabling Processes */}
          <section id="management" className="process-section">
            <h2 className="section-title">Management and enabling processes</h2>
            <div className="process-grid management-grid">
              <ProcessCard
                id="vision-strategy"
                name="Vision and Strategy"
                description="The Vision and Strategy domain develops winning strategies for Philips and monitors strategy execution. Based on the overall mission and vision, strategic planning is conducted, strategic deep dives are performed, and strategic alliances are created."
                category="Management & Enabling"
                onClick={() => handleProcessClick('Vision and Strategy')}
              />
              <ProcessCard
                id="brand-communications"
                name="Brand and Communications"
                description="The management of brand and communications to build and maintain a clear, differentiated and desirable position with all stakeholders."
                category="Management & Enabling"
                onClick={() => handleProcessClick('Brand and Communications')}
              />
              <ProcessCard
                id="philips-excellence"
                name="Philips Excellence"
                description="Philips Excellence enables maximized value creation through rigorously applied common excellent operation principles across the Philips Group, collectively leveraging our unique strengths."
                category="Management & Enabling"
                onClick={() => handleProcessClick('Philips Excellence')}
              />
              <ProcessCard
                id="finance"
                name="Finance"
                description="Finance encompasses the processes associated with an organization's financial management practices. It includes the process groups Perform planning and management accounting, Perform revenue accounting, Perform general accounting and reporting."
                category="Management & Enabling"
                onClick={() => handleProcessClick('Finance')}
              />
              <ProcessCard
                id="human-resources"
                name="Human Resources"
                description="Human resource manages an organization's workforce, or human resources. It drives business decisions through people, data and insights. HR Strategy is an integral part of the business strategy."
                category="Management & Enabling"
                onClick={() => handleProcessClick('Human Resources')}
              />
              <ProcessCard
                id="procurement"
                name="Procurement"
                description="Procurement is a structured process aimed at creating value from & with the supply market to contribute to the overall business objectives. It ensures compliance with external and internal regulatory requirements."
                category="Management & Enabling"
                onClick={() => handleProcessClick('Procurement')}
              />
              <ProcessCard
                id="information-technology"
                name="Information Technology"
                description="Manage the business of information technology involves defining and maintaining the relevance of IT to the enterprise and its mission, communicating the strategy and role of IT within the enterprise."
                category="Management & Enabling"
                onClick={() => handleProcessClick('Information Technology')}
              />
              <ProcessCard
                id="real-estate"
                name="Real Estate"
                description="The Real Estate function pro-actively manages the global Real Estate footprint for Philips, across Sectors and Countries, anticipating and acting on the many changes in a dynamic company."
                category="Management & Enabling"
                onClick={() => handleProcessClick('Real Estate')}
              />
              <ProcessCard
                id="risk-compliance"
                name="Risk and Compliance"
                description="Being a Health Technology company and in realizing our purpose to improve people's health and well-being, Philips is faced with risk which needs to be managed consistently within the risk appetite to be successful."
                category="Management & Enabling"
                onClick={() => handleProcessClick('Risk and Compliance')}
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ProcessesPage;
