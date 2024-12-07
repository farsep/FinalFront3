// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import styles from "../styles/Navbar.module.css";

const Navbar: React.FC = () => {
    const { favorites } = useFavorites();

    return (
        <nav className={styles.navbar}>
            <Link to="/table" className={styles.link}>Table</Link>
            <Link to="/contact" className={styles.link}>Contact</Link>
            <Link to="/favorites" className={styles.link}>
                Favorites <span className={styles.bubble}>{favorites.length}</span>
            </Link>
        </nav>
    );
};

export default Navbar;
