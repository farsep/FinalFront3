// src/pages/TablePage.tsx
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import PeriodicTable from "../components/PeriodicTable";
import { fetchPeriodicTableData } from "../utils/fetchPeriodicTable";
import ModalOverlay from "../components/ModalOverlay";
import styles from "../styles/PageStyles.module.css";

const TablePage: React.FC = () => {
    const [elements, setElements] = useState<any[]>([]);
    const location = useLocation();
    const { symbol } = useParams<{ symbol: string }>();

    useEffect(() => {
        const loadData = async () => {
            const data = await fetchPeriodicTableData();
            setElements(data);
        };

        loadData();
    }, []);

    const element = location.state?.element;

    return (
        <div className={styles.pageContainer}>
            <PeriodicTable elements={elements} />
            {symbol && element && <ModalOverlay element={element} />}
        </div>
    );
};

export default TablePage;