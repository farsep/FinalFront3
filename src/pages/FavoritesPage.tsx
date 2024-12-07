// src/pages/FavoritesPage.tsx
import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import PeriodicTable from "../components/PeriodicTable";
import styles from "../styles/PageStyles.module.css";

const FavoritesPage: React.FC = () => {
    const { favorites } = useFavorites();
    const elements = JSON.parse(localStorage.getItem("periodicTableData") || "[]");
    const favoriteElements = elements.filter((el: any) => favorites.includes(el.symbol));

    return (
        <div className={styles.pageContainer}>
            <PeriodicTable elements={favoriteElements} />
        </div>
    );
};

export default FavoritesPage;