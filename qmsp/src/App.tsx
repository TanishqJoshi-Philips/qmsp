import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProcessesPage from './components/ProcessesPage'; 
import DocumentsPage from './components/DocumentsPage';
import FavoritesPage from './components/FavoritesPage';
import { FavoritesProvider } from './contexts/FavoritesContext';
import TasksPage from './components/TasksPage';
 
const App: React.FC = () => {
  return (
    <FavoritesProvider>
<BrowserRouter>
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/processes" element={<ProcessesPage />} />
<Route path="/documents" element={<DocumentsPage />} />
<Route path="/favorites" element={<FavoritesPage />} />
<Route path="/tasks" element={<TasksPage />} />
</Routes>
</BrowserRouter>
</FavoritesProvider>
  );
};
 
export default App;