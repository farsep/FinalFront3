import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext";
import Navbar from "./components/Navbar";
import TablePage from "./pages/TablePage";
import FavoritesPage from "./pages/FavoritesPage";

const App: React.FC = () => {
    return (
        <FavoritesProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/table" element={<TablePage />} />
                    <Route path="/favorites" element={<FavoritesPage />} />
                    <Route path="/table/:symbol" element={<TablePage />} />
                </Routes>
            </Router>
        </FavoritesProvider>
    );
};

export default App;
