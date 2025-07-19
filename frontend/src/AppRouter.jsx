import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BrandList from "./pages/BrandList.jsx";
import CreateBrand from "./pages/CreateBrand.jsx"
import UpdateBrand from "./pages/UpdateBrand.jsx";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<BrandList />} />
            <Route path="/create-brand" element={<CreateBrand />} />
            <Route path="/update-brand/:id" element={<UpdateBrand />} />
        </Routes>
    );
};

export default AppRouter;
