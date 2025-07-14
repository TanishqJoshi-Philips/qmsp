import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import '../css/ProcessesPage.css';

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
    // replace this with actual navigation logic
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
              <button
                className="process-card"
                onClick={() => handleProcessClick('Idea to Market')}
              >
                <span>
                  <h2>Idea to Market:</h2> <br /> <br />
                  Idea to Market is about how Philips brings new ideas to the market, faster, with high quality at the right cost, therewith increasing the impact of innovation. I2M does this by improving and standardizing its processes, capabilities and tools Philips-wide, at world-class level.
                </span>
              </button>
              <button
                className="process-card"
                onClick={() => handleProcessClick('Market to Order')}
              >
                <span>
                  <h2>Market to Order:</h2> <br /> <br />
                  One of three standard customer value chain processes. M2O focuses on reaching more customers and consumers faster and turning them into loyal Philips promoters. Activities include: customer/consumer insights.
                </span>
              </button>
              <button
                className="process-card"
                onClick={() => handleProcessClick('Order to Cash')}
              >
                <span>
                  <h2>Order to Cash</h2><br /> <br />
                  Order to cash (O2C) is a structured process focusing on lean execution of superior customer sales and service for customers and consumers at minimal cost and working capital. It provides the reference point for assessing future cash inflow and forecasting.
                </span>
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
                <span>
                  <h2>Vision and Strategy</h2><br /> <br />
                  The Vision and Strategy domain develops winning strategies for Philips and monitors strategy execution. Based on the overall mission and vision, strategic planning is conducted, strategic deep dives are performed, and strategic alliances are created. These activities are supported by continuous market analysis and forecasting.
                </span>
              </button>
              <button
                className="process-card"
                onClick={() => handleProcessClick('Brand and Communications')}
              >
                <span>
                 <h2> Brand and Communications</h2><br /> <br />
                  The management of brand and communications to build and maintain a clear, differentiated and desirable position with all stakeholders.
                </span>
              </button>
              <button
                className="process-card"
                onClick={() => handleProcessClick('Philips Excellence')}
              >
                <span>
                  <h2>Philips Excellence</h2><br /> <br />
                  Philips Excellence enables maximized value creation through rigorously applied common excellent operation principles across the Philips Group, collectively leveraging our unique strengths.
                </span>
              </button>
              <button
                className="process-card"
                onClick={() => handleProcessClick('Finance')}
              >
                <span>
                  <h2>Finance</h2><br /> <br />
                  Finance encompasses the processes associated with an organization’s financial management practices. It includes the process groups Perform planning and management accounting, Perform revenue accounting, Perform general accounting and reporting, Manage fixed-asset project accounting, Process accounts payable and expense reimbursements, Manage treasury and capital, Manage internal controls, Manage taxes, and Manage investor relationships.
                </span>
              </button>
              <button
                className="process-card"
                onClick={() => handleProcessClick('Human Resources')}
              >
                <span>
                  <h2>Human Resources</h2><br /> <br />
                  Human resource manages an organization’s workforce, or human resources. It drives business decisions through people, data and insights. HR Strategy is an integral part of the business strategy. It manages the hire to retire process, organizational leadership and culture and ensures compliancy with employment and labor laws.
                </span>
              </button>
              <button
                className="process-card"
                onClick={() => handleProcessClick('Procurement')}
              >
                <span>
                  <h2>Procurement</h2><br /> <br />
                  Procurement is a structured process aimed at creating value from & with the supply market to contribute to the overall business objectives. It ensures compliance with external and internal regulatory requirements in all aspects of doing business with external suppliers. internal regulatory requirements in all aspects of doing business with external suppliers.
                </span>
              </button>
              <button
                className="process-card"
                onClick={() => handleProcessClick('Information Technology')}
              >
                <span>
                  <h2>Information Technology</h2><br /> <br />
                  Manage the business of information technology involves deﬁning and maintaining the relevance of IT to the enterprise and its mission, communicating the strategy and role of IT within the enterprise, establishing the enterprise architecture and guiding principles, deﬁning the IT management system and governance model, and managing the strategic activities that help ensure attainment of IT value.
                </span>
              </button>
              <button
                className="process-card"
                onClick={() => handleProcessClick('Real Estate')}
              >
                <span>
                  <h2>Real Estate</h2><br /> <br />
                  The Real Estate function pro-actively manages the global Real Estate footprint for Philips, across Sectors and Countries, anticipating and acting on the many changes in a dynamic company. We aim to enable working environments that are engaging and inspiring for employees in a high performance company, while at the same time optimize the total costs of use of space and / or buildings.
                </span>
              </button>
              <button
                className="process-card"
                onClick={() => handleProcessClick('Risk and Compliance')}
              >
                <span>
                  <h2>Risk and Compliance</h2><br /> <br />
                  Being a Health Technology company and in realizing our purpose to improve people‘s health and well-being, Philips is faced with risk which needs to be managed consistently within the risk appetite to be successful. Philips’ risk appetite differs depending on the type of risk, ranging from an averse to a seeking approach. Operating within the dynamics of the health technology industry we need to take risks to ensure we continually revitalize our offerings and the way we work. At the same time, Philips attaches prime importance to patient safety, quality and integrity, including compliance with regulations, (cyber) security and living up to our ESG commitments. Risk and Compliance spans the set of processes through which Philips Group management identifies, analyzes and responds to risks that might adversely affect the realization of its business objectives (including Strategic, Operational, (Financial)Reporting and Compliance objectives). Through these processes, the organization manages its response to the wide range of internal and external risks and will prepare itself to prevent, deal with or recover from unforeseen adverse events. It also entails a set of processes and rules defining requirements that enable Businesses, Markets and Functions to comply with various laws, regulations and industry standards.
                </span>
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ProcessesPage;
