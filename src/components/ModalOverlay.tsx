// src/components/ModalOverlay.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/ModalOverlay.module.css";

interface ModalOverlayProps {
    element: {
        name: string;
        description: string;
        uses: string;
        discoverer: string;
    };
}

const ModalOverlay: React.FC<ModalOverlayProps> = ({ element }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2>{element.name}</h2>
                <p>{element.description}</p>
                <p>Uses: {element.uses}</p>
                <p>Discovered by: {element.discoverer}</p>
                <button onClick={() => navigate("/table")}>Close</button>
            </div>
        </div>
    );
};

export default ModalOverlay;
