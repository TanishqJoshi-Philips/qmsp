// contexts/FavoritesContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

interface FavoriteProcess {
  id: string;
  name: string;
  description: string;
  category: string;
}

interface FavoritesContextType {
  favorites: FavoriteProcess[];
  addToFavorites: (process: FavoriteProcess) => void;
  removeFromFavorites: (processId: string) => void;
  isFavorite: (processId: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<FavoriteProcess[]>([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem('processFavorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save favorites to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem('processFavorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (process: FavoriteProcess) => {
    setFavorites(prev => [...prev.filter(f => f.id !== process.id), process]);
  };

  const removeFromFavorites = (processId: string) => {
    setFavorites(prev => prev.filter(f => f.id !== processId));
  };

  const isFavorite = (processId: string) => {
    return favorites.some(f => f.id === processId);
  };

  return (
    <FavoritesContext.Provider value={{
      favorites,
      addToFavorites,
      removeFromFavorites,
      isFavorite
    }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
