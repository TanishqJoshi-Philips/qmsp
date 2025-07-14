import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProcessesPage from './components/ProcessesPage'; 
import DocumentsPage from './components/DocumentsPage';
import FavoritesPage from './components/FavoritesPage';
 
const TasksPage: React.FC = () => (
<div style={{ padding: 40 }}>My Tasks Page</div>
);
 
const App: React.FC = () => {
  return (
<BrowserRouter>
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/processes" element={<ProcessesPage />} />
<Route path="/documents" element={<DocumentsPage />} />
<Route path="/favorites" element={<FavoritesPage />} />
<Route path="/tasks" element={<TasksPage />} />
</Routes>
</BrowserRouter>
  );
};
 
export default App;