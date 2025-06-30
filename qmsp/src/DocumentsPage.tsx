import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './DocumentsPage.css';

const DocumentsPage: React.FC = () => {
  const [selectedDocument, setSelectedDocument] = useState<string>('');

  const handleDocumentClick = (documentName: string) => {
    setSelectedDocument(documentName);
    alert(`Opening ${documentName}`);
    //replace this with actual document opening logic
  };

  return (
    <div className="documents-container">
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
          <Link to="/documents" className="nav-link active">Documents</Link>
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
          <div className="sidebar-title">Philips Management System</div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          {/* Philips Management System Header */}
          <div className="content-header">
            <h1 className="main-title">Philips Management System</h1>
          </div>

          {/* Document List */}
          <div className="document-list">
            <button 
              className={`document-item ${selectedDocument === 'enterprise-quality' ? 'selected' : ''}`}
              onClick={() => handleDocumentClick('Enterprise Quality Management System Documents')}
            >
              <span className="bullet">•</span>
              <span className="document-text">Enterprise Quality Management System Documents</span>
            </button>

            <button 
              className={`document-item ${selectedDocument === 'international-region' ? 'selected' : ''}`}
              onClick={() => handleDocumentClick('International Region (IR) - MS Documents')}
            >
              <span className="bullet">•</span>
              <span className="document-text">International Region (IR) - MS Documents</span>
            </button>

            <button 
              className={`document-item ${selectedDocument === 'one-ms' ? 'selected' : ''}`}
              onClick={() => handleDocumentClick('One MS Documents')}
            >
              <span className="bullet">•</span>
              <span className="document-text">One MS Documents</span>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DocumentsPage;
