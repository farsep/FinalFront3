// src/context/FavoritesContext.tsx
import React, { createContext, useContext, useState } from "react";

interface FavoritesContextProps {
    favorites: string[];
    addFavorite: (symbol: string) => void;
    removeFavorite: (symbol: string) => void;
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(
    undefined
);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [favorites, setFavorites] = useState<string[]>([]);

    const addFavorite = (symbol: string) => setFavorites((prev) => [...prev, symbol]);
    const removeFavorite = (symbol: string) => setFavorites((prev) => prev.filter((s) => s !== symbol));

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) throw new Error("useFavorites must be used within a FavoritesProvider");
    return context;
};
