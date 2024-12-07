// src/pages/FavoritesPage.tsx
import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import PeriodicTable from "../components/PeriodicTable";

const FavoritesPage: React.FC = () => {
    const { favorites } = useFavorites();
    const elements = JSON.parse(localStorage.getItem("periodicTableData") || "[]");
    const favoriteElements = elements.filter((el: any) => favorites.includes(el.symbol));

    return <PeriodicTable elements={favoriteElements} />;
};

export default FavoritesPage;
