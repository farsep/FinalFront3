// src/components/PeriodicTable.tsx
import React from "react";
import styles from "../styles/PeriodicTable.module.css";
import ElementCard from "./ElementCard";

interface PeriodicTableProps {
    elements: any[];
}

const PeriodicTable: React.FC<PeriodicTableProps> = ({ elements }) => {
    return (
        <div className={styles.flexContainer}>
            {elements.map((element) => (
                <ElementCard key={element.symbol} element={element} />
            ))}
        </div>
    );
};

export default PeriodicTable;
