// src/pages/TablePage.tsx
import React, { useEffect, useState } from "react";
import PeriodicTable from "../components/PeriodicTable";
import { fetchPeriodicTableData } from "../utils/fetchPeriodicTable";

const TablePage: React.FC = () => {
    const [elements, setElements] = useState<any[]>([]);

    useEffect(() => {
        const loadData = async () => {
            const data = await fetchPeriodicTableData();
            setElements(data);
        };

        loadData();
    }, []);

    return <PeriodicTable elements={elements} />;
};

export default TablePage;
