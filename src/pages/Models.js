import React from "react";
import ProductModelCard from "../components/Cards/ProductModelCard";
import ModelData from "../assets/json/models.json";

const Models = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
            {ModelData.map((model) => (
                <ProductModelCard key={model.sku} product={model} />
            ))}
        </div>
    );
};

export default Models;
