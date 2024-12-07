// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext";
import Navbar from "./components/Navbar";
import TablePage from "./pages/TablePage";
import FavoritesPage from "./pages/FavoritesPage";
import ContactPage from "./pages/ContactPage";

const App: React.FC = () => {
    return (
        <FavoritesProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Navigate to="/table" />} />
                    <Route path="/table" element={<TablePage />} />
                    <Route path="/favorites" element={<FavoritesPage />} />
                    <Route path="/table/:symbol" element={<TablePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </Router>
        </FavoritesProvider>
    );
};

export default App;