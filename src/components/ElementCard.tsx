// src/components/ElementCard.tsx
import React, { useState } from "react";
import { useFavorites } from "../context/FavoritesContext";
import { useNavigate } from "react-router-dom";
import styles from "../styles/ElementCard.module.css";

interface ElementCardProps {
    element: {
        symbol: string;
        name: string;
        atomic_number: number;
        atomic_weight: string;
        category: string;
        description: string;
    };
}

const ElementCard: React.FC<ElementCardProps> = ({ element }) => {
    const { favorites, addFavorite, removeFavorite } = useFavorites();
    const navigate = useNavigate();
    const isFavorite = favorites.includes(element.symbol);

    const handleFavoriteToggle = () => {
        if (isFavorite) removeFavorite(element.symbol);
        else addFavorite(element.symbol);
    };

    return (
        <div className={styles.card}>
            <p className={styles.symbol}>{element.symbol}</p>
            <p className={styles.name}>{element.name}</p>
            <p className={styles.atomicNumber}>Atomic Number: {element.atomic_number}</p>
            <p className={styles.atomicWeight}>Atomic Weight: {element.atomic_weight}</p>
            <p className={styles.category}>Category: {element.category}</p>
            <button
                className={`${styles.button} ${isFavorite ? styles.favoriteButton : ''}`}
                onClick={handleFavoriteToggle}
            >
                {isFavorite ? "Remove Favorite" : "Add to Favorites"}
            </button>
            <button
                className={styles.button}
                onClick={() => navigate(`/table/${element.symbol}`, { state: { element } })}
            >
                Details
            </button>
        </div>
    );
};

export default ElementCard;