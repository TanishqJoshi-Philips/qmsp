// components/TasksPage.tsx
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import '../css/TasksPage.css';

interface Task {
  id: string;
  priority: 'High' | 'Medium' | 'Low';
  name: string;
  assignmentDate: string;
  dueDate: string;
  status: 'Open' | 'In Progress' | 'Completed' | 'Overdue';
  assigned: string;
}

const TasksPage: React.FC = () => {
  const [tasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<string>('all');

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return '#dc2626';
      case 'Medium':
        return '#f59e0b';
      case 'Low':
        return '#10b981';
      default:
        return '#6b7280';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open':
        return '#3b82f6';
      case 'In Progress':
        return '#f59e0b';
      case 'Completed':
        return '#10b981';
      case 'Overdue':
        return '#dc2626';
      default:
        return '#6b7280';
    }
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    return task.status.toLowerCase() === filter.toLowerCase();
  });

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
                        <Link to="/favorites" className="nav-item">My Favorites</Link>
                        <Link to="/tasks" className="nav-item active">My tasks</Link>
                    </nav>
                </aside>
    <div className="tasks-page">
      <div className="tasks-header">
        <div className="tasks-title">
          <h1>My Tasks</h1>
          <span className="tasks-count">{tasks.length} task{tasks.length !== 1 ? 's' : ''}</span>
        </div>
        
        <div className="tasks-controls">
          <div className="filter-section">
            <label htmlFor="filter">Filter:</label>
            <select 
              id="filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="filter-dropdown"
            >
              <option value="all">All Tasks</option>
              <option value="open">Open</option>
              <option value="in progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="overdue">Overdue</option>
            </select>
          </div>
          
          <button className="reset-filter-btn" onClick={() => setFilter('all')}>
            Reset filter
          </button>
        </div>
      </div>

      <div className="tasks-table-container">
        {filteredTasks.length === 0 ? (
          <div className="no-tasks-container">
            <div className="no-tasks-icon">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="50" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2"/>
                <rect x="35" y="40" width="50" height="40" rx="4" fill="#e5e7eb"/>
                <rect x="40" y="45" width="15" height="6" rx="1" fill="#9ca3af"/>
                <rect x="60" y="45" width="20" height="6" rx="1" fill="#9ca3af"/>
                <rect x="40" y="55" width="25" height="6" rx="1" fill="#9ca3af"/>
                <rect x="40" y="65" width="30" height="6" rx="1" fill="#9ca3af"/>
                <path d="M75 50L80 55L90 45" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="no-tasks-text">No tasks available.</div>
          </div>
        ) : (
          <div className="tasks-table-wrapper">
            <table className="tasks-table">
              <thead>
                <tr>
                  <th>Priority</th>
                  <th>Name</th>
                  <th>
                    Assignment date
                    <button className="sort-btn" title="Sort by assignment date">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 2L8 4H4L6 2Z" fill="currentColor"/>
                        <path d="M6 10L4 8H8L6 10Z" fill="currentColor"/>
                      </svg>
                    </button>
                  </th>
                  <th>Due date</th>
                  <th>Status</th>
                  <th>Assigned</th>
                </tr>
              </thead>
              <tbody>
                {filteredTasks.map((task) => (
                  <tr key={task.id} className="task-row">
                    <td>
                      <span 
                        className="priority-badge"
                        style={{ backgroundColor: getPriorityColor(task.priority) }}
                      >
                        {task.priority}
                      </span>
                    </td>
                    <td className="task-name">{task.name}</td>
                    <td>{task.assignmentDate}</td>
                    <td>{task.dueDate}</td>
                    <td>
                      <span 
                        className="status-badge"
                        style={{ backgroundColor: getStatusColor(task.status) }}
                      >
                        {task.status}
                      </span>
                    </td>
                    <td>{task.assigned}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
    </div>
    </div>
  );
};

export default TasksPage;
