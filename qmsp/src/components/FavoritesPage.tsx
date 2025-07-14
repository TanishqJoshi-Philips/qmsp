// pages/FavoritesPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const FavoritesPage: React.FC = () => {
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

    <div style={{
      width: '100%',
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '60px'
    }}>
      <div style={{
        width: '90%',
        maxWidth: '900px',
        background: '#fff',
        borderRadius: '14px',
        boxShadow: '0 2px 10px rgba(21, 101, 192, 0.06)',
        border: '1px solid #e3e3e3',
        padding: '32px 0 48px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '32px'
        }}>
          <span style={{
            fontSize: '18px',
            color: '#1976d2',
            fontWeight: 500
          }}>
            Personal favorites
          </span>
          <span style={{
            fontSize: '20px',
            color: '#1976d2'
          }}>
            ▼
          </span>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '40px'
        }}>
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: '#f4f8fb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px'
          }}>
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
              <rect x="10" y="20" width="50" height="30" rx="4" fill="#e3e3e3"/>
              <rect x="16" y="26" width="16" height="8" rx="2" fill="#b0bec5"/>
              <rect x="36" y="26" width="18" height="8" rx="2" fill="#b0bec5"/>
              <rect x="16" y="38" width="38" height="8" rx="2" fill="#b0bec5"/>
            </svg>
          </div>
          <div style={{
            color: '#666',
            fontSize: '16px',
            marginTop: '8px'
          }}>
            The search returned no result.
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
};

export default FavoritesPage;
