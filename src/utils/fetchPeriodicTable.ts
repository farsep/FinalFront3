// src/utils/fetchPeriodicTable.ts
export const API_URL = "https://api.jsonbin.io/v3/b/67524f7facd3cb34a8b4e3a6";

export const fetchPeriodicTableData = async () => {
    const storedData = localStorage.getItem("periodicTableData");
    if (storedData) return JSON.parse(storedData);

    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch data");

    const data = await response.json();
    localStorage.setItem("periodicTableData", JSON.stringify(data.record));
    return data.record;
};
