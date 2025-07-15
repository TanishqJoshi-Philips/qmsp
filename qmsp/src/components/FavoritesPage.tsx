// pages/FavoritesPage.tsx
import { Link } from 'react-router-dom';
import React from 'react';
import { useFavorites } from '../contexts/FavoritesContext';

const FavoritesPage: React.FC = () => {
  const { favorites, removeFromFavorites } = useFavorites();

  const handleProcessClick = (processName: string) => {
    alert(`Navigating to ${processName} process details`);
  };

  const handleRemoveFavorite = (e: React.MouseEvent, processId: string) => {
    e.stopPropagation();
    removeFromFavorites(processId);
  };

  if (favorites.length === 0) {
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
                        <Link to="/" className="nav-item">home</Link>
                        <Link to="/favorites" className="nav-item active">My Favorites</Link>
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
              No favorites added yet. Star some processes to see them here!
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
  }

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
      padding: '20px'
    }}>
      <div style={{
        marginBottom: '24px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <span style={{
          fontSize: '24px',
          color: '#1976d2',
          fontWeight: 600
        }}>
          Personal Favorites
        </span>
        <span style={{
          fontSize: '16px',
          color: '#666',
          background: '#f0f0f0',
          padding: '4px 8px',
          borderRadius: '12px'
        }}>
          {favorites.length} process{favorites.length !== 1 ? 'es' : ''}
        </span>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px'
      }}>
        {favorites.map((favorite) => (
          <div
            key={favorite.id}
            style={{
              background: '#fff',
              border: '2px solid #e3e3e3',
              borderRadius: '12px',
              padding: '20px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              position: 'relative',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
            onClick={() => handleProcessClick(favorite.name)}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#1976d2';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(25, 118, 210, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e3e3e3';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
            }}
          >
            <button
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: '#fbbf24',
                padding: '4px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onClick={(e) => handleRemoveFavorite(e, favorite.id)}
              title="Remove from favorites"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
            </button>

            <div style={{
              marginBottom: '8px',
              fontSize: '12px',
              color: '#666',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              {favorite.category}
            </div>

            <h3 style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#1976d2',
              marginBottom: '12px'
            }}>
              {favorite.name}
            </h3>

            <p style={{
              fontSize: '14px',
              color: '#666',
              lineHeight: '1.5',
              display: '-webkit-box',
              WebkitLineClamp: 4,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}>
              {favorite.description}
            </p>
          </div>
        ))}
      </div>
    </div>
     </div>
    </div>
  );
};

export default FavoritesPage;
